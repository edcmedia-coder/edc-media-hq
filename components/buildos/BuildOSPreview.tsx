'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Terminal, Cpu, CheckCircle2, ChevronRight, FileCode2, Layers } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function BuildOSPreview() {
  const pathname = usePathname();
  const isBuildOSPage = pathname === '/buildos';

  const steps = [
    { label: 'IDEA', desc: 'Raw intent input', index: '01' },
    { label: 'REQUIREMENTS', desc: 'Typed constraints & user stories', index: '02' },
    { label: 'ARCHITECTURE', desc: 'Schema & system topology', index: '03' },
    { label: 'BUILD PLAN', desc: 'DAG-sequenced task queue', index: '04' },
    { label: 'SOFTWARE', desc: 'Production-ready codebase', index: '05' },
  ];

  const [activeStep, setActiveStep] = useState(2); // default showing ARCHITECTURE

  const sampleOutputs: Record<number, { title: string; content: string[] }> = {
    0: {
      title: 'INPUT PROMPT SPECIFICATION',
      content: [
        '$ input: "Autonomous invoice reconciliation across Stripe and accounting ledgers"',
        'Intent: Business operations automation',
        'Entities detected: Stripe API, Ledger DB, Anomaly Guardrails',
        'Confidence score: 0.982 // Parsing validated',
      ],
    },
    1: {
      title: 'FORMAL REQUIREMENTS DECOMPOSITION',
      content: [
        'REQ-101: Continuous webhook reconciliation with idempotency keying',
        'REQ-102: Automated journal discrepancy flagging (> $0.01 tolerance)',
        'REQ-103: Multi-tenant role-based cryptographic verification',
        'REQ-104: Compliance audit trail with immutable change log',
      ],
    },
    2: {
      title: 'DISTRIBUTED ARCHITECTURAL SCHEMATIC',
      content: [
        'Core Ingestion: Next.js API Edge Route with Redis Rate Limiting',
        'Event Pipeline: Kafka / Cloud PubSub event queue with dead-letter fallback',
        'Database Topology: PostgreSQL multi-tenant partitioned schema with Drizzle ORM',
        'Integrations: Stripe SDK lazy-init, Gemini 2.5 Flash for anomaly diagnostics',
      ],
    },
    3: {
      title: 'TASK DEPENDENCY BUILD SEQUENCING (DAG)',
      content: [
        'Step 1.0: Database schema provisioning & migrations (Drizzle/Postgres)',
        'Step 2.0: Auth & role-based middleware verification gates',
        'Step 3.0: Webhook verification and background job processing',
        'Step 4.0: Automated unit test suite & synthetic payload fuzzing',
      ],
    },
    4: {
      title: 'DEPLOYABLE REPOSITORY ASSETS',
      content: [
        '✓ Dockerfile and Cloud Run container manifests',
        '✓ Production TypeScript types and Zod schemas',
        '✓ Next.js App Router API routes & real-time monitoring',
        '✓ Zero build errors // Production ready',
      ],
    },
  };

  return (
    <section id="buildos" className="relative py-16 sm:py-24 lg:py-32 border-t border-white/[0.06] overflow-hidden">
      {/* Background illumination */}
      <div
        className="absolute top-1/2 -left-1/4 w-[600px] h-[600px] rounded-full opacity-40 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(92, 225, 230, 0.08) 0%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-left mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#5CE1E6] flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6]" />
            EDC BUILDoS // SPECIFICATION ENGINE
          </span>

          <span className="font-mono text-sm text-[#A4ACB8] block uppercase tracking-widest mb-1">
            HAVE AN IDEA?
          </span>

          <h2 className="font-display text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#F4F7FA] leading-[1.08] max-w-3xl">
            TURN FIVE WORDS<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5CE1E6] to-[#7C6CFF]">
              INTO A SOFTWARE BLUEPRINT.
            </span>
          </h2>

          <p className="font-body text-sm sm:text-base md:text-lg text-[#A4ACB8] mt-3 sm:mt-4 max-w-2xl leading-relaxed">
            EDC BuildOS transforms a rough product idea into structured requirements, architecture, implementation planning, and QA criteria.
          </p>
        </div>

        {/* Visual Step-by-Step Flow Bar */}
        <div className="mb-8 sm:mb-10">
          <div
            role="tablist"
            aria-label="BuildOS compilation steps"
            className="flex overflow-x-auto sm:grid sm:grid-cols-5 gap-2.5 sm:gap-3 pb-2 sm:pb-0 snap-x scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.label}
                  role="tab"
                  id={`buildos-tab-${step.index}`}
                  aria-selected={isActive}
                  aria-controls={`buildos-panel-${step.index}`}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowRight') {
                      e.preventDefault();
                      setActiveStep((idx + 1) % steps.length);
                    } else if (e.key === 'ArrowLeft') {
                      e.preventDefault();
                      setActiveStep((idx - 1 + steps.length) % steps.length);
                    }
                  }}
                  className={`min-w-[140px] sm:min-w-0 snap-start flex-1 shrink-0 p-3.5 sm:p-4 rounded-[6px] border text-left transition-all duration-150 cursor-pointer touch-manipulation active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5CE1E6] ${
                    isActive
                      ? 'bg-[#0D1017] border-[#5CE1E6] shadow-[0_0_20px_rgba(92,225,230,0.15)]'
                      : 'bg-[#090B10] border-white/[0.08] hover:border-white/[0.2] active:bg-[#0D1017]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-[10px] text-[#69717F]">
                      STEP {step.index}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] animate-pulse" />
                    )}
                  </div>
                  <div className={`font-display text-sm font-bold tracking-wider ${
                    isActive ? 'text-[#5CE1E6]' : 'text-[#F4F7FA]'
                  }`}>
                    {step.label}
                  </div>
                  <div className="font-body text-[11px] text-[#69717F] mt-1 line-clamp-1">
                    {step.desc}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Blueprint Output Terminal */}
        <div
          id={`buildos-panel-${steps[activeStep].index}`}
          role="tabpanel"
          aria-labelledby={`buildos-tab-${steps[activeStep].index}`}
          className="rounded-[8px] bg-[#090B10] border border-white/[0.1] shadow-[0_8px_40px_rgba(0,0,0,0.6)] overflow-hidden mb-8"
        >
          {/* Terminal Window Chrome */}
          <div className="px-3.5 sm:px-4 py-2.5 sm:py-3 bg-[#0D1017] border-b border-white/[0.06] flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2.5 h-2.5 rounded-full bg-white/[0.15] shrink-0" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/[0.15] shrink-0" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/[0.15] shrink-0" />
              <span className="ml-1 sm:ml-2 font-mono text-[10px] sm:text-[11px] text-[#69717F] truncate">
                buildos://compiler/preview/{steps[activeStep].label.toLowerCase()}
              </span>
            </div>
            <span className="font-mono text-[10px] text-[#5CE1E6] uppercase tracking-wider hidden sm:inline-block shrink-0">
              BLUEPRINT EMISSION ACTIVE
            </span>
          </div>

          {/* Terminal Code Content */}
          <div className="p-4 sm:p-6 md:p-8 font-mono text-xs sm:text-sm text-[#F4F7FA] space-y-3 overflow-x-auto">
            <div className="text-[#5CE1E6] font-semibold text-xs tracking-wider border-b border-white/[0.04] pb-2">
              {sampleOutputs[activeStep].title}
            </div>
            {sampleOutputs[activeStep].content.map((line, i) => (
              <div key={i} className="flex items-start gap-2.5 sm:gap-3">
                <span className="text-[#69717F] select-none shrink-0">{`0${i + 1}`}</span>
                <span className={`break-words ${line.startsWith('$') ? 'text-[#7C6CFF]' : line.startsWith('✓') ? 'text-[#5CE1E6]' : 'text-[#A4ACB8]'}`}>
                  {line}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
          <p className="font-mono text-xs text-[#69717F]">
            ENGINEERING WORKFLOW SYSTEM // READY FOR DEPLOYMENT
          </p>
          <Button
            href={isBuildOSPage ? '/contact' : '/buildos'}
            variant="primary"
            size="lg"
            iconRight={<ArrowRight className="w-4 h-4" />}
          >
            {isBuildOSPage ? 'INITIATE BUILDoS PROJECT →' : 'EXPLORE BUILDoS →'}
          </Button>
        </div>
      </div>
    </section>
  );
}
