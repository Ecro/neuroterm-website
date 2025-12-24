import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Download - NeuroTerm',
  description: 'Download NeuroTerm for Windows. GPU-accelerated serial terminal with local AI.',
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
          <p className="text-white/50 text-lg">
            Free to use. No account required.
          </p>
        </div>

        {/* Download Card */}
        <div className="p-8 rounded-xl border border-white/10 bg-white/[0.02] mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-emerald-400 flex items-center justify-center">
              <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 17l6-6-6-6M12 19h8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">NeuroTerm for Windows</h2>
              <p className="text-white/40 text-sm">Version 0.4.0</p>
            </div>
          </div>

          <a
            href="https://github.com/Ecro/neuroTerm/releases/latest/download/NeuroTerm_x64-setup.exe"
            className="block w-full py-4 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-colors text-center mb-4"
          >
            Download for Windows
          </a>

          <p className="text-white/30 text-sm text-center">
            Windows 10/11 (64-bit) required
          </p>
        </div>

        {/* Requirements */}
        <div className="space-y-4">
          <h3 className="text-white font-medium">System Requirements</h3>

          <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02]">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <div className="text-white/80 text-sm font-medium">Windows 10/11 (64-bit)</div>
                <div className="text-white/40 text-sm">x64 processor required</div>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02]">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <div className="text-white/80 text-sm font-medium">GPU (recommended)</div>
                <div className="text-white/40 text-sm">WebGL-capable GPU for hardware acceleration</div>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02]">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <div>
                <div className="text-white/80 text-sm font-medium">Ollama (optional)</div>
                <div className="text-white/40 text-sm">
                  Required for AI features.
                  <a
                    href="https://ollama.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 ml-1"
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
          <h3 className="text-white font-medium">Installation</h3>

          <ol className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/60 text-xs">1</span>
              <span className="text-white/60 pt-0.5">Download and run the installer (.msi)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/60 text-xs">2</span>
              <span className="text-white/60 pt-0.5">Follow the setup wizard</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/60 text-xs">3</span>
              <span className="text-white/60 pt-0.5">Launch NeuroTerm from Start Menu</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/60 text-xs">4</span>
              <span className="text-white/60 pt-0.5">(Optional) Install Ollama for AI features</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
