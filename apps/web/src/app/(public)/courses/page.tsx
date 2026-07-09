import Link from 'next/link';
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

export default async function PublicCoursesPage() {
  const courses = await apiFetch<Course[]>('/courses');

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 p-8">
      <h1 className="text-2xl font-semibold">Khóa học</h1>
      {courses.length === 0 ? (
        <p className="text-sm text-zinc-500">Chưa có khóa học nào được xuất bản.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.slug}`}
              className="rounded-lg border border-zinc-200 p-4 hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
            >
              <div className="text-xs font-medium uppercase text-zinc-400">{course.level}</div>
              <h3 className="mt-1 font-semibold">{course.title}</h3>
              <p className="mt-1 line-clamp-2 text-sm text-zinc-500">{course.description}</p>
              <div className="mt-3 text-sm font-medium">
                {course.isFree ? 'Miễn phí' : `${course.price.toLocaleString('vi-VN')}đ`}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
