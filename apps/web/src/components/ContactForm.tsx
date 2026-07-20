'use client';

import { useActionState } from 'react';
import { submitContactMessage } from '@/actions/contact';
import type { Locale } from '@/lib/i18n/config';
import { makeT } from '@/lib/i18n/client';

export function ContactForm({ locale }: { locale: Locale }) {
  const [state, formAction, pending] = useActionState(submitContactMessage, {});
  const t = makeT(locale);

  if (state.success) {
    return <p className="text-sm font-medium text-mint-600">{t('contact.thanks')}</p>;
  }

  return (
    <form action={formAction} className="flex flex-col gap-3">
      <input name="name" placeholder={t('contact.name')} required className="field" />
      <input name="email" type="email" placeholder={t('auth.email')} required className="field" />
      <textarea name="message" placeholder={t('contact.message')} required rows={5} className="field" />
      <button type="submit" disabled={pending} className="btn-primary mt-1 self-start py-3">
        {pending ? t('contact.sending') : t('contact.send')}
      </button>
      {state.error && <p className="text-sm font-medium text-brand-600">{state.error}</p>}
    </form>
  );
}
