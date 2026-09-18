import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  badge?: React.ReactNode;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
  badge,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-10 sm:mb-14',
        align === 'center' ? 'text-center mx-auto' : 'text-left',
        className
      )}
    >
      <div
        className={cn(
          'flex items-center gap-3 mb-3 sm:mb-4',
          align === 'center' && 'justify-center'
        )}
      >
        {eyebrow && (
          <span className="font-mono text-xs sm:text-[13px] uppercase tracking-[0.2em] text-[#5CE1E6] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6]" aria-hidden="true" />
            {eyebrow}
          </span>
        )}
        {badge}
      </div>

      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#F4F7FA] leading-[1.1] mb-4">
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            'font-body text-sm sm:text-base md:text-lg text-[#A4ACB8] leading-relaxed max-w-2xl',
            align === 'center' && 'mx-auto'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
