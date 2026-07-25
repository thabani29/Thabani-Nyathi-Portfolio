'use client';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'blue' | 'cyan' | 'green' | 'orange' | 'red';
  size?: 'sm' | 'md';
  className?: string;
}

export default function Badge({ children, variant = 'default', size = 'sm', className }: BadgeProps) {
  const base = 'inline-flex items-center font-medium rounded-full border';

  const variants = {
    default: 'bg-white/10 border-white/20 text-slate-300',
    blue: 'bg-blue-500/20 border-blue-500/40 text-blue-300',
    cyan: 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300',
    green: 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300',
    orange: 'bg-orange-500/20 border-orange-500/40 text-orange-300',
    red: 'bg-red-500/20 border-red-500/40 text-red-300',
  };

  const sizes = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  };

  return (
    <span className={cn(base, variants[variant], sizes[size], className)}>
      {children}
    </span>
  );
}
