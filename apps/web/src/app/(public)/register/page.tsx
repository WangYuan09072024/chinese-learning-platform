import Link from 'next/link';
import { Flower2 } from 'lucide-react';
import { RegisterForm } from '@/components/RegisterForm';
import { getLocale, getT } from '@/lib/i18n/server';

export default async function RegisterPage() {
  const [locale, t] = await Promise.all([getLocale(), getT()]);
  return (
    <div className="flex flex-1 items-center justify-center p-6">
      <div className="card w-full max-w-md p-8">
        <div className="mb-6 flex flex-col items-center gap-2 text-center">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-mint-400 to-sun-400 text-white">
            <Flower2 className="h-6 w-6" />
          </span>
          <h1 className="text-2xl font-extrabold">{t('auth.registerTitle')}</h1>
          <p className="text-sm text-zinc-500">{t('auth.registerSubtitle')}</p>
        </div>
        <RegisterForm locale={locale} />
        <p className="mt-5 text-center text-sm text-zinc-500">
          {t('auth.haveAccount')}{' '}
          <Link href="/login" className="font-semibold text-brand-600 hover:underline">
            {t('auth.loginBtn')}
          </Link>
        </p>
      </div>
    </div>
  );
}
