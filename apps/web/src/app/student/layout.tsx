import { redirect } from 'next/navigation';
import { getSession } from '@/lib/session';
import { PortalShell, type NavItem } from '@/components/PortalShell';

// Sidebar per 03_Page_Specifications/page/Student/STU-001_Dashboard.md section 6
const NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard', href: '/student/dashboard' },
  { label: 'My Courses' },
  { label: 'Progress', href: '/student/progress' },
  { label: 'Homework' },
  { label: 'Calendar', href: '/student/calendar' },
  { label: 'Dictionary', href: '/dictionary' },
  { label: 'AI Learning' },
  { label: 'Flashcards', href: '/student/flashcards' },
  { label: 'Exams' },
  { label: 'Certificates' },
  { label: 'Payment' },
  { label: 'Notifications', href: '/student/notifications' },
  { label: 'Profile', href: '/student/profile' },
  { label: 'Settings' },
];

export default async function StudentLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  if (!session || !session.roles.includes('STUDENT')) {
    redirect('/login');
  }

  return (
    <PortalShell title="Student Portal" navItems={NAV_ITEMS} user={session}>
      {children}
    </PortalShell>
  );
}
