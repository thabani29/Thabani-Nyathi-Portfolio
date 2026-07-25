'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import Button from '@/components/ui/Button';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[color:var(--surface-900)]/95 backdrop-blur-xl border-b border-[color:var(--border-soft)] shadow-lg shadow-black/20'
            : 'bg-[color:var(--surface-950)]/40 backdrop-blur-xl'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">
            {/* Logo */}
            <button
              suppressHydrationWarning
              onClick={() => scrollTo('#hero')}
              className="flex items-center gap-2.5 group min-w-0"
              aria-label="Go to top"
            >
              <div className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-cyan-500/40 shadow-lg shadow-cyan-500/30 transition-colors duration-300 group-hover:border-cyan-400">
                <Image
                  src="/thabani.png"
                  alt="Thabani Nyathi"
                  width={36}
                  height={36}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <span className="font-poppins font-bold text-lg text-[color:var(--text-primary)] leading-none">
                T<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">N</span>
              </span>
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  suppressHydrationWarning
                  onClick={() => scrollTo(link.href)}
                  className="px-4 py-2 text-sm text-[color:var(--text-primary)] hover:text-cyan-400 hover:bg-[color:var(--surface-900)]/10 rounded-lg transition-all duration-200 font-medium"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button
                id="nav-hire-me"
                variant="primary"
                size="sm"
                onClick={() => scrollTo('#contact')}
                className="hidden sm:inline-flex"
              >
                Hire Me
              </Button>
              {/* Mobile hamburger */}
              <button
                id="mobile-menu-toggle"
                suppressHydrationWarning
                aria-label="Toggle mobile menu"
                onClick={() => setMobileOpen((o) => !o)}
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-[color:var(--surface-700)]/70 border border-[color:var(--border-soft)] text-[color:var(--text-primary)]"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed inset-y-0 right-0 z-40 w-72 bg-[color:var(--surface-900)]/95 backdrop-blur-xl border-l border-[color:var(--border-soft)] flex flex-col pt-20 pb-8 px-6 md:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => scrollTo(link.href)}
                className="py-3 text-left text-base text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] border-b border-white/10 last:border-0 font-medium transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
            <Button variant="primary" size="md" onClick={() => scrollTo('#contact')} className="mt-8">
              Hire Me
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-30 bg-black/60 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
