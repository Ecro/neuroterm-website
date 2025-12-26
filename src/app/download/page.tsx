import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Download - NeuroTerm',
  description: 'Download NeuroTerm for Windows. AI-powered serial & SSH terminal with SFTP. 100% offline.',
};

export default function DownloadPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
            Download NeuroTerm
          </h1>
          <p className="text-zinc-400 text-lg">
            Free to use. No account required.
          </p>
        </div>

        {/* Download Card */}
        <div className="card p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <img src="/logo.svg" alt="NeuroTerm" className="w-14 h-14" />
            <div>
              <h2 className="text-xl font-semibold text-white">NeuroTerm for Windows</h2>
              <p className="text-zinc-500 text-sm">Version 2.1.0</p>
            </div>
          </div>

          <a
            href="https://github.com/Ecro/neuroTerm/releases/latest/download/NeuroTerm_x64-setup.exe"
            className="block w-full py-4 text-center btn-primary mb-4"
          >
            Download for Windows
          </a>

          <p className="text-zinc-500 text-sm text-center">
            Windows 10/11 (64-bit) required
          </p>
        </div>

        {/* Requirements */}
        <div className="space-y-4">
          <h3 className="text-white font-medium text-lg">System Requirements</h3>

          <div className="card p-5">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <div className="text-zinc-200 text-sm font-medium">Windows 10/11 (64-bit)</div>
                <div className="text-zinc-500 text-sm">x64 processor required</div>
              </div>
            </div>
          </div>

          <div className="card p-5">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <div className="text-zinc-200 text-sm font-medium">GPU (recommended)</div>
                <div className="text-zinc-500 text-sm">WebGL-capable GPU for hardware acceleration</div>
              </div>
            </div>
          </div>

          <div className="card p-5">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <div>
                <div className="text-zinc-200 text-sm font-medium">Ollama (optional)</div>
                <div className="text-zinc-500 text-sm">
                  Required for AI features.
                  <a
                    href="https://ollama.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors ml-1"
                  >
                    Download Ollama
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Install Steps */}
        <div className="mt-12 space-y-4">
          <h3 className="text-white font-medium text-lg">Installation</h3>

          <ol className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="step-badge text-xs">1</span>
              <span className="text-zinc-400 pt-1">Download and run the installer (.msi)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="step-badge text-xs">2</span>
              <span className="text-zinc-400 pt-1">Follow the setup wizard</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="step-badge text-xs">3</span>
              <span className="text-zinc-400 pt-1">Launch NeuroTerm from Start Menu</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="step-badge text-xs">4</span>
              <span className="text-zinc-400 pt-1">(Optional) Install Ollama for AI features</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
