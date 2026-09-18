'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const pathname = usePathname();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Autofocus close button on open, restore focus on close
  useEffect(() => {
    if (isOpen) {
      const activeEl = document.activeElement as HTMLElement | null;
      // Focus the close button
      requestAnimationFrame(() => {
        closeButtonRef.current?.focus();
      });

      return () => {
        // Return focus to toggle button or previous active element
        const toggleBtn = document.getElementById('mobile-nav-toggle-button');
        if (toggleBtn) {
          toggleBtn.focus();
        } else if (activeEl && typeof activeEl.focus === 'function') {
          activeEl.focus();
        }
      };
    }
  }, [isOpen]);

  // Handle ESC key and Trap Focus within dialog
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab' && containerRef.current) {
        const focusableElements = containerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const focusable = Array.from(focusableElements).filter(
          (el) => !el.hasAttribute('disabled') && el.offsetParent !== null
        );

        if (focusable.length === 0) return;

        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll reliably without layout shift
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      const originalTouchAction = document.body.style.touchAction;
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.touchAction = originalTouchAction;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={containerRef}
      id="mobile-navigation-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 flex flex-col bg-[#050609]/95 backdrop-blur-2xl border-b border-white/[0.08] text-[#F4F7FA] overflow-y-auto overscroll-contain pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))] pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)]"
    >
      {/* Mobile Menu Header */}
      <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/[0.08]">
        <Link
          href="/"
          onClick={onClose}
          className="flex items-center gap-3 focus:outline-none focus:ring-1 focus:ring-[#5CE1E6] rounded"
        >
          <div className="w-2.5 h-2.5 rounded-sm bg-[#5CE1E6] shadow-[0_0_8px_#5CE1E6]" />
          <span className="font-display text-lg font-bold tracking-tight text-[#F4F7FA]">
            EDC MEDIA HQ
          </span>
        </Link>

        <button
          ref={closeButtonRef}
          id="mobile-nav-close-button"
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="flex items-center justify-center w-11 h-11 rounded-[4px] border border-white/[0.12] bg-[#0D1017] text-[#A4ACB8] hover:text-white hover:border-[#5CE1E6]/40 active:bg-[#121620] active:scale-[0.95] touch-manipulation transition-all focus:outline-none focus:ring-2 focus:ring-[#5CE1E6]"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Menu Body */}
      <div className="flex-1 flex flex-col justify-between px-5 sm:px-6 py-6 sm:py-8">
        <div className="space-y-6 sm:space-y-7">
          {/* Section 1: Core Navigation */}
          <nav aria-label="Core Navigation" className="flex flex-col space-y-1.5">
            {[
              { label: 'PRODUCTS', href: '/products', tag: '01' },
              { label: 'SOLUTIONS', href: '/solutions', tag: '02' },
              { label: 'LABS', href: '/labs', tag: '03', badge: 'R&D' },
              { label: 'INTELLIGENCE', href: '/intelligence', tag: '04' },
            ].map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`group flex items-center justify-between py-3.5 px-3 min-h-[48px] rounded-[4px] border-b border-white/[0.04] touch-manipulation active:scale-[0.99] transition-all ${
                    isActive
                      ? 'text-[#5CE1E6] bg-white/[0.03]'
                      : 'text-[#F4F7FA] hover:text-[#5CE1E6] active:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#69717F] group-hover:text-[#5CE1E6] transition-colors">
                      {item.tag}
                    </span>
                    <span className="font-display text-xl font-bold tracking-wider uppercase">
                      {item.label}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {item.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#7C6CFF]/15 text-[#7C6CFF] border border-[#7C6CFF]/30">
                        {item.badge}
                      </span>
                    )}
                    <ArrowRight className="w-4 h-4 text-[#69717F] group-hover:text-[#5CE1E6] group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Divider */}
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />

          {/* Section 2: Platform & Marketplace */}
          <div className="flex flex-col space-y-1">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#69717F] px-3 mb-1">
              SYSTEM TOOLS
            </span>
            {[
              { label: 'BUILDoS', href: '/buildos', desc: 'Blueprint Compiler' },
              { label: 'MARKETPLACE', href: '/marketplace', desc: 'Connectors & Modules' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="group flex items-center justify-between py-2.5 px-3 min-h-[44px] rounded-[4px] text-[#A4ACB8] hover:text-[#F4F7FA] active:bg-white/[0.02] touch-manipulation transition-colors"
              >
                <span className="font-mono text-sm tracking-wider uppercase font-semibold text-[#F4F7FA] group-hover:text-[#5CE1E6]">
                  {item.label}
                </span>
                <span className="font-mono text-xs text-[#69717F]">
                  {item.desc}
                </span>
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />

          {/* Section 3: Identity & Contact */}
          <div className="flex flex-col space-y-1">
            {[
              { label: 'ABOUT EDC', href: '/about' },
              { label: 'CONTACT', href: '/contact' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="py-2.5 px-3 min-h-[44px] flex items-center rounded-[4px] font-mono text-xs uppercase tracking-widest text-[#A4ACB8] hover:text-[#5CE1E6] active:bg-white/[0.02] touch-manipulation transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Action Button & Telemetry Indicator */}
        <div className="pt-8 space-y-4">
          <Button
            href="/products"
            onClick={onClose}
            variant="primary"
            size="lg"
            className="w-full justify-center"
            iconRight={<ArrowRight className="w-4 h-4" />}
          >
            ENTER EDC
          </Button>

          <div className="flex items-center justify-between px-2 pt-2 text-[11px] font-mono text-[#69717F]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] animate-pulse" />
              SYSTEM CORE ONLINE
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#7C6CFF]" />
              edcmediahq.xyz
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
