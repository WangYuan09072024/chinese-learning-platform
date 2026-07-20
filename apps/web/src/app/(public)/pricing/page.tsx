import Link from 'next/link';
import { Check } from 'lucide-react';
import { getT } from '@/lib/i18n/server';

export default async function PricingPage() {
  const t = await getT();

  const plans = [
    { name: t('pricing.p1name'), price: t('pricing.p1price'), color: 'from-mint-400 to-mint-500', perks: [t('pricing.p1a'), t('pricing.p1b'), t('pricing.p1c')], highlight: false },
    { name: t('pricing.p2name'), price: t('pricing.p2price'), color: 'from-brand-400 to-brand-500', perks: [t('pricing.p2a'), t('pricing.p2b'), t('pricing.p2c'), t('pricing.p2d')], highlight: true },
    { name: t('pricing.p3name'), price: t('pricing.p3price'), color: 'from-sun-400 to-sun-500', perks: [t('pricing.p3a'), t('pricing.p3b'), t('pricing.p3c')], highlight: false },
  ];

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold sm:text-4xl">{t('pricing.title')}</h1>
        <p className="mt-2 text-zinc-500">{t('pricing.subtitle')}</p>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.name} className={`card flex flex-col p-6 ${plan.highlight ? 'ring-2 ring-brand-400' : ''}`}>
            {plan.highlight && <span className="chip mb-2 self-start bg-brand-100 text-brand-700">{t('pricing.popular')}</span>}
            <span className={`grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br ${plan.color} text-white`}>
              <Check className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-lg font-bold">{plan.name}</h3>
            <p className="mt-1 text-2xl font-extrabold">{plan.price}</p>
            <ul className="mt-4 flex flex-1 flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-300">
              {plan.perks.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-mint-500" /> {p}
                </li>
              ))}
            </ul>
            <Link href="/courses" className={`mt-5 ${plan.highlight ? 'btn-primary' : 'btn-ghost'}`}>
              {t('pricing.viewCourses')}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
