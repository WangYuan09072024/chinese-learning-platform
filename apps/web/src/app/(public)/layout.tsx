import Link from 'next/link';
import { Flower2 } from 'lucide-react';
import { PublicHeader } from '@/components/PublicHeader';
import { getLocale, getT } from '@/lib/i18n/server';

export default async function PublicLayout({ children }: { children: React.ReactNode }) {
  const [locale, t] = await Promise.all([getLocale(), getT()]);

  return (
    <div className="flex flex-1 flex-col">
      <PublicHeader locale={locale} />
      <main className="flex flex-1 flex-col">{children}</main>
      <footer className="border-t border-brand-100/70 bg-cream/60 dark:border-white/10 dark:bg-zinc-900/50">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-sun-400 text-white">
              <Flower2 className="h-4 w-4" />
            </span>
            <span className="font-bold text-zinc-700 dark:text-zinc-200">Yuan Yuan</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link href="/courses" className="hover:text-brand-600">{t('nav.courses')}</Link>
            <Link href="/pricing" className="hover:text-brand-600">{t('nav.pricing')}</Link>
            <Link href="/faq" className="hover:text-brand-600">{t('nav.faq')}</Link>
            <Link href="/contact" className="hover:text-brand-600">{t('nav.contact')}</Link>
          </div>
          <span>© {new Date().getFullYear()} Yuan Yuan</span>
        </div>
      </footer>
    </div>
  );
}
