import { DEFAULT_LOCALE, type Locale } from './config';
import { DICTIONARIES } from './dictionaries';

// Pure lookup usable in client components (dictionaries are plain data).
export function makeT(locale: Locale) {
  const dict = DICTIONARIES[locale];
  const fallback = DICTIONARIES[DEFAULT_LOCALE];
  return (key: string) => dict[key] ?? fallback[key] ?? key;
}
