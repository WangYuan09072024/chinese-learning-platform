import { Settings, Info } from 'lucide-react';
import { getSession } from '@/lib/session';
import { ChangePasswordForm } from '@/components/ChangePasswordForm';

export default async function AdminSettingsPage() {
  const session = await getSession();

  const info = [
    { label: 'Tài khoản', value: session?.email ?? '—' },
    { label: 'Vai trò', value: (session?.roles ?? []).join(', ') },
    { label: 'Nền tảng', value: 'Yuan Yuan · Học tiếng Trung' },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-extrabold">
          <Settings className="h-6 w-6 text-brand-500" /> Cài đặt
        </h1>
        <p className="text-sm text-zinc-500">Quản lý tài khoản và bảo mật.</p>
      </div>

      <div className="card p-5">
        <h2 className="mb-3 flex items-center gap-2 font-bold"><Info className="h-5 w-5 text-brand-500" /> Thông tin tài khoản</h2>
        <dl className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-3">
          {info.map((i) => (
            <div key={i.label} className="rounded-xl bg-brand-50/60 p-3 dark:bg-white/5">
              <dt className="text-xs text-zinc-400">{i.label}</dt>
              <dd className="font-semibold break-words">{i.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <ChangePasswordForm />
    </div>
  );
}
