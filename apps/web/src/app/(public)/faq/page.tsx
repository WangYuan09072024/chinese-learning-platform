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
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-6 px-6 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold sm:text-4xl">Câu hỏi thường gặp</h1>
      </div>
      <div className="flex flex-col gap-3">
        {FAQ_ITEMS.map((item) => (
          <div key={item.q} className="card p-5">
            <p className="font-bold">{item.q}</p>
            <p className="mt-1.5 text-sm text-zinc-500">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
