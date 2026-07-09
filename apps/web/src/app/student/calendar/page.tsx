import Link from 'next/link';
import { getToken } from '@/lib/session';
import { apiFetch } from '@/lib/api';

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
  const items = await apiFetch<UpcomingHomework[]>('/calendar/me', { token: await getToken() });

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Lịch bài tập</h1>
      {items.length === 0 ? (
        <p className="text-sm text-zinc-500">Không có bài tập nào có hạn nộp sắp tới.</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {items.map((item) => {
            const overdue = new Date(item.dueDate) < new Date() && !item.submitted;
            return (
              <li key={item.id} className="rounded-lg border border-zinc-200 p-4 text-sm dark:border-zinc-800">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-zinc-500">
                      {item.courseTitle} — {item.lessonTitle}
                    </p>
                    <p className={`mt-1 text-xs ${overdue ? 'text-red-500' : 'text-zinc-400'}`}>
                      Hạn nộp: {new Date(item.dueDate).toLocaleString('vi-VN')}
                    </p>
                  </div>
                  <span className="whitespace-nowrap text-xs">
                    {item.graded ? (
                      <span className="text-green-600">Đã chấm</span>
                    ) : item.submitted ? (
                      <span className="text-zinc-500">Đã nộp</span>
                    ) : (
                      <span className={overdue ? 'text-red-500' : 'text-zinc-400'}>Chưa nộp</span>
                    )}
                  </span>
                </div>
                <Link
                  href={`/student/courses/${item.courseSlug}/lessons/${item.lessonId}`}
                  className="mt-2 inline-block text-xs underline"
                >
                  Đi tới bài học
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
