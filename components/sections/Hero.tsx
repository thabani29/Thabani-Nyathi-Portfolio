'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Download, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useTypewriter } from '@/hooks/useTypewriter';

// ── Particle canvas ──────────────────────────────────────────────────────────
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = [];
    const COUNT = 80;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.15,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(6,182,212,${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Dots
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6,182,212,${p.alpha})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────────
export default function Hero() {
  const role = useTypewriter();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[color:var(--surface-950)]"
    >
      {/* Particles */}
      <ParticleCanvas />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-700/25 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating geometric shapes */}
      <div className="absolute top-20 right-24 w-20 h-20 border border-cyan-500/30 rounded-2xl rotate-12 animate-float hidden lg:block" />
      <div className="absolute bottom-32 left-20 w-14 h-14 border border-cyan-500/30 rounded-xl -rotate-12 animate-float hidden lg:block" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-blue-500/20 rounded-full animate-float hidden lg:block" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Profile Avatar */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-16 mb-6 inline-block relative group sm:mt-20"
        >
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-r from-cyan-500 via-blue-400 to-emerald-500 shadow-2xl shadow-cyan-500/40 relative">
            <div className="w-full h-full rounded-full overflow-hidden bg-[color:var(--surface-900)] border-2 border-[color:var(--surface-950)]">
              <Image
                src="/thabani.png"
                alt="Thabani Nyathi"
                width={144}
                height={144}
                priority
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Status dot */}
            <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-green-400 border-2 border-navy-950 shadow-md animate-pulse" />
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-poppins text-[color:var(--text-primary)] mb-4 leading-none tracking-tight"
        >
          Thabani{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-emerald-400 animate-gradient-shift bg-[length:200%_200%]">
            Nyathi
          </span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="h-10 flex items-center justify-center mb-6"
        >
          <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-cyan-400 font-mono">
            {role}
            <span className="inline-block w-0.5 h-6 bg-cyan-400 ml-1 animate-pulse" />
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins text-[color:var(--text-primary)] mb-6 leading-tight max-w-3xl mx-auto"
        >
          Software Engineer & Full Stack Developer in{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
            Zimbabwe
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="text-[color:var(--text-secondary)] text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I am a software engineer based in Harare, Zimbabwe, studying Computer Science at the Harare Institute of Technology (HIT). I specialize in crafting modern web applications, scalable full-stack architectures, and high-performance digital solutions.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <Button
            id="hero-view-projects"
            variant="primary"
            size="lg"
            icon={<ArrowRight size={18} />}
            onClick={() => scrollTo('#projects')}
          >
            View Projects
          </Button>
          <Button
            id="hero-download-resume"
            variant="secondary"
            size="lg"
            icon={<Download size={18} />}
            onClick={() => window.open('/Thabani_Nyathi_CV.pdf', '_blank')}
          >
            Download Resume
          </Button>
          <Button
            id="hero-contact"
            variant="outline"
            size="lg"
            onClick={() => scrollTo('#contact')}
          >
            Contact Me
          </Button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: Github, label: 'GitHub', href: 'https://github.com/thabani29' },
            { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/thabani-nyathi-3143142aa' },
            { icon: Mail, label: 'Email', href: 'mailto:nyathiza31@gmail.com' },
          ].map(({ icon: Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-[color:var(--text-muted)] hover:text-[color:var(--text-primary)] hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all duration-200"
            >
              <Icon size={19} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[color:var(--text-muted)] hover:text-[color:var(--text-secondary)] transition-colors group"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} className="animate-bounce group-hover:text-cyan-400 transition-colors" />
      </motion.button>
    </section>
  );
}
