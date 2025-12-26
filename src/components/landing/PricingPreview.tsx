import Link from 'next/link';

export function PricingPreview() {
  return (
    <section className="py-24 border-t border-white/8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">
            Simple pricing. No subscriptions.
          </h2>
        </div>

        {/* Pricing Table */}
        <div className="overflow-hidden rounded-2xl border border-white/15 bg-zinc-900/80 backdrop-blur-sm shadow-2xl shadow-black/30">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/15 bg-zinc-800/50">
                <th className="text-left p-5 text-zinc-400 font-normal text-sm"></th>
                <th className="p-5 text-center">
                  <div className="text-white font-semibold text-lg">Free</div>
                </th>
                <th className="p-5 text-center bg-gradient-to-b from-emerald-500/15 to-emerald-500/5">
                  <div className="text-emerald-400 font-semibold text-lg">Pro</div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-white/8 hover:bg-white/[0.02] transition-colors">
                <td className="p-4 text-zinc-300">Serial sessions</td>
                <td className="p-4 text-center text-zinc-400">1</td>
                <td className="p-4 text-center text-white font-medium bg-emerald-500/8">Unlimited</td>
              </tr>
              <tr className="border-b border-white/8 hover:bg-white/[0.02] transition-colors">
                <td className="p-4 text-zinc-300">Ask AI</td>
                <td className="p-4 text-center text-zinc-400">10/day</td>
                <td className="p-4 text-center text-white font-medium bg-emerald-500/8">Unlimited</td>
              </tr>
              <tr className="border-b border-white/8 hover:bg-white/[0.02] transition-colors">
                <td className="p-4 text-zinc-300">RAG documents</td>
                <td className="p-4 text-center text-zinc-400">1 file</td>
                <td className="p-4 text-center text-white font-medium bg-emerald-500/8">Unlimited</td>
              </tr>
              <tr className="border-b border-white/8 hover:bg-white/[0.02] transition-colors">
                <td className="p-4 text-zinc-300">Session Profiles</td>
                <td className="p-4 text-center text-zinc-400">3</td>
                <td className="p-4 text-center text-white font-medium bg-emerald-500/8">Unlimited</td>
              </tr>
              <tr className="border-b border-white/8 hover:bg-white/[0.02] transition-colors">
                <td className="p-4 text-zinc-300">Filters & Markers</td>
                <td className="p-4 text-center text-emerald-400">
                  <svg className="w-5 h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </td>
                <td className="p-4 text-center text-emerald-400 bg-emerald-500/8">
                  <svg className="w-5 h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </td>
              </tr>
              <tr className="border-b border-white/8 hover:bg-white/[0.02] transition-colors">
                <td className="p-4 text-zinc-300">Log Export</td>
                <td className="p-4 text-center text-zinc-600">—</td>
                <td className="p-4 text-center text-emerald-400 bg-emerald-500/8">
                  <svg className="w-5 h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-4 text-zinc-300">Share Transform</td>
                <td className="p-4 text-center text-zinc-600">—</td>
                <td className="p-4 text-center text-emerald-400 bg-emerald-500/8">
                  <svg className="w-5 h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="border-t border-white/15 bg-zinc-800/30">
                <td className="p-5"></td>
                <td className="p-5 text-center">
                  <Link
                    href="/download"
                    className="inline-block px-6 py-2.5 text-sm btn-ghost"
                  >
                    Download
                  </Link>
                </td>
                <td className="p-5 text-center bg-gradient-to-b from-emerald-500/10 to-emerald-500/5">
                  <div className="mb-3">
                    <span className="text-zinc-500 line-through text-sm mr-2">$39</span>
                    <span className="text-3xl font-bold text-white">$19</span>
                  </div>
                  <Link
                    href="/pricing"
                    className="inline-block px-8 py-3 text-sm btn-accent"
                  >
                    Buy Pro
                  </Link>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Launch special */}
        <p className="text-center mt-8 text-emerald-400 text-sm">
          Launch special: 50% off for the first 100 users
        </p>
      </div>
    </section>
  );
}
