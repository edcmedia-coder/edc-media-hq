import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function FinalCTA() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 border-t border-white/[0.08] bg-[#050609] overflow-hidden">
      {/* Subtle Cyan Atmosphere Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[300px] rounded-full pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(92, 225, 230, 0.08) 0%, transparent 70%)',
          filter: 'blur(70px)',
          transform: 'translate(-50%, -50%) translateZ(0)',
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#5CE1E6] inline-block mb-3">
          HQ DIRECTIVE // INITIATION
        </span>

        <h2 className="font-display text-2xl min-[360px]:text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#F4F7FA] mb-4 sm:mb-5">
          WHAT WILL YOU BUILD?
        </h2>

        <p className="font-body text-sm sm:text-base md:text-lg text-[#A4ACB8] max-w-lg mx-auto mb-8 sm:mb-10 leading-relaxed">
          Explore the EDC ecosystem. Transform manual operations, synthesis pipelines, and product blueprints into autonomous software.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 max-w-md mx-auto sm:max-w-none">
          <Button
            href="/products"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto text-center justify-center"
            iconRight={<ArrowRight className="w-4 h-4" />}
          >
            EXPLORE PRODUCTS
          </Button>

          <Button
            href="/contact"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto text-center justify-center"
            iconRight={<Terminal className="w-4 h-4 text-[#A4ACB8]" />}
          >
            BUILD WITH EDC
          </Button>
        </div>
      </div>
    </section>
  );
}
