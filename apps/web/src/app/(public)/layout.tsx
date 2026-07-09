import Link from 'next/link';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 flex-col">
      <header className="flex items-center justify-between border-b border-zinc-200 px-6 py-4 dark:border-zinc-800">
        <Link href="/" className="font-semibold">
          Yuan Yuan
        </Link>
        <nav className="flex items-center gap-5 text-sm">
          <Link href="/courses" className="hover:underline">
            Khóa học
          </Link>
          <Link href="/pricing" className="hover:underline">
            Bảng giá
          </Link>
          <Link href="/faq" className="hover:underline">
            FAQ
          </Link>
          <Link href="/contact" className="hover:underline">
            Liên hệ
          </Link>
          <Link href="/dictionary" className="hover:underline">
            Từ điển
          </Link>
          <Link href="/login" className="hover:underline">
            Đăng nhập
          </Link>
          <Link
            href="/register"
            className="rounded-md bg-zinc-900 px-3 py-1.5 font-medium text-white dark:bg-zinc-100 dark:text-zinc-900"
          >
            Đăng ký
          </Link>
        </nav>
      </header>
      <main className="flex flex-1 flex-col">{children}</main>
    </div>
  );
}
