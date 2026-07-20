import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export const metadata = { title: 'Chính sách bảo mật · Yuan Yuan' };

export default function PrivacyPage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 p-6 sm:p-10">
      <Link href="/" className="flex w-fit items-center gap-1 text-sm text-brand-600 hover:underline">
        <ArrowLeft className="h-4 w-4" /> Về trang chủ
      </Link>
      <h1 className="flex items-center gap-2 text-3xl font-extrabold">
        <ShieldCheck className="h-7 w-7 text-brand-500" /> Chính sách bảo mật
      </h1>
      <p className="text-sm text-zinc-500">Cập nhật lần cuối: {new Date().toLocaleDateString('vi-VN')}</p>

      <div className="flex flex-col gap-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        <section>
          <h2 className="mb-1 text-lg font-bold text-zinc-900 dark:text-white">1. Thông tin chúng tôi thu thập</h2>
          <p>Chúng tôi thu thập: họ tên, email, số điện thoại (nếu bạn cung cấp) khi đăng ký; dữ liệu học tập (tiến độ, bài tập, điểm số, điểm danh); và thông tin thanh toán khi bạn mua khóa học. Chúng tôi không lưu trữ số thẻ ngân hàng — việc này do cổng thanh toán xử lý.</p>
        </section>
        <section>
          <h2 className="mb-1 text-lg font-bold text-zinc-900 dark:text-white">2. Mục đích sử dụng</h2>
          <p>Dữ liệu được dùng để: cung cấp và cá nhân hóa việc học; giáo viên chấm bài, điểm danh, hỗ trợ bạn; gửi thông báo về lớp học, bài tập; xử lý thanh toán; và cải thiện chất lượng Nền tảng.</p>
        </section>
        <section>
          <h2 className="mb-1 text-lg font-bold text-zinc-900 dark:text-white">3. Chia sẻ dữ liệu</h2>
          <p>Chúng tôi không bán dữ liệu của bạn. Dữ liệu học tập chỉ được chia sẻ với giáo viên phụ trách lớp của bạn và quản trị viên. Chúng tôi có thể dùng nhà cung cấp dịch vụ (lưu trữ, email, thanh toán) và chỉ chia sẻ dữ liệu tối thiểu cần thiết để họ phục vụ bạn.</p>
        </section>
        <section>
          <h2 className="mb-1 text-lg font-bold text-zinc-900 dark:text-white">4. Bảo mật</h2>
          <p>Mật khẩu được mã hóa (hash) — chúng tôi không thể xem mật khẩu của bạn. Dữ liệu truyền qua kết nối được mã hóa HTTPS. Dù vậy, không hệ thống nào an toàn tuyệt đối, nên hãy dùng mật khẩu mạnh và bảo mật tài khoản.</p>
        </section>
        <section>
          <h2 className="mb-1 text-lg font-bold text-zinc-900 dark:text-white">5. Cookie</h2>
          <p>Chúng tôi dùng cookie cần thiết để duy trì đăng nhập và ghi nhớ ngôn ngữ hiển thị. Nền tảng không dùng cookie theo dõi quảng cáo.</p>
        </section>
        <section>
          <h2 className="mb-1 text-lg font-bold text-zinc-900 dark:text-white">6. Quyền của bạn</h2>
          <p>Bạn có quyền xem, chỉnh sửa thông tin cá nhân (trong trang Hồ sơ) và yêu cầu xóa tài khoản. Để yêu cầu xóa dữ liệu, vui lòng liên hệ với chúng tôi.</p>
        </section>
        <section>
          <h2 className="mb-1 text-lg font-bold text-zinc-900 dark:text-white">7. Liên hệ</h2>
          <p>Mọi câu hỏi về quyền riêng tư, vui lòng liên hệ qua trang <Link href="/contact" className="text-brand-600 hover:underline">Liên hệ</Link>.</p>
        </section>
      </div>
    </div>
  );
}
