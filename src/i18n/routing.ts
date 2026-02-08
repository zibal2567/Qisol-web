import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['th', 'en', 'ja'],

  // Used when no locale matches
  defaultLocale: 'th',
  
  // ไม่แสดง locale prefix สำหรับภาษาหลัก (ไทย)
  // /reviews = ภาษาไทย, /en/reviews = อังกฤษ, /ja/reviews = ญี่ปุ่น
  localePrefix: 'as-needed',
  
  pathnames: {
    '/': '/',
    '/privacy': '/privacy',
    '/reviews': '/reviews',
    '/contact': '/contact'
  }
});


export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
