import { BarChart3, Users, GraduationCap, Shield, BookOpen, CheckCircle2, CalendarDays, ClipboardList, HelpCircle, Megaphone, Mail, UserCheck } from 'lucide-react';
import { getToken } from '@/lib/session';
import { apiFetch } from '@/lib/api';

interface AdminStats {
  userCount: number;
  studentCount: number;
  teacherCount: number;
  adminCount: number;
  courseCount: number;
  publishedCourseCount: number;
  enrollmentCount: number;
  sessionCount: number;
  submissionCount: number;
  gradedCount: number;
  pendingGradingCount: number;
  quizCount: number;
  announcementCount: number;
  contactMessageCount: number;
}

export default async function AdminReportsPage() {
  const s = await apiFetch<AdminStats>('/admin/stats', { token: await getToken() });

  const groups = [
    {
      title: 'Người dùng',
      cards: [
        { label: 'Tổng người dùng', value: s.userCount, icon: Users, color: 'text-brand-500' },
        { label: 'Học viên', value: s.studentCount, icon: GraduationCap, color: 'text-mint-500' },
        { label: 'Giáo viên', value: s.teacherCount, icon: UserCheck, color: 'text-grape-500' },
        { label: 'Quản trị', value: s.adminCount, icon: Shield, color: 'text-sun-500' },
      ],
    },
    {
      title: 'Học tập',
      cards: [
        { label: 'Khóa học', value: s.courseCount, icon: BookOpen, color: 'text-brand-500' },
        { label: 'Đang mở', value: s.publishedCourseCount, icon: CheckCircle2, color: 'text-mint-500' },
        { label: 'Lượt ghi danh', value: s.enrollmentCount, icon: Users, color: 'text-sky-500' },
        { label: 'Tiết học', value: s.sessionCount, icon: CalendarDays, color: 'text-grape-500' },
      ],
    },
    {
      title: 'Bài tập & Quiz',
      cards: [
        { label: 'Bài nộp', value: s.submissionCount, icon: ClipboardList, color: 'text-sun-500' },
        { label: 'Đã chấm', value: s.gradedCount, icon: CheckCircle2, color: 'text-mint-500' },
        { label: 'Bài kiểm tra', value: s.quizCount, icon: HelpCircle, color: 'text-sky-500' },
        { label: 'Thông báo', value: s.announcementCount, icon: Megaphone, color: 'text-brand-500' },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-extrabold">
          <BarChart3 className="h-6 w-6 text-brand-500" /> Báo cáo hệ thống
        </h1>
        <p className="text-sm text-zinc-500">Tổng quan toàn bộ nền tảng Yuan Yuan.</p>
      </div>

      {groups.map((g) => (
        <section key={g.title} className="flex flex-col gap-3">
          <h2 className="text-sm font-bold uppercase tracking-wide text-zinc-400">{g.title}</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {g.cards.map((c) => (
              <div key={c.label} className="card flex flex-col gap-1 p-5">
                <c.icon className={`h-6 w-6 ${c.color}`} />
                <span className="mt-2 text-3xl font-extrabold">{c.value}</span>
                <span className="text-xs text-zinc-500">{c.label}</span>
              </div>
            ))}
          </div>
        </section>
      ))}

      {s.contactMessageCount > 0 && (
        <div className="card flex items-center gap-3 p-4 text-sm">
          <Mail className="h-5 w-5 text-brand-500" />
          <span>Có <strong>{s.contactMessageCount}</strong> tin nhắn liên hệ. Xem ở mục Liên hệ.</span>
        </div>
      )}
    </div>
  );
}
