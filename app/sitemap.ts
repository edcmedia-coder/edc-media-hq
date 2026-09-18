import { MetadataRoute } from 'next';
import { PRODUCTS, SOLUTIONS, EXPERIMENTS } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://edcmediahq.xyz';

  const staticRoutes = [
    '',
    '/products',
    '/solutions',
    '/labs',
    '/intelligence',
    '/buildos',
    '/marketplace',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const productRoutes = PRODUCTS.map((prod) => ({
    url: `${baseUrl}/products/${prod.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const solutionRoutes = SOLUTIONS.map((sol) => ({
    url: `${baseUrl}/solutions/${sol.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const labRoutes = EXPERIMENTS.map((exp) => ({
    url: `${baseUrl}/labs/${exp.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes, ...solutionRoutes, ...labRoutes];
}
