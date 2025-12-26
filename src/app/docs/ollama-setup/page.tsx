import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ollama Setup - NeuroTerm Docs',
  description: 'Set up Ollama for local AI features in NeuroTerm. Magic Input, embeddings, and more.',
};

export default function OllamaSetupPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
          <Link href="/docs" className="hover:text-zinc-300 transition-colors">
            Docs
          </Link>
          <span>/</span>
          <span className="text-zinc-400">Ollama Setup</span>
        </div>

        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">
          Ollama Setup
        </h1>
        <p className="text-zinc-400 text-lg mb-10">
          NeuroTerm uses Ollama to run AI locally on your machine. No API keys, no cloud, complete privacy.
        </p>

        {/* What is Ollama */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">What is Ollama?</h2>
          <p className="text-zinc-400 mb-4">
            Ollama is an open-source tool that runs large language models (LLMs) locally on your computer.
            NeuroTerm connects to Ollama to power:
          </p>
          <ul className="space-y-2 text-zinc-400">
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <strong className="text-white">Magic Input</strong> — Natural language to terminal commands
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <strong className="text-white">Local RAG</strong> — Ask questions about your datasheets
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <strong className="text-white">AI Transforms</strong> — Intelligent output filtering
            </li>
          </ul>
        </section>

        {/* Install Ollama */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">1. Install Ollama</h2>

          <div className="card p-5 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-zinc-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Windows</h3>
                <p className="text-zinc-400 text-sm mb-3">
                  Download and run the installer from ollama.com
                </p>
                <a
                  href="https://ollama.com/download/windows"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/20 transition-colors"
                >
                  Download Ollama for Windows
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <p className="text-zinc-400 text-sm">
            After installation, Ollama runs as a background service. You&apos;ll see the llama icon in your system tray.
          </p>
        </section>

        {/* Pull a Model */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">2. Pull a Model</h2>
          <p className="text-zinc-400 mb-4">
            Open a terminal (cmd, PowerShell, or Windows Terminal) and pull a model:
          </p>

          <div className="rounded-lg bg-[#0d1117] border border-white/10 overflow-hidden mb-4">
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/[0.02]">
              <span className="text-zinc-500 text-xs font-mono">Terminal</span>
            </div>
            <div className="p-4 font-mono text-sm">
              <div className="text-zinc-400">
                <span className="text-emerald-400">$</span> ollama pull llama3.2
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <div className="flex items-start gap-2">
              <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-sm">
                <p className="text-cyan-200 font-medium">Recommended Models</p>
                <ul className="text-zinc-400 mt-2 space-y-1">
                  <li><code className="text-cyan-300">llama3.2</code> — Best balance of speed and quality (2GB)</li>
                  <li><code className="text-cyan-300">qwen2.5:3b</code> — Fast, good for Magic Input (2GB)</li>
                  <li><code className="text-cyan-300">mistral</code> — Great instruction following (4GB)</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-zinc-400 text-sm">
            The download may take a few minutes depending on your connection.
          </p>
        </section>

        {/* Verify Installation */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">3. Verify Installation</h2>
          <p className="text-zinc-400 mb-4">
            Test that Ollama is running:
          </p>

          <div className="rounded-lg bg-[#0d1117] border border-white/10 overflow-hidden mb-4">
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/[0.02]">
              <span className="text-zinc-500 text-xs font-mono">Terminal</span>
            </div>
            <div className="p-4 font-mono text-sm space-y-2">
              <div className="text-zinc-400">
                <span className="text-emerald-400">$</span> ollama list
              </div>
              <div className="text-zinc-500">
                NAME          ID            SIZE    MODIFIED<br/>
                llama3.2      a80c4f17acd5  2.0 GB  2 minutes ago
              </div>
            </div>
          </div>

          <p className="text-zinc-400 text-sm">
            You should see your downloaded model in the list.
          </p>
        </section>

        {/* Configure NeuroTerm */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">4. Configure NeuroTerm</h2>
          <p className="text-zinc-400 mb-4">
            Open NeuroTerm and go to <strong className="text-white">Settings</strong> (gear icon):
          </p>

          <div className="space-y-4">
            <div className="card p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-zinc-500 text-xs uppercase tracking-wide mb-1">Ollama Endpoint</div>
                  <code className="text-white font-mono">http://localhost:11434</code>
                </div>
                <span className="text-emerald-400 text-xs">Default</span>
              </div>
            </div>

            <div className="card p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-zinc-500 text-xs uppercase tracking-wide mb-1">Model</div>
                  <code className="text-white font-mono">llama3.2</code>
                </div>
                <span className="text-zinc-500 text-xs">Your pulled model</span>
              </div>
            </div>
          </div>

          <p className="text-zinc-400 text-sm mt-4">
            Click &quot;Test Connection&quot; to verify NeuroTerm can reach Ollama.
          </p>
        </section>

        {/* Troubleshooting */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">Troubleshooting</h2>

          <div className="space-y-4">
            <div className="card p-4">
              <h3 className="text-white font-medium mb-2">&quot;Connection refused&quot; error</h3>
              <p className="text-zinc-400 text-sm">
                Make sure Ollama is running. Check your system tray for the llama icon, or run <code className="px-1.5 py-0.5 rounded bg-zinc-800 text-white/80 font-mono text-xs">ollama serve</code> manually.
              </p>
            </div>

            <div className="card p-4">
              <h3 className="text-white font-medium mb-2">Slow responses</h3>
              <p className="text-zinc-400 text-sm">
                Try a smaller model like <code className="px-1.5 py-0.5 rounded bg-zinc-800 text-white/80 font-mono text-xs">qwen2.5:1.5b</code>. If you have an NVIDIA GPU, Ollama will use it automatically for faster inference.
              </p>
            </div>

            <div className="card p-4">
              <h3 className="text-white font-medium mb-2">Model not found</h3>
              <p className="text-zinc-400 text-sm">
                Ensure the model name in NeuroTerm settings matches exactly what you pulled. Run <code className="px-1.5 py-0.5 rounded bg-zinc-800 text-white/80 font-mono text-xs">ollama list</code> to see available models.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">Next Steps</h2>
          <div className="grid gap-4">
            <Link
              href="/docs/quickstart"
              className="card-interactive p-4 flex items-center justify-between group"
            >
              <div>
                <div className="font-medium text-white group-hover:text-emerald-300 transition-colors">
                  Quickstart Guide
                </div>
                <div className="text-zinc-500 text-sm">Connect to your first device</div>
              </div>
              <svg className="w-5 h-5 text-zinc-600 group-hover:text-zinc-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/docs/magic-input"
              className="card-interactive p-4 flex items-center justify-between group"
            >
              <div>
                <div className="font-medium text-white group-hover:text-emerald-300 transition-colors">
                  Magic Input
                </div>
                <div className="text-zinc-500 text-sm">Learn to use AI-powered commands</div>
              </div>
              <svg className="w-5 h-5 text-zinc-600 group-hover:text-zinc-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Footer nav */}
        <div className="pt-8 border-t border-white/10 flex items-center justify-between">
          <Link
            href="/docs/installation"
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Installation
          </Link>
          <Link
            href="/docs/quickstart"
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors text-sm"
          >
            Quickstart
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
