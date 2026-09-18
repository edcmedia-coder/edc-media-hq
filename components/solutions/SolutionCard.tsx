'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Target, Workflow, Box, Compass } from 'lucide-react';
import { Solution } from '@/types';

interface SolutionCardProps {
  solution: Solution;
}

export function SolutionCard({ solution }: SolutionCardProps) {
  const getIcon = (slug: string) => {
    switch (slug) {
      case 'get-more-customers':
        return <Target className="w-5 h-5 text-[#5CE1E6]" />;
      case 'automate-operations':
        return <Workflow className="w-5 h-5 text-[#5CE1E6]" />;
      case 'build-a-product':
        return <Box className="w-5 h-5 text-[#7C6CFF]" />;
      case 'understand-your-market':
        return <Compass className="w-5 h-5 text-[#7C6CFF]" />;
      default:
        return <Target className="w-5 h-5 text-[#5CE1E6]" />;
    }
  };

  return (
    <Link
      href={solution.href}
      className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-[8px] bg-[#090B10] border border-white/[0.08] hover:border-[#5CE1E6]/40 active:border-[#5CE1E6]/60 active:scale-[0.99] touch-manipulation transition-all duration-200 hover:-translate-y-0.5"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-[6px] bg-[#0D1017] border border-white/[0.08] flex items-center justify-center group-hover:border-[#5CE1E6]/30 transition-colors">
            {getIcon(solution.slug)}
          </div>
          <span className="font-mono text-xs text-[#69717F] tracking-widest uppercase">
            PATHWAY {solution.number}
          </span>
        </div>

        <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-[#F4F7FA] group-hover:text-[#5CE1E6] transition-colors mb-2">
          {solution.title}
        </h3>

        <p className="font-body text-xs sm:text-sm text-[#A4ACB8] leading-relaxed mb-4">
          {solution.subtitle}
        </p>
      </div>

      <div className="pt-4 min-h-[44px] border-t border-white/[0.04] flex items-center justify-between text-xs font-mono text-[#69717F] group-hover:text-[#5CE1E6] transition-colors">
        <span>VIEW PATHWAY</span>
        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
