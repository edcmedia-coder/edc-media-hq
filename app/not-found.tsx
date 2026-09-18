import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Terminal, ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4 py-20 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-14 h-14 rounded-[8px] bg-[#090B10] border border-white/[0.1] flex items-center justify-center mx-auto text-[#5CE1E6]">
          <ShieldAlert className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs text-[#5CE1E6] tracking-[0.25em] uppercase">
            STATUS CODE 404 // NODE UNREACHABLE
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-[#F4F7FA]">
            TARGET NOT FOUND
          </h1>
          <p className="font-body text-sm text-[#A4ACB8] leading-relaxed">
            The requested route or subsystem does not exist in the active EDC Media HQ registry.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/" variant="primary" size="md">
            RETURN TO HQ APEX
          </Button>
          <Button href="/products" variant="secondary" size="md">
            EXPLORE PRODUCTS
          </Button>
        </div>
      </div>
    </main>
  );
}
