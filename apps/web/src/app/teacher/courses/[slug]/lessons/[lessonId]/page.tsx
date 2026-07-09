import { redirect } from 'next/navigation';
import { getSession, getToken } from '@/lib/session';
import { apiFetch } from '@/lib/api';
import { isContentStaff } from '@/lib/roles';
import { CreateHomeworkForm } from '@/components/CreateHomeworkForm';
import { GradeSubmissionForm } from '@/components/GradeSubmissionForm';
import { CreateQuizForm } from '@/components/CreateQuizForm';

interface Homework {
  id: string;
  title: string;
  description: string | null;
}

interface Submission {
  id: string;
  content: string | null;
  status: string;
  grade: number | null;
  feedback: string | null;
  student: { id: string; name: string; email: string };
}

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string | null;
}

interface Quiz {
  id: string;
  title: string;
  questions: QuizQuestion[];
}

interface Attempt {
  id: string;
  score: number;
  student: { id: string; name: string; email: string };
}

interface Lesson {
  id: string;
  title: string;
  videoUrl: string | null;
  content: string | null;
  homework: Homework[];
  quizzes: Quiz[];
}

export default async function TeacherLessonPage({ params }: { params: Promise<{ slug: string; lessonId: string }> }) {
  const { slug, lessonId } = await params;
  const session = await getSession();
  if (!session) redirect('/login');
  const staff = isContentStaff(session.roles);

  const token = await getToken();
  const lesson = await apiFetch<Lesson>(`/lessons/${lessonId}`, { token });
  const revalidateTo = `/teacher/courses/${slug}/lessons/${lessonId}`;

  const homework = lesson.homework[0];
  const submissions = homework
    ? await apiFetch<Submission[]>(`/homework/${homework.id}/submissions`, { token })
    : [];

  const quiz = lesson.quizzes[0];
  const attempts = quiz ? await apiFetch<Attempt[]>(`/quiz/${quiz.id}/attempts`, { token }) : [];

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-semibold">{lesson.title}</h1>

      {lesson.videoUrl && (
        <div className="aspect-video w-full max-w-2xl overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
          <iframe src={lesson.videoUrl} className="h-full w-full" allowFullScreen />
        </div>
      )}
      {lesson.content && <p className="max-w-2xl whitespace-pre-wrap text-sm text-zinc-600 dark:text-zinc-300">{lesson.content}</p>}

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-medium">Bài tập</h2>
        {!homework ? (
          <CreateHomeworkForm revalidateTo={revalidateTo} lessonId={lessonId} />
        ) : (
          <div className="flex flex-col gap-3">
            <p className="font-medium">{homework.title}</p>
            {submissions.length === 0 ? (
              <p className="text-sm text-zinc-500">Chưa có học viên nộp bài.</p>
            ) : (
              submissions.map((s) => (
                <div key={s.id} className="rounded-md border border-zinc-200 p-3 text-sm dark:border-zinc-800">
                  <p className="font-medium">
                    {s.student.name} <span className="text-zinc-400">({s.student.email})</span>
                  </p>
                  <p className="mt-1 text-zinc-600 dark:text-zinc-300">{s.content}</p>
                  {s.grade != null ? (
                    <p className="mt-2 text-green-600">
                      Điểm: {s.grade} {s.feedback && `— ${s.feedback}`}
                    </p>
                  ) : (
                    <div className="mt-2">
                      <GradeSubmissionForm revalidateTo={revalidateTo} submissionId={s.id} />
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        )}
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-medium">Quiz</h2>
        {!quiz ? (
          staff ? (
            <CreateQuizForm revalidateTo={revalidateTo} lessonId={lessonId} />
          ) : (
            <p className="text-sm text-zinc-500">Bài học này chưa có quiz.</p>
          )
        ) : (
          <div className="flex flex-col gap-3">
            <p className="font-medium">{quiz.title}</p>
            <p className="text-sm text-zinc-500">{quiz.questions.length} câu hỏi</p>
            <div>
              <h3 className="mb-2 text-sm font-medium">Kết quả học viên</h3>
              {attempts.length === 0 ? (
                <p className="text-sm text-zinc-500">Chưa có học viên làm bài.</p>
              ) : (
                <ul className="flex flex-col gap-1 text-sm">
                  {attempts.map((a) => (
                    <li key={a.id}>
                      {a.student.name}: {a.score} điểm
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
