import Link from 'next/link';
import { ClipboardCheck, CalendarClock } from 'lucide-react';
import { getToken } from '@/lib/session';
import { apiFetch } from '@/lib/api';

interface TeacherSession {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  courseTitle: string;
  courseSlug: string;
  markedCount: number;
}

export default async function TeacherAttendancePage() {
  const sessions = await apiFetch<TeacherSession[]>('/teacher/sessions', { token: await getToken() });

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-extrabold">
          <ClipboardCheck className="h-6 w-6 text-brand-500" /> Điểm danh
        </h1>
        <p className="text-sm text-zinc-500">Chọn một tiết học để điểm danh học viên.</p>
      </div>

      {sessions.length === 0 ? (
        <div className="card p-8 text-center text-sm text-zinc-500">
          Chưa có tiết học nào. Tạo tiết học trong trang quản lý khóa học trước.
        </div>
      ) : (
        <ul className="flex flex-col gap-3">
          {sessions.map((s) => (
            <li key={s.id}>
              <Link href={`/teacher/attendance/${s.id}`} className="card flex flex-col gap-1 p-4 transition hover:-translate-y-0.5 hover:shadow-lg sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-bold">{s.title}</p>
                  <p className="flex items-center gap-1.5 text-xs text-zinc-500">
                    <CalendarClock className="h-3.5 w-3.5" /> {s.courseTitle} · {new Date(s.startTime).toLocaleString('vi-VN')}
                  </p>
                </div>
                <span className={`chip ${s.markedCount > 0 ? 'bg-mint-100 text-mint-700' : 'bg-zinc-100 text-zinc-500'}`}>
                  {s.markedCount > 0 ? `Đã điểm danh ${s.markedCount}` : 'Chưa điểm danh'}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
