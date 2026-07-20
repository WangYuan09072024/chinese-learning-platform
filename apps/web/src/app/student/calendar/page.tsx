import Link from 'next/link';
import { CalendarDays, ClipboardList } from 'lucide-react';
import { getToken } from '@/lib/session';
import { apiFetch } from '@/lib/api';
import { CalendarGrid, type ClassSession } from '@/components/CalendarGrid';

interface UpcomingHomework {
  id: string;
  title: string;
  dueDate: string;
  courseTitle: string;
  courseSlug: string;
  lessonId: string;
  lessonTitle: string;
  submitted: boolean;
  graded: boolean;
}

export default async function StudentCalendarPage() {
  const token = await getToken();
  const [sessions, items] = await Promise.all([
    apiFetch<ClassSession[]>('/calendar/sessions', { token }),
    apiFetch<UpcomingHomework[]>('/calendar/me', { token }),
  ]);

  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-4">
        <h1 className="flex items-center gap-2 text-2xl font-extrabold">
          <CalendarDays className="h-6 w-6 text-brand-500" /> Lịch học
        </h1>
        <CalendarGrid sessions={sessions} />
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="flex items-center gap-2 text-lg font-extrabold">
          <ClipboardList className="h-5 w-5 text-brand-500" /> Bài tập sắp đến hạn
        </h2>
        {items.length === 0 ? (
          <p className="text-sm text-zinc-500">Không có bài tập nào có hạn nộp sắp tới.</p>
        ) : (
          <ul className="flex flex-col gap-2">
            {items.map((item) => {
              const overdue = new Date(item.dueDate) < new Date() && !item.submitted;
              return (
                <li key={item.id} className="card p-4 text-sm">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-bold">{item.title}</p>
                      <p className="text-zinc-500">
                        {item.courseTitle} — {item.lessonTitle}
                      </p>
                      <p className={`mt-1 text-xs ${overdue ? 'text-brand-600' : 'text-zinc-400'}`}>
                        Hạn nộp: {new Date(item.dueDate).toLocaleString('vi-VN')}
                      </p>
                    </div>
                    <span className="whitespace-nowrap text-xs">
                      {item.graded ? (
                        <span className="chip bg-mint-100 text-mint-700">Đã chấm</span>
                      ) : item.submitted ? (
                        <span className="chip bg-zinc-100 text-zinc-500">Đã nộp</span>
                      ) : (
                        <span className={`chip ${overdue ? 'bg-brand-100 text-brand-700' : 'bg-sun-100 text-sun-700'}`}>Chưa nộp</span>
                      )}
                    </span>
                  </div>
                  <Link
                    href={`/student/courses/${item.courseSlug}/lessons/${item.lessonId}`}
                    className="mt-2 inline-block text-xs font-semibold text-brand-600 underline"
                  >
                    Đi tới bài học
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
}
