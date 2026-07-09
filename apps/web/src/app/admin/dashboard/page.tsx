import Link from 'next/link';
import { getSession, getToken } from '@/lib/session';
import { apiFetch } from '@/lib/api';

interface Course {
  id: string;
}

interface AppUser {
  id: string;
  roles: string[];
}

export default async function AdminDashboardPage() {
  const session = await getSession();
  const token = await getToken();
  const [courses, users] = await Promise.all([
    apiFetch<Course[]>('/courses'),
    apiFetch<AppUser[]>('/users', { token }),
  ]);

  const teachers = users.filter((u) => u.roles.includes('TEACHER') || u.roles.includes('TEACHING_ASSISTANT')).length;
  const students = users.filter((u) => u.roles.includes('STUDENT')).length;

  const stats = [
    { label: 'Tổng số khóa học', value: courses.length },
    { label: 'Tổng số người dùng', value: users.length },
    { label: 'Giáo viên', value: teachers },
    { label: 'Học viên', value: students },
  ];

  const quickLinks = [
    { label: 'Quản lý người dùng', href: '/admin/users' },
    { label: 'Quản lý khóa học', href: '/admin/courses' },
    { label: 'Tin nhắn liên hệ', href: '/admin/contact' },
  ];

  return (
    <div className="flex flex-col gap-8">
      <section>
        <h1 className="text-2xl font-semibold">Xin chào, {session?.email}!</h1>
        <p className="text-zinc-500">Tổng quan hệ thống.</p>
      </section>

      <section className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
            <div className="text-sm text-zinc-500">{s.label}</div>
            <div className="text-2xl font-semibold">{s.value}</div>
          </div>
        ))}
      </section>

      <section className="flex flex-wrap gap-3">
        {quickLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-md border border-zinc-200 px-4 py-2 text-sm hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
          >
            {link.label}
          </Link>
        ))}
      </section>
    </div>
  );
}
