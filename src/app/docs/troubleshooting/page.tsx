import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Troubleshooting - NeuroTerm Docs',
  description: 'Common issues and solutions for NeuroTerm. Serial, SSH, AI, and performance fixes.',
};

export default function TroubleshootingPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-white/40 mb-8">
          <Link href="/docs" className="hover:text-white/60 transition-colors">
            Docs
          </Link>
          <span>/</span>
          <span className="text-white/60">Troubleshooting</span>
        </div>

        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">
          Troubleshooting
        </h1>
        <p className="text-white/50 text-lg mb-10">
          Solutions to common issues you might encounter.
        </p>

        {/* Serial Issues */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">Serial Connection</h2>

          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
              <h3 className="text-white font-medium mb-2">Port not appearing in list</h3>
              <ul className="text-white/50 text-sm space-y-2">
                <li>• Check if the device is properly connected via USB</li>
                <li>• Open Device Manager and look for COM ports under &quot;Ports&quot;</li>
                <li>• Install drivers for your USB-to-serial adapter (FTDI, CH340, CP210x)</li>
                <li>• Try a different USB port or cable</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
              <h3 className="text-white font-medium mb-2">Garbled or corrupted output</h3>
              <ul className="text-white/50 text-sm space-y-2">
                <li>• Baud rate mismatch — try 9600, 115200, or check device docs</li>
                <li>• Wrong data format — most devices use 8N1 (8 data bits, no parity, 1 stop bit)</li>
                <li>• Electrical interference — use shorter or shielded cables</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
              <h3 className="text-white font-medium mb-2">Access denied error</h3>
              <ul className="text-white/50 text-sm space-y-2">
                <li>• Another app has the port open (Arduino IDE, PuTTY, etc.)</li>
                <li>• Close other serial applications and try again</li>
                <li>• Unplug and replug the device</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
              <h3 className="text-white font-medium mb-2">Device resets when connecting</h3>
              <ul className="text-white/50 text-sm space-y-2">
                <li>• Normal for Arduino boards (DTR triggers auto-reset)</li>
                <li>• Disable DTR in connection settings if unwanted</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SSH Issues */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">SSH Connection</h2>

          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
              <h3 className="text-white font-medium mb-2">Connection refused</h3>
              <ul className="text-white/50 text-sm space-y-2">
                <li>• Check if SSH server is running on target: <code className="text-cyan-300">systemctl status sshd</code></li>
                <li>• Verify port number (default 22)</li>
                <li>• Check firewall rules on target machine</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
              <h3 className="text-white font-medium mb-2">Authentication failed</h3>
              <ul className="text-white/50 text-sm space-y-2">
                <li>• Verify username and password</li>
                <li>• For key auth: ensure private key file is correct format (OpenSSH)</li>
                <li>• Check key permissions and passphrase</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
              <h3 className="text-white font-medium mb-2">Host key verification failed</h3>
              <ul className="text-white/50 text-sm space-y-2">
                <li>• Server fingerprint changed (reinstall, IP reuse)</li>
                <li>• Remove old entry from known hosts and reconnect</li>
                <li>• Verify you&apos;re connecting to the correct server</li>
              </ul>
            </div>
          </div>
        </section>

        {/* AI Issues */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">AI / Magic Input</h2>

          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
              <h3 className="text-white font-medium mb-2">Connection to Ollama failed</h3>
              <ul className="text-white/50 text-sm space-y-2">
                <li>• Check Ollama is running (look for llama icon in system tray)</li>
                <li>• Run <code className="text-cyan-300">ollama serve</code> manually in terminal</li>
                <li>• Verify endpoint in settings: <code className="text-cyan-300">http://localhost:11434</code></li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
              <h3 className="text-white font-medium mb-2">Model not found</h3>
              <ul className="text-white/50 text-sm space-y-2">
                <li>• Pull the model first: <code className="text-cyan-300">ollama pull llama3.2</code></li>
                <li>• Check model name matches exactly in settings</li>
                <li>• Run <code className="text-cyan-300">ollama list</code> to see available models</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
              <h3 className="text-white font-medium mb-2">Very slow responses</h3>
              <ul className="text-white/50 text-sm space-y-2">
                <li>• Use a smaller model: <code className="text-cyan-300">qwen2.5:1.5b</code> or <code className="text-cyan-300">llama3.2:1b</code></li>
                <li>• Close other GPU-intensive applications</li>
                <li>• If using CPU only, expect slower responses</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
              <h3 className="text-white font-medium mb-2">Poor command suggestions</h3>
              <ul className="text-white/50 text-sm space-y-2">
                <li>• Be more specific in your request</li>
                <li>• Import relevant datasheets to RAG for context</li>
                <li>• Try a more capable model like <code className="text-cyan-300">llama3.2</code> or <code className="text-cyan-300">mistral</code></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Performance */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">Performance</h2>

          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
              <h3 className="text-white font-medium mb-2">Terminal feels laggy</h3>
              <ul className="text-white/50 text-sm space-y-2">
                <li>• Check GPU acceleration is enabled in settings</li>
                <li>• Reduce scrollback buffer size if very large</li>
                <li>• Update graphics drivers</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
              <h3 className="text-white font-medium mb-2">High memory usage</h3>
              <ul className="text-white/50 text-sm space-y-2">
                <li>• Large scrollback buffers consume memory</li>
                <li>• Clear terminal history periodically</li>
                <li>• Close unused connection tabs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Still stuck */}
        <section className="mb-12">
          <div className="p-5 rounded-xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-white font-medium">Still stuck?</p>
                <p className="text-white/60 text-sm mt-1 mb-3">
                  Report a bug, request a feature, or contact us directly.
                </p>
                <Link
                  href="/support"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/20 transition-colors"
                >
                  Get Support
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer nav */}
        <div className="pt-8 border-t border-white/5 flex items-center justify-between">
          <Link
            href="/docs/shortcuts"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/60 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Keyboard Shortcuts
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/60 transition-colors text-sm"
          >
            Back to Docs
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
