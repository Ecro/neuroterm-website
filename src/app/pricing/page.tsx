import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing - NeuroTerm',
  description: 'Simple pricing. No subscriptions. One-time purchase with 1 year of updates.',
};

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[#09090b]" />
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-emerald-500/20 via-transparent to-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-cyan-500/15 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="badge-accent mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>50% off for the first 100 users</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
            Simple pricing. <span className="gradient-text">No subscriptions.</span>
          </h1>
          <p className="text-white/50 text-lg">
            One-time purchase. 1 year of updates included.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto items-stretch">
          {/* Free Card */}
          <div className="group relative flex">
            <div className="absolute -inset-px bg-gradient-to-b from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex flex-col p-8 rounded-2xl border border-white/10 bg-zinc-900/80 backdrop-blur-sm hover:border-white/20 transition-all duration-300 w-full">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-white mb-2">Free</h2>
                <p className="text-white/40">Forever</p>
              </div>

              <div className="space-y-6 flex-1">
                {/* AI Features Group */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white/80 text-sm font-medium uppercase tracking-wider">AI Features</span>
                    <span className="text-white/60 text-xs font-medium">20/day</span>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center justify-between text-white/70 text-sm">
                      <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white/40" />Get commands from English</span>
                      <span className="text-emerald-400/60 text-xs">✓</span>
                    </li>
                    <li className="flex items-center justify-between text-white/70 text-sm">
                      <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white/40" />Ask questions about logs</span>
                      <span className="text-emerald-400/60 text-xs">✓</span>
                    </li>
                    <li className="flex items-center justify-between text-white/70 text-sm">
                      <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white/40" />Generate AI reports</span>
                      <span className="text-emerald-400/60 text-xs">✓</span>
                    </li>
                    <li className="flex items-center justify-between text-white/70 text-sm">
                      <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white/40" />Import datasheets</span>
                      <span className="text-white/60 text-xs font-medium">2 docs</span>
                    </li>
                  </ul>
                </div>

                {/* Terminal Features */}
                <div>
                  <div className="text-white/80 text-sm font-medium uppercase tracking-wider mb-3">Terminal Features</div>
                  <ul className="space-y-3">
                    <li className="flex items-center justify-between text-white/70 text-sm">
                      <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white/40" />Serial + SSH + SFTP</span>
                      <span className="text-emerald-400/60 text-xs">✓</span>
                    </li>
                    <li className="flex items-center justify-between text-white/70 text-sm">
                      <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white/40" />Saved connections</span>
                      <span className="text-white/60 text-xs font-medium">2 connections</span>
                    </li>
                    <li className="flex items-center justify-between text-white/70 text-sm">
                      <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white/40" />Minimap with markers</span>
                      <span className="text-emerald-400/60 text-xs">✓</span>
                    </li>
                    <li className="flex items-center justify-between text-white/70 text-sm">
                      <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white/40" />Smart quick filters</span>
                      <span className="text-emerald-400/60 text-xs">✓</span>
                    </li>
                    <li className="flex items-center justify-between text-white/70 text-sm">
                      <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white/40" />All other features</span>
                      <span className="text-emerald-400/60 text-xs">✓</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Link
                href="/download"
                className="block w-full py-3.5 text-center btn-primary mt-8"
              >
                Download Free
              </Link>
            </div>
          </div>

          {/* Pro Card */}
          <div className="group relative flex">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 via-cyan-500/20 to-emerald-500/30 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -inset-px bg-gradient-to-b from-emerald-500/30 to-transparent rounded-2xl" />

            <div className="relative flex flex-col p-8 rounded-2xl border border-emerald-500/40 bg-gradient-to-b from-emerald-500/10 via-zinc-900/95 to-zinc-900/95 backdrop-blur-sm w-full">
              {/* Popular badge */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 text-xs font-medium bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/40">
                  Popular
                </span>
              </div>

              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-emerald-400 mb-3">Pro</h2>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-white/40 line-through text-lg">$39</span>
                  <span className="text-4xl font-bold text-white">$19</span>
                </div>
              </div>

              <div className="space-y-6 flex-1">
                {/* AI Features Group */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white/80 text-sm font-medium uppercase tracking-wider">AI Features</span>
                    <span className="gradient-text text-xs font-semibold">Unlimited</span>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center justify-between text-white text-sm">
                      <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-400/60" />Get commands from English</span>
                      <span className="text-emerald-400 text-xs">✓</span>
                    </li>
                    <li className="flex items-center justify-between text-white text-sm">
                      <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-400/60" />Ask questions about logs</span>
                      <span className="text-emerald-400 text-xs">✓</span>
                    </li>
                    <li className="flex items-center justify-between text-white text-sm">
                      <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-400/60" />Generate AI reports</span>
                      <span className="text-emerald-400 text-xs">✓</span>
                    </li>
                    <li className="flex items-center justify-between text-white text-sm">
                      <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-400/60" />Import datasheets</span>
                      <span className="text-emerald-400 text-xs">✓</span>
                    </li>
                  </ul>
                </div>

                {/* Terminal Features */}
                <div>
                  <div className="text-white/80 text-sm font-medium uppercase tracking-wider mb-3">Terminal Features</div>
                  <ul className="space-y-3">
                    <li className="flex items-center justify-between text-white text-sm">
                      <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-400/60" />Serial + SSH + SFTP</span>
                      <span className="text-emerald-400 text-xs">✓</span>
                    </li>
                    <li className="flex items-center justify-between text-white text-sm">
                      <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-400/60" />Saved connections</span>
                      <span className="gradient-text font-semibold text-xs">Unlimited</span>
                    </li>
                    <li className="flex items-center justify-between text-white text-sm">
                      <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-400/60" />Minimap with markers</span>
                      <span className="text-emerald-400 text-xs">✓</span>
                    </li>
                    <li className="flex items-center justify-between text-white text-sm">
                      <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-400/60" />Smart quick filters</span>
                      <span className="text-emerald-400 text-xs">✓</span>
                    </li>
                    <li className="flex items-center justify-between text-white text-sm">
                      <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-400/60" />All other features</span>
                      <span className="text-emerald-400 text-xs">✓</span>
                    </li>
                    <li className="flex items-center justify-between text-white text-sm">
                      <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-400/60" />1 year updates</span>
                      <span className="text-emerald-400 text-xs">✓</span>
                    </li>
                  </ul>
                </div>
              </div>

              <button className="block w-full py-3.5 text-center btn-accent mt-8">
                Buy Pro — $19
              </button>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-8 text-center">
            Frequently asked questions
          </h2>

          <div className="space-y-4">
            <div className="group p-5 rounded-xl border border-white/10 bg-zinc-900/60 hover:bg-zinc-800/70 hover:border-white/15 transition-all duration-300">
              <h3 className="text-white font-medium mb-2">Can I use Pro on multiple devices?</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Yes. Pro license is per-user, not per-device. Install on as many of your computers as you need.
              </p>
            </div>

            <div className="group p-5 rounded-xl border border-white/10 bg-zinc-900/60 hover:bg-zinc-800/70 hover:border-white/15 transition-all duration-300">
              <h3 className="text-white font-medium mb-2">What happens after 1 year?</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Your Pro license keeps working forever. After 1 year, you can optionally renew to get new updates.
              </p>
            </div>

            <div className="group p-5 rounded-xl border border-white/10 bg-zinc-900/60 hover:bg-zinc-800/70 hover:border-white/15 transition-all duration-300">
              <h3 className="text-white font-medium mb-2">Do I need Ollama installed?</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Yes, NeuroTerm uses Ollama for local AI. We&apos;ll guide you through the one-click setup.
              </p>
            </div>

            <div className="group p-5 rounded-xl border border-white/10 bg-zinc-900/60 hover:bg-zinc-800/70 hover:border-white/15 transition-all duration-300">
              <h3 className="text-white font-medium mb-2">Can I get a refund?</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Yes, 14-day money-back guarantee. No questions asked.
              </p>
            </div>

            <div className="group p-5 rounded-xl border border-white/10 bg-zinc-900/60 hover:bg-zinc-800/70 hover:border-white/15 transition-all duration-300">
              <h3 className="text-white font-medium mb-2">Windows only?</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                For now, yes. macOS and Linux are on the roadmap.
              </p>
            </div>
          </div>

          <p className="text-center text-white/40 text-sm mt-8">
            See our <Link href="/terms" className="text-white/60 hover:text-white transition-colors underline underline-offset-2">license terms</Link> for full details.
          </p>
        </div>
      </div>
    </div>
  );
}
