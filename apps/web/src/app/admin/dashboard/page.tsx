import { getSession } from '@/lib/session';
import { apiFetch } from '@/lib/api';

interface Course {
  id: string;
  title: string;
  level: string;
}

export default async function AdminDashboardPage() {
  const session = await getSession();
  const courses = await apiFetch<Course[]>('/courses');

  return (
    <div className="flex flex-col gap-8">
      <section>
        <h1 className="text-2xl font-semibold">Xin chào, {session?.email}!</h1>
        <p className="text-zinc-500">Tổng quan hệ thống.</p>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
          <div className="text-sm text-zinc-500">Tổng số khóa học</div>
          <div className="text-2xl font-semibold">{courses.length}</div>
        </div>
      </section>
    </div>
  );
}
