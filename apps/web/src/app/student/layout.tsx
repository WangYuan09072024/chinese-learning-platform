import { redirect } from 'next/navigation';
import { getSession } from '@/lib/session';
import { PortalShell, type NavItem } from '@/components/PortalShell';

// Sidebar per 03_Page_Specifications/page/Student/STU-001_Dashboard.md section 6
const NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard', href: '/student/dashboard' },
  { label: 'My Courses' },
  { label: 'Homework' },
  { label: 'Calendar' },
  { label: 'Dictionary' },
  { label: 'AI Learning' },
  { label: 'Flashcards' },
  { label: 'Exams' },
  { label: 'Certificates' },
  { label: 'Payment' },
  { label: 'Profile' },
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
