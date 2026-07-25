'use client';
import { useEffect, useRef } from 'react';

export default function AnimatedCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let raf: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px)`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    const onMouseEnterLink = () => {
      if (ringRef.current) ringRef.current.classList.add('scale-150', 'border-cyan-400');
      if (cursorRef.current) cursorRef.current.classList.add('opacity-0');
    };
    const onMouseLeaveLink = () => {
      if (ringRef.current) ringRef.current.classList.remove('scale-150', 'border-cyan-400');
      if (cursorRef.current) cursorRef.current.classList.remove('opacity-0');
    };

    window.addEventListener('mousemove', onMouseMove);
    raf = requestAnimationFrame(animate);

    const links = document.querySelectorAll('a, button, [role="button"]');
    links.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterLink);
      el.addEventListener('mouseleave', onMouseLeaveLink);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-cyan-400 pointer-events-none z-[9998] transition-opacity duration-200 mix-blend-difference"
        style={{ willChange: 'transform' }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-cyan-400/70 pointer-events-none z-[9997] transition-transform duration-200"
        style={{ willChange: 'transform' }}
      />
    </>
  );
}
