import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing - NeuroTerm',
  description: 'Simple pricing. No subscriptions. One-time purchase for unlimited use.',
};

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="badge-accent mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>50% off for the first 100 users</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
            Simple pricing. No subscriptions.
          </h1>
          <p className="text-zinc-400 text-lg">
            One-time purchase. Lifetime updates.
          </p>
        </div>

        {/* Pricing Table */}
        <div className="table-container mb-16">
          <table className="w-full">
            <thead>
              <tr className="table-header">
                <th className="text-left p-5 text-zinc-400 font-normal text-sm"></th>
                <th className="p-5 text-center">
                  <div className="text-xl font-semibold text-white">Free</div>
                  <div className="text-zinc-500 text-sm mt-1">Forever</div>
                </th>
                <th className="p-5 text-center bg-gradient-to-b from-emerald-500/15 to-emerald-500/5">
                  <div className="text-xl font-semibold text-emerald-400">Pro</div>
                  <div className="text-zinc-500 text-sm mt-1">
                    <span className="line-through mr-2">$39</span>
                    <span className="text-emerald-400 font-semibold">$19</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="table-row">
                <td className="p-5 text-zinc-300">Active connections</td>
                <td className="p-5 text-center text-zinc-400">1</td>
                <td className="p-5 text-center text-white font-medium bg-emerald-500/8">Unlimited</td>
              </tr>
              <tr className="table-row">
                <td className="p-5 text-zinc-300">Ask AI</td>
                <td className="p-5 text-center text-zinc-400">10/day</td>
                <td className="p-5 text-center text-white font-medium bg-emerald-500/8">Unlimited</td>
              </tr>
              <tr className="table-row">
                <td className="p-5 text-zinc-300">RAG documents</td>
                <td className="p-5 text-center text-zinc-400">1 file</td>
                <td className="p-5 text-center text-white font-medium bg-emerald-500/8">Unlimited</td>
              </tr>
              <tr className="table-row">
                <td className="p-5 text-zinc-300">Saved profiles</td>
                <td className="p-5 text-center text-zinc-400">3</td>
                <td className="p-5 text-center text-white font-medium bg-emerald-500/8">Unlimited</td>
              </tr>
              <tr className="table-row">
                <td className="p-5 text-zinc-300">Filters & Markers</td>
                <td className="p-5 text-center text-emerald-400">
                  <svg className="w-5 h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </td>
                <td className="p-5 text-center text-emerald-400 bg-emerald-500/8">
                  <svg className="w-5 h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </td>
              </tr>
              <tr className="table-row">
                <td className="p-5 text-zinc-300">Log Export</td>
                <td className="p-5 text-center text-zinc-600">—</td>
                <td className="p-5 text-center text-emerald-400 bg-emerald-500/8">
                  <svg className="w-5 h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-5 text-zinc-300">Share Transform</td>
                <td className="p-5 text-center text-zinc-600">—</td>
                <td className="p-5 text-center text-emerald-400 bg-emerald-500/8">
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
                    className="inline-block px-8 py-3 btn-ghost"
                  >
                    Download Free
                  </Link>
                </td>
                <td className="p-5 text-center bg-gradient-to-b from-emerald-500/10 to-emerald-500/5">
                  <button
                    className="inline-block px-8 py-3 btn-accent"
                  >
                    Buy Pro — $19
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-8 text-center">
            Frequently asked questions
          </h2>

          <div className="space-y-4">
            <div className="card p-5">
              <h3 className="text-white font-medium mb-2">Do I need Ollama installed?</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Yes, NeuroTerm uses Ollama for local AI. We&apos;ll guide you through the one-click setup.
              </p>
            </div>

            <div className="card p-5">
              <h3 className="text-white font-medium mb-2">Does it work offline?</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                100%. All AI runs locally on your machine. No internet required.
              </p>
            </div>

            <div className="card p-5">
              <h3 className="text-white font-medium mb-2">What models are supported?</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Any model available in Ollama — Llama3, Qwen, Mistral, and more.
              </p>
            </div>

            <div className="card p-5">
              <h3 className="text-white font-medium mb-2">Can I get a refund?</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Yes, 14-day money-back guarantee. No questions asked.
              </p>
            </div>

            <div className="card p-5">
              <h3 className="text-white font-medium mb-2">Windows only?</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                For now, yes. macOS and Linux are on the roadmap.
              </p>
            </div>

            <div className="card p-5">
              <h3 className="text-white font-medium mb-2">How fast is the AI?</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Streaming responses start instantly. GPU-accelerated terminal handles any baud rate smoothly.
              </p>
            </div>

            <div className="card p-5">
              <h3 className="text-white font-medium mb-2">Can I use it air-gapped?</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Yes. Ollama runs 100% locally. No internet required after initial setup.
              </p>
            </div>

            <div className="card p-5">
              <h3 className="text-white font-medium mb-2">Does SSH support key authentication?</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Yes. Both password and SSH key authentication are supported, with known hosts verification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
