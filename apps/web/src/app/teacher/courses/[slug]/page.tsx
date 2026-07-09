import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { getSession, getToken } from '@/lib/session';
import { apiFetch, ApiError } from '@/lib/api';
import { isContentStaff } from '@/lib/roles';
import { CreateChapterForm } from '@/components/CreateChapterForm';
import { CreateLessonForm } from '@/components/CreateLessonForm';
import { EnrollStudentForm } from '@/components/EnrollStudentForm';
import { AssignTeacherForm } from '@/components/AssignTeacherForm';

interface LessonSummary {
  id: string;
  title: string;
  order: number;
  isFreePreview: boolean;
}

interface Chapter {
  id: string;
  title: string;
  order: number;
  lessons: LessonSummary[];
}

interface Course {
  id: string;
  title: string;
  slug: string;
  chapters: Chapter[];
}

interface Enrollment {
  id: string;
  student: { id: string; name: string; email: string };
  enrolledAt: string;
}

interface TeacherAssignment {
  id: string;
  teacher: { id: string; name: string; email: string };
}

export default async function TeacherCourseManagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const session = await getSession();
  if (!session) redirect('/login');

  const course = await apiFetch<Course | null>(`/courses/${slug}`);
  if (!course) notFound();

  const staff = isContentStaff(session.roles);
  const token = await getToken();

  let students: Enrollment[];
  try {
    students = await apiFetch<Enrollment[]>(`/courses/${course.id}/students`, { token });
  } catch (err) {
    if (err instanceof ApiError && err.status === 403) {
      return (
        <div className="flex flex-col items-center gap-3 p-12 text-center">
          <p className="text-lg font-medium">Bạn chưa được chỉ định dạy khóa học này.</p>
          <p className="text-sm text-zinc-500">Liên hệ Admin để được gán vào khóa học.</p>
        </div>
      );
    }
    throw err;
  }

  const teachers = staff ? await apiFetch<TeacherAssignment[]>(`/courses/${course.id}/teachers`, { token }) : [];

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-semibold">{course.title}</h1>
        <p className="text-sm text-zinc-500">
          {staff ? 'Quản lý nội dung, giáo viên và học viên của khóa học' : 'Dạy học, giao bài tập và chấm điểm'}
        </p>
      </div>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-medium">Nội dung khóa học</h2>
        {course.chapters.map((chapter) => (
          <div key={chapter.id} className="flex flex-col gap-3 rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
            <h3 className="font-medium">{chapter.title}</h3>
            <ul className="flex flex-col gap-1 pl-4 text-sm">
              {chapter.lessons.map((lesson) => (
                <li key={lesson.id} className="list-disc">
                  <Link href={`/teacher/courses/${slug}/lessons/${lesson.id}`} className="hover:underline">
                    {lesson.title}
                  </Link>
                  {lesson.isFreePreview && <span className="ml-2 text-xs text-zinc-400">(học thử)</span>}
                </li>
              ))}
            </ul>
            {staff && <CreateLessonForm courseSlug={slug} chapterId={chapter.id} nextOrder={chapter.lessons.length} />}
          </div>
        ))}
        {staff && <CreateChapterForm courseSlug={slug} courseId={course.id} nextOrder={course.chapters.length} />}
      </section>

      {staff && (
        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-medium">Giáo viên phụ trách ({teachers.length})</h2>
          <ul className="flex flex-col gap-2 text-sm">
            {teachers.map((t) => (
              <li key={t.id} className="rounded-md border border-zinc-200 px-3 py-2 dark:border-zinc-800">
                {t.teacher.name} <span className="text-zinc-400">({t.teacher.email})</span>
              </li>
            ))}
          </ul>
          <AssignTeacherForm courseSlug={slug} courseId={course.id} />
        </section>
      )}

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-medium">Học viên đã ghi danh ({students.length})</h2>
        <ul className="flex flex-col gap-2 text-sm">
          {students.map((e) => (
            <li key={e.id} className="rounded-md border border-zinc-200 px-3 py-2 dark:border-zinc-800">
              {e.student.name} <span className="text-zinc-400">({e.student.email})</span>
            </li>
          ))}
        </ul>
        <EnrollStudentForm courseSlug={slug} courseId={course.id} />
      </section>
    </div>
  );
}
