'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Flower2, Menu, X } from 'lucide-react';
import type { Locale } from '@/lib/i18n/config';
import { makeT } from '@/lib/i18n/client';
import { LanguageSwitcher } from './LanguageSwitcher';

export function PublicHeader({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const t = makeT(locale);

  const links = [
    { href: '/courses', label: t('nav.courses') },
    { href: '/pricing', label: t('nav.pricing') },
    { href: '/dictionary', label: t('nav.dictionary') },
    { href: '/faq', label: t('nav.faq') },
    { href: '/contact', label: t('nav.contact') },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-brand-100/70 bg-cream/80 backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/70">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-2xl bg-gradient-to-br from-brand-400 to-sun-400 text-white">
            <Flower2 className="h-5 w-5" />
          </span>
          <span className="text-lg font-extrabold tracking-tight">Yuan Yuan</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-zinc-600 transition hover:text-brand-600 dark:text-zinc-300">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher current={locale} />
          <Link href="/login" className="text-sm font-semibold text-zinc-600 hover:text-brand-600 dark:text-zinc-300">
            {t('nav.login')}
          </Link>
          <Link href="/register" className="btn-primary">
            {t('nav.register')}
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher current={locale} />
          <button onClick={() => setOpen((o) => !o)} className="rounded-lg p-1.5 hover:bg-brand-50 dark:hover:bg-white/5">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-brand-100/70 bg-cream px-4 py-3 md:hidden dark:border-white/10 dark:bg-zinc-900">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium hover:bg-brand-50 dark:hover:bg-white/5"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-brand-100/70 pt-3 dark:border-white/10">
              <Link href="/login" onClick={() => setOpen(false)} className="btn-ghost">
                {t('nav.login')}
              </Link>
              <Link href="/register" onClick={() => setOpen(false)} className="btn-primary">
                {t('nav.register')}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
