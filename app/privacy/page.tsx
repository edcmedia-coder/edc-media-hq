import React from 'react';
import { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';

export const metadata: Metadata = {
  title: 'Privacy Protocol — EDC Media HQ',
  description: 'Privacy and data governance protocols for EDC Media HQ and sovereign software deployments.',
};

export default function PrivacyPage() {
  return (
    <main className="py-12 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="GOVERNANCE"
        title="PRIVACY PROTOCOL"
        subtitle="Data minimization, zero-retention defaults, and sovereign enclave architectures."
      />

      <div className="space-y-8 font-body text-sm sm:text-base text-[#A4ACB8] leading-relaxed">
        <section className="p-6 rounded-[8px] bg-[#090B10] border border-white/[0.08]">
          <h2 className="font-mono text-xs uppercase tracking-widest text-[#5CE1E6] mb-2">
            1.0 ZERO-RETENTION PHILOSOPHY
          </h2>
          <p>
            EDC Media builds software designed to operate without unnecessary data hoarding. Customer payloads processed through EDC Conversion Engine, Audio Intelligence, and BuildOS are retained only for the duration required to complete requested operations or as strictly mandated by deterministic user configurations.
          </p>
        </section>

        <section className="p-6 rounded-[8px] bg-[#090B10] border border-white/[0.08]">
          <h2 className="font-mono text-xs uppercase tracking-widest text-[#5CE1E6] mb-2">
            2.0 ENTERPRISE TELEMETRY
          </h2>
          <p>
            We do not sell personal data, license user-submitted research to external training brokers, or deploy invasive cross-site advertising pixels. All system telemetry indicators across EDC Media HQ are architectural representations of system design.
          </p>
        </section>

        <section className="p-6 rounded-[8px] bg-[#090B10] border border-white/[0.08]">
          <h2 className="font-mono text-xs uppercase tracking-widest text-[#5CE1E6] mb-2">
            3.0 DOMAIN SOVEREIGNTY
          </h2>
          <p>
            Communications through edcmediahq.xyz are encrypted in transit via modern TLS protocols. Inquiries submitted via the dispatch terminal are handled directly by EDC technical staff.
          </p>
        </section>
      </div>
    </main>
  );
}
