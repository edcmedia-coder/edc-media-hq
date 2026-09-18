'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Terminal, Layers, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { SystemCore } from './SystemCore';

export function Hero() {
  return (
    <section className="relative pt-6 pb-14 sm:pt-12 sm:pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Cinematic Headline, Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 sm:space-y-8">
            {/* Eyebrow & Brand Telemetry Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] bg-[#0D1017] border border-white/[0.1] text-[11px] sm:text-xs font-mono tracking-[0.16em] sm:tracking-[0.2em] text-[#5CE1E6] max-w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] animate-pulse shrink-0" />
              <span className="truncate">EDC MEDIA HQ / 2026</span>
              <span className="text-white/[0.2]">|</span>
              <span className="text-[#A4ACB8] truncate">AI SYSTEMS</span>
            </div>

            {/* Cinematic Fluid Headline */}
            <h1 className="font-display font-extrabold text-[clamp(2.1rem,7.4vw,5.5rem)] leading-[1.03] tracking-tight text-[#F4F7FA] uppercase">
              BUILDING<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4F7FA] via-[#5CE1E6] to-[#7C6CFF]">
                INTELLIGENT
              </span><br />
              SYSTEMS.
            </h1>

            {/* Supporting Copy */}
            <p className="font-body text-base sm:text-lg md:text-xl text-[#A4ACB8] leading-relaxed max-w-xl">
              EDC Media builds intelligent software systems that turn ideas, information, and repetitive work into automated outcomes.
            </p>

            {/* Action Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
              <Button
                href="/products"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto text-center justify-center"
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                EXPLORE EDC
              </Button>

              <Button
                href="#ecosystem"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto text-center justify-center"
                iconRight={<Layers className="w-4 h-4 text-[#A4ACB8]" />}
              >
                SEE WHAT WE&apos;RE BUILDING
              </Button>
            </div>

            {/* Telemetry Indicator - Desktop placement */}
            <div className="hidden lg:block pt-4 w-full max-w-lg">
              <div className="p-4 rounded-[8px] bg-[#090B10] border border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5 mb-3 text-[11px] font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#5CE1E6] animate-pulse" />
                    <span className="text-[#F4F7FA] font-medium tracking-wider">EDC SYSTEM CORE</span>
                    <span className="text-[#69717F] text-[10px]">[INTERFACE]</span>
                  </div>
                  <span className="text-[#5CE1E6] font-semibold">● ONLINE</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
                  <div className="py-2 px-1.5 rounded-[4px] bg-[#0D1017] border border-white/[0.04]">
                    <span className="text-[#5CE1E6] block font-semibold tracking-wider">BUILD</span>
                    <span className="text-[#69717F] text-[9px]">Software & OS</span>
                  </div>
                  <div className="py-2 px-1.5 rounded-[4px] bg-[#0D1017] border border-white/[0.04]">
                    <span className="text-[#7C6CFF] block font-semibold tracking-wider">INTELLIGENCE</span>
                    <span className="text-[#69717F] text-[9px]">Research & Audio</span>
                  </div>
                  <div className="py-2 px-1.5 rounded-[4px] bg-[#0D1017] border border-white/[0.04]">
                    <span className="text-[#5CE1E6] block font-semibold tracking-wider">AUTOMATION</span>
                    <span className="text-[#69717F] text-[9px]">Autonomous Work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract EDC System Core Visual & Mobile Telemetry */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative mt-6 lg:mt-0 w-full">
            <SystemCore />

            {/* Telemetry Indicator - Mobile placement directly after System Core */}
            <div className="block lg:hidden mt-8 w-full max-w-md">
              <div className="p-4 rounded-[8px] bg-[#090B10] border border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5 mb-3 text-[11px] font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#5CE1E6] animate-pulse" />
                    <span className="text-[#F4F7FA] font-medium tracking-wider">EDC SYSTEM CORE</span>
                    <span className="text-[#69717F] text-[10px]">[INTERFACE]</span>
                  </div>
                  <span className="text-[#5CE1E6] font-semibold">● ONLINE</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
                  <div className="py-2 px-1.5 rounded-[4px] bg-[#0D1017] border border-white/[0.04]">
                    <span className="text-[#5CE1E6] block font-semibold tracking-wider">BUILD</span>
                    <span className="text-[#69717F] text-[9px]">Software & OS</span>
                  </div>
                  <div className="py-2 px-1.5 rounded-[4px] bg-[#0D1017] border border-white/[0.04]">
                    <span className="text-[#7C6CFF] block font-semibold tracking-wider">INTELLIGENCE</span>
                    <span className="text-[#69717F] text-[9px]">Research & Audio</span>
                  </div>
                  <div className="py-2 px-1.5 rounded-[4px] bg-[#0D1017] border border-white/[0.04]">
                    <span className="text-[#5CE1E6] block font-semibold tracking-wider">AUTOMATION</span>
                    <span className="text-[#69717F] text-[9px]">Autonomous Work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
