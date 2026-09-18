import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'violet' | 'subtle' | 'outline' | 'pulse';
  className?: string;
  dot?: boolean;
}

export function Badge({
  children,
  variant = 'subtle',
  className,
  dot = false,
}: BadgeProps) {
  const variantStyles = {
    cyan: 'bg-[#5CE1E6]/10 text-[#5CE1E6] border border-[#5CE1E6]/30',
    violet: 'bg-[#7C6CFF]/10 text-[#7C6CFF] border border-[#7C6CFF]/30',
    subtle: 'bg-white/[0.04] text-[#A4ACB8] border border-white/[0.08]',
    outline: 'bg-transparent text-[#A4ACB8] border border-white/[0.12]',
    pulse: 'bg-[#5CE1E6]/10 text-[#5CE1E6] border border-[#5CE1E6]/40',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono tracking-wider uppercase rounded-[4px] whitespace-nowrap select-none transition-colors duration-200',
        variantStyles[variant],
        className
      )}
    >
      {dot && (
        <span
          className={cn(
            'w-1.5 h-1.5 rounded-full',
            variant === 'violet' ? 'bg-[#7C6CFF]' : 'bg-[#5CE1E6]',
            variant === 'pulse' && 'animate-pulse'
          )}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </span>
  );
}
