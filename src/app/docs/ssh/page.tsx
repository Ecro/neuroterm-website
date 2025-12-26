import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SSH Terminal - NeuroTerm Docs',
  description: 'Connect to remote servers via SSH. Password and key authentication, PTY support.',
};

export default function SSHPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-white/40 mb-8">
          <Link href="/docs" className="hover:text-white/60 transition-colors">
            Docs
          </Link>
          <span>/</span>
          <span className="text-white/60">SSH Terminal</span>
        </div>

        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">
          SSH Terminal
        </h1>
        <p className="text-white/50 text-lg mb-10">
          Secure shell access to remote servers with full PTY support.
        </p>

        {/* Connection */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">Connecting</h2>
          <p className="text-white/50 mb-4">
            Create a new SSH connection from the connection panel. Enter your server details:
          </p>

          <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02]">
            <div className="grid gap-4 text-sm">
              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-white/50">Host</span>
                <code className="text-white font-mono">192.168.1.100</code>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-white/50">Port</span>
                <code className="text-white font-mono">22</code>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-white/50">Username</span>
                <code className="text-white font-mono">root</code>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-white/50">Authentication</span>
                <span className="text-white">Password or SSH Key</span>
              </div>
            </div>
          </div>
        </section>

        {/* Authentication */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">Authentication Methods</h2>

          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
              <h3 className="text-white font-medium mb-2">Password</h3>
              <p className="text-white/50 text-sm">
                Enter your password when prompted. Passwords are not stored.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
              <h3 className="text-white font-medium mb-2">SSH Key</h3>
              <p className="text-white/50 text-sm">
                Select your private key file (OpenSSH format). Supports ed25519, RSA, and ECDSA keys.
                Passphrase-protected keys are supported.
              </p>
            </div>
          </div>
        </section>

        {/* Known Hosts */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">Known Hosts</h2>
          <p className="text-white/50 mb-4">
            NeuroTerm verifies server fingerprints to prevent man-in-the-middle attacks.
          </p>

          <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
            <div className="flex items-start gap-2">
              <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-sm">
                <p className="text-cyan-200 font-medium">First connection</p>
                <p className="text-white/60 mt-1">
                  When connecting to a new server, you&apos;ll be asked to verify its fingerprint.
                  Once accepted, it&apos;s saved to the known hosts file.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">Features</h2>

          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/[0.02]">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white/70">Full PTY support with terminal resize</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/[0.02]">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white/70">Magic Input works over SSH</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/[0.02]">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white/70">Integrated SFTP file browser</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/[0.02]">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white/70">Pattern highlighting on remote output</span>
            </div>
          </div>
        </section>

        {/* Footer nav */}
        <div className="pt-8 border-t border-white/5 flex items-center justify-between">
          <Link
            href="/docs/serial"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/60 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Serial Port
          </Link>
          <Link
            href="/docs/sftp"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/60 transition-colors text-sm"
          >
            SFTP
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
