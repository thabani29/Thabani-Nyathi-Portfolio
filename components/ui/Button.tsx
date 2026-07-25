'use client';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  className,
  ...props
}: ButtonProps) {
  const base =
    'relative inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900';

  const variants = {
    primary:
      'bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 text-white hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-[1.03] active:scale-[0.98]',
    secondary:
      'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-white/40 hover:scale-[1.03] active:scale-[0.98]',
    ghost:
      'text-slate-300 hover:text-white hover:bg-white/10 active:scale-[0.98]',
    outline:
      'border border-cyan-500/60 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 hover:scale-[1.03] active:scale-[0.98]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  return (
    <motion.button
      suppressHydrationWarning
      whileTap={{ scale: 0.97 }}
      className={cn(base, variants[variant], sizes[size], className)}
      {...(props as object)}
    >
      {/* Shimmer overlay on primary */}
      {variant === 'primary' && (
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      )}
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span className="relative">{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </motion.button>
  );
}
