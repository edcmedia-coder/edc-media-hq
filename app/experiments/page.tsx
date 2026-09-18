'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, ArrowLeft, Terminal, Sliders } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function ExperimentsPage() {
  return (
    <div className="min-h-screen bg-[#050609] text-[#F4F7FA] px-4 sm:px-8 py-10 max-w-7xl mx-auto space-y-8">
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-6">
        <div className="space-y-1">
          <span className="font-mono text-xs text-[#7C6CFF] tracking-[0.25em] uppercase">
            MODULE // EXPERIMENTATION
          </span>
          <h1 className="font-display text-3xl font-extrabold text-[#F4F7FA]">
            Sandbox & Model Testbed
          </h1>
          <p className="font-body text-sm text-[#A4ACB8]">
            Test prompt variations, evaluate deterministic reasoning chains, and benchmark latency.
          </p>
        </div>
        <Button href="/app" variant="secondary" size="sm" iconLeft={<ArrowLeft className="w-4 h-4" />}>
          Back to Command Center
        </Button>
      </div>

      <div className="bg-[#0D1017] border border-white/[0.08] rounded-[8px] p-8 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-mono text-sm text-[#7C6CFF]">ACTIVE BENCHMARK RUN</h3>
          <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-[#7C6CFF]/10 text-[#7C6CFF]">
            Gemini 2.5 Flash / Pro
          </span>
        </div>
        <div className="bg-[#050609] border border-white/[0.1] rounded-[6px] p-4 font-mono text-xs text-[#A4ACB8] space-y-2">
          <p className="text-[#5CE1E6]">$ edc-eval --model gemini-3.5-flash --temperature 0.2 --tokens 4096</p>
          <p>&gt; Initializing deterministic reasoning sandbox...</p>
          <p>&gt; Evaluating test cases: 100/100 passed (100% accuracy).</p>
          <p>&gt; Average execution time: 142ms.</p>
        </div>
      </div>
    </div>
  );
}
