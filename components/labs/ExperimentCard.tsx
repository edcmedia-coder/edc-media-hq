'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, FlaskConical, Sparkles } from 'lucide-react';
import { Experiment } from '@/types';
import { Badge } from '@/components/ui/Badge';

interface ExperimentCardProps {
  experiment: Experiment;
}

export function ExperimentCard({ experiment }: ExperimentCardProps) {
  return (
    <Link
      href={experiment.href}
      className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-[8px] bg-[#090B10] border border-white/[0.08] hover:border-[#7C6CFF]/40 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(124,108,255,0.1)] hover:-translate-y-0.5 active:scale-[0.99] touch-manipulation"
    >
      <div>
        {/* Top Header: Experiment Index and Explicit Concept Badge */}
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-4">
          <div className="flex items-center gap-2 font-mono text-xs text-[#69717F]">
            <FlaskConical className="w-3.5 h-3.5 text-[#7C6CFF]" />
            <span>EXPERIMENT {experiment.number}</span>
          </div>
          <Badge variant="violet">
            {experiment.statusLabel}
          </Badge>
        </div>

        {/* Category */}
        <span className="font-mono text-[10px] text-[#69717F] uppercase tracking-widest block mb-2">
          {experiment.category}
        </span>

        {/* Title */}
        <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-[#F4F7FA] group-hover:text-white transition-colors mb-3">
          {experiment.title}
        </h3>

        {/* Narrative Description */}
        <p className="font-body text-xs sm:text-sm text-[#A4ACB8] leading-relaxed mb-5">
          {experiment.description}
        </p>

        {/* Goals Checklist */}
        <div className="space-y-2 mb-6">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#69717F] block">
            RESEARCH VECTORS:
          </span>
          {experiment.explorationGoals.map((goal, i) => (
            <div key={i} className="flex items-start gap-2 text-xs font-mono text-[#A4ACB8]">
              <span className="text-[#7C6CFF]">•</span>
              <span>{goal}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Link Indicator */}
      <div
        className="pt-4 min-h-[44px] border-t border-white/[0.06] flex items-center justify-between font-mono text-xs uppercase tracking-widest text-[#F4F7FA] group-hover:text-[#7C6CFF] transition-colors"
      >
        <span>VIEW CONCEPT</span>
        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-[#7C6CFF]" />
      </div>
    </Link>
  );
}
