import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { getSession, getToken } from '@/lib/session';
import { apiFetch } from '@/lib/api';
import { CreateChapterForm } from '@/components/CreateChapterForm';
import { CreateLessonForm } from '@/components/CreateLessonForm';
import { EnrollStudentForm } from '@/components/EnrollStudentForm';

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
  teacherId: string;
  chapters: Chapter[];
}

interface Enrollment {
  id: string;
  student: { id: string; name: string; email: string };
  enrolledAt: string;
}

const STAFF_ROLES = ['CONTENT_MANAGER', 'ADMIN', 'SUPER_ADMIN'];

export default async function TeacherCourseManagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const session = await getSession();
  if (!session) redirect('/login');

  const course = await apiFetch<Course | null>(`/courses/${slug}`);
  if (!course) notFound();

  const isOwner = course.teacherId === session.userId;
  const isStaff = session.roles.some((r) => STAFF_ROLES.includes(r));
  if (!isOwner && !isStaff) redirect('/teacher/dashboard');

  const students = await apiFetch<Enrollment[]>(`/courses/${course.id}/students`, { token: await getToken() });

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-semibold">{course.title}</h1>
        <p className="text-sm text-zinc-500">Quản lý nội dung và học viên của khóa học</p>
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
            <CreateLessonForm courseSlug={slug} chapterId={chapter.id} nextOrder={chapter.lessons.length} />
          </div>
        ))}
        <CreateChapterForm courseSlug={slug} courseId={course.id} nextOrder={course.chapters.length} />
      </section>

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
