const FAQ_ITEMS = [
  {
    q: 'Tôi cần trình độ gì để bắt đầu học?',
    a: 'Không cần nền tảng trước đó. Các khóa HSK1 dành cho người mới bắt đầu hoàn toàn.',
  },
  {
    q: 'Tôi có thể học thử trước khi đăng ký không?',
    a: 'Có. Một số bài học trong mỗi khóa được đánh dấu "học thử" và có thể xem miễn phí, không cần ghi danh.',
  },
  {
    q: 'Làm sao để đăng ký một khóa học?',
    a: 'Tạo tài khoản, sau đó liên hệ giáo viên/trung tâm để được ghi danh vào khóa học phù hợp.',
  },
  {
    q: 'Bài tập được chấm như thế nào?',
    a: 'Giáo viên phụ trách khóa học sẽ chấm điểm và để lại nhận xét trực tiếp trên bài nộp của bạn.',
  },
  {
    q: 'Tôi có thể liên hệ trung tâm bằng cách nào?',
    a: 'Dùng trang Liên hệ để gửi tin nhắn, đội ngũ sẽ phản hồi qua email bạn cung cấp.',
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-6 p-8">
      <h1 className="text-2xl font-semibold">Câu hỏi thường gặp</h1>
      <div className="flex flex-col gap-4">
        {FAQ_ITEMS.map((item) => (
          <div key={item.q} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
            <p className="font-medium">{item.q}</p>
            <p className="mt-1 text-sm text-zinc-500">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
