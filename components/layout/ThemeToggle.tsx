'use client';
import { Moon, Sun, Laptop } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';

export default function ThemeToggle() {
  const { themeMode, cycleTheme } = useTheme();

  const getLabel = () => {
    switch (themeMode) {
      case 'system':
        return 'System Theme (Auto)';
      case 'dark':
        return 'Dark Mode';
      case 'light':
        return 'Light Mode';
    }
  };

  return (
    <motion.button
      id="theme-toggle"
      onClick={cycleTheme}
      whileTap={{ scale: 0.9 }}
      aria-label={getLabel()}
      title={getLabel()}
      suppressHydrationWarning
      className="relative w-10 h-10 rounded-xl bg-[color:var(--surface-700)]/70 border border-[color:var(--border-soft)] backdrop-blur-sm flex items-center justify-center hover:bg-[color:var(--surface-600)]/80 transition-all duration-200 group shadow-sm"
    >
      <motion.div
        key={themeMode}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.25 }}
      >
        {themeMode === 'system' && (
          <Laptop size={16} className="text-cyan-400 group-hover:text-cyan-300" />
        )}
        {themeMode === 'dark' && (
          <Moon size={16} className="text-blue-400 group-hover:text-blue-300" />
        )}
        {themeMode === 'light' && (
          <Sun size={16} className="text-amber-400 group-hover:text-amber-300" />
        )}
      </motion.div>
    </motion.button>
  );
}
