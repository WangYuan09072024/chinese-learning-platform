import { ContactForm } from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-6 p-8">
      <h1 className="text-2xl font-semibold">Liên hệ</h1>
      <p className="text-zinc-500">Có câu hỏi về khóa học? Gửi tin nhắn cho chúng tôi bên dưới.</p>
      <ContactForm />
    </div>
  );
}
