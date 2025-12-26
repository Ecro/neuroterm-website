import Link from 'next/link';

export function Footer() {
  return (
    <footer className="section-divider">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-zinc-500 text-sm">
            <img src="/logo.svg" alt="NeuroTerm" className="w-5 h-5" />
            <span className="text-zinc-300 font-medium">NeuroTerm</span>
            <span className="mx-2">·</span>
            Built for embedded developers
          </div>

          <div className="flex items-center gap-6 text-sm">
            <Link href="/download" className="text-zinc-500 hover:text-white transition-colors">
              Download
            </Link>
            <Link href="/pricing" className="text-zinc-500 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/docs" className="text-zinc-500 hover:text-white transition-colors">
              Docs
            </Link>
            <Link href="/support" className="text-zinc-500 hover:text-white transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
