import Link from 'next/link';

export function PricingPreview() {
  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">
            Simple pricing. No subscriptions.
          </h2>
        </div>

        {/* Pricing Table */}
        <div className="overflow-hidden rounded-xl border border-white/10">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-4 text-white/50 font-normal text-sm"></th>
                <th className="p-4 text-center">
                  <div className="text-white font-medium">Free</div>
                </th>
                <th className="p-4 text-center bg-emerald-500/5">
                  <div className="text-emerald-400 font-medium">Pro</div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-white/5">
                <td className="p-4 text-white/60">Serial sessions</td>
                <td className="p-4 text-center text-white/80">1</td>
                <td className="p-4 text-center text-white/80 bg-emerald-500/5">Unlimited</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="p-4 text-white/60">Ask AI</td>
                <td className="p-4 text-center text-white/80">10/day</td>
                <td className="p-4 text-center text-white/80 bg-emerald-500/5">Unlimited</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="p-4 text-white/60">RAG documents</td>
                <td className="p-4 text-center text-white/80">1 file</td>
                <td className="p-4 text-center text-white/80 bg-emerald-500/5">Unlimited</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="p-4 text-white/60">Session Profiles</td>
                <td className="p-4 text-center text-white/80">3</td>
                <td className="p-4 text-center text-white/80 bg-emerald-500/5">Unlimited</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="p-4 text-white/60">Filters & Markers</td>
                <td className="p-4 text-center text-emerald-400">
                  <svg className="w-5 h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </td>
                <td className="p-4 text-center text-emerald-400 bg-emerald-500/5">
                  <svg className="w-5 h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="p-4 text-white/60">Log Export</td>
                <td className="p-4 text-center text-white/30">—</td>
                <td className="p-4 text-center text-emerald-400 bg-emerald-500/5">
                  <svg className="w-5 h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </td>
              </tr>
              <tr>
                <td className="p-4 text-white/60">Share Transform</td>
                <td className="p-4 text-center text-white/30">—</td>
                <td className="p-4 text-center text-emerald-400 bg-emerald-500/5">
                  <svg className="w-5 h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="border-t border-white/10">
                <td className="p-4"></td>
                <td className="p-4 text-center">
                  <Link
                    href="/download"
                    className="inline-block px-6 py-2.5 text-sm text-white/70 border border-white/10 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    Download
                  </Link>
                </td>
                <td className="p-4 text-center bg-emerald-500/5">
                  <div className="mb-2">
                    <span className="text-white/40 line-through text-sm mr-2">$39</span>
                    <span className="text-2xl font-semibold text-white">$19</span>
                  </div>
                  <Link
                    href="/pricing"
                    className="inline-block px-6 py-2.5 text-sm font-medium text-black bg-emerald-500 rounded-lg hover:bg-emerald-400 transition-colors"
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
