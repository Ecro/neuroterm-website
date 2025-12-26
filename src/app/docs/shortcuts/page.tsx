import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Keyboard Shortcuts - NeuroTerm Docs',
  description: 'All keyboard shortcuts and hotkeys for NeuroTerm.',
};

export default function ShortcutsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-white/40 mb-8">
          <Link href="/docs" className="hover:text-white/60 transition-colors">
            Docs
          </Link>
          <span>/</span>
          <span className="text-white/60">Keyboard Shortcuts</span>
        </div>

        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">
          Keyboard Shortcuts
        </h1>
        <p className="text-white/50 text-lg mb-10">
          Master NeuroTerm with these keyboard shortcuts.
        </p>

        {/* Global Shortcuts */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">Global</h2>
          <div className="rounded-xl border border-white/5 bg-white/[0.02] overflow-x-auto">
            <table className="w-full text-sm min-w-[400px]">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left p-4 text-white/50 font-normal w-1/3">Shortcut</th>
                  <th className="text-left p-4 text-white/50 font-normal">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="p-4">
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">Ctrl</kbd>
                    <span className="text-white/30 mx-1">+</span>
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">N</kbd>
                  </td>
                  <td className="p-4 text-white/70">New connection tab</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4">
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">Ctrl</kbd>
                    <span className="text-white/30 mx-1">+</span>
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">W</kbd>
                  </td>
                  <td className="p-4 text-white/70">Close current tab</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4">
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">Ctrl</kbd>
                    <span className="text-white/30 mx-1">+</span>
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">Tab</kbd>
                  </td>
                  <td className="p-4 text-white/70">Switch to next tab</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4">
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">Ctrl</kbd>
                    <span className="text-white/30 mx-1">+</span>
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">Shift</kbd>
                    <span className="text-white/30 mx-1">+</span>
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">Tab</kbd>
                  </td>
                  <td className="p-4 text-white/70">Switch to previous tab</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4">
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">Ctrl</kbd>
                    <span className="text-white/30 mx-1">+</span>
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">,</kbd>
                  </td>
                  <td className="p-4 text-white/70">Open settings</td>
                </tr>
                <tr>
                  <td className="p-4">
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">F11</kbd>
                  </td>
                  <td className="p-4 text-white/70">Toggle fullscreen</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Terminal Shortcuts */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">Terminal</h2>
          <div className="rounded-xl border border-white/5 bg-white/[0.02] overflow-x-auto">
            <table className="w-full text-sm min-w-[400px]">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left p-4 text-white/50 font-normal w-1/3">Shortcut</th>
                  <th className="text-left p-4 text-white/50 font-normal">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="p-4">
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">Ctrl</kbd>
                    <span className="text-white/30 mx-1">+</span>
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">C</kbd>
                  </td>
                  <td className="p-4 text-white/70">Copy selected text</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4">
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">Ctrl</kbd>
                    <span className="text-white/30 mx-1">+</span>
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">V</kbd>
                  </td>
                  <td className="p-4 text-white/70">Paste from clipboard</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4">
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">Ctrl</kbd>
                    <span className="text-white/30 mx-1">+</span>
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">Shift</kbd>
                    <span className="text-white/30 mx-1">+</span>
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">C</kbd>
                  </td>
                  <td className="p-4 text-white/70">Copy (alternative)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4">
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">Ctrl</kbd>
                    <span className="text-white/30 mx-1">+</span>
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">Shift</kbd>
                    <span className="text-white/30 mx-1">+</span>
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">V</kbd>
                  </td>
                  <td className="p-4 text-white/70">Paste (alternative)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4">
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">Ctrl</kbd>
                    <span className="text-white/30 mx-1">+</span>
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">L</kbd>
                  </td>
                  <td className="p-4 text-white/70">Clear terminal</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4">
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">Ctrl</kbd>
                    <span className="text-white/30 mx-1">+</span>
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">+</kbd>
                  </td>
                  <td className="p-4 text-white/70">Increase font size</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4">
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">Ctrl</kbd>
                    <span className="text-white/30 mx-1">+</span>
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">-</kbd>
                  </td>
                  <td className="p-4 text-white/70">Decrease font size</td>
                </tr>
                <tr>
                  <td className="p-4">
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">Ctrl</kbd>
                    <span className="text-white/30 mx-1">+</span>
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">0</kbd>
                  </td>
                  <td className="p-4 text-white/70">Reset font size</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Magic Input Shortcuts */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">Magic Input</h2>
          <div className="rounded-xl border border-white/5 bg-white/[0.02] overflow-x-auto">
            <table className="w-full text-sm min-w-[400px]">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left p-4 text-white/50 font-normal w-1/3">Shortcut</th>
                  <th className="text-left p-4 text-white/50 font-normal">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="p-4">
                    <kbd className="px-2 py-1 rounded bg-cyan-500/20 text-cyan-400 font-mono text-xs">@</kbd>
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
                  <td className="p-4 text-white/70">Close Magic Input</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Connection Shortcuts */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">Connection</h2>
          <div className="rounded-xl border border-white/5 bg-white/[0.02] overflow-x-auto">
            <table className="w-full text-sm min-w-[400px]">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left p-4 text-white/50 font-normal w-1/3">Shortcut</th>
                  <th className="text-left p-4 text-white/50 font-normal">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="p-4">
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">Ctrl</kbd>
                    <span className="text-white/30 mx-1">+</span>
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">Enter</kbd>
                  </td>
                  <td className="p-4 text-white/70">Connect / Disconnect</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4">
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">Ctrl</kbd>
                    <span className="text-white/30 mx-1">+</span>
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">R</kbd>
                  </td>
                  <td className="p-4 text-white/70">Refresh port list</td>
                </tr>
                <tr>
                  <td className="p-4">
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">Ctrl</kbd>
                    <span className="text-white/30 mx-1">+</span>
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">S</kbd>
                  </td>
                  <td className="p-4 text-white/70">Save current profile</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Panel Shortcuts */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">Panels</h2>
          <div className="rounded-xl border border-white/5 bg-white/[0.02] overflow-x-auto">
            <table className="w-full text-sm min-w-[400px]">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left p-4 text-white/50 font-normal w-1/3">Shortcut</th>
                  <th className="text-left p-4 text-white/50 font-normal">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="p-4">
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">Ctrl</kbd>
                    <span className="text-white/30 mx-1">+</span>
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">B</kbd>
                  </td>
                  <td className="p-4 text-white/70">Toggle sidebar</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4">
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">Ctrl</kbd>
                    <span className="text-white/30 mx-1">+</span>
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">P</kbd>
                  </td>
                  <td className="p-4 text-white/70">Toggle pattern markers</td>
                </tr>
                <tr>
                  <td className="p-4">
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">Ctrl</kbd>
                    <span className="text-white/30 mx-1">+</span>
                    <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono text-xs">I</kbd>
                  </td>
                  <td className="p-4 text-white/70">Toggle context panel</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Tip */}
        <section className="mb-12">
          <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
            <div className="flex items-start gap-2">
              <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-sm">
                <p className="text-cyan-200 font-medium">Pro tip</p>
                <p className="text-white/60 mt-1">
                  Most shortcuts follow standard conventions. If you&apos;re familiar with VS Code or other terminals, you&apos;ll feel right at home.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer nav */}
        <div className="pt-8 border-t border-white/5 flex items-center justify-between">
          <Link
            href="/docs/local-rag"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/60 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Local RAG
          </Link>
          <Link
            href="/docs/troubleshooting"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/60 transition-colors text-sm"
          >
            Troubleshooting
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
