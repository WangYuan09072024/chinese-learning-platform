import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BookOpen, GraduationCap, Lock, PlayCircle } from 'lucide-react';
import { apiFetch } from '@/lib/api';
import { getSession, getToken } from '@/lib/session';
import { getLocale, getT } from '@/lib/i18n/server';
import { EnrollButton } from '@/components/EnrollButton';

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

interface Enrollment {
  course: { id: string };
}

export default async function PublicCourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [locale, t] = await Promise.all([getLocale(), getT()]);
  const course = await apiFetch<Course | null>(`/courses/${slug}`);
  if (!course) notFound();

  const session = await getSession();
  let enrolled = false;
  if (session) {
    try {
      const mine = await apiFetch<Enrollment[]>('/enrollments/me', { token: await getToken() });
      enrolled = mine.some((e) => e.course.id === course.id);
    } catch {
      enrolled = false;
    }
  }

  const totalLessons = course.chapters.reduce((sum, c) => sum + c.lessons.length, 0);

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 py-12">
      <div className="card p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="chip bg-brand-100 text-brand-700">{course.level}</span>
          {course.isFree ? (
            <span className="chip bg-mint-100 text-mint-700">{t('common.free')}</span>
          ) : (
            <span className="chip bg-sun-100 text-sun-700">{course.price.toLocaleString('vi-VN')}đ</span>
          )}
          <span className="chip bg-zinc-100 text-zinc-500">
            <BookOpen className="h-3.5 w-3.5" /> {totalLessons} {t('courses.lessons')}
          </span>
        </div>
        <h1 className="mt-3 text-2xl font-extrabold sm:text-3xl">{course.title}</h1>
        <p className="mt-2 text-zinc-500">{course.description}</p>

        <div className="mt-5">
          {enrolled ? (
            <Link href={`/student/courses/${slug}`} className="btn-primary w-fit px-6 py-3 text-base">
              <PlayCircle className="h-5 w-5" /> {t('courses.enterLearn')}
            </Link>
          ) : course.isFree ? (
            session ? (
              <EnrollButton courseId={course.id} slug={slug} locale={locale} />
            ) : (
              <Link href="/register" className="btn-primary w-fit px-6 py-3 text-base">
                <GraduationCap className="h-5 w-5" /> {t('courses.enrollFree')}
              </Link>
            )
          ) : (
            <div className="flex flex-col gap-2">
              <p className="text-sm text-zinc-500">{t('courses.deepNote')}</p>
              <Link href="/contact" className="btn-primary w-fit px-6 py-3 text-base">
                {t('courses.contactEnroll')}
              </Link>
            </div>
          )}
        </div>
      </div>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-extrabold">{t('courses.content')}</h2>
        {course.chapters.length === 0 ? (
          <p className="text-sm text-zinc-500">{t('courses.contentUpdating')}</p>
        ) : (
          course.chapters.map((chapter) => (
            <div key={chapter.id} className="card p-5">
              <h3 className="font-bold">{chapter.title}</h3>
              <ul className="mt-2 flex flex-col gap-1.5 text-sm">
                {chapter.lessons.map((lesson) => (
                  <li key={lesson.id} className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300">
                    {lesson.isFreePreview ? (
                      <PlayCircle className="h-4 w-4 text-mint-500" />
                    ) : (
                      <Lock className="h-4 w-4 text-zinc-300" />
                    )}
                    {lesson.title}
                    {lesson.isFreePreview && <span className="chip bg-mint-100 text-mint-700">{t('courses.trial')}</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </section>
    </div>
  );
}
