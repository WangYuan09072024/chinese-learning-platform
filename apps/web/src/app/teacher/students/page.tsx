import { Users } from 'lucide-react';
import { getToken } from '@/lib/session';
import { apiFetch } from '@/lib/api';

interface TeacherStudent {
  enrollmentId: string;
  studentId: string;
  name: string;
  email: string;
  courseTitle: string;
  courseSlug: string;
  progress: number;
  status: string;
  enrolledAt: string;
}

export default async function TeacherStudentsPage() {
  const students = await apiFetch<TeacherStudent[]>('/teacher/students', { token: await getToken() });

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-extrabold">
          <Users className="h-6 w-6 text-brand-500" /> Học viên
        </h1>
        <p className="text-sm text-zinc-500">Toàn bộ học viên đang ghi danh các lớp của bạn ({students.length}).</p>
      </div>

      {students.length === 0 ? (
        <div className="card p-8 text-center text-sm text-zinc-500">Chưa có học viên nào ghi danh.</div>
      ) : (
        <div className="card overflow-x-auto p-0">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="border-b border-brand-100 text-left text-xs uppercase tracking-wide text-zinc-400 dark:border-white/10">
                <th className="px-4 py-3 font-semibold">Học viên</th>
                <th className="px-4 py-3 font-semibold">Khóa học</th>
                <th className="px-4 py-3 font-semibold">Tiến độ</th>
                <th className="px-4 py-3 font-semibold">Ghi danh</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s.enrollmentId} className="border-b border-brand-50 last:border-0 hover:bg-brand-50/50 dark:border-white/5 dark:hover:bg-white/5">
                  <td className="px-4 py-3">
                    <div className="font-semibold">{s.name}</div>
                    <div className="text-xs text-zinc-400">{s.email}</div>
                  </td>
                  <td className="px-4 py-3">{s.courseTitle}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-20 overflow-hidden rounded-full bg-brand-100 dark:bg-white/10">
                        <div className="h-full rounded-full bg-gradient-to-r from-mint-400 to-brand-500" style={{ width: `${s.progress}%` }} />
                      </div>
                      <span className="text-xs text-zinc-500">{s.progress}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-xs text-zinc-400">
                    {new Date(s.enrolledAt).toLocaleDateString('vi-VN')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
