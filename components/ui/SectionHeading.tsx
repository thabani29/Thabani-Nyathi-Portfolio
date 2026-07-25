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
      className={cn('mb-16', align === 'center' ? 'text-center' : 'text-left', className)}
    >
      {eyebrow && (
        <span className="inline-block mb-3 text-xs font-bold tracking-[0.25em] uppercase text-cyan-400">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-[color:var(--text-primary)] mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={cn('text-[color:var(--text-secondary)] text-base sm:text-lg max-w-2xl leading-relaxed', align === 'center' && 'mx-auto')}>
          {subtitle}
        </p>
      )}
      <div className={cn('mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500', align === 'center' && 'mx-auto')} />
    </motion.div>
  );
}
