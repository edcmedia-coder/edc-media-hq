import React from 'react';
import { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, Cpu, Terminal, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About — EDC Media HQ',
  description: 'EDC Media builds intelligent software systems that turn ideas, information, and repetitive work into automated outcomes.',
};

export default function AboutPage() {
  return (
    <main className="py-12 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="HEADQUARTERS & MISSION"
        title="ABOUT EDC MEDIA"
        subtitle="We build AI software, intelligent automation, and systems designed to turn ideas into outcomes."
      />

      {/* Narrative Section */}
      <div className="space-y-12 mb-16">
        <div className="p-8 rounded-[8px] bg-[#090B10] border border-white/[0.08]">
          <h2 className="font-display text-2xl font-bold text-[#F4F7FA] mb-4">
            The Mission
          </h2>
          <p className="font-body text-base sm:text-lg text-[#A4ACB8] leading-relaxed mb-4">
            Modern enterprises and creators are burdened with extraordinary friction: manual reconciliations, fragmented tools, information overload, and repetitive coordination.
          </p>
          <p className="font-body text-base sm:text-lg text-[#F4F7FA] leading-relaxed">
            «EDC Media builds intelligent software systems that turn ideas, information, and repetitive work into automated outcomes.»
          </p>
        </div>

        {/* Three Pillars */}
        <div>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[#5CE1E6] mb-6">
            CORE FOUNDATIONAL PILLARS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-[8px] bg-[#090B10] border border-white/[0.08]">
              <span className="font-mono text-xs text-[#5CE1E6] block font-bold mb-2">
                01 // BUILD
              </span>
              <h3 className="font-display text-lg font-bold text-[#F4F7FA] mb-2">
                Software & Infrastructure
              </h3>
              <p className="font-body text-xs text-[#A4ACB8] leading-relaxed">
                We design AI-native development compilers, conversion engines, and autonomous software platforms that compress build cycles.
              </p>
            </div>

            <div className="p-6 rounded-[8px] bg-[#090B10] border border-white/[0.08]">
              <span className="font-mono text-xs text-[#7C6CFF] block font-bold mb-2">
                02 // INTELLIGENCE
              </span>
              <h3 className="font-display text-lg font-bold text-[#F4F7FA] mb-2">
                Information to Knowledge
              </h3>
              <p className="font-body text-xs text-[#A4ACB8] leading-relaxed">
                We transform complex research, empirical evidence, and dynamic datasets into high-fidelity synthesized audio and structured insights.
              </p>
            </div>

            <div className="p-6 rounded-[8px] bg-[#090B10] border border-white/[0.08]">
              <span className="font-mono text-xs text-[#5CE1E6] block font-bold mb-2">
                03 // AUTOMATION
              </span>
              <h3 className="font-display text-lg font-bold text-[#F4F7FA] mb-2">
                Autonomous Workflows
              </h3>
              <p className="font-body text-xs text-[#A4ACB8] leading-relaxed">
                We eliminate repetitive toil by replacing manual handoffs with resilient cognitive workflows and executive command centers.
              </p>
            </div>
          </div>
        </div>

        {/* Operating Philosophy */}
        <div className="p-8 rounded-[8px] bg-[#0D1017] border border-white/[0.08]">
          <h3 className="font-mono text-xs uppercase tracking-widest text-[#5CE1E6] mb-3">
            TECHNICAL DISCIPLINE
          </h3>
          <p className="font-body text-base text-[#A4ACB8] leading-relaxed mb-4">
            We reject frivolous software patterns. We do not invent fake metrics, build superficial wrappers, or deploy fragile automations. Every system produced by EDC Media is engineered with mathematical and operational rigor.
          </p>
          <div className="flex items-center gap-2 font-mono text-xs text-[#69717F]">
            <ShieldCheck className="w-4 h-4 text-[#5CE1E6]" />
            <span>PRIMARY DOMAIN: edcmediahq.xyz</span>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Button href="/contact" variant="primary" size="lg">
          START A CONVERSATION WITH EDC
        </Button>
      </div>
    </main>
  );
}
