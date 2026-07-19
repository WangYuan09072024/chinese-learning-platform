'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Flower2, Menu, X } from 'lucide-react';

const LINKS = [
  { href: '/courses', label: 'Khóa học' },
  { href: '/pricing', label: 'Bảng giá' },
  { href: '/dictionary', label: 'Từ điển' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Liên hệ' },
];

export function PublicHeader() {
  const [open, setOpen] = useState(false);

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
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-zinc-600 transition hover:text-brand-600 dark:text-zinc-300">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link href="/login" className="text-sm font-semibold text-zinc-600 hover:text-brand-600 dark:text-zinc-300">
            Đăng nhập
          </Link>
          <Link href="/register" className="btn-primary">
            Đăng ký
          </Link>
        </div>

        <button onClick={() => setOpen((o) => !o)} className="rounded-lg p-1.5 hover:bg-brand-50 md:hidden dark:hover:bg-white/5">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-100/70 bg-cream px-4 py-3 md:hidden dark:border-white/10 dark:bg-zinc-900">
          <nav className="flex flex-col gap-1">
            {LINKS.map((l) => (
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
                Đăng nhập
              </Link>
              <Link href="/register" onClick={() => setOpen(false)} className="btn-primary">
                Đăng ký
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
