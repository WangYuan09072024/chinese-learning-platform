import Link from 'next/link';
import { logout } from '@/actions/auth';
import type { SessionUser } from '@/lib/session';

export interface NavItem {
  label: string;
  href?: string; // omit for "coming soon" items not implemented yet
}

export function PortalShell({
  title,
  navItems,
  user,
  children,
}: {
  title: string;
  navItems: NavItem[];
  user: SessionUser;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 shrink-0 border-r border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mb-6 px-2 text-lg font-semibold">{title}</div>
        <nav className="flex flex-col gap-1">
          {navItems.map((item) =>
            item.href ? (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm hover:bg-zinc-200 dark:hover:bg-zinc-800"
              >
                {item.label}
              </Link>
            ) : (
              <span
                key={item.label}
                className="cursor-not-allowed rounded-md px-3 py-2 text-sm text-zinc-400 dark:text-zinc-600"
                title="Coming soon"
              >
                {item.label}
              </span>
            ),
          )}
        </nav>
      </aside>
      <div className="flex flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-zinc-200 px-6 py-3 dark:border-zinc-800">
          <span className="text-sm text-zinc-500">{user.email}</span>
          <form action={logout}>
            <button type="submit" className="text-sm font-medium text-zinc-600 hover:underline dark:text-zinc-300">
              Đăng xuất
            </button>
          </form>
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
