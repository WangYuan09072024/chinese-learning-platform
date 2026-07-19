import { redirect } from 'next/navigation';
import { getSession } from '@/lib/session';
import { isContentStaff } from '@/lib/roles';
import { PortalShell, type NavItem } from '@/components/PortalShell';

// Sidebar per Teacher Portal outline in 00_Project_Bible/00.1_Project_Overview.md
const NAV_ITEMS: NavItem[] = [
  { label: 'Trang chủ', href: '/teacher/dashboard', icon: 'dashboard' },
  { label: 'Lớp học', icon: 'classes' },
  { label: 'Học viên', icon: 'students' },
  { label: 'Bài tập', icon: 'homework' },
  { label: 'Quiz', icon: 'quiz' },
  { label: 'Điểm danh', icon: 'attendance' },
  { label: 'Lịch dạy', icon: 'calendar' },
  { label: 'Thông báo', icon: 'announcements' },
  { label: 'Tin nhắn', icon: 'messages' },
  { label: 'Báo cáo', icon: 'reports' },
  { label: 'Hồ sơ', href: '/teacher/profile', icon: 'profile' },
];

export default async function TeacherLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  const canTeach = session?.roles.includes('TEACHER') || session?.roles.includes('TEACHING_ASSISTANT');
  if (!session || !(canTeach || isContentStaff(session.roles))) {
    redirect('/login');
  }

  return (
    <PortalShell title="Giáo viên" navItems={NAV_ITEMS} user={session}>
      {children}
    </PortalShell>
  );
}
