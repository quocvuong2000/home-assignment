'use client';
import { defaultLocale, locales } from '@/i18n/config';
import { Link, usePathname } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import Button from '../Button';

type Locale = (typeof locales)[number];

const localeNames: Record<Locale, any> = {
  en: { icon: '🇺🇸', title: 'English', right: 'EN' },
  ja: { icon: '🇯🇵', title: '日本語', right: 'JA' },
};
export default function LocaleSwitcher() {
  const pathname = usePathname();
  const locale = useLocale() ?? defaultLocale;
  const otherLocale = locale === 'en' ? 'ja' : 'en';

  return (
    <Link href={pathname} locale={otherLocale} replace>
      <Button
        label={localeNames[locale].icon + ' ' + localeNames[locale].title}
        primary={false}
      />
    </Link>
  );
}
