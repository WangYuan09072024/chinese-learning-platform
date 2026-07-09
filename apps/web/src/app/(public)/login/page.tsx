import Link from 'next/link';
import { LoginForm } from '@/components/LoginForm';

export default function LoginPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-2xl font-semibold">Đăng nhập</h1>
      <LoginForm />
      <p className="text-sm text-zinc-500">
        Chưa có tài khoản?{' '}
        <Link href="/register" className="font-medium underline">
          Đăng ký
        </Link>
      </p>
    </div>
  );
}
