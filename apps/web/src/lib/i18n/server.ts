import { cookies } from 'next/headers';
import { DEFAULT_LOCALE, LOCALE_COOKIE, isLocale, type Locale } from './config';
import { DICTIONARIES } from './dictionaries';

export async function getLocale(): Promise<Locale> {
  const value = (await cookies()).get(LOCALE_COOKIE)?.value;
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

export type TFunction = (key: string) => string;

export async function getT(): Promise<TFunction> {
  const locale = await getLocale();
  const dict = DICTIONARIES[locale];
  const fallback = DICTIONARIES[DEFAULT_LOCALE];
  return (key: string) => dict[key] ?? fallback[key] ?? key;
}
