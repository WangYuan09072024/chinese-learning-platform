import Link from 'next/link';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';
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

const LEVEL_COLORS: Record<string, string> = {
  HSK1: 'bg-mint-100 text-mint-700',
  HSK2: 'bg-sun-100 text-sun-700',
  HSK3: 'bg-brand-100 text-brand-700',
  HSK4: 'bg-grape-100 text-grape-500',
  HSK5: 'bg-sky-100 text-sky-400',
  HSK6: 'bg-brand-100 text-brand-700',
};

export default async function StudentDashboardPage() {
  const session = await getSession();
  const token = await getToken();
  const [enrollments, allCourses] = await Promise.all([
    apiFetch<Enrollment[]>('/enrollments/me', { token }),
    apiFetch<Course[]>('/courses').catch(() => [] as Course[]),
  ]);

  const enrolledIds = new Set(enrollments.map((e) => e.course.id));
  const freeAvailable = allCourses.filter((c) => c.isFree && !enrolledIds.has(c.id));

  return (
    <div className="flex flex-col gap-8">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-400 via-brand-400 to-sun-400 p-6 text-white shadow-lg sm:p-8">
        <Sparkles className="absolute right-4 top-4 h-16 w-16 text-white/20" />
        <h1 className="text-2xl font-extrabold sm:text-3xl">Chào mừng trở lại! 🌸</h1>
        <p className="mt-1 text-white/90">Hôm nay bạn muốn học gì?</p>
      </section>

      <section>
        <h2 className="mb-4 flex items-center gap-2 text-lg font-extrabold">
          <BookOpen className="h-5 w-5 text-brand-500" /> Khóa học của tôi
        </h2>
        {enrollments.length === 0 ? (
          <div className="card p-6 text-sm text-zinc-500">
            Bạn chưa đăng ký khóa học nào. Xem các khóa miễn phí bên dưới hoặc liên hệ giáo viên.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {enrollments.map(({ id, course, progress }) => (
              <Link key={id} href={`/student/courses/${course.slug}`} className="card group flex flex-col p-5 transition hover:-translate-y-1 hover:shadow-md">
                <span className={`chip w-fit ${LEVEL_COLORS[course.level] ?? 'bg-brand-100 text-brand-700'}`}>{course.level}</span>
                <h3 className="mt-2 font-bold group-hover:text-brand-600">{course.title}</h3>
                <p className="mt-1 line-clamp-2 flex-1 text-sm text-zinc-500">{course.description}</p>
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-zinc-400">
                    <span>Tiến độ</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="mt-1 h-2 w-full rounded-full bg-brand-100">
                    <div className="h-2 rounded-full bg-gradient-to-r from-brand-400 to-sun-400" style={{ width: `${progress}%` }} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {freeAvailable.length > 0 && (
        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-lg font-extrabold">
              <span className="chip bg-mint-100 text-mint-700">Miễn phí</span> Khóa học có thể đăng ký ngay
            </h2>
            <Link href="/courses" className="flex items-center gap-1 text-sm font-semibold text-brand-600 hover:underline">
              Tất cả <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {freeAvailable.map((course) => (
              <Link key={course.id} href={`/courses/${course.slug}`} className="card group flex flex-col p-5 transition hover:-translate-y-1 hover:shadow-md">
                <span className={`chip w-fit ${LEVEL_COLORS[course.level] ?? 'bg-brand-100 text-brand-700'}`}>{course.level}</span>
                <h3 className="mt-2 font-bold group-hover:text-brand-600">{course.title}</h3>
                <p className="mt-1 line-clamp-2 flex-1 text-sm text-zinc-500">{course.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                  Đăng ký học <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
