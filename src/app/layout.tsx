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
  title: 'NeuroTerm - AI-Powered Serial & SSH Terminal',
  description: 'The terminal that understands you. Describe what you want, AI gives you the command. Serial, SSH, SFTP. 100% offline.',
  keywords: ['serial terminal', 'SSH terminal', 'SFTP', 'embedded Linux', 'MCU debugging', 'Ollama', 'Windows', 'Tauri', 'embedded development', 'IoT'],
  openGraph: {
    title: 'NeuroTerm - AI-Powered Serial & SSH Terminal',
    description: 'The terminal that understands you. Describe what you want, AI gives you the command. 100% offline.',
    url: 'https://neuroterm.dev',
    siteName: 'NeuroTerm',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeuroTerm - AI-Powered Serial & SSH Terminal',
    description: 'The terminal that understands you. Describe what you want, AI gives you the command. 100% offline.',
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
