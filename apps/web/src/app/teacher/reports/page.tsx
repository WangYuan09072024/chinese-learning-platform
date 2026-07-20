import { BarChart3, BookOpen, Users, CalendarDays, ClipboardList, CheckCircle2, Clock, HelpCircle } from 'lucide-react';
import { getToken } from '@/lib/session';
import { apiFetch } from '@/lib/api';

interface Stats {
  courseCount: number;
  studentCount: number;
  sessionCount: number;
  submissionCount: number;
  gradedCount: number;
  pendingGradingCount: number;
  quizCount: number;
}

export default async function TeacherReportsPage() {
  const s = await apiFetch<Stats>('/teacher/stats', { token: await getToken() });

  const gradedPct = s.submissionCount > 0 ? Math.round((s.gradedCount / s.submissionCount) * 100) : 0;

  const cards = [
    { label: 'Khóa học', value: s.courseCount, icon: BookOpen, color: 'text-brand-500' },
    { label: 'Học viên', value: s.studentCount, icon: Users, color: 'text-mint-500' },
    { label: 'Tiết học', value: s.sessionCount, icon: CalendarDays, color: 'text-grape-500' },
    { label: 'Bài kiểm tra', value: s.quizCount, icon: HelpCircle, color: 'text-sky-500' },
    { label: 'Bài nộp', value: s.submissionCount, icon: ClipboardList, color: 'text-sun-500' },
    { label: 'Đã chấm', value: s.gradedCount, icon: CheckCircle2, color: 'text-mint-500' },
    { label: 'Chờ chấm', value: s.pendingGradingCount, icon: Clock, color: 'text-brand-500' },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-extrabold">
          <BarChart3 className="h-6 w-6 text-brand-500" /> Báo cáo
        </h1>
        <p className="text-sm text-zinc-500">Tổng quan hoạt động giảng dạy của bạn.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {cards.map((c) => (
          <div key={c.label} className="card flex flex-col gap-1 p-5">
            <c.icon className={`h-6 w-6 ${c.color}`} />
            <span className="mt-2 text-3xl font-extrabold">{c.value}</span>
            <span className="text-xs text-zinc-500">{c.label}</span>
          </div>
        ))}
      </div>

      <div className="card p-5">
        <h2 className="mb-3 font-bold">Tỉ lệ chấm bài</h2>
        <div className="flex items-center gap-3">
          <div className="h-3 flex-1 overflow-hidden rounded-full bg-brand-100 dark:bg-white/10">
            <div className="h-full rounded-full bg-gradient-to-r from-mint-400 to-brand-500" style={{ width: `${gradedPct}%` }} />
          </div>
          <span className="text-sm font-semibold">{gradedPct}%</span>
        </div>
        <p className="mt-2 text-xs text-zinc-500">
          {s.gradedCount}/{s.submissionCount} bài nộp đã được chấm điểm.
        </p>
      </div>
    </div>
  );
}
