import React from 'react';
import { Terminal, ShieldCheck } from 'lucide-react';

interface CustomerSitePageProps {
  params: Promise<{
    siteSlug: string;
  }>;
}

export default async function CustomerSitePage({ params }: CustomerSitePageProps) {
  const { siteSlug } = await params;

  return (
    <div className="min-h-screen bg-[#050609] text-[#F4F7FA] flex flex-col items-center justify-center p-8 text-center space-y-6">
      <div className="w-16 h-16 rounded-[12px] bg-[#0D1017] border border-[#5CE1E6]/30 flex items-center justify-center text-[#5CE1E6]">
        <Terminal className="w-8 h-8" />
      </div>
      <div className="space-y-2 max-w-md">
        <span className="font-mono text-xs text-[#5CE1E6] tracking-[0.25em] uppercase">
          CUSTOMER SITE // {siteSlug.toUpperCase()}
        </span>
        <h1 className="font-display text-3xl font-extrabold uppercase">
          Published Subdomain Node
        </h1>
        <p className="font-body text-sm text-[#A4ACB8] leading-relaxed">
          This verified customer custom subdomain is successfully resolving through the EDC Media publishing architecture on <span className="text-[#5CE1E6] font-mono">{siteSlug}.edcmedia.club</span>.
        </p>
      </div>
    </div>
  );
}
