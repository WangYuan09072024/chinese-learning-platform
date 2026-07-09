import Link from 'next/link';
import { getToken } from '@/lib/session';
import { apiFetch } from '@/lib/api';
import { CreateCourseForm } from '@/components/CreateCourseForm';

interface Course {
  id: string;
  title: string;
  slug: string;
  level: string;
  isPublished: boolean;
}

export default async function AdminCoursesPage() {
  const courses = await apiFetch<Course[]>('/courses/manageable', { token: await getToken() });

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-semibold">Quản lý khóa học</h1>
        <p className="text-sm text-zinc-500">Tạo khóa học mới và quản lý nội dung, giáo viên, học viên.</p>
      </div>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <CreateCourseForm />

        <div>
          <h2 className="mb-3 text-lg font-medium">Tất cả khóa học ({courses.length})</h2>
          {courses.length === 0 ? (
            <p className="text-sm text-zinc-500">Chưa có khóa học nào.</p>
          ) : (
            <ul className="flex flex-col gap-2">
              {courses.map((course) => (
                <li key={course.id}>
                  <Link
                    href={`/teacher/courses/${course.slug}`}
                    className="block rounded-md border border-zinc-200 px-3 py-2 text-sm hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
                  >
                    {course.title} <span className="text-zinc-400">({course.level})</span>
                    {!course.isPublished && <span className="ml-2 text-xs text-amber-500">nháp</span>}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}
