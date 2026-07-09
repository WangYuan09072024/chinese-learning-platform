import { redirect } from 'next/navigation';
import { getSession } from '@/lib/session';
import { isContentStaff } from '@/lib/roles';
import { PortalShell, type NavItem } from '@/components/PortalShell';

// Sidebar per Teacher Portal outline in 00_Project_Bible/00.1_Project_Overview.md
const NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard', href: '/teacher/dashboard' },
  { label: 'My Classes' },
  { label: 'Student Management' },
  { label: 'Homework' },
  { label: 'Quiz' },
  { label: 'Attendance' },
  { label: 'Calendar' },
  { label: 'Announcements' },
  { label: 'Messages' },
  { label: 'Reports' },
  { label: 'Profile', href: '/teacher/profile' },
];

export default async function TeacherLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  const canTeach = session?.roles.includes('TEACHER') || session?.roles.includes('TEACHING_ASSISTANT');
  if (!session || !(canTeach || isContentStaff(session.roles))) {
    redirect('/login');
  }

  return (
    <PortalShell title="Teacher Portal" navItems={NAV_ITEMS} user={session}>
      {children}
    </PortalShell>
  );
}
