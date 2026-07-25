'use client';
import { useEffect, useState } from 'react';

export type ThemeMode = 'system' | 'dark' | 'light';

export function useTheme() {
  const [themeMode, setThemeMode] = useState<ThemeMode>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    // Read stored theme preference
    const stored = localStorage.getItem('themeMode') as ThemeMode | null;
    const initialMode = stored || 'system';
    setThemeMode(initialMode);

    const applyTheme = (mode: ThemeMode) => {
      let isDark = false;
      if (mode === 'system') {
        isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      } else {
        isDark = mode === 'dark';
      }

      setResolvedTheme(isDark ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', isDark);
      document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
    };

    applyTheme(initialMode);

    // Listen to system OS preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = (e: MediaQueryListEvent) => {
      const currentStored = localStorage.getItem('themeMode') as ThemeMode | null;
      if (!currentStored || currentStored === 'system') {
        setResolvedTheme(e.matches ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, []);

  const setTheme = (mode: ThemeMode) => {
    setThemeMode(mode);
    localStorage.setItem('themeMode', mode);

    let isDark = false;
    if (mode === 'system') {
      isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    } else {
      isDark = mode === 'dark';
    }

    setResolvedTheme(isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
  };

  const cycleTheme = () => {
    const modes: ThemeMode[] = ['system', 'dark', 'light'];
    const currentIndex = modes.indexOf(themeMode);
    const nextMode = modes[(currentIndex + 1) % modes.length];
    setTheme(nextMode);
  };

  return { themeMode, resolvedTheme, setTheme, cycleTheme };
}
