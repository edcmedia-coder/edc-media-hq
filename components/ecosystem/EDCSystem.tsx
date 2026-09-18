'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Layers, Cpu, Radio, Zap, ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { ECOSYSTEM_DATA } from '@/lib/data';

export function EDCSystem() {
  const [activeBranch, setActiveBranch] = useState<'ALL' | 'BUILD' | 'INTELLIGENCE' | 'AUTOMATION'>('ALL');

  return (
    <section id="ecosystem" className="relative py-16 sm:py-24 lg:py-32 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="ECOSYSTEM ARCHITECTURE"
          title="THE EDC SYSTEM"
          subtitle="One ecosystem. Multiple intelligent systems. One mission."
          align="center"
        />

        {/* Branch Filter Tabs (Accessible and tactile) */}
        <div
          role="tablist"
          aria-label="Filter ecosystem branches"
          className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12"
        >
          {(['ALL', 'BUILD', 'INTELLIGENCE', 'AUTOMATION'] as const).map((branch) => {
            const isSelected = activeBranch === branch;
            return (
              <button
                key={branch}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveBranch(branch)}
                className={`px-4 py-2 rounded-[4px] font-mono text-xs uppercase tracking-wider transition-all duration-150 cursor-pointer min-h-[44px] touch-manipulation active:scale-[0.98] flex items-center gap-2 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5CE1E6] ${
                  isSelected
                    ? branch === 'INTELLIGENCE'
                      ? 'bg-[#7C6CFF]/15 text-[#7C6CFF] border-[#7C6CFF]'
                      : 'bg-[#5CE1E6]/15 text-[#5CE1E6] border-[#5CE1E6]'
                    : 'bg-[#0D1017] text-[#A4ACB8] border-white/[0.08] hover:border-white/[0.2] hover:text-[#F4F7FA] active:bg-[#121620]'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isSelected
                      ? branch === 'INTELLIGENCE' ? 'bg-[#7C6CFF]' : 'bg-[#5CE1E6]'
                      : 'bg-white/[0.2]'
                  }`}
                  aria-hidden="true"
                />
                {branch}
              </button>
            );
          })}
        </div>

        {/* DESKTOP ARCHITECTURAL NETWORK VIEW (hidden on mobile/tablet) */}
        <div className="hidden lg:block">
          {/* Central Root Node */}
          <div className="flex flex-col items-center">
            <div className="relative px-8 py-4 rounded-[6px] bg-[#0D1017] border border-[#5CE1E6]/40 shadow-[0_0_30px_rgba(92,225,230,0.12)] text-center">
              <span className="font-mono text-[10px] tracking-[0.25em] text-[#5CE1E6] block uppercase mb-1">
                ECOSYSTEM APEX
              </span>
              <span className="font-display text-xl font-bold tracking-wider text-[#F4F7FA]">
                EDC MEDIA
              </span>
              <span className="font-mono text-[11px] text-[#69717F] block mt-0.5">
                edcmediahq.xyz
              </span>
            </div>

            {/* Downward Trunk SVG */}
            <div className="w-full max-w-4xl h-16 relative">
              <svg className="w-full h-full" viewBox="0 0 800 64" fill="none">
                <path
                  d="M 400 0 L 400 32 M 400 32 L 133 32 M 400 32 L 667 32 M 133 32 L 133 64 M 400 32 L 400 64 M 667 32 L 667 64"
                  stroke="rgba(255, 255, 255, 0.15)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <circle cx="400" cy="32" r="3" fill="#5CE1E6" />
                <circle cx="133" cy="32" r="3" fill="#5CE1E6" />
                <circle cx="667" cy="32" r="3" fill="#5CE1E6" />
              </svg>
            </div>
          </div>

          {/* Three Main Ecosystem Pillars */}
          <div className="grid grid-cols-3 gap-6">
            {ECOSYSTEM_DATA.map((pillar) => {
              const isDimmed = activeBranch !== 'ALL' && activeBranch !== pillar.name;
              const isViolet = pillar.name === 'INTELLIGENCE';

              return (
                <div
                  key={pillar.name}
                  className={`transition-all duration-300 ${
                    isDimmed ? 'opacity-30 pointer-events-none' : 'opacity-100'
                  }`}
                >
                  {/* Pillar Column Header Card */}
                  <div
                    className={`p-5 rounded-t-[8px] bg-[#090B10] border-t border-x ${
                      isViolet ? 'border-t-[#7C6CFF]/50 border-x-white/[0.08]' : 'border-t-[#5CE1E6]/50 border-x-white/[0.08]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`font-mono text-xs font-bold tracking-[0.2em] uppercase ${
                          isViolet ? 'text-[#7C6CFF]' : 'text-[#5CE1E6]'
                        }`}
                      >
                        {pillar.name}
                      </span>
                      <span className="font-mono text-[10px] text-[#69717F]">
                        PILLAR
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#F4F7FA]">
                      {pillar.tagline}
                    </h3>
                    <p className="font-body text-xs text-[#A4ACB8] mt-2 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Pillar Sub-Nodes */}
                  <div className="p-4 space-y-3 bg-[#0D1017] border border-white/[0.08] rounded-b-[8px]">
                    {pillar.nodes.map((node) => (
                      <Link
                        key={node.id}
                        href={node.href}
                        className="group block p-3.5 rounded-[6px] bg-[#090B10] border border-white/[0.06] hover:border-[#5CE1E6]/40 transition-all duration-200"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-display font-semibold text-sm text-[#F4F7FA] group-hover:text-[#5CE1E6] transition-colors">
                            {node.name}
                          </span>
                          <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-white/[0.04] text-[#69717F] border border-white/[0.04]">
                            {node.status}
                          </span>
                        </div>
                        <span className="font-mono text-[10px] text-[#69717F] block uppercase tracking-wider mb-1">
                          {node.type}
                        </span>
                        <p className="font-body text-xs text-[#A4ACB8] leading-relaxed">
                          {node.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE & TABLET VERTICAL STORYTELLING VIEW */}
        <div className="block lg:hidden">
          {/* Mobile Root Node */}
          <div className="p-5 rounded-[8px] bg-[#090B10] border border-[#5CE1E6]/30 mb-8 text-center">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#5CE1E6] block uppercase mb-1">
              ECOSYSTEM ROOT // CORE ARCHITECTURE
            </span>
            <h3 className="font-display text-2xl font-bold text-[#F4F7FA]">
              EDC MEDIA
            </h3>
            <p className="font-body text-xs text-[#A4ACB8] mt-1">
              Autonomous software, intelligence synthesis, and workflow operations.
            </p>
          </div>

          {/* Sequential Timeline & Pillars */}
          <div className="relative pl-6 sm:pl-8 border-l border-white/[0.12] space-y-12 ml-3 sm:ml-4">
            {ECOSYSTEM_DATA.map((pillar, idx) => {
              const isFilteredOut = activeBranch !== 'ALL' && activeBranch !== pillar.name;
              if (isFilteredOut) return null;

              const isViolet = pillar.name === 'INTELLIGENCE';

              return (
                <div key={pillar.name} className="relative">
                  {/* Step Node Dot on Timeline */}
                  <div
                    className={`absolute -left-[10.5px] top-1 w-5 h-5 rounded-full border-2 bg-[#050609] flex items-center justify-center ${
                      isViolet ? 'border-[#7C6CFF]' : 'border-[#5CE1E6]'
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isViolet ? 'bg-[#7C6CFF]' : 'bg-[#5CE1E6]'
                      }`}
                    />
                  </div>

                  {/* Pillar Narrative Header */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2">
                      <span
                        className={`font-mono text-xs font-bold tracking-widest uppercase ${
                          isViolet ? 'text-[#7C6CFF]' : 'text-[#5CE1E6]'
                        }`}
                      >
                        {`0${idx + 1} // ${pillar.name}`}
                      </span>
                    </div>
                    <h4 className="font-display text-xl font-bold text-[#F4F7FA] mt-1">
                      {pillar.tagline}
                    </h4>
                    <p className="font-body text-xs sm:text-sm text-[#A4ACB8] mt-1.5 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Pillar Sub-Nodes */}
                  <div className="space-y-3">
                    {pillar.nodes.map((node) => (
                      <Link
                        key={node.id}
                        href={node.href}
                        className="block p-4 rounded-[6px] bg-[#0D1017] border border-white/[0.08] active:border-[#5CE1E6]/40 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-display text-base font-bold text-[#F4F7FA]">
                            {node.name}
                          </span>
                          <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-white/[0.04] text-[#A4ACB8] border border-white/[0.06]">
                            {node.status}
                          </span>
                        </div>
                        <div className="font-mono text-[10px] text-[#69717F] uppercase tracking-wider mb-2">
                          {node.type}
                        </div>
                        <p className="font-body text-xs text-[#A4ACB8] leading-relaxed mb-3">
                          {node.description}
                        </p>
                        <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#5CE1E6]">
                          <span>EXPLORE COMPONENT</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
