import { Injectable, Logger } from '@nestjs/common';

/**
 * Minimal email sender. If RESEND_API_KEY is configured it sends real email via
 * the Resend HTTP API; otherwise it logs the message (dev fallback) so flows
 * still work end-to-end locally without an email provider.
 */
@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);

  private get apiKey() {
    return process.env.RESEND_API_KEY;
  }

  private get from() {
    return process.env.MAIL_FROM ?? 'Yuan Yuan <onboarding@resend.dev>';
  }

  async send(to: string, subject: string, html: string) {
    if (!this.apiKey) {
      this.logger.warn(`[MAIL:dev] To: ${to} | Subject: ${subject}\n${html}`);
      return { delivered: false, dev: true };
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ from: this.from, to, subject, html }),
    });

    if (!res.ok) {
      const body = await res.text();
      this.logger.error(`Resend send failed (${res.status}): ${body}`);
      return { delivered: false, error: true };
    }
    return { delivered: true };
  }

  async sendPasswordReset(to: string, name: string, resetUrl: string) {
    const html = `
      <div style="font-family:sans-serif;max-width:480px;margin:0 auto">
        <h2 style="color:#e11d63">Yuan Yuan · Đặt lại mật khẩu</h2>
        <p>Chào ${name},</p>
        <p>Bạn (hoặc ai đó) đã yêu cầu đặt lại mật khẩu. Bấm nút bên dưới để tạo mật khẩu mới. Liên kết có hiệu lực trong 1 giờ.</p>
        <p style="margin:24px 0">
          <a href="${resetUrl}" style="background:#e11d63;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold">Đặt lại mật khẩu</a>
        </p>
        <p style="color:#71717a;font-size:13px">Nếu không phải bạn yêu cầu, hãy bỏ qua email này — mật khẩu của bạn vẫn an toàn.</p>
        <p style="color:#71717a;font-size:13px">Hoặc mở liên kết: <br>${resetUrl}</p>
      </div>`;
    return this.send(to, 'Đặt lại mật khẩu Yuan Yuan', html);
  }
}
