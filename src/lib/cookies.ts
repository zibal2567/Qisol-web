// Cookie Management Utilities

/**
 * Set a cookie
 */
export const setCookie = (name: string, value: string, days: number = 365): void => {
  if (typeof window === 'undefined') return;
  
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
};

/**
 * Get a cookie value
 */
export const getCookie = (name: string): string | null => {
  if (typeof window === 'undefined') return null;
  
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) {
      return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
  }
  
  return null;
};

/**
 * Delete a cookie
 */
export const deleteCookie = (name: string): void => {
  if (typeof window === 'undefined') return;
  
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

/**
 * Get cookie consent preferences
 */
export const getCookieConsent = (): { necessary: boolean; analytics: boolean; marketing: boolean } | null => {
  const consent = getCookie('cookieConsent');
  if (!consent) return null;
  
  try {
    return JSON.parse(consent);
  } catch {
    return null;
  }
};

/**
 * Set cookie consent preferences
 */
export const setCookieConsent = (preferences: { necessary: boolean; analytics: boolean; marketing: boolean }): void => {
  setCookie('cookieConsent', JSON.stringify(preferences), 365);
};

/**
 * Check if user has consented to analytics
 */
export const hasAnalyticsConsent = (): boolean => {
  const consent = getCookieConsent();
  return consent?.analytics === true;
};

/**
 * Get language preference from cookie
 */
export const getLanguageCookie = (): string | null => {
  return getCookie('qisol-language');
};

/**
 * Set language preference in cookie
 */
export const setLanguageCookie = (language: string): void => {
  setCookie('qisol-language', language, 365);
};
