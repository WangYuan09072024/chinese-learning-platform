export const LOCALES = ['vi', 'en', 'zh'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'vi';
export const LOCALE_COOKIE = 'locale';

export const LOCALE_LABELS: Record<Locale, string> = {
  vi: 'Tiếng Việt',
  en: 'English',
  zh: '中文',
};

export const LOCALE_FLAGS: Record<Locale, string> = {
  vi: '🇻🇳',
  en: '🇬🇧',
  zh: '🇨🇳',
};

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}
