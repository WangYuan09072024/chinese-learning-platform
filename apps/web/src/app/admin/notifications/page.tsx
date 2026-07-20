import { Megaphone } from 'lucide-react';
import { BroadcastForm } from '@/components/BroadcastForm';

export default function AdminNotificationsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-extrabold">
          <Megaphone className="h-6 w-6 text-brand-500" /> Gửi thông báo
        </h1>
        <p className="text-sm text-zinc-500">
          Gửi thông báo hệ thống tới toàn bộ người dùng hoặc theo nhóm. Người nhận sẽ thấy ở mục Thông báo của họ.
        </p>
      </div>

      <BroadcastForm />
    </div>
  );
}
