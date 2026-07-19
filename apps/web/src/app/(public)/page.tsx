import Link from 'next/link';
import { apiFetch } from '@/lib/api';
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

const FEATURES = [
  { icon: Video, title: 'Bài giảng video', desc: 'Học theo từng bài, xem lại bất cứ lúc nào.', color: 'from-brand-400 to-brand-500' },
  { icon: BookMarked, title: 'Từ điển tiếng Trung', desc: 'Tra chữ Hán, pinyin và nghĩa nhanh chóng.', color: 'from-mint-400 to-mint-500' },
  { icon: Layers, title: 'Flashcards', desc: 'Ghi nhớ từ vựng theo chủ đề, học mọi lúc.', color: 'from-sun-400 to-sun-500' },
  { icon: ClipboardCheck, title: 'Bài tập & Quiz', desc: 'Luyện tập và được giáo viên chấm điểm.', color: 'from-grape-400 to-grape-500' },
  { icon: TrendingUp, title: 'Theo dõi tiến độ', desc: 'Biết mình đã học tới đâu, còn gì cần ôn.', color: 'from-sky-300 to-sky-400' },
  { icon: Sparkles, title: 'Học vui mỗi ngày', desc: 'Giao diện thân thiện, tươi sáng, dễ dùng.', color: 'from-brand-400 to-sun-400' },
];

const LEVEL_COLORS: Record<string, string> = {
  HSK1: 'bg-mint-100 text-mint-700',
  HSK2: 'bg-sun-100 text-sun-700',
  HSK3: 'bg-brand-100 text-brand-700',
  HSK4: 'bg-grape-100 text-grape-500',
  HSK5: 'bg-sky-100 text-sky-400',
  HSK6: 'bg-brand-100 text-brand-700',
};

export default async function Home() {
  let courses: Course[] = [];
  try {
    courses = await apiFetch<Course[]>('/courses');
  } catch {
    courses = [];
  }
  const featured = courses.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Flower2 className="absolute -left-6 top-10 h-24 w-24 rotate-12 text-brand-200/60" />
        <Flower2 className="absolute right-6 top-24 h-16 w-16 -rotate-12 text-mint-300/60" />
        <Flower2 className="absolute bottom-6 left-1/3 h-20 w-20 text-sun-200/70" />
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center sm:py-24">
          <span className="chip bg-white/70 text-brand-600 shadow-sm">
            <Sparkles className="h-4 w-4" /> Học tiếng Trung vui mỗi ngày
          </span>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Chinh phục{' '}
            <span className="bg-gradient-to-r from-brand-500 via-sun-500 to-mint-500 bg-clip-text text-transparent">
              tiếng Trung
            </span>{' '}
            cùng Yuan Yuan
          </h1>
          <p className="max-w-xl text-lg text-zinc-500">
            Bài giảng video, từ điển, flashcards, bài tập và theo dõi tiến độ — tất cả trong một nền tảng thân thiện,
            dùng được trên mọi thiết bị.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/register" className="btn-primary px-7 py-3 text-base">
              Bắt đầu học miễn phí <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/courses" className="btn-ghost px-7 py-3 text-base">
              Xem khóa học
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <h2 className="mb-8 text-center text-2xl font-extrabold sm:text-3xl">Vì sao chọn Yuan Yuan?</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
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
            <h2 className="text-2xl font-extrabold sm:text-3xl">Khóa học nổi bật</h2>
            <Link href="/courses" className="flex items-center gap-1 text-sm font-semibold text-brand-600 hover:underline">
              Xem tất cả <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((course) => (
              <Link key={course.id} href={`/courses/${course.slug}`} className="card group p-5 transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-center justify-between">
                  <span className={`chip ${LEVEL_COLORS[course.level] ?? 'bg-brand-100 text-brand-700'}`}>{course.level}</span>
                  {course.isFree && <span className="chip bg-mint-100 text-mint-700">Miễn phí</span>}
                </div>
                <h3 className="mt-3 text-lg font-bold group-hover:text-brand-600">{course.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-zinc-500">{course.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                  Xem chi tiết <ArrowRight className="h-4 w-4" />
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
          <h2 className="text-2xl font-extrabold sm:text-3xl">Sẵn sàng bắt đầu hành trình?</h2>
          <p className="mx-auto mt-2 max-w-md text-white/90">Tạo tài khoản miễn phí và học ngay hôm nay.</p>
          <Link href="/register" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-base font-bold text-brand-600 shadow-sm transition hover:bg-brand-50">
            Đăng ký miễn phí <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
