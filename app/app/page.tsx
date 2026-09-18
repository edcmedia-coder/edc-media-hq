'use client';

import React from 'react';
import Link from 'next/link';
import { Terminal, Cpu, ShieldCheck, Zap, Activity, ArrowRight, Database, Workflow, Layers, Settings, Compass, Sliders } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function AppDashboardPage() {
  return (
    <div className="min-h-screen bg-[#050609] text-[#F4F7FA] px-4 sm:px-8 py-10 max-w-7xl mx-auto space-y-10">
      {/* Top Header & Telemetry */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-white/[0.08] pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-[#5CE1E6]/10 text-[#5CE1E6] border border-[#5CE1E6]/20">
              EDC SAISS HQ // ACTIVE TENANT
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              SYSTEMS OPERATIONAL
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#F4F7FA]">
            Command Center
          </h1>
          <p className="font-body text-sm text-[#A4ACB8] mt-1">
            Autonomous operations, pipeline synthesis, and enterprise AI orchestration.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button href="/experiments" variant="secondary" size="sm">
            Experiments
          </Button>
          <Button href="/settings" variant="primary" size="sm" iconLeft={<Settings className="w-4 h-4" />}>
            Configure Settings
          </Button>
        </div>
      </div>

      {/* Quick Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#0D1017] border border-white/[0.08] rounded-[8px] p-5 space-y-3">
          <div className="flex items-center justify-between text-[#A4ACB8]">
            <span className="font-mono text-xs uppercase tracking-wider">Active Workflows</span>
            <Workflow className="w-4 h-4 text-[#5CE1E6]" />
          </div>
          <div className="text-3xl font-mono font-bold text-[#F4F7FA]">24 / 24</div>
          <div className="text-xs text-emerald-400 font-mono">100% execution success rate</div>
        </div>

        <div className="bg-[#0D1017] border border-white/[0.08] rounded-[8px] p-5 space-y-3">
          <div className="flex items-center justify-between text-[#A4ACB8]">
            <span className="font-mono text-xs uppercase tracking-wider">Agency OS Pipelines</span>
            <Layers className="w-4 h-4 text-[#7C6CFF]" />
          </div>
          <div className="text-3xl font-mono font-bold text-[#F4F7FA]">8 Active</div>
          <div className="text-xs text-[#5CE1E6] font-mono">Autonomy level: L4 Max</div>
        </div>

        <div className="bg-[#0D1017] border border-white/[0.08] rounded-[8px] p-5 space-y-3">
          <div className="flex items-center justify-between text-[#A4ACB8]">
            <span className="font-mono text-xs uppercase tracking-wider">Latency / Throughput</span>
            <Activity className="w-4 h-4 text-[#5CE1E6]" />
          </div>
          <div className="text-3xl font-mono font-bold text-[#F4F7FA]">142ms</div>
          <div className="text-xs text-emerald-400 font-mono">Global edge distribution</div>
        </div>

        <div className="bg-[#0D1017] border border-white/[0.08] rounded-[8px] p-5 space-y-3">
          <div className="flex items-center justify-between text-[#A4ACB8]">
            <span className="font-mono text-xs uppercase tracking-wider">Security & Auth</span>
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-3xl font-mono font-bold text-[#F4F7FA]">Secured</div>
          <div className="text-xs text-[#A4ACB8] font-mono">Tenant isolated & RBAC</div>
        </div>
      </div>

      {/* Navigation Modules Grid */}
      <div className="space-y-4">
        <h2 className="font-mono text-xs text-[#5CE1E6] tracking-[0.25em] uppercase">
          APPLICATIONS & MODULES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/agency"
            className="group bg-[#0D1017] border border-white/[0.08] hover:border-[#5CE1E6]/40 rounded-[8px] p-6 space-y-4 transition-all"
          >
            <div className="w-12 h-12 rounded-[6px] bg-[#121620] border border-white/[0.1] flex items-center justify-center text-[#5CE1E6] group-hover:bg-[#5CE1E6]/10 transition-colors">
              <Layers className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-display text-lg font-bold text-[#F4F7FA] group-hover:text-[#5CE1E6] transition-colors">
                Agency OS
              </h3>
              <p className="font-body text-sm text-[#A4ACB8] leading-relaxed">
                Multi-agent client operations, automated deliverables, and enterprise campaign management.
              </p>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#5CE1E6] pt-2">
              <span>Launch Module</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/experiments"
            className="group bg-[#0D1017] border border-white/[0.08] hover:border-[#7C6CFF]/40 rounded-[8px] p-6 space-y-4 transition-all"
          >
            <div className="w-12 h-12 rounded-[6px] bg-[#121620] border border-white/[0.1] flex items-center justify-center text-[#7C6CFF] group-hover:bg-[#7C6CFF]/10 transition-colors">
              <Compass className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-display text-lg font-bold text-[#F4F7FA] group-hover:text-[#7C6CFF] transition-colors">
                Experimentation
              </h3>
              <p className="font-body text-sm text-[#A4ACB8] leading-relaxed">
                Sandbox environments, model fine-tuning evaluations, and deterministic prompt testbeds.
              </p>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#7C6CFF] pt-2">
              <span>Launch Module</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/optimization"
            className="group bg-[#0D1017] border border-white/[0.08] hover:border-[#5CE1E6]/40 rounded-[8px] p-6 space-y-4 transition-all"
          >
            <div className="w-12 h-12 rounded-[6px] bg-[#121620] border border-white/[0.1] flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/10 transition-colors">
              <Sliders className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-display text-lg font-bold text-[#F4F7FA] group-hover:text-emerald-400 transition-colors">
                Optimization Center
              </h3>
              <p className="font-body text-sm text-[#A4ACB8] leading-relaxed">
                Real-time conversion tuning, token cost reduction algorithms, and performance profiling.
              </p>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 pt-2">
              <span>Launch Module</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
