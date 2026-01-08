import { NextRequest, NextResponse } from 'next/server'

const locales = ['th', 'en', 'ja']
const defaultLocale = 'th'

// Mapping between short URL and full locale format
const localeMap: Record<string, "th-TH" | "en-US" | "ja-JP"> = {
  'th': 'th-TH',
  'en': 'en-US',
  'ja': 'ja-JP'
}

// Get the preferred locale
function getLocale(request: NextRequest): string {
  // Check if there's a locale in the pathname
  const pathname = request.nextUrl.pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  
  if (pathnameHasLocale) return pathname.split('/')[1]
  
  // Try to get from cookie (stores full locale, need to convert to short)
  const localeCookie = request.cookies.get('qisol-language')?.value
  if (localeCookie) {
    // Find short locale from full locale
    const shortLocale = Object.keys(localeMap).find(key => localeMap[key] === localeCookie)
    if (shortLocale) return shortLocale
  }
  
  // Check Accept-Language header
  const acceptLanguage = request.headers.get('Accept-Language')
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0].trim())
      .find(lang => {
        const langCode = lang.split('-')[0]
        return locales.includes(langCode)
      })
    
    if (preferredLocale) {
      const langCode = preferredLocale.split('-')[0]
      if (locales.includes(langCode)) return langCode
    }
  }
  
  return defaultLocale
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    
    // Don't redirect for static files
    if (
      pathname.startsWith('/_next/') ||
      pathname.startsWith('/api/') ||
      pathname.includes('.') ||
      pathname.startsWith('/favicon')
    ) {
      return NextResponse.next()
    }
    
    // Redirect to locale-specific URL
    const response = NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    )
    
    // Set cookie to remember the locale preference
    response.cookies.set('qisol-language', locale, {
      maxAge: 365 * 24 * 60 * 60, // 1 year
      path: '/',
    })
    
    return response
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico|.*\\.).*)',
  ],
}
