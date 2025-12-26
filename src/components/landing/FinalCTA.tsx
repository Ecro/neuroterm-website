import Link from 'next/link';

export function FinalCTA() {
  return (
    <section className="py-24 border-t border-white/8">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">
          Ready to get started?
        </h2>
        <p className="text-white/50 text-lg mb-10">
          Download NeuroTerm and connect to your device in minutes.
        </p>
        <Link
          href="/download"
          className="inline-flex items-center gap-2 px-6 py-3 btn-primary"
        >
          Download for Windows
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
        <p className="mt-6 text-white/30 text-sm">
          Free tier available. Requires Windows 10/11 and Ollama for AI features.
        </p>
      </div>
    </section>
  );
}
