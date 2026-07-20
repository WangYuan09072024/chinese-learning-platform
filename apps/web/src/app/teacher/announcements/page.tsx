import { Megaphone, Trash2 } from 'lucide-react';
import { getToken } from '@/lib/session';
import { apiFetch } from '@/lib/api';
import { CreateAnnouncementForm } from '@/components/CreateAnnouncementForm';
import { deleteAnnouncement } from '@/actions/announcements';

interface TeacherClass {
  id: string;
  title: string;
}

interface TeacherAnnouncement {
  id: string;
  title: string;
  body: string;
  courseTitle: string;
  authorName: string;
  createdAt: string;
}

export default async function TeacherAnnouncementsPage() {
  const token = await getToken();
  const [classes, announcements] = await Promise.all([
    apiFetch<TeacherClass[]>('/teacher/classes', { token }),
    apiFetch<TeacherAnnouncement[]>('/teacher/announcements', { token }),
  ]);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-extrabold">
          <Megaphone className="h-6 w-6 text-brand-500" /> Thông báo
        </h1>
        <p className="text-sm text-zinc-500">Gửi thông báo tới học viên trong lớp — họ sẽ nhận được ở mục Thông báo.</p>
      </div>

      <CreateAnnouncementForm courses={classes.map((c) => ({ id: c.id, title: c.title }))} />

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-bold">Đã đăng ({announcements.length})</h2>
        {announcements.length === 0 ? (
          <p className="text-sm text-zinc-500">Chưa có thông báo nào.</p>
        ) : (
          <ul className="flex flex-col gap-3">
            {announcements.map((a) => (
              <li key={a.id} className="card flex flex-col gap-1 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-bold">{a.title}</p>
                    <p className="text-xs text-zinc-400">{a.courseTitle} · {a.authorName} · {new Date(a.createdAt).toLocaleString('vi-VN')}</p>
                  </div>
                  <form action={deleteAnnouncement.bind(null, a.id)}>
                    <button type="submit" className="text-zinc-400 hover:text-brand-600" aria-label="Xóa">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </form>
                </div>
                <p className="mt-1 whitespace-pre-wrap text-sm text-zinc-600 dark:text-zinc-300">{a.body}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
