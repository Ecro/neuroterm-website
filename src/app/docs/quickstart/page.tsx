import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quickstart - NeuroTerm Docs',
  description: 'Connect to your first device with NeuroTerm in 5 minutes.',
};

export default function QuickstartPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-white/40 mb-8">
          <Link href="/docs" className="hover:text-white/60 transition-colors">
            Docs
          </Link>
          <span>/</span>
          <span className="text-white/60">Quickstart</span>
        </div>

        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">
          Quickstart
        </h1>
        <p className="text-white/50 text-lg mb-10">
          Connect to your first device and use Magic Input in 5 minutes.
        </p>

        {/* Prerequisites */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">Prerequisites</h2>
          <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
            <ul className="space-y-2 text-white/60 text-sm">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <Link href="/docs/installation" className="text-emerald-400 hover:underline">NeuroTerm installed</Link>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <Link href="/docs/ollama-setup" className="text-emerald-400 hover:underline">Ollama set up</Link> (for AI features)
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                A serial device (Arduino, ESP32, Raspberry Pi, dev board, etc.)
              </li>
            </ul>
          </div>
        </section>

        {/* Step 1: Connect */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-sm font-medium">
              1
            </div>
            <h2 className="text-xl font-medium text-white">Connect a Serial Device</h2>
          </div>

          <div className="pl-11 space-y-4">
            <p className="text-white/60">
              Plug in your device via USB. NeuroTerm will detect available COM ports automatically.
            </p>

            <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02]">
              <h3 className="text-white font-medium mb-3">Connection Settings</h3>
              <div className="grid gap-3 text-sm">
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-white/50">Port</span>
                  <span className="text-white font-mono">COM3</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-white/50">Baud Rate</span>
                  <span className="text-white font-mono">115200</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-white/50">Data Bits</span>
                  <span className="text-white font-mono">8</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-white/50">Parity / Stop</span>
                  <span className="text-white font-mono">None / 1</span>
                </div>
              </div>
            </div>

            <p className="text-white/50 text-sm">
              Click <strong className="text-white">Connect</strong> to establish the connection.
            </p>
          </div>
        </section>

        {/* Step 2: Terminal */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-sm font-medium">
              2
            </div>
            <h2 className="text-xl font-medium text-white">Use the Terminal</h2>
          </div>

          <div className="pl-11 space-y-4">
            <p className="text-white/60">
              Once connected, you&apos;ll see incoming serial data in the terminal. Type commands directly to send them to your device.
            </p>

            <div className="rounded-xl border border-white/10 bg-[#0d1117] overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-white/5 bg-white/[0.02]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <span className="ml-2 text-white/30 text-xs font-mono">COM3 — 115200 baud</span>
              </div>
              <div className="p-4 font-mono text-sm text-white/70 space-y-1">
                <div>[  0.000000] Booting Linux on physical CPU 0x0</div>
                <div>[  0.000000] Linux version 6.1.0</div>
                <div className="text-emerald-400">[  OK  ] Started Journal Service.</div>
                <div className="text-white/40">root@imx8mp:~# <span className="animate-pulse">_</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 3: Magic Input */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-sm font-medium">
              3
            </div>
            <h2 className="text-xl font-medium text-white">Try Magic Input</h2>
          </div>

          <div className="pl-11 space-y-4">
            <p className="text-white/60">
              Press <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">@</kbd> to open Magic Input. Type what you want to do in plain English:
            </p>

            <div className="rounded-xl border border-white/10 bg-[#0d1117] overflow-hidden">
              <div className="p-4 font-mono text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">@</span>
                  <span className="text-white/80">&quot;show memory usage&quot;</span>
                </div>
                <div className="mt-3 p-3 rounded-lg bg-white/5 border border-emerald-500/20">
                  <div className="text-emerald-400 text-xs mb-2 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                    </svg>
                    Suggested command:
                  </div>
                  <div className="text-white font-medium">free -h</div>
                </div>
                <div className="mt-3 flex items-center gap-2 text-xs">
                  <span className="px-2 py-1 rounded bg-white/10 text-white/60">Enter Insert</span>
                  <span className="px-2 py-1 rounded bg-white/5 text-white/40">Tab Copy</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-sm">
                  <p className="text-cyan-200 font-medium">Try these prompts</p>
                  <ul className="text-white/60 mt-2 space-y-1">
                    <li>&quot;list all files&quot; → <code className="text-cyan-300">ls -la</code></li>
                    <li>&quot;check disk space&quot; → <code className="text-cyan-300">df -h</code></li>
                    <li>&quot;show network interfaces&quot; → <code className="text-cyan-300">ip addr</code></li>
                    <li>&quot;restart the service&quot; → <code className="text-cyan-300">systemctl restart ...</code></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 4: Save Profile */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-sm font-medium">
              4
            </div>
            <h2 className="text-xl font-medium text-white">Save Your Profile</h2>
          </div>

          <div className="pl-11 space-y-4">
            <p className="text-white/60">
              Save your connection settings for quick reconnection. Click the <strong className="text-white">Save Profile</strong> button and give it a name.
            </p>

            <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-medium">My ESP32</div>
                  <div className="text-white/40 text-sm">COM3 @ 115200 baud</div>
                </div>
              </div>
            </div>

            <p className="text-white/50 text-sm">
              Profiles remember port settings, baud rate, and other configuration.
            </p>
          </div>
        </section>

        {/* What's Next */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">What&apos;s Next?</h2>
          <div className="grid gap-4">
            <Link
              href="/docs/serial"
              className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group"
            >
              <div>
                <div className="font-medium text-white group-hover:text-emerald-400 transition-colors">
                  Serial Port Guide
                </div>
                <div className="text-white/40 text-sm">Advanced settings, flow control, DTR/RTS</div>
              </div>
              <svg className="w-5 h-5 text-white/20 group-hover:text-white/40 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/docs/magic-input"
              className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group"
            >
              <div>
                <div className="font-medium text-white group-hover:text-emerald-400 transition-colors">
                  Magic Input Deep Dive
                </div>
                <div className="text-white/40 text-sm">Tips, examples, and best practices</div>
              </div>
              <svg className="w-5 h-5 text-white/20 group-hover:text-white/40 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/docs/local-rag"
              className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group"
            >
              <div>
                <div className="font-medium text-white group-hover:text-emerald-400 transition-colors">
                  Import Your Datasheets
                </div>
                <div className="text-white/40 text-sm">Use RAG for hardware-specific AI</div>
              </div>
              <svg className="w-5 h-5 text-white/20 group-hover:text-white/40 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Footer nav */}
        <div className="pt-8 border-t border-white/5 flex items-center justify-between">
          <Link
            href="/docs/ollama-setup"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/60 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Ollama Setup
          </Link>
          <Link
            href="/docs/serial"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/60 transition-colors text-sm"
          >
            Serial Port
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
