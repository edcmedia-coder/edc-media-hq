import React from 'react';
import { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';

export const metadata: Metadata = {
  title: 'Terms of Access — EDC Media HQ',
  description: 'Operating principles and terms of access for EDC Media systems and software blueprints.',
};

export default function TermsPage() {
  return (
    <main className="py-12 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="LEGAL FRAMEWORK"
        title="TERMS OF ACCESS"
        subtitle="Operational standards and terms governing access to EDC Media systems and software infrastructure."
      />

      <div className="space-y-8 font-body text-sm sm:text-base text-[#A4ACB8] leading-relaxed">
        <section className="p-6 rounded-[8px] bg-[#090B10] border border-white/[0.08]">
          <h2 className="font-mono text-xs uppercase tracking-widest text-[#5CE1E6] mb-2">
            1.0 AUTHORIZED ACCESS
          </h2>
          <p>
            Access to EDC Media products, APIs, internal systems, and research materials is granted subject to these terms. Unauthorized scraping, adversarial testing without prior authorization, and abuse of API rate limits are prohibited.
          </p>
        </section>

        <section className="p-6 rounded-[8px] bg-[#090B10] border border-white/[0.08]">
          <h2 className="font-mono text-xs uppercase tracking-widest text-[#5CE1E6] mb-2">
            2.0 INTELLECTUAL PROPERTY
          </h2>
          <p>
            All architectural schematics, brand assets, software compilation methodologies, and trade names (including EDC Media, EDC Media HQ, and EDC BuildOS) remain the exclusive property of EDC Media.
          </p>
        </section>

        <section className="p-6 rounded-[8px] bg-[#090B10] border border-white/[0.08]">
          <h2 className="font-mono text-xs uppercase tracking-widest text-[#5CE1E6] mb-2">
            3.0 JURISDICTION & GOVERNANCE
          </h2>
          <p>
            These terms are governed by standard commercial laws applicable to technology enterprise software providers. For inquiries or rights requests, contact legal@edcmediahq.xyz.
          </p>
        </section>
      </div>
    </main>
  );
}
