import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SolutionCard } from './SolutionCard';
import { SOLUTIONS } from '@/lib/data';

export function SolutionsSection() {
  return (
    <section id="solutions" className="relative py-16 sm:py-24 lg:py-32 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="OBJECTIVE NAVIGATION"
          title="WHAT ARE YOU TRYING TO ACCOMPLISH?"
          subtitle="Explore tailored systems mapped directly to your core operational objectives."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {SOLUTIONS.map((solution) => (
            <SolutionCard key={solution.id} solution={solution} />
          ))}
        </div>
      </div>
    </section>
  );
}
