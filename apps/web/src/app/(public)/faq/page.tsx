import { getT } from '@/lib/i18n/server';

export default async function FaqPage() {
  const t = await getT();
  const items = [1, 2, 3, 4, 5].map((n) => ({ q: t(`faq.q${n}`), a: t(`faq.a${n}`) }));

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-6 px-6 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold sm:text-4xl">{t('faq.title')}</h1>
      </div>
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <div key={item.q} className="card p-5">
            <p className="font-bold">{item.q}</p>
            <p className="mt-1.5 text-sm text-zinc-500">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
