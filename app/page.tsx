import React from 'react';
import { Hero } from '@/components/hero/Hero';
import { EDCSystem } from '@/components/ecosystem/EDCSystem';
import { ProductGrid } from '@/components/products/ProductGrid';
import { SolutionsSection } from '@/components/solutions/SolutionsSection';
import { LabsPreview } from '@/components/labs/LabsPreview';
import { BuildOSPreview } from '@/components/buildos/BuildOSPreview';
import { PhilosophySection } from '@/components/philosophy/PhilosophySection';
import { FinalCTA } from '@/components/cta/FinalCTA';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* 01: Flagship Hero with System Core Visual & Telemetry */}
      <Hero />

      {/* 02: The EDC System Ecosystem Architecture */}
      <EDCSystem />

      {/* 03: Built by EDC — Featured Product Suite */}
      <ProductGrid />

      {/* 04: Objective Solutions Pathways */}
      <SolutionsSection />

      {/* 05: EDC Labs — Research & Concept Exploration */}
      <LabsPreview />

      {/* 06: EDC BuildOS — Idea-to-Software Blueprint Engine */}
      <BuildOSPreview />

      {/* 07: Editorial Philosophy & Core Thesis */}
      <PhilosophySection />

      {/* 08: Flagship Final Call to Action */}
      <FinalCTA />
    </main>
  );
}
