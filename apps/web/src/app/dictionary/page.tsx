import { DictionarySearch } from '@/components/DictionarySearch';

export default function DictionaryPage() {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000/api';

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-6 p-8">
      <h1 className="text-2xl font-semibold">Từ điển tiếng Trung</h1>
      <DictionarySearch apiBaseUrl={apiBaseUrl} />
    </div>
  );
}
