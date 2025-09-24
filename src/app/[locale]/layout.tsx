import { notFound } from 'next/navigation'
import { use } from 'react'

const locales = ['th-TH', 'en-US', 'ja-JP']

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  // Unwrap params using React.use()
  const { locale } = use(params)
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    notFound()
  }

  return children
}
