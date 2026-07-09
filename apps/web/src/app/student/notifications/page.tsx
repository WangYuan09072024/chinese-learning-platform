import { getToken } from '@/lib/session';
import { apiFetch } from '@/lib/api';
import { markNotificationRead } from '@/actions/notifications';

interface Notification {
  id: string;
  type: string;
  title: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

export default async function StudentNotificationsPage() {
  const notifications = await apiFetch<Notification[]>('/notifications/me', { token: await getToken() });

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Thông báo</h1>
      {notifications.length === 0 ? (
        <p className="text-sm text-zinc-500">Chưa có thông báo nào.</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {notifications.map((n) => (
            <li
              key={n.id}
              className={`rounded-lg border p-4 text-sm ${n.isRead ? 'border-zinc-200 dark:border-zinc-800' : 'border-zinc-400 bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-900'}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-medium">{n.title}</p>
                  <p className="mt-1 text-zinc-600 dark:text-zinc-300">{n.message}</p>
                  <p className="mt-1 text-xs text-zinc-400">{new Date(n.createdAt).toLocaleString('vi-VN')}</p>
                </div>
                {!n.isRead && (
                  <form action={markNotificationRead.bind(null, '/student/notifications', n.id)}>
                    <button type="submit" className="whitespace-nowrap text-xs text-zinc-500 hover:underline">
                      Đánh dấu đã đọc
                    </button>
                  </form>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
