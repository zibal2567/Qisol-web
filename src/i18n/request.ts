import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as 'th' | 'en' | 'ja')) {
    locale = routing.defaultLocale;
  }

  return {
    locale: locale as string,
    messages: {
      // Common messages (Navbar, Footer) - ใช้ทุกหน้า
      ...(await import(`./messages/${locale}/common.json`)).default,
      // Home page messages
      home: (await import(`./messages/${locale}/home.json`)).default,
      // Privacy page messages
      privacy: (await import(`./messages/${locale}/privacy.json`)).default,
      // Rewards page messages
      rewards: (await import(`./messages/${locale}/rewards.json`)).default,
      // Products page messages
      products: (await import(`./messages/${locale}/products.json`)).default,
    }
  };
});
