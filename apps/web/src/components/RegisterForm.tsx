'use client';

import { useActionState } from 'react';
import { register } from '@/actions/auth';
import type { Locale } from '@/lib/i18n/config';
import { makeT } from '@/lib/i18n/client';

export function RegisterForm({ locale }: { locale: Locale }) {
  const [state, action, pending] = useActionState(register, {});
  const t = makeT(locale);

  return (
    <form action={action} className="flex w-full flex-col gap-3">
      <input name="name" placeholder={t('auth.fullName')} required className="field" />
      <input name="email" type="email" placeholder={t('auth.email')} required className="field" />
      <input name="password" type="password" placeholder={t('auth.passwordHint')} required minLength={8} className="field" />
      {state.error && <p className="text-sm font-medium text-brand-600">{state.error}</p>}
      <button type="submit" disabled={pending} className="btn-primary mt-1 py-3">
        {pending ? t('auth.registerPending') : t('auth.registerBtn')}
      </button>
    </form>
  );
}
