'use client';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-[3px] bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-600 transition-all duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
      {/* Glow tip */}
      <div
        className="absolute top-0 h-[3px] w-8 bg-cyan-400 blur-sm opacity-80 transition-all duration-100 ease-out"
        style={{ left: `calc(${progress}% - 32px)` }}
      />
    </div>
  );
}
