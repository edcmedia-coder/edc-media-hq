import type { Metadata, Viewport } from 'next';
import { headers } from 'next/headers';
import './globals.css';
import { BackgroundSystem } from '@/components/ui/BackgroundSystem';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import Link from 'next/link';
import { Terminal, ShieldCheck, LogOut } from 'lucide-react';

export const metadata: Metadata = {
  metadataBase: new URL('https://edcmediahq.xyz'),
  title: 'EDC Media HQ — Building Intelligent Systems',
  description:
    'The flagship headquarters for EDC Media. Building intelligent software systems that turn ideas, information, and repetitive work into automated outcomes.',
  keywords: [
    'EDC Media',
    'EDC Media HQ',
    'AI software',
    'intelligent automation',
    'BuildOS',
    'software systems',
    'JARVIS',
    'conversion engine',
    'audio intelligence',
  ],
  authors: [{ name: 'EDC Media' }],
  creator: 'EDC Media',
  publisher: 'EDC Media',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://edcmediahq.xyz',
    siteName: 'EDC Media HQ',
    title: 'EDC Media HQ — Building Intelligent Systems',
    description:
      'The flagship headquarters for EDC Media. Building intelligent software systems that turn ideas, information, and repetitive work into automated outcomes.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EDC Media HQ — Building Intelligent Systems',
    description:
      'The flagship headquarters for EDC Media. Building intelligent software systems that turn ideas, information, and repetitive work into automated outcomes.',
  },
  alternates: {
    canonical: 'https://edcmediahq.xyz',
  },
};

export const viewport: Viewport = {
  themeColor: '#050609',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const domainType = headersList.get('x-domain-type');
  const isAppDomain = domainType === 'app';
  const isCustomerDomain = domainType === 'customer';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://edcmediahq.xyz/#organization',
        name: 'EDC Media',
        url: 'https://edcmediahq.xyz',
        logo: 'https://edcmediahq.xyz/icon.png',
        description:
          'EDC Media builds intelligent software systems that turn ideas, information, and repetitive work into automated outcomes.',
        knowsAbout: [
          'Artificial Intelligence',
          'Intelligent Automation',
          'Software Architecture',
          'Research Synthesis',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://edcmediahq.xyz/#website',
        url: 'https://edcmediahq.xyz',
        name: 'EDC Media HQ',
        publisher: {
          '@id': 'https://edcmediahq.xyz/#organization',
        },
      },
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="bg-[#050609] text-[#F4F7FA] min-h-screen flex flex-col font-body selection:bg-[#5CE1E6]/25 selection:text-white"
        suppressHydrationWarning
      >
        <BackgroundSystem />
        {!isAppDomain && !isCustomerDomain && <SiteHeader />}
        
        {isAppDomain && (
          <header className="border-b border-white/[0.08] bg-[#090B10]/80 backdrop-blur-md sticky top-0 z-50 px-4 sm:px-8 py-3 flex items-center justify-between">
            <Link href="/app" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-[6px] bg-[#5CE1E6]/10 border border-[#5CE1E6]/30 flex items-center justify-center text-[#5CE1E6] font-mono font-bold text-xs">
                EDC
              </div>
              <span className="font-display font-extrabold uppercase text-sm tracking-wider text-[#F4F7FA]">
                EDC SaaS // Command
              </span>
            </Link>
            <div className="flex items-center gap-4 font-mono text-xs">
              <Link href="/app" className="text-[#A4ACB8] hover:text-[#5CE1E6] transition-colors">
                Dashboard
              </Link>
              <Link href="/agency" className="text-[#A4ACB8] hover:text-[#5CE1E6] transition-colors">
                Agency OS
              </Link>
              <Link href="/experiments" className="text-[#A4ACB8] hover:text-[#5CE1E6] transition-colors">
                Experiments
              </Link>
              <Link href="/optimization" className="text-[#A4ACB8] hover:text-[#5CE1E6] transition-colors">
                Optimization
              </Link>
              <Link href="/settings" className="text-[#A4ACB8] hover:text-[#5CE1E6] transition-colors">
                Settings
              </Link>
              <Link href="/login" className="flex items-center gap-1.5 text-red-400 hover:text-red-300 ml-4">
                <LogOut className="w-3.5 h-3.5" />
                <span>Logout</span>
              </Link>
            </div>
          </header>
        )}

        <div className="flex-1 relative z-10">{children}</div>

        {!isAppDomain && !isCustomerDomain && <SiteFooter />}
        
        {isAppDomain && (
          <footer className="border-t border-white/[0.08] py-6 px-4 sm:px-8 text-center font-mono text-xs text-[#69717F]">
            EDC Media SaaS Infrastructure // Tenant Secured & Isolated // edcmedia.club
          </footer>
        )}
      </body>
    </html>
  );
}
