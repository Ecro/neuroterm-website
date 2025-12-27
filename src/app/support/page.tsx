import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support - NeuroTerm',
  description: 'Get help with NeuroTerm. Report bugs, request features, or contact support.',
};

export default function SupportPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[#09090b]" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-gradient-to-br from-cyan-500/15 via-transparent to-emerald-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
            Get <span className="gradient-text">Support</span>
          </h1>
          <p className="text-white/50 text-lg">
            We&apos;re here to help. Choose the best way to reach us.
          </p>
        </div>

        {/* Support Options */}
        <div className="grid gap-4 mb-12">
          {/* Bug Report */}
          <a
            href="https://github.com/Ecro/neuroterm-issues/issues/new?template=bug_report.md"
            target="_blank"
            rel="noopener noreferrer"
            className="card-interactive flex items-center justify-between p-5 group"
          >
            <div>
              <h2 className="text-white font-medium group-hover:text-emerald-300 transition-colors">
                Report a Bug
              </h2>
              <p className="text-zinc-500 text-sm mt-0.5">
                Found something broken? Let us know.
              </p>
            </div>
            <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors text-xl">↗</span>
          </a>

          {/* Feature Request */}
          <a
            href="https://github.com/Ecro/neuroterm-issues/issues/new?template=feature_request.md"
            target="_blank"
            rel="noopener noreferrer"
            className="card-interactive flex items-center justify-between p-5 group"
          >
            <div>
              <h2 className="text-white font-medium group-hover:text-emerald-300 transition-colors">
                Request a Feature
              </h2>
              <p className="text-zinc-500 text-sm mt-0.5">
                Have an idea? We&apos;d love to hear it.
              </p>
            </div>
            <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors text-xl">↗</span>
          </a>

          {/* Browse Issues */}
          <a
            href="https://github.com/Ecro/neuroterm-issues/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="card-interactive flex items-center justify-between p-5 group"
          >
            <div>
              <h2 className="text-white font-medium group-hover:text-emerald-300 transition-colors">
                Browse Issues
              </h2>
              <p className="text-zinc-500 text-sm mt-0.5">
                See what others have reported.
              </p>
            </div>
            <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors text-xl">↗</span>
          </a>

          {/* Email Support */}
          <a
            href="mailto:support@neuroterm.dev"
            className="card-interactive flex items-center justify-between p-5 group"
          >
            <div>
              <h2 className="text-white font-medium group-hover:text-emerald-300 transition-colors">
                Email Support
              </h2>
              <p className="text-zinc-500 text-sm mt-0.5">
                support@neuroterm.dev
              </p>
            </div>
            <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors text-xl">→</span>
          </a>
        </div>

        {/* Documentation Link */}
        <div className="text-center">
          <p className="text-zinc-500 text-sm mb-4">
            Looking for help getting started?
          </p>
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 px-6 py-3 btn-ghost"
          >
            Read the Documentation →
          </Link>
        </div>
      </div>
    </div>
  );
}
