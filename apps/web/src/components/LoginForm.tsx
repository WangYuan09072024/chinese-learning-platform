'use client';

import { useActionState } from 'react';
import { login } from '@/actions/auth';
import type { Locale } from '@/lib/i18n/config';
import { makeT } from '@/lib/i18n/client';

export function LoginForm({ locale }: { locale: Locale }) {
  const [state, action, pending] = useActionState(login, {});
  const t = makeT(locale);

  return (
    <form action={action} className="flex w-full flex-col gap-3">
      <input name="email" type="email" placeholder={t('auth.email')} required className="field" />
      <input name="password" type="password" placeholder={t('auth.password')} required className="field" />
      {state.error && <p className="text-sm font-medium text-brand-600">{state.error}</p>}
      <button type="submit" disabled={pending} className="btn-primary mt-1 py-3">
        {pending ? t('auth.loginPending') : t('auth.loginBtn')}
      </button>
    </form>
  );
}
