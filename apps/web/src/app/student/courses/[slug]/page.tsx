import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { getSession } from '@/lib/session';
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
  chapters: Chapter[];
}

export default async function StudentCoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const session = await getSession();
  if (!session) redirect('/login');

  const course = await apiFetch<Course | null>(`/courses/${slug}`);
  if (!course) notFound();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold">{course.title}</h1>
        <p className="text-sm text-zinc-500">{course.description}</p>
      </div>

      {course.chapters.map((chapter) => (
        <div key={chapter.id} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
          <h2 className="mb-2 font-medium">{chapter.title}</h2>
          <ul className="flex flex-col gap-1 pl-4 text-sm">
            {chapter.lessons.map((lesson) => (
              <li key={lesson.id} className="list-disc">
                <Link href={`/student/courses/${slug}/lessons/${lesson.id}`} className="hover:underline">
                  {lesson.title}
                </Link>
                {lesson.isFreePreview && <span className="ml-2 text-xs text-zinc-400">(học thử)</span>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
