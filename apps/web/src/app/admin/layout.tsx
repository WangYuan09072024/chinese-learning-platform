import { redirect } from 'next/navigation';
import { getSession } from '@/lib/session';
import { PortalShell, type NavItem } from '@/components/PortalShell';

const STAFF_ROLES = ['CONTENT_MANAGER', 'FINANCE_STAFF', 'CUSTOMER_SUPPORT', 'ADMIN', 'SUPER_ADMIN'];

// Sidebar per Admin Portal outline in 00_Project_Bible/00.1_Project_Overview.md
const NAV_ITEMS: NavItem[] = [
  { label: 'Trang chủ', href: '/admin/dashboard', icon: 'dashboard' },
  { label: 'Người dùng', href: '/admin/users', icon: 'users' },
  { label: 'Khóa học', href: '/admin/courses', icon: 'courses' },
  { label: 'Từ điển', href: '/dictionary', icon: 'dictionary' },
  { label: 'Liên hệ', href: '/admin/contact', icon: 'contact' },
  { label: 'Báo cáo', icon: 'reports' },
  { label: 'Thông báo', icon: 'notifications' },
  { label: 'CMS', icon: 'cms' },
  { label: 'Cài đặt', icon: 'settings' },
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  if (!session || !session.roles.some((r) => STAFF_ROLES.includes(r))) {
    redirect('/login');
  }

  return (
    <PortalShell title="Quản trị" navItems={NAV_ITEMS} user={session}>
      {children}
    </PortalShell>
  );
}
