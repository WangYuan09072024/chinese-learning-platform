export default function PricingPage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 p-8">
      <h1 className="text-2xl font-semibold">Bảng giá</h1>
      <p className="text-zinc-500">
        Học phí được tính theo từng khóa học cụ thể — xem chi tiết giá tại trang mỗi khóa học. Liên hệ trung tâm để
        được tư vấn lộ trình học và ưu đãi phù hợp.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-zinc-200 p-5 dark:border-zinc-800">
          <h3 className="font-semibold">Học thử</h3>
          <p className="mt-2 text-2xl font-bold">Miễn phí</p>
          <p className="mt-2 text-sm text-zinc-500">Xem video, tài liệu ở các bài học được đánh dấu &quot;học thử&quot;.</p>
        </div>
        <div className="rounded-lg border border-zinc-200 p-5 dark:border-zinc-800">
          <h3 className="font-semibold">Trọn khóa</h3>
          <p className="mt-2 text-2xl font-bold">Theo khóa học</p>
          <p className="mt-2 text-sm text-zinc-500">Truy cập toàn bộ bài học, bài tập, quiz và được giáo viên chấm bài.</p>
        </div>
        <div className="rounded-lg border border-zinc-200 p-5 dark:border-zinc-800">
          <h3 className="font-semibold">Nhóm/Trung tâm</h3>
          <p className="mt-2 text-2xl font-bold">Liên hệ</p>
          <p className="mt-2 text-sm text-zinc-500">Ưu đãi cho nhóm học viên hoặc hợp tác cùng trung tâm khác.</p>
        </div>
      </div>
    </div>
  );
}
