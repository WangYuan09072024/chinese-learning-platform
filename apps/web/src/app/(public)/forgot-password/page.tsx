import Link from 'next/link';
import { KeyRound } from 'lucide-react';
import { ForgotPasswordForm } from '@/components/ForgotPasswordForm';

export default function ForgotPasswordPage() {
  return (
    <div className="flex flex-1 items-center justify-center p-6">
      <div className="card w-full max-w-md p-8">
        <div className="mb-6 flex flex-col items-center gap-2 text-center">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-400 to-sun-400 text-white">
            <KeyRound className="h-6 w-6" />
          </span>
          <h1 className="text-2xl font-extrabold">Quên mật khẩu?</h1>
          <p className="text-sm text-zinc-500">Nhập email, chúng tôi sẽ gửi liên kết để bạn đặt lại mật khẩu.</p>
        </div>
        <ForgotPasswordForm />
        <p className="mt-5 text-center text-sm text-zinc-500">
          <Link href="/login" className="font-semibold text-brand-600 hover:underline">← Về trang đăng nhập</Link>
        </p>
      </div>
    </div>
  );
}
