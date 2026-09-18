import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Target, CheckCircle2 } from 'lucide-react';
import { SOLUTIONS, PRODUCTS } from '@/lib/data';
import { Button } from '@/components/ui/Button';

interface SolutionPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SOLUTIONS.map((solution) => ({
    slug: solution.slug,
  }));
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = SOLUTIONS.find((s) => s.slug === slug);
  if (!solution) return { title: 'Solution Not Found — EDC Media HQ' };

  return {
    title: `${solution.title} — EDC Media HQ`,
    description: solution.description,
  };
}

export default async function SolutionDetailPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const solution = SOLUTIONS.find((s) => s.slug === slug);

  if (!solution) {
    notFound();
  }

  const relevantProducts = PRODUCTS.filter((p) =>
    solution.relevantProducts.includes(p.name)
  );

  return (
    <main className="py-12 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <Link
        href="/solutions"
        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#69717F] hover:text-[#5CE1E6] mb-8 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>BACK TO SOLUTIONS</span>
      </Link>

      <div className="border-b border-white/[0.08] pb-8 mb-10">
        <span className="font-mono text-xs text-[#5CE1E6] font-bold tracking-[0.2em] block mb-2">
          PATHWAY {solution.number} {'//'} {solution.category}
        </span>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#F4F7FA] mb-4">
          {solution.title}
        </h1>
        <p className="font-body text-lg sm:text-xl text-[#A4ACB8] max-w-2xl leading-relaxed">
          {solution.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2 space-y-8">
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[#5CE1E6] mb-3">
              PATHWAY SPECIFICATION
            </h2>
            <p className="font-body text-base text-[#F4F7FA] leading-relaxed">
              {solution.description}
            </p>
          </div>

          <div className="p-6 rounded-[8px] bg-[#090B10] border border-white/[0.08]">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#5CE1E6] mb-2">
              TARGET OUTCOME
            </h3>
            <p className="font-body text-base font-semibold text-[#F4F7FA]">
              {solution.targetOutcome}
            </p>
          </div>

          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[#5CE1E6] mb-4">
              RECOMMENDED EDC SYSTEMS
            </h2>
            <div className="space-y-3">
              {solution.relevantProducts.map((prodName, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-[6px] bg-[#0D1017] border border-white/[0.06] flex items-center justify-between"
                >
                  <span className="font-display text-sm font-bold text-[#F4F7FA]">
                    {prodName}
                  </span>
                  <span className="font-mono text-xs text-[#5CE1E6]">
                    INTEGRATED SYSTEM
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="p-6 rounded-[8px] bg-[#090B10] border border-white/[0.08]">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#F4F7FA] font-semibold mb-3">
              DEPLOY THIS PATHWAY
            </h3>
            <p className="font-body text-xs text-[#A4ACB8] leading-relaxed mb-6">
              Connect directly with EDC engineers to configure this system for your exact environment.
            </p>
            <Button
              href="/contact"
              variant="primary"
              size="md"
              className="w-full justify-center"
            >
              INITIATE CONSULTATION
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
