import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/ui/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'NeuroTerm - Serial Terminal for Windows',
  description: 'GPU-accelerated serial terminal with local Ollama integration. Describe commands in plain English. Windows 10/11.',
  keywords: ['serial terminal', 'embedded development', 'terminal', 'Ollama', 'Windows', 'Tauri'],
  openGraph: {
    title: 'NeuroTerm - Serial Terminal for Windows',
    description: 'GPU-accelerated serial terminal with local Ollama integration. Your data stays local.',
    url: 'https://neuroterm.dev',
    siteName: 'NeuroTerm',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeuroTerm - Serial Terminal for Windows',
    description: 'GPU-accelerated serial terminal with local Ollama integration. Your data stays local.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-black text-white`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
