import { routing } from '@/i18n/routing';
import createMiddleware from 'next-intl/middleware';

export default createMiddleware(routing,{
  localeDetection: true
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(jp|en)/:path*'],
};
