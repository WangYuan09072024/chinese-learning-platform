import { redirect } from 'next/navigation';
import { getSession } from '@/lib/session';
import { getLocale, getT } from '@/lib/i18n/server';
import { PortalShell, type NavItem } from '@/components/PortalShell';

export default async function StudentLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  if (!session || !session.roles.includes('STUDENT')) {
    redirect('/login');
  }

  const [locale, t] = await Promise.all([getLocale(), getT()]);

  const navItems: NavItem[] = [
    { label: t('nav.home'), href: '/student/dashboard', icon: 'dashboard' },
    { label: t('nav.progress'), href: '/student/progress', icon: 'progress' },
    { label: t('nav.calendar'), href: '/student/calendar', icon: 'calendar' },
    { label: t('nav.dictionary'), href: '/dictionary', icon: 'dictionary' },
    { label: t('nav.flashcards'), href: '/student/flashcards', icon: 'flashcards' },
    { label: t('nav.notifications'), href: '/student/notifications', icon: 'notifications' },
    { label: t('nav.profile'), href: '/student/profile', icon: 'profile' },
    { label: t('nav.aiLearning'), icon: 'ai' },
    { label: t('nav.certificates'), icon: 'certificates' },
  ];

  return (
    <PortalShell title={t('role.student')} navItems={navItems} user={session} locale={locale}>
      {children}
    </PortalShell>
  );
}
