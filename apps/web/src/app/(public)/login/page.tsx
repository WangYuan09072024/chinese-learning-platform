import Link from 'next/link';
import { Flower2 } from 'lucide-react';
import { LoginForm } from '@/components/LoginForm';
import { getLocale, getT } from '@/lib/i18n/server';

export default async function LoginPage() {
  const [locale, t] = await Promise.all([getLocale(), getT()]);
  return (
    <div className="flex flex-1 items-center justify-center p-6">
      <div className="card w-full max-w-md p-8">
        <div className="mb-6 flex flex-col items-center gap-2 text-center">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-400 to-sun-400 text-white">
            <Flower2 className="h-6 w-6" />
          </span>
          <h1 className="text-2xl font-extrabold">{t('auth.loginTitle')}</h1>
          <p className="text-sm text-zinc-500">{t('auth.loginSubtitle')}</p>
        </div>
        <LoginForm locale={locale} />
        <p className="mt-3 text-center text-sm">
          <Link href="/forgot-password" className="text-brand-600 hover:underline">Quên mật khẩu?</Link>
        </p>
        <p className="mt-2 text-center text-sm text-zinc-500">
          {t('auth.noAccount')}{' '}
          <Link href="/register" className="font-semibold text-brand-600 hover:underline">
            {t('auth.registerNow')}
          </Link>
        </p>
      </div>
    </div>
  );
}
