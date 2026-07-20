import Link from 'next/link';
import { BookOpen, Users, CalendarDays, GraduationCap } from 'lucide-react';
import { getToken } from '@/lib/session';
import { apiFetch } from '@/lib/api';

interface TeacherClass {
  id: string;
  title: string;
  slug: string;
  level: string;
  isFree: boolean;
  isPublished: boolean;
  studentCount: number;
  sessionCount: number;
  lessonCount: number;
}

export default async function TeacherClassesPage() {
  const classes = await apiFetch<TeacherClass[]>('/teacher/classes', { token: await getToken() });

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-extrabold">
          <GraduationCap className="h-6 w-6 text-brand-500" /> Lớp của tôi
        </h1>
        <p className="text-sm text-zinc-500">Các khóa học bạn được phân công giảng dạy.</p>
      </div>

      {classes.length === 0 ? (
        <div className="card p-8 text-center text-sm text-zinc-500">
          Bạn chưa được phân công dạy khóa học nào. Liên hệ Admin để được gán lớp.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {classes.map((c) => (
            <Link key={c.id} href={`/teacher/courses/${c.slug}`} className="card group flex flex-col gap-3 p-5 transition hover:-translate-y-0.5 hover:shadow-lg">
              <div className="flex items-center justify-between">
                <span className="chip bg-brand-100 text-brand-700">{c.level}</span>
                <span className={`chip ${c.isFree ? 'bg-mint-100 text-mint-700' : 'bg-sun-100 text-sun-700'}`}>
                  {c.isFree ? 'Miễn phí' : 'Trả phí'}
                </span>
              </div>
              <h2 className="text-lg font-bold group-hover:text-brand-600">{c.title}</h2>
              <div className="mt-auto flex flex-wrap gap-x-4 gap-y-1 text-sm text-zinc-500">
                <span className="flex items-center gap-1.5"><Users className="h-4 w-4 text-brand-400" /> {c.studentCount} học viên</span>
                <span className="flex items-center gap-1.5"><BookOpen className="h-4 w-4 text-grape-400" /> {c.lessonCount} bài</span>
                <span className="flex items-center gap-1.5"><CalendarDays className="h-4 w-4 text-mint-500" /> {c.sessionCount} tiết</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
