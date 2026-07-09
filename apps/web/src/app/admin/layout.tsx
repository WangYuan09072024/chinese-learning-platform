import { redirect } from 'next/navigation';
import { getSession } from '@/lib/session';
import { PortalShell, type NavItem } from '@/components/PortalShell';

const STAFF_ROLES = ['CONTENT_MANAGER', 'FINANCE_STAFF', 'CUSTOMER_SUPPORT', 'ADMIN', 'SUPER_ADMIN'];

// Sidebar per Admin Portal outline in 00_Project_Bible/00.1_Project_Overview.md
const NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard', href: '/admin/dashboard' },
  { label: 'Users', href: '/admin/users' },
  { label: 'Courses', href: '/admin/courses' },
  { label: 'Dictionary', href: '/dictionary' },
  { label: 'Liên hệ', href: '/admin/contact' },
  { label: 'Lessons' },
  { label: 'AI' },
  { label: 'Payments' },
  { label: 'Reports' },
  { label: 'Notifications' },
  { label: 'CMS' },
  { label: 'Settings' },
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  if (!session || !session.roles.some((r) => STAFF_ROLES.includes(r))) {
    redirect('/login');
  }

  return (
    <PortalShell title="Admin Portal" navItems={NAV_ITEMS} user={session}>
      {children}
    </PortalShell>
  );
}
