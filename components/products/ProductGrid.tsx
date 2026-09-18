import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProductCard } from './ProductCard';
import { PRODUCTS } from '@/lib/data';

export function ProductGrid() {
  return (
    <section id="products" className="relative py-16 sm:py-24 lg:py-32 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="SOFTWARE SUITE"
          title="BUILT BY EDC"
          subtitle="Software systems designed to solve real problems."
        />

        {/* Product Cards Grid: 2 columns on tablet/desktop, 1 column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
