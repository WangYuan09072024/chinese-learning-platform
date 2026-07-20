import { redirect } from 'next/navigation';
import { getSession } from '@/lib/session';
import { isContentStaff } from '@/lib/roles';
import { getLocale, getT } from '@/lib/i18n/server';
import { PortalShell, type NavItem } from '@/components/PortalShell';

export default async function TeacherLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  const canTeach = session?.roles.includes('TEACHER') || session?.roles.includes('TEACHING_ASSISTANT');
  if (!session || !(canTeach || isContentStaff(session.roles))) {
    redirect('/login');
  }

  const [locale, t] = await Promise.all([getLocale(), getT()]);

  const navItems: NavItem[] = [
    { label: t('nav.home'), href: '/teacher/dashboard', icon: 'dashboard' },
    { label: t('nav.classes'), href: '/teacher/classes', icon: 'classes' },
    { label: t('nav.students'), href: '/teacher/students', icon: 'students' },
    { label: t('nav.homework'), href: '/teacher/homework', icon: 'homework' },
    { label: t('nav.quiz'), href: '/teacher/quiz', icon: 'quiz' },
    { label: t('nav.attendance'), href: '/teacher/attendance', icon: 'attendance' },
    { label: t('nav.announcements'), href: '/teacher/announcements', icon: 'announcements' },
    { label: t('nav.reports'), href: '/teacher/reports', icon: 'reports' },
    { label: t('nav.messages'), icon: 'messages' },
    { label: t('nav.profile'), href: '/teacher/profile', icon: 'profile' },
  ];

  return (
    <PortalShell title={t('role.teacher')} navItems={navItems} user={session} locale={locale}>
      {children}
    </PortalShell>
  );
}
