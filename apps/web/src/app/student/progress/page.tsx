import Link from 'next/link';
import { getToken } from '@/lib/session';
import { apiFetch } from '@/lib/api';

interface CourseProgress {
  courseId: string;
  courseTitle: string;
  courseSlug: string;
  totalLessons: number;
  completedLessons: number;
  percent: number;
}

interface Progress {
  courses: CourseProgress[];
  totalHomeworkSubmitted: number;
  totalHomeworkGraded: number;
  averageHomeworkGrade: number | null;
  totalQuizAttempts: number;
  averageQuizScore: number | null;
}

export default async function StudentProgressPage() {
  const progress = await apiFetch<Progress>('/progress/me', { token: await getToken() });

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-semibold">Tiến độ học tập</h1>

      <section className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
          <div className="text-xs text-zinc-500">Bài tập đã nộp</div>
          <div className="text-2xl font-semibold">{progress.totalHomeworkSubmitted}</div>
        </div>
        <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
          <div className="text-xs text-zinc-500">Điểm TB bài tập</div>
          <div className="text-2xl font-semibold">{progress.averageHomeworkGrade ?? '—'}</div>
        </div>
        <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
          <div className="text-xs text-zinc-500">Quiz đã làm</div>
          <div className="text-2xl font-semibold">{progress.totalQuizAttempts}</div>
        </div>
        <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
          <div className="text-xs text-zinc-500">Điểm TB quiz</div>
          <div className="text-2xl font-semibold">{progress.averageQuizScore ?? '—'}</div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-medium">Tiến độ theo khóa học</h2>
        {progress.courses.length === 0 ? (
          <p className="text-sm text-zinc-500">Bạn chưa được ghi danh vào khóa học nào.</p>
        ) : (
          progress.courses.map((c) => (
            <Link
              key={c.courseId}
              href={`/student/courses/${c.courseSlug}`}
              className="rounded-lg border border-zinc-200 p-4 hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{c.courseTitle}</span>
                <span className="text-sm text-zinc-500">
                  {c.completedLessons}/{c.totalLessons} bài học
                </span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-zinc-100 dark:bg-zinc-800">
                <div className="h-2 rounded-full bg-zinc-900 dark:bg-zinc-100" style={{ width: `${c.percent}%` }} />
              </div>
            </Link>
          ))
        )}
      </section>
    </div>
  );
}
