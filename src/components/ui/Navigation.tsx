'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-emerald-400 flex items-center justify-center">
              <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 17l6-6-6-6M12 19h8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-semibold text-white group-hover:text-white/90 transition-colors">
              NeuroTerm
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <Link href="/features" className="px-4 py-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 text-sm">
              Features
            </Link>
            <Link href="/pricing" className="px-4 py-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 text-sm">
              Pricing
            </Link>
            <Link href="/docs" className="px-4 py-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 text-sm">
              Docs
            </Link>
            <Link href="/support" className="px-4 py-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 text-sm">
              Support
            </Link>
            <div className="ml-4">
              <Link
                href="/download"
                className="px-4 py-2 text-sm btn-primary"
              >
                Download
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white/60 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/5">
            <div className="flex flex-col gap-1">
              <Link href="/features" className="px-4 py-3 text-white/60 hover:text-white text-sm">
                Features
              </Link>
              <Link href="/pricing" className="px-4 py-3 text-white/60 hover:text-white text-sm">
                Pricing
              </Link>
              <Link href="/docs" className="px-4 py-3 text-white/60 hover:text-white text-sm">
                Docs
              </Link>
              <Link href="/support" className="px-4 py-3 text-white/60 hover:text-white text-sm">
                Support
              </Link>
              <div className="px-4 pt-4">
                <Link
                  href="/download"
                  className="block px-4 py-2 text-sm text-center btn-primary"
                >
                  Download
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
