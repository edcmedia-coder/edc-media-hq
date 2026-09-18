import React from 'react';
import { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Sparkles, Radio, FileText, Headphones, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Intelligence — EDC Media HQ',
  description: 'EDC Intelligence systems transform information and research into useful intelligence.',
};

export default function IntelligencePage() {
  return (
    <main className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="PILLAR II // COGNITION"
        title="EDC INTELLIGENCE"
        subtitle="EDC transforms high-volume research, academic literature, market signals, and unstructured data into executive-grade listening experiences and structured insights."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Intelligence System 1 */}
        <div className="p-8 rounded-[8px] bg-[#090B10] border border-white/[0.08] hover:border-[#7C6CFF]/40 transition-colors flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-[#7C6CFF] tracking-widest uppercase">
                SYSTEM // AUDIO AI
              </span>
              <Badge variant="cyan">PRODUCTION</Badge>
            </div>
            <h3 className="font-display text-2xl font-bold uppercase text-[#F4F7FA] mb-3">
              EDC Audio Intelligence
            </h3>
            <p className="font-body text-sm text-[#A4ACB8] leading-relaxed mb-6">
              Transforms dense documents, technical whitepapers, and operational reports into calibrated multi-speaker audio briefings designed for rapid executive consumption.
            </p>

            <ul className="space-y-2 text-xs font-mono text-[#69717F] mb-6">
              <li className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-[#7C6CFF]" />
                <span>Multi-cadence conversational audio generation</span>
              </li>
              <li className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#7C6CFF]" />
                <span>Context-aware chapterization and citation indexing</span>
              </li>
            </ul>
          </div>

          <Button href="/products/audio-intelligence" variant="secondary" size="md">
            EXPLORE AUDIO INTELLIGENCE →
          </Button>
        </div>

        {/* Intelligence System 2 */}
        <div id="signals" className="p-8 rounded-[8px] bg-[#090B10] border border-white/[0.08] hover:border-[#7C6CFF]/40 transition-colors flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-[#7C6CFF] tracking-widest uppercase">
                SYSTEM // SIGNALS
              </span>
              <Badge variant="subtle">INTERNAL ENGINE</Badge>
            </div>
            <h3 className="font-display text-2xl font-bold uppercase text-[#F4F7FA] mb-3">
              Signals & Trend Radar
            </h3>
            <p className="font-body text-sm text-[#A4ACB8] leading-relaxed mb-6">
              Continuous monitoring infrastructure synthesizing technological discoveries, patent grants, developer commits, and user sentiment clusters into predictive trend trajectories.
            </p>

            <ul className="space-y-2 text-xs font-mono text-[#69717F] mb-6">
              <li className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-[#7C6CFF]" />
                <span>Real-time technical pattern anomaly detection</span>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#7C6CFF]" />
                <span>Synthesized executive briefings on emergent frontiers</span>
              </li>
            </ul>
          </div>

          <Button href="/contact" variant="ghost" size="md">
            REQUEST RESEARCH CLEARANCE →
          </Button>
        </div>
      </div>
    </main>
  );
}
