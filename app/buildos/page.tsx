import React from 'react';
import { Metadata } from 'next';
import { ArrowRight, Terminal, Cpu, FileCode2, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { BuildOSPreview } from '@/components/buildos/BuildOSPreview';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'EDC BuildOS — Idea-to-Software Blueprint Engine',
  description: 'Turn five words into a complete software blueprint. EDC BuildOS transforms product ideas into structured specifications and build sequences.',
};

export default function BuildOSPage() {
  return (
    <main className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="ENGINEERING COMPILER"
        title="EDC BUILDoS"
        subtitle="Transforms rough product concepts into structured requirements, production schemas, task dependency graphs, and build sequences."
      />

      {/* BuildOS Flow Interactive Showcase */}
      <div className="mb-16">
        <BuildOSPreview />
      </div>

      {/* Deep Dive Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="p-6 rounded-[8px] bg-[#090B10] border border-white/[0.08]">
          <span className="font-mono text-xs text-[#5CE1E6] block mb-2 font-bold">
            01 // SPECIFICATION
          </span>
          <h3 className="font-display text-lg font-bold text-[#F4F7FA] mb-2">
            Deterministic Requirements
          </h3>
          <p className="font-body text-xs text-[#A4ACB8] leading-relaxed">
            Eliminates ambiguity by breaking down user requests into verifiable functional requirements, security perimeters, and boundary constraints.
          </p>
        </div>

        <div className="p-6 rounded-[8px] bg-[#090B10] border border-white/[0.08]">
          <span className="font-mono text-xs text-[#5CE1E6] block mb-2 font-bold">
            02 // TOPOLOGY
          </span>
          <h3 className="font-display text-lg font-bold text-[#F4F7FA] mb-2">
            Architectural Schematics
          </h3>
          <p className="font-body text-xs text-[#A4ACB8] leading-relaxed">
            Generates typed database models, API contracts, infrastructure diagrams, and third-party dependency declarations.
          </p>
        </div>

        <div className="p-6 rounded-[8px] bg-[#090B10] border border-white/[0.08]">
          <span className="font-mono text-xs text-[#5CE1E6] block mb-2 font-bold">
            03 // EXECUTION
          </span>
          <h3 className="font-display text-lg font-bold text-[#F4F7FA] mb-2">
            DAG-Sequenced Build Queue
          </h3>
          <p className="font-body text-xs text-[#A4ACB8] leading-relaxed">
            Structures engineering steps in strict topological order to avoid circular dependencies and guarantee smooth builds.
          </p>
        </div>
      </div>

      {/* Final Action */}
      <div className="p-8 rounded-[8px] bg-[#0D1017] border border-[#5CE1E6]/30 text-center max-w-2xl mx-auto">
        <h3 className="font-display text-2xl font-bold text-[#F4F7FA] mb-2">
          Ready to build with BuildOS?
        </h3>
        <p className="font-body text-sm text-[#A4ACB8] mb-6">
          Integrate the BuildOS compiler into your internal development infrastructure or work with EDC architects.
        </p>
        <Button href="/contact" variant="primary" size="lg">
          CONNECT WITH BUILDoS TEAM
        </Button>
      </div>
    </main>
  );
}
