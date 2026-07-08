import Link from 'next/link';
import { getSession, getToken } from '@/lib/session';
import { apiFetch } from '@/lib/api';
import { CreateCourseForm } from '@/components/CreateCourseForm';

interface Course {
  id: string;
  title: string;
  slug: string;
  level: string;
  isPublished: boolean;
}

export default async function TeacherDashboardPage() {
  const session = await getSession();
  const courses = await apiFetch<Course[]>('/courses/mine', { token: await getToken() });

  return (
    <div className="flex flex-col gap-8">
      <section>
        <h1 className="text-2xl font-semibold">Chào mừng, {session?.email}!</h1>
        <p className="text-zinc-500">Quản lý khóa học và lớp học của bạn.</p>
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <CreateCourseForm />

        <div>
          <h2 className="mb-3 text-lg font-medium">Khóa học của tôi</h2>
          <ul className="flex flex-col gap-2">
            {courses.map((course) => (
              <li key={course.id}>
                <Link
                  href={`/teacher/courses/${course.slug}`}
                  className="block rounded-md border border-zinc-200 px-3 py-2 text-sm hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
                >
                  {course.title} <span className="text-zinc-400">({course.level})</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
