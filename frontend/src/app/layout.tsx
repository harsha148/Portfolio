import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/ui/navbar';
import { ChatProvider } from '@/components/providers/chat-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sai Harsha Kantamaneni - Portfolio',
  description: 'Software Engineer | ML Engineer | Full Stack Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ChatProvider>
          <Navbar />
          <main className="min-h-screen bg-slate-900 pt-16">
            {children}
          </main>
        </ChatProvider>
      </body>
    </html>
  );
}
