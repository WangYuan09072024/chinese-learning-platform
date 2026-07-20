'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  Users,
  ClipboardList,
  ListChecks,
  CalendarDays,
  BookMarked,
  Sparkles,
  Layers,
  Award,
  CreditCard,
  Bell,
  UserCircle,
  Settings,
  BarChart3,
  Megaphone,
  MessageSquare,
  CheckSquare,
  FileText,
  LogOut,
  Menu,
  X,
  Flower2,
  type LucideIcon,
} from 'lucide-react';
import { logout } from '@/actions/auth';
import type { SessionUser } from '@/lib/session';
import type { Locale } from '@/lib/i18n/config';
import { makeT } from '@/lib/i18n/client';
import { LanguageSwitcher } from './LanguageSwitcher';

export interface NavItem {
  label: string;
  href?: string; // omit for "coming soon" items not implemented yet
  icon?: string;
}

const ICONS: Record<string, LucideIcon> = {
  dashboard: LayoutDashboard,
  courses: BookOpen,
  classes: GraduationCap,
  users: Users,
  students: Users,
  teachers: GraduationCap,
  homework: ClipboardList,
  quiz: ListChecks,
  attendance: CheckSquare,
  calendar: CalendarDays,
  dictionary: BookMarked,
  ai: Sparkles,
  flashcards: Layers,
  exams: FileText,
  certificates: Award,
  payment: CreditCard,
  notifications: Bell,
  profile: UserCircle,
  settings: Settings,
  reports: BarChart3,
  announcements: Megaphone,
  messages: MessageSquare,
  lessons: BookOpen,
  cms: FileText,
  contact: MessageSquare,
  progress: BarChart3,
};

function NavLinks({ navItems, pathname, comingSoon, onNavigate }: { navItems: NavItem[]; pathname: string; comingSoon: string; onNavigate?: () => void }) {
  return (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => {
        const Icon = item.icon ? ICONS[item.icon] : undefined;
        const active = item.href && (pathname === item.href || pathname.startsWith(item.href + '/'));
        if (item.href) {
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={onNavigate}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                active
                  ? 'bg-brand-500 text-white shadow-sm'
                  : 'text-zinc-600 hover:bg-brand-50 hover:text-brand-700 dark:text-zinc-300 dark:hover:bg-white/5'
              }`}
            >
              {Icon && <Icon className="h-[18px] w-[18px]" />}
              {item.label}
            </Link>
          );
        }
        return (
          <span
            key={item.label}
            className="flex cursor-not-allowed items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-300 dark:text-zinc-600"
            title={comingSoon}
          >
            {Icon && <Icon className="h-[18px] w-[18px]" />}
            {item.label}
          </span>
        );
      })}
    </nav>
  );
}

export function PortalShell({
  title,
  navItems,
  user,
  locale,
  children,
}: {
  title: string;
  navItems: NavItem[];
  user: SessionUser;
  locale: Locale;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const t = makeT(locale);
  const comingSoon = t('common.comingSoon');

  return (
    <div className="flex min-h-screen">
      {/* Desktop sidebar */}
      <aside className="hidden w-64 shrink-0 flex-col border-r border-brand-100/70 bg-white/70 p-4 backdrop-blur-sm lg:flex dark:border-white/10 dark:bg-zinc-900/60">
        <div className="mb-6 flex items-center gap-2 px-2">
          <span className="grid h-9 w-9 place-items-center rounded-2xl bg-gradient-to-br from-brand-400 to-sun-400 text-white">
            <Flower2 className="h-5 w-5" />
          </span>
          <span className="text-base font-extrabold tracking-tight">{title}</span>
        </div>
        <NavLinks navItems={navItems} pathname={pathname} comingSoon={comingSoon} />
      </aside>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <aside className="absolute left-0 top-0 flex h-full w-72 max-w-[80%] flex-col overflow-y-auto bg-cream p-4 shadow-xl dark:bg-zinc-900">
            <div className="mb-6 flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-2xl bg-gradient-to-br from-brand-400 to-sun-400 text-white">
                  <Flower2 className="h-5 w-5" />
                </span>
                <span className="text-base font-extrabold tracking-tight">{title}</span>
              </div>
              <button onClick={() => setOpen(false)} className="rounded-lg p-1.5 hover:bg-brand-50">
                <X className="h-5 w-5" />
              </button>
            </div>
            <NavLinks navItems={navItems} pathname={pathname} comingSoon={comingSoon} onNavigate={() => setOpen(false)} />
          </aside>
        </div>
      )}

      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-30 flex items-center justify-between gap-3 border-b border-brand-100/70 bg-cream/80 px-4 py-3 backdrop-blur-md sm:px-6 dark:border-white/10 dark:bg-zinc-900/70">
          <button onClick={() => setOpen(true)} className="rounded-lg p-1.5 hover:bg-brand-50 lg:hidden dark:hover:bg-white/5">
            <Menu className="h-5 w-5" />
          </button>
          <span className="truncate text-sm font-medium text-zinc-500">{user.email}</span>
          <div className="ml-auto flex items-center gap-2">
            <LanguageSwitcher current={locale} />
            <form action={logout}>
              <button
                type="submit"
                className="flex items-center gap-1.5 rounded-full border border-brand-200 px-3 py-1.5 text-sm font-semibold text-brand-700 transition hover:bg-brand-50 dark:border-white/10 dark:text-brand-200"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">{t('common.logout')}</span>
              </button>
            </form>
          </div>
        </header>
        <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
