'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + Math.random() * 18 + 4;
      });
    }, 120);
    const timer = setTimeout(() => setVisible(false), 2200);
    return () => { clearInterval(interval); clearTimeout(timer); };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-navy-950"
        >
          {/* Logo / Profile Avatar */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'backOut' }}
            className="mb-8"
          >
            <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-600 shadow-2xl shadow-blue-500/50">
              <div className="w-full h-full rounded-full overflow-hidden bg-navy-900">
                <Image
                  src="/thabani.png"
                  alt="Thabani Nyathi"
                  width={80}
                  height={80}
                  priority
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-slate-400 text-sm tracking-widest uppercase mb-10 font-inter"
          >
            Thabani Nyathi
          </motion.p>

          {/* Progress bar */}
          <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Subtle glow orbs */}
          <div className="absolute w-80 h-80 bg-blue-700/20 rounded-full blur-3xl top-1/4 left-1/4 pointer-events-none" />
          <div className="absolute w-64 h-64 bg-cyan-600/15 rounded-full blur-3xl bottom-1/4 right-1/4 pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
