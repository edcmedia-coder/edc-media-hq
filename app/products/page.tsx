import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Layers, Sparkles, Activity } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProductCard } from '@/components/products/ProductCard';
import { PRODUCTS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Products — EDC Media HQ',
  description: 'AI-native software products and infrastructure built by EDC Media.',
};

export default function ProductsPage() {
  return (
    <main className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="SOFTWARE SUITE"
        title="BUILT BY EDC"
        subtitle="Intelligent software systems designed to solve real operational and technical problems."
      />

      {/* Structured Category Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Architectural Integration Callout */}
      <div className="p-8 rounded-[8px] bg-[#090B10] border border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#5CE1E6] block mb-1">
            ECOSYSTEM INTEGRATION
          </span>
          <h3 className="font-display text-xl font-bold text-[#F4F7FA]">
            Need a custom deployment or enterprise pipeline?
          </h3>
          <p className="font-body text-sm text-[#A4ACB8] mt-1 max-w-xl">
            EDC software products interoperate via standard REST/gRPC endpoints and can be configured for sovereign data enclaves.
          </p>
        </div>
        <Link
          href="/contact"
          className="shrink-0 px-6 py-3 rounded-[4px] bg-[#0D1017] border border-white/[0.15] hover:border-[#5CE1E6]/40 font-mono text-xs uppercase tracking-wider text-[#F4F7FA] transition-colors"
        >
          CONTACT ARCHITECTS →
        </Link>
      </div>
    </main>
  );
}
