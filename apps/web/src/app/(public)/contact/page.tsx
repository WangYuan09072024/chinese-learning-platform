import { Mail } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { getLocale, getT } from '@/lib/i18n/server';

export default async function ContactPage() {
  const [locale, t] = await Promise.all([getLocale(), getT()]);
  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-6 px-6 py-12">
      <div className="text-center">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-400 to-sun-400 text-white">
          <Mail className="h-6 w-6" />
        </span>
        <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">{t('contact.title')}</h1>
        <p className="mt-2 text-zinc-500">{t('contact.subtitle')}</p>
      </div>
      <div className="card p-6">
        <ContactForm locale={locale} />
      </div>
    </div>
  );
}
