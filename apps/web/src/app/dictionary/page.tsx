import Link from 'next/link';
import { ArrowLeft, BookMarked } from 'lucide-react';
import { DictionarySearch } from '@/components/DictionarySearch';

export default function DictionaryPage() {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000/api';

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 p-6 sm:p-8">
      <Link href="/" className="flex w-fit items-center gap-1 text-sm text-brand-600 hover:underline">
        <ArrowLeft className="h-4 w-4" /> Về trang chủ
      </Link>
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-extrabold">
          <BookMarked className="h-6 w-6 text-brand-500" /> Từ điển tiếng Trung
        </h1>
        <p className="text-sm text-zinc-500">Tra cứu chữ Hán, pinyin và nghĩa tiếng Việt.</p>
      </div>
      <DictionarySearch apiBaseUrl={apiBaseUrl} />
    </div>
  );
}
