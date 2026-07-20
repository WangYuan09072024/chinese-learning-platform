import { BookMarked } from 'lucide-react';
import { DictionaryManager } from '@/components/DictionaryManager';

export default function AdminDictionaryPage() {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000/api';

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-extrabold">
          <BookMarked className="h-6 w-6 text-brand-500" /> Quản lý từ điển
        </h1>
        <p className="text-sm text-zinc-500">Thêm, sửa và xóa các mục từ điển. Học viên tra cứu ở trang Từ điển.</p>
      </div>
      <DictionaryManager apiBaseUrl={apiBaseUrl} />
    </div>
  );
}
