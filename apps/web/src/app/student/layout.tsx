import { redirect } from 'next/navigation';
import { getSession } from '@/lib/session';
import { PortalShell, type NavItem } from '@/components/PortalShell';

// Sidebar per 03_Page_Specifications/page/Student/STU-001_Dashboard.md section 6
const NAV_ITEMS: NavItem[] = [
  { label: 'Trang chủ', href: '/student/dashboard', icon: 'dashboard' },
  { label: 'Tiến độ', href: '/student/progress', icon: 'progress' },
  { label: 'Lịch học', href: '/student/calendar', icon: 'calendar' },
  { label: 'Từ điển', href: '/dictionary', icon: 'dictionary' },
  { label: 'Flashcards', href: '/student/flashcards', icon: 'flashcards' },
  { label: 'Thông báo', href: '/student/notifications', icon: 'notifications' },
  { label: 'Hồ sơ', href: '/student/profile', icon: 'profile' },
  { label: 'AI Learning', icon: 'ai' },
  { label: 'Chứng chỉ', icon: 'certificates' },
];

export default async function StudentLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  if (!session || !session.roles.includes('STUDENT')) {
    redirect('/login');
  }

  return (
    <PortalShell title="Học viên" navItems={NAV_ITEMS} user={session}>
      {children}
    </PortalShell>
  );
}
