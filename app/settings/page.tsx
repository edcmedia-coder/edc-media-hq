'use client';

import React from 'react';
import Link from 'next/link';
import { Settings, ArrowLeft, ShieldCheck, Database, Key } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-[#050609] text-[#F4F7FA] px-4 sm:px-8 py-10 max-w-7xl mx-auto space-y-8">
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-6">
        <div className="space-y-1">
          <span className="font-mono text-xs text-[#5CE1E6] tracking-[0.25em] uppercase">
            ORGANIZATION // SETTINGS
          </span>
          <h1 className="font-display text-3xl font-extrabold text-[#F4F7FA]">
            Tenant Configuration & Security
          </h1>
          <p className="font-body text-sm text-[#A4ACB8]">
            Manage API credentials, organization RBAC policies, and custom domains.
          </p>
        </div>
        <Button href="/app" variant="secondary" size="sm" iconLeft={<ArrowLeft className="w-4 h-4" />}>
          Back to Command Center
        </Button>
      </div>

      <div className="bg-[#0D1017] border border-white/[0.08] rounded-[8px] p-8 space-y-6">
        <h3 className="font-display text-lg font-bold">Domain & Routing Status</h3>
        <div className="space-y-3 font-mono text-xs text-[#A4ACB8]">
          <div className="flex items-center justify-between p-3 bg-[#050609] border border-white/[0.1] rounded-[6px]">
            <span>SaaS Application Domain:</span>
            <span className="text-[#5CE1E6]">https://edcmedia.club</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-[#050609] border border-white/[0.1] rounded-[6px]">
            <span>Marketing Domain:</span>
            <span className="text-[#5CE1E6]">https://edcmediahq.xyz</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-[#050609] border border-white/[0.1] rounded-[6px]">
            <span>Customer Subdomain Resolver:</span>
            <span className="text-emerald-400">*.edcmedia.club → Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}
