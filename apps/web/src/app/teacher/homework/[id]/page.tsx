import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Clock } from 'lucide-react';
import { getToken } from '@/lib/session';
import { apiFetch } from '@/lib/api';
import { GradeSubmissionForm } from '@/components/GradeSubmissionForm';

interface Submission {
  id: string;
  content: string | null;
  fileUrl: string | null;
  status: 'SUBMITTED' | 'LATE' | 'GRADED';
  grade: number | null;
  feedback: string | null;
  submittedAt: string;
  student: { id: string; name: string; email: string };
}

const statusChip: Record<string, string> = {
  SUBMITTED: 'bg-sky-100 text-sky-700',
  LATE: 'bg-sun-100 text-sun-700',
  GRADED: 'bg-mint-100 text-mint-700',
};
const statusLabel: Record<string, string> = { SUBMITTED: 'Đã nộp', LATE: 'Nộp muộn', GRADED: 'Đã chấm' };

export default async function HomeworkGradingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const submissions = await apiFetch<Submission[]>(`/homework/${id}/submissions`, { token: await getToken() });
  const revalidateTo = `/teacher/homework/${id}`;

  return (
    <div className="flex flex-col gap-6">
      <Link href="/teacher/homework" className="flex w-fit items-center gap-1 text-sm text-brand-600 hover:underline">
        <ArrowLeft className="h-4 w-4" /> Tất cả bài tập
      </Link>

      <h1 className="text-2xl font-extrabold">Bài nộp ({submissions.length})</h1>

      {submissions.length === 0 ? (
        <div className="card p-8 text-center text-sm text-zinc-500">Chưa có học viên nào nộp bài.</div>
      ) : (
        <ul className="flex flex-col gap-4">
          {submissions.map((s) => (
            <li key={s.id} className="card flex flex-col gap-3 p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="font-bold">{s.student.name}</p>
                  <p className="text-xs text-zinc-400">{s.student.email} · nộp {new Date(s.submittedAt).toLocaleString('vi-VN')}</p>
                </div>
                <span className={`chip ${statusChip[s.status]}`}>
                  {s.status === 'GRADED' ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Clock className="h-3.5 w-3.5" />}
                  {statusLabel[s.status]}{s.status === 'GRADED' && s.grade != null ? ` · ${s.grade}đ` : ''}
                </span>
              </div>

              {s.content && (
                <div className="rounded-xl bg-brand-50/60 p-3 text-sm whitespace-pre-wrap dark:bg-white/5">{s.content}</div>
              )}
              {s.fileUrl && (
                <a href={s.fileUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-brand-600 underline">
                  Xem tệp đính kèm
                </a>
              )}
              {s.feedback && (
                <p className="text-sm text-zinc-500"><span className="font-semibold">Nhận xét:</span> {s.feedback}</p>
              )}

              <div className="border-t border-brand-100 pt-3 dark:border-white/10">
                <GradeSubmissionForm revalidateTo={revalidateTo} submissionId={s.id} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
