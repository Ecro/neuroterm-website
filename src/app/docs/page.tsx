import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Documentation - NeuroTerm',
  description: 'Learn how to use NeuroTerm. Installation, Ollama setup, Magic Input, and more.',
};

const sections = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Installation', href: '/docs/installation', description: 'Download and install NeuroTerm' },
      { title: 'Ollama Setup', href: '/docs/ollama-setup', description: 'Set up local AI for Magic Input' },
      { title: 'Quickstart', href: '/docs/quickstart', description: 'Your first connection in 5 minutes' },
    ],
  },
  {
    title: 'Connections',
    items: [
      { title: 'Serial Port', href: '/docs/serial', description: 'Connect to hardware via COM ports' },
      { title: 'SSH Terminal', href: '/docs/ssh', description: 'Secure shell to remote servers' },
      { title: 'SFTP', href: '/docs/sftp', description: 'Transfer files over SSH' },
    ],
  },
  {
    title: 'AI Features',
    items: [
      { title: 'Magic Input', href: '/docs/magic-input', description: 'Natural language to commands' },
      { title: 'Local RAG', href: '/docs/local-rag', description: 'Import datasheets for context' },
    ],
  },
  {
    title: 'Reference',
    items: [
      { title: 'Keyboard Shortcuts', href: '/docs/shortcuts', description: 'All hotkeys and shortcuts' },
      { title: 'Troubleshooting', href: '/docs/troubleshooting', description: 'Common issues and fixes' },
    ],
  },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[#09090b]" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[500px] bg-gradient-to-br from-cyan-500/15 via-transparent to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
            <span className="gradient-text">Documentation</span>
          </h1>
          <p className="text-white/50 text-lg">
            Everything you need to get started with NeuroTerm.
          </p>
        </div>

        {/* Quick Start Banner */}
        <Link
          href="/docs/quickstart"
          className="block p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/15 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-200 mb-12 group"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-emerald-400 text-sm font-medium mb-1">Recommended</div>
              <div className="text-xl font-semibold text-white">Quickstart Guide</div>
              <div className="text-zinc-400 text-sm mt-1">Connect to your first device in 5 minutes</div>
            </div>
            <svg className="w-6 h-6 text-emerald-500/50 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </Link>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-semibold text-white mb-4">{section.title}</h2>
              <div className="grid gap-4">
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="card-interactive p-5 group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-white group-hover:text-emerald-300 transition-colors">
                          {item.title}
                        </div>
                        <div className="text-zinc-500 text-sm mt-0.5">{item.description}</div>
                      </div>
                      <svg className="w-5 h-5 text-zinc-600 group-hover:text-zinc-400 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
