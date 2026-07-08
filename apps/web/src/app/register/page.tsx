import Link from 'next/link';
import { RegisterForm } from '@/components/RegisterForm';

export default function RegisterPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-2xl font-semibold">Đăng ký</h1>
      <RegisterForm />
      <p className="text-sm text-zinc-500">
        Đã có tài khoản?{' '}
        <Link href="/login" className="font-medium underline">
          Đăng nhập
        </Link>
      </p>
    </div>
  );
}
