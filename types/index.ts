export type ProductStatus = 'PRODUCT' | 'INTERNAL SYSTEM' | 'R&D' | 'PILOT';

export interface Product {
  id: string;
  number: string;
  slug: string;
  name: string;
  tagline: string;
  category: string;
  status: ProductStatus;
  description: string;
  pillar: 'BUILD' | 'INTELLIGENCE' | 'AUTOMATION';
  features: string[];
  href: string;
  badge?: string;
}

export interface Solution {
  id: string;
  number: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  targetOutcome: string;
  relevantProducts: string[];
  href: string;
}

export type ExperimentStatus = 'CONCEPT' | 'EXPLORATION' | 'PROTOTYPE';

export interface Experiment {
  id: string;
  number: string;
  slug: string;
  title: string;
  category: string;
  statusLabel: ExperimentStatus;
  description: string;
  explorationGoals: string[];
  href: string;
}

export interface EcosystemBranch {
  name: 'BUILD' | 'INTELLIGENCE' | 'AUTOMATION';
  tagline: string;
  description: string;
  accent: string;
  nodes: {
    id: string;
    name: string;
    type: string;
    description: string;
    status: string;
    href: string;
  }[];
}

export interface NavigationLink {
  label: string;
  href: string;
  isExternal?: boolean;
  badge?: string;
  description?: string;
}
