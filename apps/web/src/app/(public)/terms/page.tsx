import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';

export const metadata = { title: 'Điều khoản sử dụng · Yuan Yuan' };

export default function TermsPage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 p-6 sm:p-10">
      <Link href="/" className="flex w-fit items-center gap-1 text-sm text-brand-600 hover:underline">
        <ArrowLeft className="h-4 w-4" /> Về trang chủ
      </Link>
      <h1 className="flex items-center gap-2 text-3xl font-extrabold">
        <FileText className="h-7 w-7 text-brand-500" /> Điều khoản sử dụng
      </h1>
      <p className="text-sm text-zinc-500">Cập nhật lần cuối: {new Date().toLocaleDateString('vi-VN')}</p>

      <div className="prose-sm flex flex-col gap-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        <section>
          <h2 className="mb-1 text-lg font-bold text-zinc-900 dark:text-white">1. Giới thiệu</h2>
          <p>Chào mừng bạn đến với Yuan Yuan (“Nền tảng”) — website học tiếng Trung trực tuyến. Khi đăng ký và sử dụng Nền tảng, bạn đồng ý với các điều khoản dưới đây. Vui lòng đọc kỹ trước khi sử dụng.</p>
        </section>
        <section>
          <h2 className="mb-1 text-lg font-bold text-zinc-900 dark:text-white">2. Tài khoản</h2>
          <p>Bạn chịu trách nhiệm bảo mật thông tin đăng nhập của mình và mọi hoạt động diễn ra trong tài khoản. Vui lòng cung cấp thông tin chính xác khi đăng ký và thông báo cho chúng tôi nếu phát hiện truy cập trái phép.</p>
        </section>
        <section>
          <h2 className="mb-1 text-lg font-bold text-zinc-900 dark:text-white">3. Khóa học và học phí</h2>
          <p>Một số khóa học miễn phí, một số khóa học tính phí. Học phí, thời hạn truy cập và nội dung của mỗi khóa được hiển thị công khai trước khi bạn ghi danh. Sau khi thanh toán, bạn được quyền truy cập khóa học theo thời hạn quy định.</p>
        </section>
        <section>
          <h2 className="mb-1 text-lg font-bold text-zinc-900 dark:text-white">4. Chính sách hoàn phí</h2>
          <p>Bạn có thể yêu cầu hoàn phí trong vòng 7 ngày kể từ khi thanh toán nếu chưa hoàn thành quá 20% khóa học. Mọi yêu cầu hoàn phí xin gửi qua trang <Link href="/contact" className="text-brand-600 hover:underline">Liên hệ</Link>.</p>
        </section>
        <section>
          <h2 className="mb-1 text-lg font-bold text-zinc-900 dark:text-white">5. Quy tắc ứng xử</h2>
          <p>Bạn không được sao chép, phân phối lại nội dung khóa học; không đăng nội dung vi phạm pháp luật, xúc phạm người khác; không can thiệp vào hoạt động kỹ thuật của Nền tảng. Chúng tôi có quyền tạm khóa tài khoản vi phạm.</p>
        </section>
        <section>
          <h2 className="mb-1 text-lg font-bold text-zinc-900 dark:text-white">6. Sở hữu trí tuệ</h2>
          <p>Toàn bộ bài giảng, video, hình ảnh và tài liệu trên Nền tảng thuộc quyền sở hữu của Yuan Yuan hoặc đối tác. Bạn được sử dụng cho mục đích học tập cá nhân, không dùng cho mục đích thương mại.</p>
        </section>
        <section>
          <h2 className="mb-1 text-lg font-bold text-zinc-900 dark:text-white">7. Thay đổi điều khoản</h2>
          <p>Chúng tôi có thể cập nhật các điều khoản này. Thay đổi sẽ được thông báo trên Nền tảng. Việc tiếp tục sử dụng sau khi cập nhật đồng nghĩa với việc bạn chấp nhận điều khoản mới.</p>
        </section>
        <section>
          <h2 className="mb-1 text-lg font-bold text-zinc-900 dark:text-white">8. Liên hệ</h2>
          <p>Mọi thắc mắc về điều khoản, vui lòng liên hệ qua trang <Link href="/contact" className="text-brand-600 hover:underline">Liên hệ</Link>.</p>
        </section>
      </div>
    </div>
  );
}
