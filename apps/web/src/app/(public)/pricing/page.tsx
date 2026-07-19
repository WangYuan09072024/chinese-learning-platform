import Link from 'next/link';
import { Check } from 'lucide-react';

const PLANS = [
  {
    name: 'Học thử',
    price: 'Miễn phí',
    color: 'from-mint-400 to-mint-500',
    perks: ['Xem bài học "học thử"', 'Tra từ điển', 'Tạo flashcards cá nhân'],
    highlight: false,
  },
  {
    name: 'Trọn khóa',
    price: 'Theo khóa học',
    color: 'from-brand-400 to-brand-500',
    perks: ['Toàn bộ bài học & video', 'Bài tập & quiz', 'Giáo viên chấm bài', 'Theo dõi tiến độ'],
    highlight: true,
  },
  {
    name: 'Nhóm / Trung tâm',
    price: 'Liên hệ',
    color: 'from-sun-400 to-sun-500',
    perks: ['Ưu đãi cho nhóm', 'Quản lý lớp học', 'Hỗ trợ riêng'],
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold sm:text-4xl">Bảng giá</h1>
        <p className="mt-2 text-zinc-500">Học phí theo từng khóa học. Xem chi tiết giá tại trang mỗi khóa.</p>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`card flex flex-col p-6 ${plan.highlight ? 'ring-2 ring-brand-400' : ''}`}
          >
            {plan.highlight && <span className="chip mb-2 self-start bg-brand-100 text-brand-700">Phổ biến</span>}
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
              Xem khóa học
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
