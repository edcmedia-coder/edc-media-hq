import React from 'react';
import Link from 'next/link';
import { ArrowRight, FlaskConical } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ExperimentCard } from './ExperimentCard';
import { EXPERIMENTS } from '@/lib/data';

export function LabsPreview() {
  return (
    <section id="labs" className="relative py-16 sm:py-24 lg:py-32 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14">
          <SectionHeader
            eyebrow="R&D LABORATORY"
            title="EDC LABS"
            subtitle="WHERE IDEAS BECOME PRODUCTS. Rigorous technological explorations into autonomous agents, neural synthesis, and cognitive architectures."
            className="mb-0 md:mb-0"
          />

          <Link
            href="/labs"
            className="hidden sm:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#7C6CFF] hover:text-[#9284ff] mt-4 md:mt-0 transition-colors"
          >
            <span>ALL LAB EXPLORATIONS</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Experiment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EXPERIMENTS.map((exp) => (
            <ExperimentCard key={exp.id} experiment={exp} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/labs"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#7C6CFF]"
          >
            <span>ALL LAB EXPLORATIONS</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
