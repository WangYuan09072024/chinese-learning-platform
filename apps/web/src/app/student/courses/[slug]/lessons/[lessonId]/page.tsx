import { redirect } from 'next/navigation';
import { getSession, getToken } from '@/lib/session';
import { apiFetch, ApiError } from '@/lib/api';
import { HomeworkSubmissionForm } from '@/components/HomeworkSubmissionForm';
import { TakeQuizForm } from '@/components/TakeQuizForm';

interface Submission {
  content: string | null;
  status: string;
  grade: number | null;
  feedback: string | null;
}

interface Homework {
  id: string;
  title: string;
  description: string | null;
  mySubmission: Submission | null;
}

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
}

interface Attempt {
  id: string;
  score: number;
}

interface Quiz {
  id: string;
  title: string;
  questions: QuizQuestion[];
  myAttempts: Attempt[];
}

interface Lesson {
  id: string;
  title: string;
  videoUrl: string | null;
  content: string | null;
  homework: Homework[];
  quizzes: Quiz[];
}

export default async function StudentLessonPage({ params }: { params: Promise<{ slug: string; lessonId: string }> }) {
  const { slug, lessonId } = await params;
  const session = await getSession();
  if (!session) redirect('/login');

  const token = await getToken();
  const revalidateTo = `/student/courses/${slug}/lessons/${lessonId}`;

  let lesson: Lesson;
  try {
    lesson = await apiFetch<Lesson>(`/lessons/${lessonId}`, { token });
  } catch (err) {
    if (err instanceof ApiError && err.status === 403) {
      return (
        <div className="flex flex-col items-center gap-3 p-12 text-center">
          <p className="text-lg font-medium">Bạn cần ghi danh khóa học để xem bài học này.</p>
          <p className="text-sm text-zinc-500">Liên hệ giáo viên để được ghi danh.</p>
        </div>
      );
    }
    throw err;
  }

  const homework = lesson.homework[0];
  const quiz = lesson.quizzes[0];
  const bestAttempt = quiz?.myAttempts[0];

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-semibold">{lesson.title}</h1>

      {lesson.videoUrl && (
        <div className="aspect-video w-full max-w-2xl overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
          <iframe src={lesson.videoUrl} className="h-full w-full" allowFullScreen />
        </div>
      )}
      {lesson.content && <p className="max-w-2xl whitespace-pre-wrap text-sm text-zinc-600 dark:text-zinc-300">{lesson.content}</p>}

      {homework && (
        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-medium">Bài tập: {homework.title}</h2>
          {homework.description && <p className="text-sm text-zinc-500">{homework.description}</p>}
          {homework.mySubmission ? (
            <div className="rounded-md border border-zinc-200 p-3 text-sm dark:border-zinc-800">
              <p className="text-zinc-600 dark:text-zinc-300">Bài đã nộp: {homework.mySubmission.content}</p>
              {homework.mySubmission.grade != null ? (
                <p className="mt-2 text-green-600">
                  Điểm: {homework.mySubmission.grade} {homework.mySubmission.feedback && `— ${homework.mySubmission.feedback}`}
                </p>
              ) : (
                <p className="mt-2 text-zinc-400">Đang chờ giáo viên chấm điểm.</p>
              )}
            </div>
          ) : (
            <HomeworkSubmissionForm revalidateTo={revalidateTo} homeworkId={homework.id} />
          )}
        </section>
      )}

      {quiz && (
        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-medium">Quiz: {quiz.title}</h2>
          {bestAttempt ? (
            <p className="text-sm font-medium">Bạn đã làm bài này. Điểm: {bestAttempt.score}</p>
          ) : (
            <TakeQuizForm revalidateTo={revalidateTo} quizId={quiz.id} questions={quiz.questions} />
          )}
        </section>
      )}
    </div>
  );
}
