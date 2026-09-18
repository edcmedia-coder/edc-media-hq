import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, Cpu, ShieldCheck } from 'lucide-react';
import { PRODUCTS } from '@/lib/data';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return { title: 'Product Not Found — EDC Media HQ' };

  return {
    title: `${product.name} — EDC Media HQ`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="py-12 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back Link */}
      <Link
        href="/products"
        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#69717F] hover:text-[#5CE1E6] mb-8 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>BACK TO PRODUCTS</span>
      </Link>

      {/* Header */}
      <div className="border-b border-white/[0.08] pb-8 mb-10">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="font-mono text-xs text-[#5CE1E6] font-bold tracking-[0.2em]">
            SYSTEM {product.number}
          </span>
          <Badge variant="cyan" dot={product.status === 'PRODUCT'}>
            {product.status}
          </Badge>
          <span className="text-white/[0.2]">•</span>
          <span className="font-mono text-xs text-[#69717F] tracking-wider uppercase">
            {product.category}
          </span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#F4F7FA] mb-4">
          {product.name}
        </h1>

        <p className="font-body text-lg sm:text-xl text-[#A4ACB8] max-w-3xl leading-relaxed">
          {product.tagline}
        </p>
      </div>

      {/* Core Architectural Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2 space-y-8">
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[#5CE1E6] mb-3">
              SYSTEM OVERVIEW
            </h2>
            <p className="font-body text-base text-[#F4F7FA] leading-relaxed">
              {product.description}
            </p>
          </div>

          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[#5CE1E6] mb-4">
              CAPABILITIES & ARCHITECTURE
            </h2>
            <div className="space-y-3">
              {product.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-[6px] bg-[#090B10] border border-white/[0.06] flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#5CE1E6] shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-[#A4ACB8]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Specification Sidebar */}
        <div className="space-y-6">
          <div className="p-6 rounded-[8px] bg-[#090B10] border border-white/[0.08]">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#F4F7FA] font-semibold mb-4 border-b border-white/[0.06] pb-2">
              TECHNICAL ATTRIBUTES
            </h3>

            <div className="space-y-3 font-mono text-xs">
              <div>
                <span className="text-[#69717F] block">ECOSYSTEM PILLAR:</span>
                <span className="text-[#5CE1E6] font-medium">{product.pillar}</span>
              </div>
              <div>
                <span className="text-[#69717F] block">DEPLOYMENT TARGET:</span>
                <span className="text-[#F4F7FA]">Sovereign Cloud / Edge</span>
              </div>
              <div>
                <span className="text-[#69717F] block">DATA POLICY:</span>
                <span className="text-[#F4F7FA]">Zero-Retention Enclave</span>
              </div>
              <div>
                <span className="text-[#69717F] block">INTEGRATION PROTOCOL:</span>
                <span className="text-[#F4F7FA]">REST, gRPC, Webhooks</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06]">
              <Button
                href="/contact"
                variant="primary"
                size="md"
                className="w-full justify-center"
              >
                REQUEST ACCESS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
