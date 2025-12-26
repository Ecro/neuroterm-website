'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

function DemoVideo() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasVideo, setHasVideo] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Play video when it becomes visible
  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay failed, user interaction required
      });
    }
  }, [isVisible]);

  return (
    <div ref={containerRef} className="mt-16 relative max-w-3xl mx-auto group">
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-emerald-500/20 to-cyan-500/20 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -inset-px bg-gradient-to-b from-white/15 to-white/5 rounded-xl" />

      <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-2xl">
        {hasVideo ? (
          <>
            {/* Video Player */}
            {isVisible ? (
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto"
                poster="/demo-poster.jpg"
                onError={() => setHasVideo(false)}
              >
                <source src="/demo.webm" type="video/webm" />
                <source src="/demo.mp4" type="video/mp4" />
              </video>
            ) : (
              /* Poster/Thumbnail before video loads */
              <div className="relative">
                <img
                  src="/demo-poster.jpg"
                  alt="NeuroTerm Demo"
                  className="w-full h-auto"
                  onError={() => setHasVideo(false)}
                />
                {/* Play indicator overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          /* Fallback: CSS Terminal Preview */
          <div className="bg-zinc-900/95 backdrop-blur-xl">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              <span className="ml-3 text-white/30 text-xs font-mono">COM3 — 115200 baud</span>
            </div>

            {/* Terminal Content - Magic Input Demo */}
            <div className="p-6 font-mono text-sm text-left min-h-[200px]">
              <div className="text-white/60">root@imx8mp:~# </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-cyan-400">@</span>
                <span className="text-white/80">&quot;turn on the status LED&quot;</span>
              </div>
              <div className="mt-3 p-3 rounded-lg bg-white/[0.06] border border-emerald-500/30">
                <div className="text-emerald-400 text-xs mb-2 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                  Suggested command:
                </div>
                <div className="text-white font-medium">echo 1 &gt; /sys/class/gpio/gpio147/value</div>
                <div className="text-white/40 text-xs mt-1 flex items-center gap-1.5">
                  <svg className="w-3 h-3 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                  <span>GPIO5_IO19 (pin 147) is STATUS_LED — from your datasheet</span>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs">
                <span className="px-2 py-1 rounded bg-white/12 text-white/70 border border-white/10">↵ Insert</span>
                <span className="px-2 py-1 rounded bg-white/[0.06] text-white/50">Copy</span>
                <span className="px-2 py-1 rounded bg-white/[0.06] text-white/50">Edit</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#09090b]" />
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-cyan-500/25 via-transparent to-emerald-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24 pb-16">
        {/* Launch Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/40 bg-emerald-500/15 mb-8 shadow-lg shadow-emerald-500/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-300 text-sm font-medium">50% off for the first 100 users</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 text-white leading-tight">
          AI-Powered Terminal
          <br />
          <span className="gradient-text">That Understands You</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/50 mb-10 max-w-2xl mx-auto leading-relaxed">
          AI-powered serial & SSH terminal. Ask your datasheets. Debug faster.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Link
            href="/download"
            className="px-8 py-3.5 btn-primary"
          >
            Download Free
          </Link>
          <Link
            href="/pricing"
            className="px-8 py-3.5 btn-accent"
          >
            Buy Pro — $19
          </Link>
        </div>

        {/* Trust line */}
        <p className="text-white/40 text-sm">
          Your proprietary code never leaves your machine. No API keys. No subscriptions.
        </p>

        {/* Demo Video / Terminal Preview */}
        <DemoVideo />
      </div>
    </section>
  );
}
