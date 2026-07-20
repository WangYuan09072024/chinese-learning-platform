import { redirect } from 'next/navigation';
import { getSession } from '@/lib/session';
import { getLocale, getT } from '@/lib/i18n/server';
import { PortalShell, type NavItem } from '@/components/PortalShell';

const STAFF_ROLES = ['CONTENT_MANAGER', 'FINANCE_STAFF', 'CUSTOMER_SUPPORT', 'ADMIN', 'SUPER_ADMIN'];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  if (!session || !session.roles.some((r) => STAFF_ROLES.includes(r))) {
    redirect('/login');
  }

  const [locale, t] = await Promise.all([getLocale(), getT()]);

  const navItems: NavItem[] = [
    { label: t('nav.home'), href: '/admin/dashboard', icon: 'dashboard' },
    { label: t('nav.users'), href: '/admin/users', icon: 'users' },
    { label: t('nav.courses'), href: '/admin/courses', icon: 'courses' },
    { label: t('nav.dictionary'), href: '/admin/dictionary', icon: 'dictionary' },
    { label: t('nav.flashcards'), href: '/admin/flashcards', icon: 'flashcards' },
    { label: t('nav.contact'), href: '/admin/contact', icon: 'contact' },
    { label: t('nav.reports'), href: '/admin/reports', icon: 'reports' },
    { label: t('nav.notifications'), href: '/admin/notifications', icon: 'notifications' },
    { label: t('nav.settings'), href: '/admin/settings', icon: 'settings' },
  ];

  return (
    <PortalShell title={t('role.admin')} navItems={navItems} user={session} locale={locale}>
      {children}
    </PortalShell>
  );
}
