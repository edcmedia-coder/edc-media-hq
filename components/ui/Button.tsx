'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'violet';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  className,
  children,
  iconRight,
  iconLeft,
  onClick,
  disabled,
  ...props
}: ButtonProps) {
  const sizeStyles = {
    sm: 'text-xs px-4 py-2.5 min-h-[44px] tracking-wider',
    md: 'text-sm px-6 py-3 min-h-[44px] tracking-wide',
    lg: 'text-sm sm:text-base px-8 py-4 min-h-[48px] tracking-wide',
  };

  const variantStyles = {
    primary:
      'bg-[#5CE1E6] text-[#050609] font-medium border border-[#5CE1E6] hover:bg-[#86eaee] active:bg-[#47cacc] active:scale-[0.98] transition-all duration-150 shadow-[0_0_20px_-4px_rgba(92,225,230,0.35)]',
    secondary:
      'bg-[#0D1017] text-[#F4F7FA] font-medium border border-white/[0.12] hover:border-[#5CE1E6]/40 hover:bg-[#121620] active:bg-[#090B10] active:scale-[0.98] transition-all duration-150',
    violet:
      'bg-[#7C6CFF] text-[#050609] font-medium border border-[#7C6CFF] hover:bg-[#9284ff] active:bg-[#6856ff] active:scale-[0.98] transition-all duration-150 shadow-[0_0_20px_-4px_rgba(124,108,255,0.35)]',
    ghost:
      'bg-transparent text-[#A4ACB8] hover:text-[#F4F7FA] hover:bg-white/[0.04] active:bg-white/[0.08] active:scale-[0.98] border border-transparent transition-all duration-150',
  };

  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2 rounded-[4px] font-mono uppercase whitespace-nowrap select-none cursor-pointer touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5CE1E6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050609]',
    disabled && 'opacity-40 cursor-not-allowed pointer-events-none active:scale-100',
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  const content = (
    <>
      {iconLeft && <span className="shrink-0">{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className="shrink-0">{iconRight}</span>}
    </>
  );

  if (href) {
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (disabled) {
        e.preventDefault();
        return;
      }
      if (onClick) {
        (onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>)(e);
      }
    };

    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
          aria-disabled={disabled}
          className={baseClasses}
          id={props.id}
          aria-label={props['aria-label']}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        href={href}
        onClick={handleLinkClick}
        aria-disabled={disabled}
        className={baseClasses}
        id={props.id}
        aria-label={props['aria-label']}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={baseClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
}
