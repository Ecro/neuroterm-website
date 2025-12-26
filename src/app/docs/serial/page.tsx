import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Serial Port - NeuroTerm Docs',
  description: 'Connect to hardware via COM ports. Baud rates, flow control, DTR/RTS signals.',
};

export default function SerialPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
          <Link href="/docs" className="hover:text-zinc-300 transition-colors">
            Docs
          </Link>
          <span>/</span>
          <span className="text-zinc-400">Serial Port</span>
        </div>

        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">
          Serial Port
        </h1>
        <p className="text-zinc-400 text-lg mb-10">
          NeuroTerm provides native serial port access with full hardware control.
        </p>

        {/* Connection Settings */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">Connection Settings</h2>

          <div className="space-y-6">
            {/* Port Selection */}
            <div className="card p-5">
              <h3 className="text-white font-medium mb-2">Port</h3>
              <p className="text-zinc-400 text-sm mb-3">
                Select the COM port for your device. NeuroTerm auto-detects available ports.
              </p>
              <div className="p-3 rounded-lg bg-zinc-800 font-mono text-sm">
                <span className="text-zinc-500">Windows:</span> <span className="text-white">COM1, COM3, COM4...</span>
              </div>
            </div>

            {/* Baud Rate */}
            <div className="card p-5">
              <h3 className="text-white font-medium mb-2">Baud Rate</h3>
              <p className="text-zinc-400 text-sm mb-3">
                Communication speed in bits per second. Must match your device.
              </p>
              <div className="flex flex-wrap gap-2">
                {['9600', '19200', '38400', '57600', '115200', '230400', '460800', '921600'].map((rate) => (
                  <span
                    key={rate}
                    className={`px-3 py-1.5 rounded-lg text-sm font-mono ${
                      rate === '115200'
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'bg-zinc-800 text-zinc-400'
                    }`}
                  >
                    {rate}
                  </span>
                ))}
              </div>
              <p className="text-zinc-500 text-xs mt-3">
                115200 is the most common for modern devices.
              </p>
            </div>

            {/* Data Format */}
            <div className="card p-5">
              <h3 className="text-white font-medium mb-2">Data Format</h3>
              <p className="text-zinc-400 text-sm mb-4">
                Configure data bits, parity, and stop bits. The default 8N1 works for most devices.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-zinc-500 text-xs uppercase tracking-wide mb-2">Data Bits</div>
                  <div className="flex gap-2">
                    {['5', '6', '7', '8'].map((bits) => (
                      <span
                        key={bits}
                        className={`px-3 py-1.5 rounded text-sm font-mono ${
                          bits === '8' ? 'bg-zinc-800 text-white' : 'bg-zinc-800/50 text-zinc-500'
                        }`}
                      >
                        {bits}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-zinc-500 text-xs uppercase tracking-wide mb-2">Parity</div>
                  <div className="flex gap-2">
                    {['None', 'Odd', 'Even'].map((p) => (
                      <span
                        key={p}
                        className={`px-3 py-1.5 rounded text-sm ${
                          p === 'None' ? 'bg-zinc-800 text-white' : 'bg-zinc-800/50 text-zinc-500'
                        }`}
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-zinc-500 text-xs uppercase tracking-wide mb-2">Stop Bits</div>
                  <div className="flex gap-2">
                    {['1', '1.5', '2'].map((bits) => (
                      <span
                        key={bits}
                        className={`px-3 py-1.5 rounded text-sm font-mono ${
                          bits === '1' ? 'bg-zinc-800 text-white' : 'bg-zinc-800/50 text-zinc-500'
                        }`}
                      >
                        {bits}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Flow Control */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">Flow Control</h2>
          <p className="text-zinc-400 mb-4">
            Flow control prevents data loss when one device can&apos;t keep up with the other.
          </p>

          <div className="space-y-4">
            <div className="card p-4">
              <h3 className="text-white font-medium mb-1">None</h3>
              <p className="text-zinc-400 text-sm">
                No flow control. Suitable for most modern devices with adequate buffering.
              </p>
            </div>

            <div className="card p-4">
              <h3 className="text-white font-medium mb-1">Hardware (RTS/CTS)</h3>
              <p className="text-zinc-400 text-sm">
                Uses RTS and CTS lines. Faster and more reliable, but requires proper cabling.
              </p>
            </div>

            <div className="card p-4">
              <h3 className="text-white font-medium mb-1">Software (XON/XOFF)</h3>
              <p className="text-zinc-400 text-sm">
                Uses in-band control characters. Works with any cable but can&apos;t send binary data containing those characters.
              </p>
            </div>
          </div>
        </section>

        {/* Control Signals */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">Control Signals (DTR/RTS)</h2>
          <p className="text-zinc-400 mb-4">
            Hardware control signals used for device reset, bootloader entry, and more.
          </p>

          <div className="card p-5 mb-4">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-white font-medium mb-2">DTR (Data Terminal Ready)</h3>
                <p className="text-zinc-400 text-sm">
                  Indicates the terminal is ready. Often used to reset Arduino boards on connect.
                </p>
              </div>
              <div>
                <h3 className="text-white font-medium mb-2">RTS (Request To Send)</h3>
                <p className="text-zinc-400 text-sm">
                  Used for hardware flow control or as a GPIO for bootloader modes (ESP32).
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
            <div className="flex items-start gap-2">
              <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-sm">
                <p className="text-cyan-200 font-medium">Common Use Cases</p>
                <ul className="text-zinc-400 mt-2 space-y-1">
                  <li><strong className="text-white">Arduino:</strong> DTR toggles on connect to auto-reset</li>
                  <li><strong className="text-white">ESP32:</strong> DTR+RTS sequence enters bootloader</li>
                  <li><strong className="text-white">Raspberry Pi:</strong> No DTR needed for console access</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-12">
          <h2 className="text-xl font-medium text-white mb-4">Troubleshooting</h2>

          <div className="space-y-4">
            <div className="card p-4">
              <h3 className="text-white font-medium mb-2">Port not showing</h3>
              <p className="text-zinc-400 text-sm">
                Check Device Manager for driver issues. USB-to-serial adapters may need manufacturer drivers (FTDI, CH340, CP210x).
              </p>
            </div>

            <div className="card p-4">
              <h3 className="text-white font-medium mb-2">Garbled output</h3>
              <p className="text-zinc-400 text-sm">
                Baud rate mismatch. Try common rates: 9600, 115200, 57600. Check your device documentation.
              </p>
            </div>

            <div className="card p-4">
              <h3 className="text-white font-medium mb-2">Access denied</h3>
              <p className="text-zinc-400 text-sm">
                Another application may have the port open. Close other terminal programs or IDE serial monitors.
              </p>
            </div>

            <div className="card p-4">
              <h3 className="text-white font-medium mb-2">Device resets on connect</h3>
              <p className="text-zinc-400 text-sm">
                This is normal for Arduino boards (DTR triggers reset). Disable DTR in settings if you don&apos;t want this behavior.
              </p>
            </div>
          </div>
        </section>

        {/* Footer nav */}
        <div className="pt-8 border-t border-white/10 flex items-center justify-between">
          <Link
            href="/docs/quickstart"
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Quickstart
          </Link>
          <Link
            href="/docs/ssh"
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors text-sm"
          >
            SSH Terminal
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
