import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { getLocale } from "@/lib/i18n/server";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-geist-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Yuan Yuan · Học tiếng Trung vui mỗi ngày",
  description: "Nền tảng học tiếng Trung trực tuyến: bài giảng video, từ điển, flashcards, bài tập và theo dõi tiến độ.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale} className={`${nunito.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
