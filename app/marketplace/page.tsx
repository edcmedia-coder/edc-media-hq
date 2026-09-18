import React from 'react';
import { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Box, Layers, Cpu, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Marketplace — EDC Media HQ',
  description: 'Connectors, workflows, and modules across the EDC ecosystem.',
};

export default function MarketplacePage() {
  const modules = [
    {
      id: 'mod-01',
      title: 'Stripe Autonomous Reconciliation Engine',
      category: 'FINANCE / AUTOMATION',
      status: 'AVAILABLE',
      description: 'Zero-touch webhook reconciliation, chargeback notification routing, and discrepancy ledger auditing.',
      pillar: 'AUTOMATION',
    },
    {
      id: 'mod-02',
      title: 'Real-Time Paper Synthesis Pipeline',
      category: 'INTELLIGENCE / RESEARCH',
      status: 'AVAILABLE',
      description: 'Continuous arXiv & PubMed scraper with instant chapterized audio brief generator.',
      pillar: 'INTELLIGENCE',
    },
    {
      id: 'mod-03',
      title: 'BuildOS GitHub Action Scaffolder',
      category: 'DEVELOPER / COMPILER',
      status: 'AVAILABLE',
      description: 'Automatic generation of verified repository architectures and test beds directly from issues.',
      pillar: 'BUILD',
    },
    {
      id: 'mod-04',
      title: 'JARVIS Voice Interface Gateway',
      category: 'INTERFACE / SPEECH',
      status: 'PRIVATE PREVIEW',
      description: 'Ultra-low-latency bidirectional audio streaming connector for executive terminal control.',
      pillar: 'AUTOMATION',
    },
  ];

  return (
    <main className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="ECOSYSTEM MODULES"
        title="MARKETPLACE"
        subtitle="Verified connectors, autonomous workflows, and domain modules designed to plug directly into the EDC infrastructure."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {modules.map((mod) => (
          <div
            key={mod.id}
            className="p-6 rounded-[8px] bg-[#090B10] border border-white/[0.08] hover:border-[#5CE1E6]/40 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#69717F]">
                  {mod.category}
                </span>
                <Badge variant={mod.status === 'AVAILABLE' ? 'cyan' : 'violet'}>
                  {mod.status}
                </Badge>
              </div>

              <h3 className="font-display text-xl font-bold uppercase text-[#F4F7FA] mb-2">
                {mod.title}
              </h3>

              <p className="font-body text-sm text-[#A4ACB8] leading-relaxed mb-6">
                {mod.description}
              </p>
            </div>

            <Button href="/contact" variant="secondary" size="sm">
              REQUEST MODULE INTEGRATION →
            </Button>
          </div>
        ))}
      </div>
    </main>
  );
}
