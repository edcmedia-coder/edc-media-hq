import React from 'react';
import { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SolutionCard } from '@/components/solutions/SolutionCard';
import { SOLUTIONS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Solutions — EDC Media HQ',
  description: 'Targeted systems mapped to customer acquisition, operational automation, software creation, and market intelligence.',
};

export default function SolutionsPage() {
  return (
    <main className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="OBJECTIVE FRAMEWORK"
        title="SOLUTIONS"
        subtitle="Explore purpose-engineered pathways configured for specific operational goals and enterprise transformations."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SOLUTIONS.map((solution) => (
          <SolutionCard key={solution.id} solution={solution} />
        ))}
      </div>
    </main>
  );
}
