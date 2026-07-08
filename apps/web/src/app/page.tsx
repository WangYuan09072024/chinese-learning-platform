import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 p-8 text-center">
      <h1 className="text-4xl font-bold">Yuan Yuan Chinese Learning Platform</h1>
      <p className="max-w-xl text-zinc-500">
        Nền tảng học tiếng Trung trực tuyến: video bài giảng, từ điển, AI hỗ trợ học tập, bài tập, quiz và theo dõi
        tiến độ — tất cả trong một hệ thống.
      </p>
      <div className="flex gap-4">
        <Link href="/register" className="rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white dark:bg-zinc-100 dark:text-zinc-900">
          Bắt đầu học
        </Link>
        <Link href="/login" className="rounded-md border border-zinc-300 px-5 py-2.5 text-sm font-medium dark:border-zinc-700">
          Đăng nhập
        </Link>
      </div>
    </div>
  );
}
