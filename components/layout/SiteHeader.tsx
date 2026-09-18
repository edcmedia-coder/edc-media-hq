'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { MobileNavigation } from './MobileNavigation';

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer if resized to desktop breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { label: 'Products', href: '/products' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Labs', href: '/labs', badge: 'R&D' },
    { label: 'Intelligence', href: '/intelligence' },
    { label: 'Company', href: '/about' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-250 ${
          scrolled
            ? 'bg-[#050609]/90 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent border-b border-white/[0.04]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Brand Mark */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5CE1E6] rounded-[4px] py-1 min-h-[44px] touch-manipulation"
            aria-label="EDC Media HQ - Home"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-[4px] bg-[#0D1017] border border-white/[0.15] group-hover:border-[#5CE1E6]/50 transition-colors">
              <div className="w-2 h-2 rounded-[2px] bg-[#5CE1E6] shadow-[0_0_8px_#5CE1E6]" />
              <div className="absolute inset-0 rounded-[4px] opacity-0 group-hover:opacity-100 bg-[#5CE1E6]/5 transition-opacity" />
            </div>

            {/* Desktop Brand Text */}
            <div className="hidden sm:flex flex-col">
              <span className="font-display font-bold text-base sm:text-lg tracking-wider text-[#F4F7FA] group-hover:text-white transition-colors">
                EDC MEDIA
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#69717F]">
                HQ / SYSTEMS
              </span>
            </div>

            {/* Mobile Brand Text */}
            <span className="sm:hidden font-display font-bold text-base tracking-wider text-[#F4F7FA]">
              EDC
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center space-x-1 lg:space-x-2"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-colors rounded-[4px] flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#5CE1E6]'
                      : 'text-[#A4ACB8] hover:text-[#F4F7FA] hover:bg-white/[0.03]'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#7C6CFF]/15 text-[#7C6CFF] border border-[#7C6CFF]/30">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#5CE1E6] rounded-full shadow-[0_0_8px_#5CE1E6]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA & Telemetry Info */}
          <div className="hidden md:flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded-[4px] bg-[#0D1017] border border-white/[0.06] text-[11px] font-mono text-[#A4ACB8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] animate-pulse" />
              <span>CORE: ONLINE</span>
            </div>

            <Button
              href="/products"
              variant="primary"
              size="sm"
              iconRight={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Explore EDC
            </Button>
          </div>

          {/* Mobile Navigation Trigger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-nav-toggle-button"
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-menu"
              aria-label="Open navigation menu"
              className="flex items-center justify-center w-11 h-11 rounded-[4px] border border-white/[0.12] bg-[#0D1017] text-[#F4F7FA] hover:border-[#5CE1E6]/40 active:bg-[#121620] active:scale-[0.95] touch-manipulation transition-all focus:outline-none focus:ring-2 focus:ring-[#5CE1E6]"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Surface */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
