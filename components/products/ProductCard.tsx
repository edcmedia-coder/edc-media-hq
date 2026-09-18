'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Terminal, Activity, Layers } from 'lucide-react';
import { Product } from '@/types';
import { Badge } from '@/components/ui/Badge';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'PRODUCT':
        return 'cyan';
      case 'INTERNAL SYSTEM':
        return 'subtle';
      case 'R&D':
        return 'violet';
      default:
        return 'outline';
    }
  };

  const getPillarIcon = (pillar: string) => {
    switch (pillar) {
      case 'BUILD':
        return <Layers className="w-4 h-4 text-[#5CE1E6]" />;
      case 'INTELLIGENCE':
        return <Sparkles className="w-4 h-4 text-[#7C6CFF]" />;
      case 'AUTOMATION':
        return <Activity className="w-4 h-4 text-[#5CE1E6]" />;
      default:
        return <Terminal className="w-4 h-4 text-[#A4ACB8]" />;
    }
  };

  return (
    <Link
      href={product.href}
      className="group relative flex flex-col justify-between rounded-[8px] bg-[#090B10] border border-white/[0.08] hover:border-[#5CE1E6]/40 p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.6)] hover:-translate-y-1 active:scale-[0.99] touch-manipulation"
    >
      {/* Top Bar: Number & Status */}
      <div>
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-4 mb-6">
          <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.2em] text-[#69717F] group-hover:text-[#5CE1E6] transition-colors">
            {product.number}
          </span>
          <div className="flex items-center gap-2">
            <Badge variant={getStatusVariant(product.status)} dot={product.status === 'PRODUCT'}>
              {product.status}
            </Badge>
          </div>
        </div>

        {/* Category & Pillar */}
        <div className="flex items-center gap-2 mb-2.5">
          {getPillarIcon(product.pillar)}
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#69717F]">
            {product.category}
          </span>
        </div>

        {/* Product Title */}
        <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F4F7FA] group-hover:text-white transition-colors mb-3">
          {product.name}
        </h3>

        {/* Tagline & Description */}
        <p className="font-body text-sm text-[#A4ACB8] leading-relaxed mb-6">
          {product.tagline}
        </p>
      </div>

      {/* Feature Micro-List */}
      <div className="pt-4 border-t border-white/[0.04] mb-6">
        <ul className="space-y-2 text-xs font-mono text-[#69717F]">
          {product.features.slice(0, 2).map((feat, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-[#5CE1E6] mt-0.5">•</span>
              <span className="line-clamp-1">{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Action Link Indicator */}
      <div
        className="inline-flex items-center justify-between w-full pt-4 min-h-[44px] border-t border-white/[0.08] group-hover:border-[#5CE1E6]/30 font-mono text-xs uppercase tracking-widest text-[#F4F7FA] group-hover:text-[#5CE1E6] transition-colors"
      >
        <span>EXPLORE PRODUCT</span>
        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform text-[#5CE1E6]" />
      </div>
    </Link>
  );
}
