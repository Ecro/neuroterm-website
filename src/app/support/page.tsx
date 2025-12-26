import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support - NeuroTerm',
  description: 'Get help with NeuroTerm. Report bugs, request features, or contact support.',
};

export default function SupportPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
            Support
          </h1>
          <p className="text-white/50 text-lg">
            We&apos;re here to help. Choose the best way to reach us.
          </p>
        </div>

        {/* Support Options */}
        <div className="grid gap-6 mb-12">
          {/* Bug Report */}
          <a
            href="https://github.com/Ecro/neuroterm-issues/issues/new?template=bug_report.md"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-white group-hover:text-red-400 transition-colors">
                  Report a Bug
                </h2>
                <svg className="w-5 h-5 text-white/20 group-hover:text-white/40 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-white/50 text-sm mt-1">
                Found something broken? Let us know and we&apos;ll fix it.
              </p>
            </div>
          </a>

          {/* Feature Request */}
          <a
            href="https://github.com/Ecro/neuroterm-issues/issues/new?template=feature_request.md"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-white group-hover:text-emerald-400 transition-colors">
                  Request a Feature
                </h2>
                <svg className="w-5 h-5 text-white/20 group-hover:text-white/40 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-white/50 text-sm mt-1">
                Have an idea to make NeuroTerm better? We&apos;d love to hear it.
              </p>
            </div>
          </a>

          {/* Browse Issues */}
          <a
            href="https://github.com/Ecro/neuroterm-issues/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-white group-hover:text-cyan-400 transition-colors">
                  Browse Issues
                </h2>
                <svg className="w-5 h-5 text-white/20 group-hover:text-white/40 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-white/50 text-sm mt-1">
                See what others have reported and upvote issues you care about.
              </p>
            </div>
          </a>

          {/* Email Support */}
          <a
            href="mailto:support@neuroterm.dev"
            className="flex items-start gap-4 p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-white group-hover:text-violet-400 transition-colors">
                  Email Support
                </h2>
                <svg className="w-5 h-5 text-white/20 group-hover:text-white/40 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-white/50 text-sm mt-1">
                For private inquiries, licensing, or account issues.
              </p>
              <p className="text-violet-400 text-sm mt-2 font-mono">support@neuroterm.dev</p>
            </div>
          </a>
        </div>

        {/* Documentation Link */}
        <div className="text-center">
          <p className="text-white/40 text-sm mb-4">
            Looking for help getting started?
          </p>
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 px-6 py-3 text-white/70 border border-white/10 rounded-lg hover:bg-white/5 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Read the Documentation
          </Link>
        </div>
      </div>
    </div>
  );
}
