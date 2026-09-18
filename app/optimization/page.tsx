'use client';

import React from 'react';
import Link from 'next/link';
import { Sliders, ArrowLeft, Activity } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function OptimizationPage() {
  return (
    <div className="min-h-screen bg-[#050609] text-[#F4F7FA] px-4 sm:px-8 py-10 max-w-7xl mx-auto space-y-8">
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-6">
        <div className="space-y-1">
          <span className="font-mono text-xs text-emerald-400 tracking-[0.25em] uppercase">
            MODULE // OPTIMIZATION CENTER
          </span>
          <h1 className="font-display text-3xl font-extrabold text-[#F4F7FA]">
            Performance & Token Economics
          </h1>
          <p className="font-body text-sm text-[#A4ACB8]">
            Optimize caching layers, reduce token overhead, and maximize conversion throughput.
          </p>
        </div>
        <Button href="/app" variant="secondary" size="sm" iconLeft={<ArrowLeft className="w-4 h-4" />}>
          Back to Command Center
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#0D1017] border border-white/[0.08] rounded-[8px] p-6 space-y-4">
          <h3 className="font-display text-lg font-bold">Token Reduction Engine</h3>
          <p className="text-sm text-[#A4ACB8]">Dynamic prompt pruning saves an average of 38% tokens across active API calls.</p>
          <div className="text-2xl font-mono font-bold text-emerald-400">-38.4% Efficiency</div>
        </div>

        <div className="bg-[#0D1017] border border-white/[0.08] rounded-[8px] p-6 space-y-4">
          <h3 className="font-display text-lg font-bold">Edge Caching Hit Rate</h3>
          <p className="text-sm text-[#A4ACB8]">Global edge distribution caches deterministic static responses.</p>
          <div className="text-2xl font-mono font-bold text-[#5CE1E6]">99.8% Hit Rate</div>
        </div>
      </div>
    </div>
  );
}
