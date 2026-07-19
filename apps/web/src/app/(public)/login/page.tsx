import Link from 'next/link';
import { Flower2 } from 'lucide-react';
import { LoginForm } from '@/components/LoginForm';

export default function LoginPage() {
  return (
    <div className="flex flex-1 items-center justify-center p-6">
      <div className="card w-full max-w-md p-8">
        <div className="mb-6 flex flex-col items-center gap-2 text-center">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-400 to-sun-400 text-white">
            <Flower2 className="h-6 w-6" />
          </span>
          <h1 className="text-2xl font-extrabold">Chào mừng trở lại!</h1>
          <p className="text-sm text-zinc-500">Đăng nhập để tiếp tục học tiếng Trung.</p>
        </div>
        <LoginForm />
        <p className="mt-5 text-center text-sm text-zinc-500">
          Chưa có tài khoản?{' '}
          <Link href="/register" className="font-semibold text-brand-600 hover:underline">
            Đăng ký ngay
          </Link>
        </p>
      </div>
    </div>
  );
}
