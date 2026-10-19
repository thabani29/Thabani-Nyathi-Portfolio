'use client';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn('mb-14 sm:mb-16', align === 'center' ? 'text-center' : 'text-left', className)}
    >
      {eyebrow && (
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-cyan-300">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-[color:var(--text-primary)] mb-4 leading-tight tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={cn('text-[color:var(--text-secondary)] text-base sm:text-lg max-w-2xl leading-7', align === 'center' && 'mx-auto')}>
          {subtitle}
        </p>
      )}
      <div className={cn('mt-7 h-px w-24 bg-gradient-to-r from-cyan-400/80 to-transparent', align === 'center' && 'mx-auto')} />
    </motion.div>
  );
}
