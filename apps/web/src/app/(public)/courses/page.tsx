import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { apiFetch } from '@/lib/api';
import { getT, type TFunction } from '@/lib/i18n/server';

interface Course {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  level: string;
  isFree: boolean;
  price: number;
}

const LEVEL_COLORS: Record<string, string> = {
  HSK1: 'bg-mint-100 text-mint-700',
  HSK2: 'bg-sun-100 text-sun-700',
  HSK3: 'bg-brand-100 text-brand-700',
  HSK4: 'bg-grape-100 text-grape-500',
  HSK5: 'bg-sky-100 text-sky-400',
  HSK6: 'bg-brand-100 text-brand-700',
};

export default async function PublicCoursesPage() {
  const t = await getT();
  const courses = await apiFetch<Course[]>('/courses');
  const freeCourses = courses.filter((c) => c.isFree);
  const paidCourses = courses.filter((c) => !c.isFree);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold sm:text-4xl">{t('courses.title')}</h1>
        <p className="mt-2 text-zinc-500">{t('courses.subtitle')}</p>
      </div>

      {courses.length === 0 ? (
        <p className="text-center text-sm text-zinc-500">{t('courses.none')}</p>
      ) : (
        <>
          {freeCourses.length > 0 && (
            <section>
              <h2 className="mb-4 flex items-center gap-2 text-xl font-extrabold">
                <span className="chip bg-mint-100 text-mint-700">{t('common.free')}</span> {t('courses.freeSection')}
              </h2>
              <CourseGrid courses={freeCourses} t={t} />
            </section>
          )}
          {paidCourses.length > 0 && (
            <section>
              <h2 className="mb-4 text-xl font-extrabold">{t('courses.paidSection')}</h2>
              <CourseGrid courses={paidCourses} t={t} />
            </section>
          )}
        </>
      )}
    </div>
  );
}

function CourseGrid({ courses, t }: { courses: Course[]; t: TFunction }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <Link key={course.id} href={`/courses/${course.slug}`} className="card group flex flex-col p-5 transition hover:-translate-y-1 hover:shadow-md">
          <div className="flex items-center justify-between">
            <span className={`chip ${LEVEL_COLORS[course.level] ?? 'bg-brand-100 text-brand-700'}`}>{course.level}</span>
            <span className="text-sm font-bold text-brand-600">
              {course.isFree ? t('common.free') : `${course.price.toLocaleString('vi-VN')}đ`}
            </span>
          </div>
          <h3 className="mt-3 text-lg font-bold group-hover:text-brand-600">{course.title}</h3>
          <p className="mt-1 line-clamp-2 flex-1 text-sm text-zinc-500">{course.description}</p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
            {t('common.viewDetail')} <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      ))}
    </div>
  );
}
