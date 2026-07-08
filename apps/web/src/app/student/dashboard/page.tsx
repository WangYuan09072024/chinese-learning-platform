import Link from 'next/link';
import { getSession, getToken } from '@/lib/session';
import { apiFetch } from '@/lib/api';

interface Course {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  level: string;
  isFree: boolean;
  price: number;
}

interface Enrollment {
  id: string;
  progress: number;
  course: Course;
}

export default async function StudentDashboardPage() {
  const session = await getSession();
  const enrollments = await apiFetch<Enrollment[]>('/enrollments/me', { token: await getToken() });

  return (
    <div className="flex flex-col gap-8">
      <section>
        <h1 className="text-2xl font-semibold">Chào mừng trở lại, {session?.email}!</h1>
        <p className="text-zinc-500">Hôm nay bạn muốn học gì?</p>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-medium">Khóa học của tôi</h2>
        {enrollments.length === 0 ? (
          <p className="text-zinc-500">Bạn chưa được ghi danh vào khóa học nào. Liên hệ giáo viên để được ghi danh.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {enrollments.map(({ id, course }) => (
              <Link
                key={id}
                href={`/student/courses/${course.slug}`}
                className="rounded-lg border border-zinc-200 p-4 hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
              >
                <div className="text-xs font-medium uppercase text-zinc-400">{course.level}</div>
                <h3 className="mt-1 font-semibold">{course.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-zinc-500">{course.description}</p>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
