import Link from 'next/link';

export function PricingPreview() {
  return (
    <section className="py-24 border-t border-white/8 relative overflow-hidden">
      {/* Subtle gradient orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-emerald-500/10 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">
            Simple pricing. <span className="gradient-text">No subscriptions.</span>
          </h2>
          <p className="text-white/50">
            One-time purchase. 1 year of updates included.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
          {/* Free Card */}
          <div className="group relative flex">
            <div className="absolute -inset-px bg-gradient-to-b from-white/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex flex-col p-6 rounded-xl border border-white/10 bg-zinc-900/80 backdrop-blur-sm hover:border-white/20 transition-all duration-300 w-full">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-white mb-1">Free</h3>
                <p className="text-white/40 text-sm">Forever</p>
              </div>

              <div className="space-y-4 flex-1">
                {/* AI Features */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/80 text-xs font-medium uppercase tracking-wider">AI Features</span>
                    <span className="text-white/60 text-xs font-medium">20/day</span>
                  </div>
                  <ul className="space-y-1.5">
                    <li className="flex items-center justify-between text-white/60 text-sm">
                      <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white/40" />Get commands from English</span>
                      <span className="text-emerald-400/60 text-xs">✓</span>
                    </li>
                    <li className="flex items-center justify-between text-white/60 text-sm">
                      <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white/40" />Ask questions about logs</span>
                      <span className="text-emerald-400/60 text-xs">✓</span>
                    </li>
                    <li className="flex items-center justify-between text-white/60 text-sm">
                      <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white/40" />Generate AI reports</span>
                      <span className="text-emerald-400/60 text-xs">✓</span>
                    </li>
                    <li className="flex items-center justify-between text-white/60 text-sm">
                      <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white/40" />Import datasheets</span>
                      <span className="text-white/60 text-xs font-medium">2 docs</span>
                    </li>
                  </ul>
                </div>

                {/* Terminal Features */}
                <div>
                  <div className="text-white/80 text-xs font-medium uppercase tracking-wider mb-2">Terminal Features</div>
                  <ul className="space-y-1.5">
                    <li className="flex items-center justify-between text-white/60 text-sm">
                      <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white/40" />Serial + SSH + SFTP</span>
                      <span className="text-emerald-400/60 text-xs">✓</span>
                    </li>
                    <li className="flex items-center justify-between text-white/60 text-sm">
                      <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white/40" />Saved connections</span>
                      <span className="text-white/60 text-xs font-medium">2 connections</span>
                    </li>
                    <li className="flex items-center justify-between text-white/60 text-sm">
                      <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white/40" />All other features</span>
                      <span className="text-emerald-400/60 text-xs">✓</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Link
                href="/download"
                className="block w-full py-2.5 text-center text-sm btn-primary mt-6"
              >
                Download Free
              </Link>
            </div>
          </div>

          {/* Pro Card */}
          <div className="group relative flex">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 via-cyan-500/20 to-emerald-500/30 rounded-xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -inset-px bg-gradient-to-b from-emerald-500/30 to-transparent rounded-xl" />

            <div className="relative flex flex-col p-6 rounded-xl border border-emerald-500/40 bg-gradient-to-b from-emerald-500/10 via-zinc-900/95 to-zinc-900/95 backdrop-blur-sm w-full">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-emerald-400 mb-1">Pro</h3>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-white/40 line-through text-sm">$39</span>
                  <span className="text-2xl font-bold text-white">$19</span>
                </div>
              </div>

              <div className="space-y-4 flex-1">
                {/* AI Features */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/80 text-xs font-medium uppercase tracking-wider">AI Features</span>
                    <span className="gradient-text text-xs font-semibold">Unlimited</span>
                  </div>
                  <ul className="space-y-1.5">
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
                  <div className="text-white/80 text-xs font-medium uppercase tracking-wider mb-2">Terminal Features</div>
                  <ul className="space-y-1.5">
                    <li className="flex items-center justify-between text-white text-sm">
                      <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-400/60" />Serial + SSH + SFTP</span>
                      <span className="text-emerald-400 text-xs">✓</span>
                    </li>
                    <li className="flex items-center justify-between text-white text-sm">
                      <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-400/60" />Saved connections</span>
                      <span className="gradient-text text-xs font-semibold">Unlimited</span>
                    </li>
                    <li className="flex items-center justify-between text-white text-sm">
                      <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-400/60" />1 year updates</span>
                      <span className="text-emerald-400 text-xs">✓</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Link
                href="/pricing"
                className="block w-full py-2.5 text-center text-sm btn-accent mt-6"
              >
                Buy Pro — $19
              </Link>
            </div>
          </div>
        </div>

        {/* Launch special */}
        <p className="text-center mt-8 text-emerald-400/80 text-sm">
          Launch special: 50% off for the first 100 users
        </p>
      </div>
    </section>
  );
}
