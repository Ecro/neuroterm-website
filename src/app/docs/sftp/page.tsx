import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SFTP - NeuroTerm Docs',
  description: 'Transfer files over SSH. Browse, upload, and download files securely.',
};

export default function SFTPPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-white/40 mb-8">
          <Link href="/docs" className="hover:text-white/60 transition-colors">
            Docs
          </Link>
          <span>/</span>
          <span className="text-white/60">SFTP</span>
        </div>

        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">
          SFTP File Transfer
        </h1>
        <p className="text-white/50 text-lg mb-10">
          Browse, upload, and download files over your SSH connection.
        </p>

        {/* Opening SFTP */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">Opening SFTP</h2>
          <p className="text-white/50 mb-4">
            When connected via SSH, click the folder icon in the toolbar to open the SFTP browser.
            The file browser opens in a side panel.
          </p>

          <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
            <div className="flex items-start gap-2">
              <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-sm">
                <p className="text-cyan-200 font-medium">Tip</p>
                <p className="text-white/60 mt-1">
                  SFTP uses your existing SSH connection. No additional authentication required.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Browsing */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">Browsing Files</h2>

          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
              <h3 className="text-white font-medium mb-2">Navigation</h3>
              <p className="text-white/50 text-sm">
                Click folders to enter them. Use the breadcrumb path or back button to navigate up.
                The path bar shows your current location.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
              <h3 className="text-white font-medium mb-2">File Information</h3>
              <p className="text-white/50 text-sm">
                Each file shows its name, size, and modification date. Folders are listed first,
                followed by files sorted alphabetically.
              </p>
            </div>
          </div>
        </section>

        {/* Operations */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">File Operations</h2>

          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 rounded-lg border border-white/5 bg-white/[0.02]">
              <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              <div>
                <h3 className="text-white font-medium">Upload</h3>
                <p className="text-white/50 text-sm">
                  Drag files into the browser or click Upload. Progress shown in real-time.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg border border-white/5 bg-white/[0.02]">
              <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <div>
                <h3 className="text-white font-medium">Download</h3>
                <p className="text-white/50 text-sm">
                  Right-click a file and select Download, or double-click to download.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg border border-white/5 bg-white/[0.02]">
              <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              <div>
                <h3 className="text-white font-medium">Create Folder</h3>
                <p className="text-white/50 text-sm">
                  Click the New Folder button to create a directory in the current location.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg border border-white/5 bg-white/[0.02]">
              <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              <div>
                <h3 className="text-white font-medium">Delete</h3>
                <p className="text-white/50 text-sm">
                  Right-click and select Delete. You&apos;ll be asked to confirm before deletion.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg border border-white/5 bg-white/[0.02]">
              <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              <div>
                <h3 className="text-white font-medium">Rename</h3>
                <p className="text-white/50 text-sm">
                  Right-click a file or folder and select Rename to change its name.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Transfer Info */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">Transfer Details</h2>

          <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02]">
            <div className="grid gap-3 text-sm">
              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-white/50">Chunk size</span>
                <span className="text-white font-mono">64 KB</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-white/50">Progress</span>
                <span className="text-white">Real-time percentage</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-white/50">Resume</span>
                <span className="text-white/50">Not supported (restart required)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer nav */}
        <div className="pt-8 border-t border-white/5 flex items-center justify-between">
          <Link
            href="/docs/ssh"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/60 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            SSH Terminal
          </Link>
          <Link
            href="/docs/magic-input"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/60 transition-colors text-sm"
          >
            Magic Input
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
