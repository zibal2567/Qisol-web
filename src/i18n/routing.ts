import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['th', 'en', 'ja'],

  // Used when no locale matches
  defaultLocale: 'th',

  // ไม่แสดง locale prefix สำหรับภาษาหลัก (ไทย)
  localePrefix: 'as-needed',

  pathnames: {
    '/': '/',
    '/products': '/products',
    '/privacy': '/privacy',
    '/rewards': '/rewards',
    '/contact': '/contact'
  }
});


export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
