import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Magic Input - NeuroTerm Docs',
  description: 'Natural language to terminal commands. Type what you want, get the command.',
};

export default function MagicInputPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-white/40 mb-8">
          <Link href="/docs" className="hover:text-white/60 transition-colors">
            Docs
          </Link>
          <span>/</span>
          <span className="text-white/60">Magic Input</span>
        </div>

        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">
          Magic Input
        </h1>
        <p className="text-white/50 text-lg mb-10">
          Type what you want to do in plain English. NeuroTerm translates it to the right terminal command.
        </p>

        {/* How to Use */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">How to Use</h2>

          <div className="space-y-4 mb-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-sm font-medium">
                1
              </div>
              <div>
                <h3 className="text-white font-medium">Press @ in the terminal</h3>
                <p className="text-white/50 text-sm">Opens the Magic Input prompt</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-sm font-medium">
                2
              </div>
              <div>
                <h3 className="text-white font-medium">Type your request in plain English</h3>
                <p className="text-white/50 text-sm">&quot;show all running processes&quot;</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-sm font-medium">
                3
              </div>
              <div>
                <h3 className="text-white font-medium">Review the suggested command</h3>
                <p className="text-white/50 text-sm">Press Enter to insert, Tab to copy, Esc to cancel</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#0d1117] overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-white/5 bg-white/[0.02]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
            </div>
            <div className="p-4 font-mono text-sm">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">@</span>
                <span className="text-white/80">&quot;find large files over 100MB&quot;</span>
              </div>
              <div className="mt-3 p-3 rounded-lg bg-white/5 border border-emerald-500/20">
                <div className="text-emerald-400 text-xs mb-2 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                  Suggested command:
                </div>
                <div className="text-white font-medium">find / -type f -size +100M 2&gt;/dev/null</div>
              </div>
            </div>
          </div>
        </section>

        {/* Keyboard Shortcuts */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">Keyboard Shortcuts</h2>

          <div className="rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left p-4 text-white/50 font-normal">Key</th>
                  <th className="text-left p-4 text-white/50 font-normal">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="p-4">
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">@</kbd>
                  </td>
                  <td className="p-4 text-white/70">Open Magic Input</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4">
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">Enter</kbd>
                  </td>
                  <td className="p-4 text-white/70">Insert command into terminal</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4">
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">Tab</kbd>
                  </td>
                  <td className="p-4 text-white/70">Copy command to clipboard</td>
                </tr>
                <tr>
                  <td className="p-4">
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">Esc</kbd>
                  </td>
                  <td className="p-4 text-white/70">Cancel and close</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Example Prompts */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">Example Prompts</h2>

          <div className="space-y-3">
            {[
              { prompt: 'show memory usage', command: 'free -h' },
              { prompt: 'list all network interfaces', command: 'ip addr' },
              { prompt: 'find all .log files', command: 'find . -name "*.log"' },
              { prompt: 'check disk space', command: 'df -h' },
              { prompt: 'kill process on port 8080', command: 'fuser -k 8080/tcp' },
              { prompt: 'compress this folder', command: 'tar -czvf archive.tar.gz folder/' },
              { prompt: 'show system uptime', command: 'uptime' },
              { prompt: 'watch CPU usage', command: 'top' },
            ].map((example) => (
              <div key={example.prompt} className="flex items-center gap-4 p-3 rounded-lg border border-white/5 bg-white/[0.02]">
                <div className="flex-1">
                  <span className="text-cyan-400">@</span>
                  <span className="text-white/70 ml-1">&quot;{example.prompt}&quot;</span>
                </div>
                <div className="text-white/40">→</div>
                <code className="text-emerald-400 font-mono text-sm">{example.command}</code>
              </div>
            ))}
          </div>
        </section>

        {/* Using with RAG */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">Using with Local RAG</h2>
          <p className="text-white/50 mb-4">
            When you import datasheets via <Link href="/docs/local-rag" className="text-emerald-400 hover:underline">Local RAG</Link>,
            Magic Input uses that knowledge for hardware-specific commands.
          </p>

          <div className="rounded-xl border border-white/10 bg-[#0d1117] overflow-hidden mb-4">
            <div className="p-4 font-mono text-sm">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">@</span>
                <span className="text-white/80">&quot;turn on the status LED&quot;</span>
              </div>
              <div className="mt-3 p-3 rounded-lg bg-white/5 border border-emerald-500/20">
                <div className="text-emerald-400 text-xs mb-2 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                  Suggested command:
                </div>
                <div className="text-white font-medium">echo 1 &gt; /sys/class/gpio/gpio147/value</div>
                <div className="text-white/40 text-xs mt-2 flex items-center gap-1.5">
                  <svg className="w-3 h-3 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                  <span>GPIO5_IO19 (pin 147) is STATUS_LED — from your datasheet</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-white/50 text-sm">
            The AI cites the source document so you can verify the information.
          </p>
        </section>

        {/* Tips */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">Tips for Better Results</h2>

          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
              <h3 className="text-white font-medium mb-2">Be specific</h3>
              <p className="text-white/50 text-sm">
                &quot;show files modified in the last hour&quot; is better than &quot;show recent files&quot;
              </p>
            </div>

            <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
              <h3 className="text-white font-medium mb-2">Include context</h3>
              <p className="text-white/50 text-sm">
                &quot;find Python files containing &apos;import requests&apos;&quot; gives more targeted results
              </p>
            </div>

            <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
              <h3 className="text-white font-medium mb-2">State the goal, not the steps</h3>
              <p className="text-white/50 text-sm">
                &quot;backup this directory to /mnt/backup&quot; instead of &quot;how do I use rsync&quot;
              </p>
            </div>

            <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
              <h3 className="text-white font-medium mb-2">Review before running</h3>
              <p className="text-white/50 text-sm">
                Always check the suggested command, especially for destructive operations like <code className="text-red-400">rm</code>
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">Related</h2>
          <div className="grid gap-4">
            <Link
              href="/docs/local-rag"
              className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group"
            >
              <div>
                <div className="font-medium text-white group-hover:text-emerald-400 transition-colors">
                  Local RAG
                </div>
                <div className="text-white/40 text-sm">Import datasheets for context-aware commands</div>
              </div>
              <svg className="w-5 h-5 text-white/20 group-hover:text-white/40 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/docs/ollama-setup"
              className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group"
            >
              <div>
                <div className="font-medium text-white group-hover:text-emerald-400 transition-colors">
                  Ollama Setup
                </div>
                <div className="text-white/40 text-sm">Configure the AI model powering Magic Input</div>
              </div>
              <svg className="w-5 h-5 text-white/20 group-hover:text-white/40 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Footer nav */}
        <div className="pt-8 border-t border-white/5 flex items-center justify-between">
          <Link
            href="/docs/sftp"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/60 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            SFTP
          </Link>
          <Link
            href="/docs/local-rag"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/60 transition-colors text-sm"
          >
            Local RAG
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
