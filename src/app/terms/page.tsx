import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'License Terms - NeuroTerm',
  description: 'NeuroTerm license terms, usage policy, and refund policy.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[#09090b]" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[500px] bg-gradient-to-br from-cyan-500/15 via-transparent to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-emerald-500/10 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-semibold text-white mb-4 tracking-tight">
            License <span className="gradient-text">Terms</span>
          </h1>
          <p className="text-white/50">
            Last updated: December 2025
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Overview */}
          <section className="group">
            <h2 className="text-xl font-semibold text-white mb-4">Overview</h2>
            <div className="p-6 rounded-xl border border-white/10 bg-zinc-900/60 backdrop-blur-sm hover:bg-zinc-800/50 hover:border-white/15 transition-all duration-300 space-y-4">
              <p className="text-white/60 text-sm leading-relaxed">
                NeuroTerm is available in two editions: Free and Pro. Both editions are provided by NeuroTerm (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;).
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                By downloading or using NeuroTerm, you agree to these terms.
              </p>
            </div>
          </section>

          {/* Free Edition */}
          <section className="group">
            <h2 className="text-xl font-semibold text-white mb-4">Free Edition</h2>
            <div className="p-6 rounded-xl border border-white/10 bg-zinc-900/60 backdrop-blur-sm hover:bg-zinc-800/50 hover:border-white/15 transition-all duration-300 space-y-4">
              <p className="text-white/60 text-sm leading-relaxed">
                The Free edition is available for personal and commercial use at no cost. Usage limits apply:
              </p>
              <ul className="list-disc list-inside text-white/60 text-sm space-y-2 ml-2">
                <li>20 AI queries per day</li>
                <li>2 imported datasheets</li>
                <li>2 saved connections</li>
              </ul>
              <p className="text-white/60 text-sm leading-relaxed">
                The Free edition may not be redistributed or bundled with other software without prior written consent.
              </p>
            </div>
          </section>

          {/* Pro Edition */}
          <section className="group">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-xl font-semibold text-emerald-400">Pro Edition</h2>
              <span className="px-2 py-0.5 text-xs font-medium bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/40">
                Recommended
              </span>
            </div>
            <div className="relative">
              {/* Subtle glow */}
              <div className="absolute -inset-px bg-gradient-to-b from-emerald-500/20 to-transparent rounded-xl opacity-50" />
              <div className="relative p-6 rounded-xl border border-emerald-500/30 bg-gradient-to-b from-emerald-500/5 to-zinc-900/80 backdrop-blur-sm space-y-6">
                <div>
                  <h3 className="text-white font-medium mb-2">Per-User License</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    The Pro license is granted <strong className="text-white/80">per-user</strong>, not per-device. One license permits one individual user to install and use NeuroTerm Pro on an unlimited number of devices owned or controlled by that user.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-medium mb-2">License is Non-Transferable</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Pro licenses may not be transferred, shared, or resold. Each user in an organization requires their own license.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-medium mb-2">Update Service</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-3">
                    Pro license includes 1 year of software updates from the date of purchase. After this period:
                  </p>
                  <ul className="list-disc list-inside text-white/60 text-sm space-y-2 ml-2">
                    <li>Your Pro license continues to work indefinitely</li>
                    <li>You keep all features unlocked</li>
                    <li>You can optionally renew to receive new updates</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-white font-medium mb-2">What&apos;s Included</h3>
                  <ul className="list-disc list-inside text-white/60 text-sm space-y-2 ml-2">
                    <li>Unlimited AI queries</li>
                    <li>Unlimited imported datasheets</li>
                    <li>Unlimited saved connection profiles</li>
                    <li>All current and future Pro features during update period</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Refund Policy */}
          <section className="group">
            <h2 className="text-xl font-semibold text-white mb-4">Refund Policy</h2>
            <div className="p-6 rounded-xl border border-white/10 bg-zinc-900/60 backdrop-blur-sm hover:bg-zinc-800/50 hover:border-white/15 transition-all duration-300 space-y-4">
              <p className="text-white/60 text-sm leading-relaxed">
                We offer a <strong className="text-white/80">14-day money-back guarantee</strong> for Pro purchases. If you&apos;re not satisfied for any reason, contact us within 14 days of purchase for a full refund.
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                To request a refund, email us at <a href="mailto:support@neuroterm.dev" className="text-emerald-400 hover:text-emerald-300 transition-colors">support@neuroterm.dev</a> with your order number.
              </p>
            </div>
          </section>

          {/* Restrictions */}
          <section className="group">
            <h2 className="text-xl font-semibold text-white mb-4">Restrictions</h2>
            <div className="p-6 rounded-xl border border-white/10 bg-zinc-900/60 backdrop-blur-sm hover:bg-zinc-800/50 hover:border-white/15 transition-all duration-300 space-y-4">
              <p className="text-white/60 text-sm leading-relaxed">
                You may not:
              </p>
              <ul className="list-disc list-inside text-white/60 text-sm space-y-2 ml-2">
                <li>Reverse engineer, decompile, or disassemble the software</li>
                <li>Remove or modify any proprietary notices or labels</li>
                <li>Distribute, rent, lease, or lend the software to third parties</li>
                <li>Use the software for any unlawful purpose</li>
              </ul>
            </div>
          </section>

          {/* Privacy */}
          <section className="group">
            <h2 className="text-xl font-semibold text-white mb-4">Privacy</h2>
            <div className="p-6 rounded-xl border border-white/10 bg-zinc-900/60 backdrop-blur-sm hover:bg-zinc-800/50 hover:border-white/15 transition-all duration-300 space-y-4">
              <p className="text-white/60 text-sm leading-relaxed">
                NeuroTerm is designed for <strong className="text-white/80">100% offline operation</strong>. All AI processing happens locally on your device using Ollama.
              </p>
              <ul className="list-disc list-inside text-white/60 text-sm space-y-2 ml-2">
                <li>No data is sent to external servers</li>
                <li>No telemetry or usage tracking</li>
                <li>Your terminal sessions, logs, and documents stay on your machine</li>
              </ul>
              <p className="text-white/60 text-sm leading-relaxed">
                The only network connections made are for license validation (Pro edition) and checking for updates.
              </p>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="group">
            <h2 className="text-xl font-semibold text-white mb-4">Disclaimer</h2>
            <div className="p-6 rounded-xl border border-white/10 bg-zinc-900/60 backdrop-blur-sm hover:bg-zinc-800/50 hover:border-white/15 transition-all duration-300">
              <p className="text-white/50 text-sm leading-relaxed">
                THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY ARISING FROM THE USE OF THE SOFTWARE.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="group">
            <h2 className="text-xl font-semibold text-white mb-4">Contact</h2>
            <div className="p-6 rounded-xl border border-white/10 bg-zinc-900/60 backdrop-blur-sm hover:bg-zinc-800/50 hover:border-white/15 transition-all duration-300">
              <p className="text-white/60 text-sm leading-relaxed">
                Questions about these terms? Contact us at <a href="mailto:support@neuroterm.dev" className="text-emerald-400 hover:text-emerald-300 transition-colors">support@neuroterm.dev</a>
              </p>
            </div>
          </section>
        </div>

        {/* Back link */}
        <div className="mt-12">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to pricing
          </Link>
        </div>
      </div>
    </div>
  );
}
