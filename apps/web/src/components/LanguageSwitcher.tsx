'use client';

import { useState, useTransition, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Globe, Check } from 'lucide-react';
import { LOCALES, LOCALE_LABELS, LOCALE_FLAGS, type Locale } from '@/lib/i18n/config';
import { setLocale } from '@/actions/locale';

export function LanguageSwitcher({ current }: { current: Locale }) {
  const [open, setOpen] = useState(false);
  const [pending, startTransition] = useTransition();
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  function choose(locale: Locale) {
    setOpen(false);
    startTransition(async () => {
      await setLocale(locale);
      router.refresh();
    });
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        disabled={pending}
        className="flex items-center gap-1.5 rounded-full border border-brand-200 bg-white/70 px-3 py-1.5 text-sm font-semibold text-zinc-600 transition hover:bg-brand-50 disabled:opacity-50 dark:border-white/10 dark:bg-zinc-900/60 dark:text-zinc-300"
        aria-label="Đổi ngôn ngữ / Change language"
      >
        <Globe className="h-4 w-4" />
        <span>{LOCALE_FLAGS[current]}</span>
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-xl border border-brand-100 bg-white shadow-lg dark:border-white/10 dark:bg-zinc-900">
          {LOCALES.map((locale) => (
            <button
              key={locale}
              type="button"
              onClick={() => choose(locale)}
              className={`flex w-full items-center justify-between px-3 py-2.5 text-sm transition hover:bg-brand-50 dark:hover:bg-white/5 ${
                locale === current ? 'font-semibold text-brand-600' : 'text-zinc-600 dark:text-zinc-300'
              }`}
            >
              <span className="flex items-center gap-2">
                <span>{LOCALE_FLAGS[locale]}</span>
                {LOCALE_LABELS[locale]}
              </span>
              {locale === current && <Check className="h-4 w-4" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
