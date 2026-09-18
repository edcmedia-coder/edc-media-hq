import React from 'react';
import Link from 'next/link';
import { Shield, Cpu, Terminal, ArrowUpRight } from 'lucide-react';
import { EDC_META } from '@/lib/data';

export function SiteFooter() {
  const currentYear = 2026;

  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-[#050609] text-[#F4F7FA] pt-16 pb-12 overflow-hidden">
      {/* Decorative subtle ambient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#5CE1E6]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 mb-16">
          {/* Brand & Purpose Column */}
          <div className="md:col-span-5 space-y-6">
            <Link
              href="/"
              className="inline-flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#5CE1E6] rounded-[4px]"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-[4px] bg-[#0D1017] border border-white/[0.15]">
                <div className="w-2 h-2 rounded-[2px] bg-[#5CE1E6] shadow-[0_0_8px_#5CE1E6]" />
              </div>
              <span className="font-display font-bold text-xl tracking-wider text-[#F4F7FA]">
                EDC MEDIA
              </span>
            </Link>

            <p className="font-body text-sm sm:text-base text-[#A4ACB8] leading-relaxed max-w-sm">
              Building intelligent systems that turn ideas, information, and repetitive work into automated outcomes.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-[4px] bg-[#0D1017] border border-white/[0.08] text-xs font-mono text-[#69717F]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] animate-pulse" />
                <span>PRIMARY NODE: edcmediahq.xyz</span>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Core Systems */}
            <div className="space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#F4F7FA] font-semibold">
                SYSTEMS
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/products"
                    className="text-[#A4ACB8] hover:text-[#5CE1E6] transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions"
                    className="text-[#A4ACB8] hover:text-[#5CE1E6] transition-colors"
                  >
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/labs"
                    className="text-[#A4ACB8] hover:text-[#5CE1E6] transition-colors flex items-center gap-1.5"
                  >
                    <span>Labs</span>
                    <span className="text-[10px] font-mono px-1 py-0.2 rounded bg-[#7C6CFF]/15 text-[#7C6CFF] border border-[#7C6CFF]/30">
                      R&D
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/intelligence"
                    className="text-[#A4ACB8] hover:text-[#5CE1E6] transition-colors"
                  >
                    Intelligence
                  </Link>
                </li>
              </ul>
            </div>

            {/* Infrastructure & Marketplace */}
            <div className="space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#F4F7FA] font-semibold">
                PLATFORM
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/buildos"
                    className="text-[#A4ACB8] hover:text-[#5CE1E6] transition-colors flex items-center gap-1"
                  >
                    <span>BuildOS</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#69717F]" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/marketplace"
                    className="text-[#A4ACB8] hover:text-[#5CE1E6] transition-colors"
                  >
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/conversion-engine"
                    className="text-[#A4ACB8] hover:text-[#5CE1E6] transition-colors"
                  >
                    Conversion Engine
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/jarvis"
                    className="text-[#A4ACB8] hover:text-[#5CE1E6] transition-colors"
                  >
                    JARVIS Command
                  </Link>
                </li>
              </ul>
            </div>

            {/* Headquarters & Company */}
            <div className="space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#F4F7FA] font-semibold">
                HEADQUARTERS
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="text-[#A4ACB8] hover:text-[#5CE1E6] transition-colors py-1 min-h-[36px] sm:min-h-0 flex items-center touch-manipulation"
                  >
                    About EDC
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-[#A4ACB8] hover:text-[#5CE1E6] transition-colors py-1 min-h-[36px] sm:min-h-0 flex items-center touch-manipulation"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-[#A4ACB8] hover:text-[#5CE1E6] transition-colors py-1 min-h-[36px] sm:min-h-0 flex items-center touch-manipulation"
                  >
                    Privacy Protocol
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-[#A4ACB8] hover:text-[#5CE1E6] transition-colors py-1 min-h-[36px] sm:min-h-0 flex items-center touch-manipulation"
                  >
                    Terms of Access
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & System Identity */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#69717F]">
          <div className="flex flex-wrap items-center gap-2">
            <span>© {currentYear} EDC MEDIA.</span>
            <span className="text-white/[0.2]">/</span>
            <span className="text-[#A4ACB8]">EDC MEDIA HQ</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <span className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-[#5CE1E6]" />
              ARCHITECTURE V1.0
            </span>
            <span className="text-white/[0.2]">•</span>
            <span>OBSIDIAN INTELLIGENCE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
