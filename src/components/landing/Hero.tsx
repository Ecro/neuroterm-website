import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#08090a]" />
      <div className="absolute inset-0 grid-bg" />

      {/* Gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/20 via-transparent to-emerald-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24 pb-16">
        {/* Launch Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-8">
          <span className="text-emerald-400 text-sm font-medium">50% off for the first 100 users</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 text-white leading-tight">
          Smart Terminal for
          <br />
          <span className="gradient-text">Hardware & Server Dev</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/50 mb-10 max-w-2xl mx-auto leading-relaxed">
          Serial ports. SSH servers. AI-powered commands. All offline.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Link
            href="/download"
            className="px-8 py-3.5 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-colors"
          >
            Download Free
          </Link>
          <Link
            href="/pricing"
            className="px-8 py-3.5 bg-emerald-500 text-black font-medium rounded-lg hover:bg-emerald-400 transition-colors"
          >
            Buy Pro — $19
          </Link>
        </div>

        {/* Trust line */}
        <p className="text-white/40 text-sm">
          No cloud. No API keys. Your data stays on your machine.
        </p>

        {/* Terminal Preview */}
        <div className="mt-16 relative max-w-3xl mx-auto">
          <div className="absolute -inset-px bg-gradient-to-b from-white/10 to-transparent rounded-xl" />
          <div className="relative glass rounded-xl overflow-hidden glow">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              <span className="ml-3 text-white/30 text-xs font-mono">COM3 — 115200 baud</span>
            </div>

            {/* Terminal Content - Magic Input Demo */}
            <div className="p-6 font-mono text-sm text-left min-h-[200px]">
              <div className="text-white/60">&gt; Device ready</div>
              <div className="text-white/60">&gt; Waiting for command...</div>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-cyan-400">@</span>
                <span className="text-white/80">&quot;read temperature from sensor&quot;</span>
              </div>
              <div className="mt-3 p-3 rounded-lg bg-white/5 border border-emerald-500/20">
                <div className="text-emerald-400 text-xs mb-2 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                  Suggested command:
                </div>
                <div className="text-white font-medium">AT+TEMP?</div>
                <div className="text-white/40 text-xs mt-1">Query temperature register</div>
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs">
                <span className="px-2 py-1 rounded bg-white/10 text-white/60">↵ Insert</span>
                <span className="px-2 py-1 rounded bg-white/5 text-white/40">Copy</span>
                <span className="px-2 py-1 rounded bg-white/5 text-white/40">Edit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
