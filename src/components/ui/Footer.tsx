import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/40 text-sm">
            <span className="text-white/60 font-medium">NeuroTerm</span>
            <span className="mx-2">·</span>
            Built for embedded developers
          </div>

          <div className="flex items-center gap-6 text-sm">
            <Link href="/download" className="text-white/40 hover:text-white transition-colors">
              Download
            </Link>
            <Link href="/pricing" className="text-white/40 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/docs" className="text-white/40 hover:text-white transition-colors">
              Docs
            </Link>
            <Link href="/support" className="text-white/40 hover:text-white transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
