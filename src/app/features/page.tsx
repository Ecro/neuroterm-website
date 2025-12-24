import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features - NeuroTerm',
  description: 'GPU-accelerated serial terminal with local Ollama, RAG knowledge base, and native serial access for Windows.',
};

const features = [
  {
    title: 'Magic Input',
    description: 'Type natural language, get terminal commands. Powered by your local Ollama LLM for complete privacy.',
    details: [
      'Natural language to command translation',
      'Streaming responses (~200ms to first token)',
      'Works with any Ollama model',
      'Zero data leaves your machine',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
  },
  {
    title: 'Native Serial Access',
    description: 'Direct connection to COM ports with full control. No browser limitations.',
    details: [
      'Full DTR/RTS signal control',
      'All baud rates up to 921600',
      'Data bits, parity, stop bits config',
      'Hardware and software flow control',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
  {
    title: 'GPU Rendering',
    description: 'WebGL-accelerated terminal rendering for buttery smooth scrolling at any speed.',
    details: [
      'Hardware-accelerated graphics',
      '60fps scrolling performance',
      'Handles high-speed data streams',
      'Efficient memory usage',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Local RAG System',
    description: 'Import datasheets and docs. AI uses your knowledge base for context-aware answers.',
    details: [
      'Import TXT and MD files',
      'Semantic search with embeddings',
      'SQLite-vec vector storage',
      'Citations in AI responses',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: 'Pattern Highlighting',
    description: 'Real-time syntax highlighting with customizable presets for boot logs and errors.',
    details: [
      'Built-in Linux kernel preset',
      'U-Boot bootloader preset',
      'Custom regex patterns',
      'Color-coded error detection',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'Multi-Session',
    description: 'Multiple connections in tabs. Switch between Serial and SSH sessions seamlessly.',
    details: [
      'Tabbed interface',
      'Serial and SSH support',
      'Per-session settings',
      'Quick profile switching',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
      </svg>
    ),
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
            Everything you need for serial development
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Professional-grade features designed for embedded developers,
            hardware engineers, and IoT professionals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-white/5 flex items-center justify-center text-cyan-400 mb-5 group-hover:from-cyan-500/20 group-hover:to-emerald-500/20 transition-colors">
                {feature.icon}
              </div>

              <h3 className="text-lg font-medium text-white mb-2">
                {feature.title}
              </h3>

              <p className="text-white/40 text-sm mb-5 leading-relaxed">
                {feature.description}
              </p>

              <ul className="space-y-2">
                {feature.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-2 text-white/50 text-sm">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mb-24">
          <h2 className="text-2xl font-semibold text-white mb-8 text-center">
            Coming soon
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/40">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <h3 className="text-white font-medium">SSH/Telnet</h3>
              </div>
              <p className="text-white/40 text-sm">
                Connect to remote servers directly from your browser with secure SSH and Telnet support.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/40">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-medium">Team Collaboration</h3>
              </div>
              <p className="text-white/40 text-sm">
                Share connection profiles, macros, and settings with your team. Sync across devices.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Ready to try it?
          </h2>
          <p className="text-white/50 mb-8">
            Free tier available. Windows 10/11 required.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/download"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-colors"
            >
              Download for Windows
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 text-white/70 border border-white/10 rounded-lg hover:bg-white/5 transition-colors"
            >
              View pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
