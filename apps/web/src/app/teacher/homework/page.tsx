import Link from 'next/link';
import { ClipboardList, CheckCircle2, Clock } from 'lucide-react';
import { getToken } from '@/lib/session';
import { apiFetch } from '@/lib/api';

interface TeacherHomework {
  id: string;
  title: string;
  dueDate: string | null;
  lessonTitle: string;
  courseTitle: string;
  courseSlug: string;
  submissionCount: number;
  gradedCount: number;
  pendingCount: number;
}

export default async function TeacherHomeworkPage() {
  const homework = await apiFetch<TeacherHomework[]>('/teacher/homework', { token: await getToken() });

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-extrabold">
          <ClipboardList className="h-6 w-6 text-brand-500" /> Bài tập
        </h1>
        <p className="text-sm text-zinc-500">Bài tập trong các lớp của bạn — bấm để xem bài nộp và chấm điểm.</p>
      </div>

      {homework.length === 0 ? (
        <div className="card p-8 text-center text-sm text-zinc-500">
          Chưa có bài tập nào. Vào một bài học trong lớp để tạo bài tập.
        </div>
      ) : (
        <ul className="flex flex-col gap-3">
          {homework.map((h) => (
            <li key={h.id}>
              <Link href={`/teacher/homework/${h.id}`} className="card flex flex-col gap-2 p-4 transition hover:-translate-y-0.5 hover:shadow-lg sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-bold">{h.title}</p>
                  <p className="text-xs text-zinc-500">{h.courseTitle} — {h.lessonTitle}</p>
                  {h.dueDate && (
                    <p className="mt-1 text-xs text-zinc-400">Hạn: {new Date(h.dueDate).toLocaleString('vi-VN')}</p>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  {h.pendingCount > 0 ? (
                    <span className="chip bg-sun-100 text-sun-700"><Clock className="h-3.5 w-3.5" /> {h.pendingCount} chờ chấm</span>
                  ) : (
                    <span className="chip bg-mint-100 text-mint-700"><CheckCircle2 className="h-3.5 w-3.5" /> Đã chấm hết</span>
                  )}
                  <span className="chip bg-brand-100 text-brand-700">{h.submissionCount} bài nộp</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
