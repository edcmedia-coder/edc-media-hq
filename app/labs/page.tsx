import React from 'react';
import { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ExperimentCard } from '@/components/labs/ExperimentCard';
import { EXPERIMENTS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Labs — EDC Media HQ',
  description: 'EDC Labs: Where ideas become products. Conceptual explorations and advanced cognitive architectures.',
};

export default function LabsPage() {
  return (
    <main className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="R&D LABORATORY"
        title="EDC LABS"
        subtitle="WHERE IDEAS BECOME PRODUCTS. Conceptual research into autonomous agents, neural synthesis, and cognitive software architectures. All initiatives below are explicitly conceptual explorations."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {EXPERIMENTS.map((experiment) => (
          <ExperimentCard key={experiment.id} experiment={experiment} />
        ))}
      </div>
    </main>
  );
}
