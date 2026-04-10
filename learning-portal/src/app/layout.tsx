import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { ProgressProvider } from '@/context/ProgressContext';
import { LanguageProvider } from '@/context/LanguageContext';
import ChatWidget from '@/components/ChatWidget';
import NavBar from '@/components/NavBar';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });

export const metadata: Metadata = {
  title: 'AI System Design Learning Portal',
  description: '6-month AI System Design curriculum by Roman Yustin',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#faf9f5] text-stone-800">
        <LanguageProvider>
          <ProgressProvider>
            <NavBar />
            <main className="max-w-5xl mx-auto px-6 py-10">{children}</main>
            <ChatWidget />
          </ProgressProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
