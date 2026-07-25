'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(next, 5000);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [paused, current]);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="relative py-28 bg-navy-950 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-800/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What People Say"
          subtitle="Kind words from colleagues, mentors, and collaborators."
        />

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
          >
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500" />

            {/* Quote icon */}
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Quote size={20} className="text-white" />
              </div>
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            {/* Quote text */}
            <blockquote className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 italic max-w-2xl mx-auto">
              &ldquo;{t.content}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm mb-2">
                {t.avatar}
              </div>
              <div className="font-semibold font-poppins text-white">{t.name}</div>
              <div className="text-sm text-cyan-300">{t.role}</div>
              <div className="text-xs text-slate-500">{t.organization}</div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              suppressHydrationWarning
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/20 transition-all"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  suppressHydrationWarning
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-6 h-2 bg-gradient-to-r from-blue-500 to-cyan-500'
                      : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              suppressHydrationWarning
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/20 transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
