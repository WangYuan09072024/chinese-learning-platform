import { HelpCircle, ListChecks, Users } from 'lucide-react';
import { getToken } from '@/lib/session';
import { apiFetch } from '@/lib/api';

interface TeacherQuiz {
  id: string;
  title: string;
  lessonTitle: string;
  courseTitle: string;
  courseSlug: string;
  questionCount: number;
  attemptCount: number;
}

export default async function TeacherQuizPage() {
  const quizzes = await apiFetch<TeacherQuiz[]>('/teacher/quizzes', { token: await getToken() });

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-extrabold">
          <HelpCircle className="h-6 w-6 text-brand-500" /> Bài kiểm tra
        </h1>
        <p className="text-sm text-zinc-500">Các bài quiz trong lớp của bạn và số lượt làm bài.</p>
      </div>

      {quizzes.length === 0 ? (
        <div className="card p-8 text-center text-sm text-zinc-500">
          Chưa có bài kiểm tra nào. Vào một bài học trong lớp để tạo quiz.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {quizzes.map((q) => (
            <div key={q.id} className="card flex flex-col gap-2 p-5">
              <h2 className="text-lg font-bold">{q.title}</h2>
              <p className="text-xs text-zinc-500">{q.courseTitle} — {q.lessonTitle}</p>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-zinc-500">
                <span className="flex items-center gap-1.5"><ListChecks className="h-4 w-4 text-grape-400" /> {q.questionCount} câu hỏi</span>
                <span className="flex items-center gap-1.5"><Users className="h-4 w-4 text-brand-400" /> {q.attemptCount} lượt làm</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
