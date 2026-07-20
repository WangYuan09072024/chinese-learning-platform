import { KeyRound } from 'lucide-react';
import { ResetPasswordForm } from '@/components/ResetPasswordForm';

export default async function ResetPasswordPage({ searchParams }: { searchParams: Promise<{ token?: string }> }) {
  const { token } = await searchParams;

  return (
    <div className="flex flex-1 items-center justify-center p-6">
      <div className="card w-full max-w-md p-8">
        <div className="mb-6 flex flex-col items-center gap-2 text-center">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-400 to-sun-400 text-white">
            <KeyRound className="h-6 w-6" />
          </span>
          <h1 className="text-2xl font-extrabold">Đặt lại mật khẩu</h1>
          <p className="text-sm text-zinc-500">Nhập mật khẩu mới cho tài khoản của bạn.</p>
        </div>
        <ResetPasswordForm token={token ?? ''} />
      </div>
    </div>
  );
}
