import Link from 'next/link';
import { notFound } from 'next/navigation';
import { apiFetch } from '@/lib/api';

interface LessonSummary {
  id: string;
  title: string;
  order: number;
  isFreePreview: boolean;
}

interface Chapter {
  id: string;
  title: string;
  order: number;
  lessons: LessonSummary[];
}

interface Course {
  id: string;
  title: string;
  description: string | null;
  level: string;
  isFree: boolean;
  price: number;
  chapters: Chapter[];
}

export default async function PublicCourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = await apiFetch<Course | null>(`/courses/${slug}`);
  if (!course) notFound();

  const totalLessons = course.chapters.reduce((sum, c) => sum + c.lessons.length, 0);

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 p-8">
      <div>
        <div className="text-xs font-medium uppercase text-zinc-400">{course.level}</div>
        <h1 className="mt-1 text-2xl font-semibold">{course.title}</h1>
        <p className="mt-2 text-zinc-500">{course.description}</p>
        <div className="mt-3 flex items-center gap-4">
          <span className="text-lg font-semibold">{course.isFree ? 'Miễn phí' : `${course.price.toLocaleString('vi-VN')}đ`}</span>
          <span className="text-sm text-zinc-400">{totalLessons} bài học</span>
        </div>
        <Link
          href="/register"
          className="mt-4 inline-block rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white dark:bg-zinc-100 dark:text-zinc-900"
        >
          Đăng ký học ngay
        </Link>
      </div>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-medium">Nội dung khóa học</h2>
        {course.chapters.map((chapter) => (
          <div key={chapter.id} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
            <h3 className="font-medium">{chapter.title}</h3>
            <ul className="mt-2 flex flex-col gap-1 pl-4 text-sm">
              {chapter.lessons.map((lesson) => (
                <li key={lesson.id} className="list-disc text-zinc-600 dark:text-zinc-300">
                  {lesson.title}
                  {lesson.isFreePreview && <span className="ml-2 text-xs text-zinc-400">(học thử)</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
