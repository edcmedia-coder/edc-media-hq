import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, FlaskConical, AlertCircle, CheckCircle2 } from 'lucide-react';
import { EXPERIMENTS } from '@/lib/data';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface LabPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return EXPERIMENTS.map((experiment) => ({
    slug: experiment.slug,
  }));
}

export async function generateMetadata({ params }: LabPageProps): Promise<Metadata> {
  const { slug } = await params;
  const exp = EXPERIMENTS.find((e) => e.slug === slug);
  if (!exp) return { title: 'Experiment Not Found — EDC Media HQ' };

  return {
    title: `${exp.title} (CONCEPT) — EDC Labs`,
    description: exp.description,
  };
}

export default async function LabDetailPage({ params }: LabPageProps) {
  const { slug } = await params;
  const experiment = EXPERIMENTS.find((e) => e.slug === slug);

  if (!experiment) {
    notFound();
  }

  return (
    <main className="py-12 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <Link
        href="/labs"
        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#69717F] hover:text-[#7C6CFF] mb-8 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>BACK TO LABS</span>
      </Link>

      <div className="border-b border-white/[0.08] pb-8 mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[#7C6CFF] font-bold tracking-[0.2em]">
            EXPERIMENT {experiment.number}
          </span>
          <Badge variant="violet">{experiment.statusLabel}</Badge>
          <span className="font-mono text-xs text-[#69717F] uppercase tracking-wider">
            {experiment.category}
          </span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#F4F7FA] mb-4">
          {experiment.title}
        </h1>

        <div className="p-4 rounded-[6px] bg-[#7C6CFF]/10 border border-[#7C6CFF]/30 flex items-start gap-3 mt-4">
          <AlertCircle className="w-5 h-5 text-[#7C6CFF] shrink-0 mt-0.5" />
          <p className="font-mono text-xs text-[#F4F7FA] leading-relaxed">
            EXPLICIT LAB NOTICE: This initiative is currently an R&D concept under investigation. It does not represent an active production customer deployment.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C6CFF] mb-3">
              RESEARCH ABSTRACT
            </h2>
            <p className="font-body text-base text-[#F4F7FA] leading-relaxed">
              {experiment.description}
            </p>
          </div>

          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[#7C6CFF] mb-4">
              ACTIVE RESEARCH VECTORS
            </h2>
            <div className="space-y-3">
              {experiment.explorationGoals.map((goal, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-[6px] bg-[#090B10] border border-white/[0.06] flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#7C6CFF] shrink-0 mt-0.5" />
                  <span className="font-mono text-xs text-[#A4ACB8]">
                    {goal}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="p-6 rounded-[8px] bg-[#090B10] border border-white/[0.08]">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#F4F7FA] font-semibold mb-3">
              COLLABORATIVE INQUIRY
            </h3>
            <p className="font-body text-xs text-[#A4ACB8] leading-relaxed mb-6">
              Researchers and institutional teams interested in evaluating theoretical benchmarks or testing prototypes can connect with EDC Labs.
            </p>
            <Button
              href="/contact"
              variant="secondary"
              size="md"
              className="w-full justify-center"
            >
              CONTACT LAB RESEARCHERS
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
