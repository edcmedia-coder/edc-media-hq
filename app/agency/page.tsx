'use client';

import React from 'react';
import Link from 'next/link';
import { Layers, ArrowLeft, Bot, Workflow, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function AgencyPage() {
  return (
    <div className="min-h-screen bg-[#050609] text-[#F4F7FA] px-4 sm:px-8 py-10 max-w-7xl mx-auto space-y-8">
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#5CE1E6] tracking-[0.25em] uppercase">
              MODULE // AGENCY OS
            </span>
          </div>
          <h1 className="font-display text-3xl font-extrabold text-[#F4F7FA]">
            Autonomous Agency Operations
          </h1>
          <p className="font-body text-sm text-[#A4ACB8]">
            Multi-agent orchestrator for client deliverables, content pipelines, and automated campaigns.
          </p>
        </div>
        <Button href="/app" variant="secondary" size="sm" iconLeft={<ArrowLeft className="w-4 h-4" />}>
          Back to Command Center
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#0D1017] border border-white/[0.08] rounded-[8px] p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-[#5CE1E6]">AGENT 01</span>
            <Bot className="w-5 h-5 text-[#5CE1E6]" />
          </div>
          <h3 className="font-display text-lg font-bold">Research Synthesizer</h3>
          <p className="text-sm text-[#A4ACB8]">Crawls competitor domains, indexes client assets, and drafts deep research briefs.</p>
          <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 font-mono">
            <CheckCircle2 className="w-4 h-4" /> Active & Autonomous
          </div>
        </div>

        <div className="bg-[#0D1017] border border-white/[0.08] rounded-[8px] p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-[#7C6CFF]">AGENT 02</span>
            <Bot className="w-5 h-5 text-[#7C6CFF]" />
          </div>
          <h3 className="font-display text-lg font-bold">Workflow Compiler</h3>
          <p className="text-sm text-[#A4ACB8]">Translates natural language strategies into executable DAG workflow graphs.</p>
          <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 font-mono">
            <CheckCircle2 className="w-4 h-4" /> Active & Autonomous
          </div>
        </div>

        <div className="bg-[#0D1017] border border-white/[0.08] rounded-[8px] p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-[#5CE1E6]">AGENT 03</span>
            <Bot className="w-5 h-5 text-[#5CE1E6]" />
          </div>
          <h3 className="font-display text-lg font-bold">Conversion Optimizer</h3>
          <p className="text-sm text-[#A4ACB8]">A/B tests copy variants and landing page elements based on live engagement telemetry.</p>
          <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 font-mono">
            <CheckCircle2 className="w-4 h-4" /> Active & Autonomous
          </div>
        </div>
      </div>
    </div>
  );
}
