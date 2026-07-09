import { getToken } from '@/lib/session';
import { apiFetch } from '@/lib/api';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export default async function AdminContactPage() {
  const messages = await apiFetch<ContactMessage[]>('/contact', { token: await getToken() });

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Tin nhắn liên hệ</h1>
      {messages.length === 0 ? (
        <p className="text-sm text-zinc-500">Chưa có tin nhắn nào.</p>
      ) : (
        <ul className="flex flex-col gap-3">
          {messages.map((m) => (
            <li key={m.id} className="rounded-lg border border-zinc-200 p-4 text-sm dark:border-zinc-800">
              <div className="flex items-baseline justify-between gap-3">
                <p className="font-medium">
                  {m.name} <span className="font-normal text-zinc-500">({m.email})</span>
                </p>
                <span className="text-xs text-zinc-400">{new Date(m.createdAt).toLocaleString('vi-VN')}</span>
              </div>
              <p className="mt-2 whitespace-pre-wrap text-zinc-600 dark:text-zinc-300">{m.message}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
