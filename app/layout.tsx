// app/layout.tsx
import './globals.css'; // <--- 关键！这一行就是引入样式
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '哪里看 - 全网影视索引',
  description: '找剧，找电影，一键直达',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
