import Link from 'next/link';
import { Users, BookOpen, GraduationCap, UserCheck, BarChart3, Megaphone, Mail, Settings } from 'lucide-react';
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
    { label: 'Khóa học', value: courses.length, icon: BookOpen, color: 'text-brand-500' },
    { label: 'Người dùng', value: users.length, icon: Users, color: 'text-mint-500' },
    { label: 'Giáo viên', value: teachers, icon: UserCheck, color: 'text-grape-500' },
    { label: 'Học viên', value: students, icon: GraduationCap, color: 'text-sun-500' },
  ];

  const quickLinks = [
    { label: 'Người dùng', href: '/admin/users', icon: Users },
    { label: 'Khóa học', href: '/admin/courses', icon: BookOpen },
    { label: 'Báo cáo', href: '/admin/reports', icon: BarChart3 },
    { label: 'Gửi thông báo', href: '/admin/notifications', icon: Megaphone },
    { label: 'Liên hệ', href: '/admin/contact', icon: Mail },
    { label: 'Cài đặt', href: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="flex flex-col gap-8">
      <section>
        <h1 className="text-2xl font-extrabold">Xin chào, {session?.email}! 👋</h1>
        <p className="text-zinc-500">Tổng quan và quản lý toàn bộ nền tảng.</p>
      </section>

      <section className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="card flex flex-col gap-1 p-5">
            <s.icon className={`h-6 w-6 ${s.color}`} />
            <span className="mt-2 text-3xl font-extrabold">{s.value}</span>
            <span className="text-xs text-zinc-500">{s.label}</span>
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-bold uppercase tracking-wide text-zinc-400">Lối tắt</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {quickLinks.map((link) => (
            <Link key={link.href} href={link.href} className="card flex items-center gap-3 p-4 transition hover:-translate-y-0.5 hover:shadow-lg">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-100 text-brand-600 dark:bg-white/10">
                <link.icon className="h-5 w-5" />
              </span>
              <span className="font-semibold">{link.label}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
