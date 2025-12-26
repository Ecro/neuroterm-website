import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation - NeuroTerm Docs',
  description: 'Download and install NeuroTerm on Windows 10/11.',
};

export default function InstallationPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-white/40 mb-8">
          <Link href="/docs" className="hover:text-white/60 transition-colors">
            Docs
          </Link>
          <span>/</span>
          <span className="text-white/60">Installation</span>
        </div>

        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">
          Installation
        </h1>
        <p className="text-white/50 text-lg mb-10">
          Get NeuroTerm running on your Windows machine in under 2 minutes.
        </p>

        {/* Requirements */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">System Requirements</h2>
          <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02]">
            <ul className="space-y-3 text-white/60">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong className="text-white">Windows 10/11</strong> (64-bit)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong className="text-white">4GB RAM</strong> minimum (8GB+ recommended for AI)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong className="text-white">500MB disk space</strong> (more for AI models)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-white/30 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span><strong className="text-white/60">Optional:</strong> NVIDIA GPU for faster AI inference</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Download Steps */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">Download & Install</h2>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-sm font-medium">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-white font-medium mb-2">Download the installer</h3>
                <p className="text-white/50 text-sm mb-3">
                  Get the latest version from our download page.
                </p>
                <Link
                  href="/download"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 text-black text-sm font-medium rounded-lg hover:bg-emerald-400 transition-colors"
                >
                  Download NeuroTerm
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-sm font-medium">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-white font-medium mb-2">Run the installer</h3>
                <p className="text-white/50 text-sm mb-3">
                  Double-click <code className="px-1.5 py-0.5 rounded bg-white/10 text-white/80 font-mono text-xs">NeuroTerm_x.x.x_x64-setup.exe</code>
                </p>
                <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div className="text-sm">
                      <p className="text-amber-200 font-medium">Windows SmartScreen</p>
                      <p className="text-white/50 mt-1">
                        You may see a warning because the app is new. Click &quot;More info&quot; → &quot;Run anyway&quot; to proceed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-sm font-medium">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-white font-medium mb-2">Launch NeuroTerm</h3>
                <p className="text-white/50 text-sm">
                  Find NeuroTerm in your Start menu or desktop shortcut.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">Next Steps</h2>
          <div className="grid gap-4">
            <Link
              href="/docs/ollama-setup"
              className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group"
            >
              <div>
                <div className="font-medium text-white group-hover:text-emerald-400 transition-colors">
                  Set up Ollama for AI
                </div>
                <div className="text-white/40 text-sm">Enable Magic Input and local AI features</div>
              </div>
              <svg className="w-5 h-5 text-white/20 group-hover:text-white/40 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/docs/quickstart"
              className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group"
            >
              <div>
                <div className="font-medium text-white group-hover:text-emerald-400 transition-colors">
                  Quickstart Guide
                </div>
                <div className="text-white/40 text-sm">Connect to your first device in 5 minutes</div>
              </div>
              <svg className="w-5 h-5 text-white/20 group-hover:text-white/40 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Footer nav */}
        <div className="pt-8 border-t border-white/5">
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/60 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Docs
          </Link>
        </div>
      </div>
    </div>
  );
}
