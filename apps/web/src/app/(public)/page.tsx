import Link from 'next/link';
import { apiFetch } from '@/lib/api';
import { getT } from '@/lib/i18n/server';
import { Sparkles, Video, BookMarked, Layers, ClipboardCheck, TrendingUp, Flower2, ArrowRight } from 'lucide-react';

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

export default async function Home() {
  const t = await getT();
  let courses: Course[] = [];
  try {
    courses = await apiFetch<Course[]>('/courses');
  } catch {
    courses = [];
  }
  const featured = courses.slice(0, 3);

  const features = [
    { icon: Video, title: t('home.f1t'), desc: t('home.f1d'), color: 'from-brand-400 to-brand-500' },
    { icon: BookMarked, title: t('home.f2t'), desc: t('home.f2d'), color: 'from-mint-400 to-mint-500' },
    { icon: Layers, title: t('home.f3t'), desc: t('home.f3d'), color: 'from-sun-400 to-sun-500' },
    { icon: ClipboardCheck, title: t('home.f4t'), desc: t('home.f4d'), color: 'from-grape-400 to-grape-500' },
    { icon: TrendingUp, title: t('home.f5t'), desc: t('home.f5d'), color: 'from-sky-300 to-sky-400' },
    { icon: Sparkles, title: t('home.f6t'), desc: t('home.f6d'), color: 'from-brand-400 to-sun-400' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Flower2 className="absolute -left-6 top-10 h-24 w-24 rotate-12 text-brand-200/60" />
        <Flower2 className="absolute right-6 top-24 h-16 w-16 -rotate-12 text-mint-300/60" />
        <Flower2 className="absolute bottom-6 left-1/3 h-20 w-20 text-sun-200/70" />
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center sm:py-24">
          <span className="chip bg-white/70 text-brand-600 shadow-sm">
            <Sparkles className="h-4 w-4" /> {t('home.badge')}
          </span>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            {t('home.titleA')}{' '}
            <span className="bg-gradient-to-r from-brand-500 via-sun-500 to-mint-500 bg-clip-text text-transparent">
              {t('home.titleHighlight')}
            </span>{' '}
            {t('home.titleB')}
          </h1>
          <p className="max-w-xl text-lg text-zinc-500">{t('home.subtitle')}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/register" className="btn-primary px-7 py-3 text-base">
              {t('home.ctaStart')} <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/courses" className="btn-ghost px-7 py-3 text-base">
              {t('home.ctaCourses')}
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <h2 className="mb-8 text-center text-2xl font-extrabold sm:text-3xl">{t('home.whyTitle')}</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="card p-6 transition hover:-translate-y-1 hover:shadow-md">
              <span className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${f.color} text-white`}>
                <f.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
              <p className="mt-1 text-sm text-zinc-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured courses */}
      {featured.length > 0 && (
        <section className="mx-auto w-full max-w-6xl px-6 py-12">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-extrabold sm:text-3xl">{t('home.featuredTitle')}</h2>
            <Link href="/courses" className="flex items-center gap-1 text-sm font-semibold text-brand-600 hover:underline">
              {t('common.viewAll')} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((course) => (
              <Link key={course.id} href={`/courses/${course.slug}`} className="card group p-5 transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-center justify-between">
                  <span className={`chip ${LEVEL_COLORS[course.level] ?? 'bg-brand-100 text-brand-700'}`}>{course.level}</span>
                  {course.isFree && <span className="chip bg-mint-100 text-mint-700">{t('common.free')}</span>}
                </div>
                <h3 className="mt-3 text-lg font-bold group-hover:text-brand-600">{course.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-zinc-500">{course.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                  {t('common.viewDetail')} <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 via-brand-400 to-sun-400 px-8 py-12 text-center text-white shadow-lg">
          <Flower2 className="absolute -right-4 -top-4 h-28 w-28 text-white/20" />
          <Flower2 className="absolute -bottom-6 -left-6 h-32 w-32 text-white/20" />
          <h2 className="text-2xl font-extrabold sm:text-3xl">{t('home.ctaTitle')}</h2>
          <p className="mx-auto mt-2 max-w-md text-white/90">{t('home.ctaSubtitle')}</p>
          <Link href="/register" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-base font-bold text-brand-600 shadow-sm transition hover:bg-brand-50">
            {t('home.ctaButton')} <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
