import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Local RAG - NeuroTerm Docs',
  description: 'Import datasheets and documentation. AI uses your knowledge base for context-aware answers.',
};

export default function LocalRAGPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-white/40 mb-8">
          <Link href="/docs" className="hover:text-white/60 transition-colors">
            Docs
          </Link>
          <span>/</span>
          <span className="text-white/60">Local RAG</span>
        </div>

        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">
          Local RAG
        </h1>
        <p className="text-white/50 text-lg mb-10">
          Import your datasheets and documentation. Magic Input uses this knowledge for hardware-specific commands.
        </p>

        {/* What is RAG */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">What is RAG?</h2>
          <p className="text-white/50 mb-4">
            RAG (Retrieval-Augmented Generation) enhances AI responses with your own documents.
            When you ask a question, NeuroTerm searches your imported docs and includes relevant
            context in the AI prompt.
          </p>

          <div className="rounded-xl border border-white/10 bg-[#0d1117] overflow-hidden">
            <div className="p-4 font-mono text-sm">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">@</span>
                <span className="text-white/80">&quot;what&apos;s the GPIO pin for the status LED?&quot;</span>
              </div>
              <div className="mt-3 p-3 rounded-lg bg-white/5 border border-emerald-500/20">
                <div className="text-emerald-400 text-xs mb-2">Answer:</div>
                <div className="text-white">GPIO5_IO19 (pin 147) is STATUS_LED</div>
                <div className="text-white/40 text-xs mt-2 flex items-center gap-1.5">
                  <svg className="w-3 h-3 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                  <span>Source: imx8mp-pinmux.md</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Importing Documents */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">Importing Documents</h2>

          <div className="space-y-4 mb-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-sm font-medium">
                1
              </div>
              <div>
                <h3 className="text-white font-medium">Open Settings</h3>
                <p className="text-white/50 text-sm">Click the gear icon or press Ctrl+,</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-sm font-medium">
                2
              </div>
              <div>
                <h3 className="text-white font-medium">Go to RAG section</h3>
                <p className="text-white/50 text-sm">Find &quot;Knowledge Base&quot; in settings</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-sm font-medium">
                3
              </div>
              <div>
                <h3 className="text-white font-medium">Add documents</h3>
                <p className="text-white/50 text-sm">Click &quot;Import&quot; and select your files</p>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02]">
            <h3 className="text-white font-medium mb-3">Supported Formats</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-lg text-sm font-mono bg-white/5 text-white/60">.txt</span>
              <span className="px-3 py-1.5 rounded-lg text-sm font-mono bg-white/5 text-white/60">.md</span>
              <span className="px-3 py-1.5 rounded-lg text-sm font-mono bg-white/5 text-white/60">.markdown</span>
            </div>
            <p className="text-white/40 text-xs mt-3">
              PDF support coming soon. For now, extract text from PDFs before importing.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">How It Works</h2>

          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
              <h3 className="text-white font-medium mb-2">1. Chunking</h3>
              <p className="text-white/50 text-sm">
                Documents are split into smaller chunks for efficient searching.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
              <h3 className="text-white font-medium mb-2">2. Embedding</h3>
              <p className="text-white/50 text-sm">
                Each chunk is converted to a vector using Ollama&apos;s embedding model.
                Stored locally in SQLite-vec.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
              <h3 className="text-white font-medium mb-2">3. Retrieval</h3>
              <p className="text-white/50 text-sm">
                When you ask a question, similar chunks are found via vector search.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
              <h3 className="text-white font-medium mb-2">4. Generation</h3>
              <p className="text-white/50 text-sm">
                Retrieved context is included in the prompt. AI generates answers using your docs.
              </p>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">Best Practices</h2>

          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
              <h3 className="text-white font-medium mb-2">Use focused documents</h3>
              <p className="text-white/50 text-sm">
                Import specific datasheets, not entire manuals. Pinmux tables, register maps,
                and command references work best.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
              <h3 className="text-white font-medium mb-2">Include context in filenames</h3>
              <p className="text-white/50 text-sm">
                Name files descriptively: <code className="text-cyan-300">imx8mp-gpio-pinmux.md</code> instead of <code className="text-white/50">notes.txt</code>
              </p>
            </div>

            <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
              <h3 className="text-white font-medium mb-2">Keep documents current</h3>
              <p className="text-white/50 text-sm">
                Re-import updated docs to refresh the knowledge base. Old versions can be removed.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy */}
        <section className="mb-12">
          <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
            <div className="flex items-start gap-2">
              <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div className="text-sm">
                <p className="text-emerald-200 font-medium">100% Local</p>
                <p className="text-white/60 mt-1">
                  All documents stay on your machine. Embeddings are generated locally via Ollama.
                  Nothing is uploaded to any server.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer nav */}
        <div className="pt-8 border-t border-white/5 flex items-center justify-between">
          <Link
            href="/docs/magic-input"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/60 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Magic Input
          </Link>
          <Link
            href="/docs/shortcuts"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/60 transition-colors text-sm"
          >
            Keyboard Shortcuts
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
