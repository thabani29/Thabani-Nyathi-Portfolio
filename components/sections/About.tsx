'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { GraduationCap, Code2, Database, Cpu, BookOpen, Lightbulb } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const STATS = [
  { value: '10+', label: 'Projects Completed', icon: '🚀' },
  { value: '15+', label: 'Technologies Used', icon: '⚙️' },
  { value: '3+', label: 'Years Learning', icon: '📚' },
  { value: 'Active', label: 'GitHub User', icon: '💻' },
];

const HIGHLIGHTS = [
  { icon: GraduationCap, label: 'Harare Institute of Technology', color: 'text-blue-400' },
  { icon: Code2, label: 'Full Stack Web Development', color: 'text-cyan-400' },
  { icon: Database, label: 'Database Systems & Design', color: 'text-blue-400' },
  { icon: Cpu, label: 'Computer Architecture', color: 'text-orange-400' },
  { icon: BookOpen, label: 'Continuous Learning', color: 'text-emerald-400' },
  { icon: Lightbulb, label: 'Problem Solving', color: 'text-yellow-400' },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-navy-900 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Passionate About Crafting Digital Solutions"
          subtitle="A software engineering student with a love for building things that matter."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Avatar + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center lg:items-start gap-10"
          >
            {/* Avatar */}
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-600/30 to-blue-600/30 border border-white/10 backdrop-blur-sm flex items-center justify-center relative shadow-2xl shadow-cyan-900/40 group">
                <Image
                  src="/thabani.png"
                  alt="Thabani Nyathi"
                  width={288}
                  height={288}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {/* Corner gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent pointer-events-none" />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-xl shadow-cyan-500/30"
              >
                🎓 HIT Student
              </motion.div>
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-cyan-500/30 blur-[1px] pointer-events-none" />
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all duration-300"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-2xl font-black font-poppins text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 leading-tight mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-slate-300 leading-relaxed text-[0.97rem]">
              <p>
                Hi! I&apos;m <strong className="text-white font-semibold">Thabani Nyathi</strong>, a software engineer and Computer Science student at the{' '}
                <strong className="text-blue-400">Harare Institute of Technology (HIT)</strong> in <strong className="text-cyan-400">Harare, Zimbabwe</strong>. I thrive at the intersection of clean architecture, scalable code, and real-world problem solving.
              </p>
              <p>
                My journey in software engineering has given me strong foundations in{' '}
                <strong className="text-cyan-400">Web Development</strong>,{' '}
                <strong className="text-cyan-400">Database Systems</strong>,{' '}
                <strong className="text-cyan-400">Computer Architecture</strong>, and{' '}
                <strong className="text-cyan-400">Computer Graphics</strong>. I love the challenge of designing systems that are both technically sound and user-friendly.
              </p>
              <p>
                Whether it&apos;s building full-stack web applications, designing efficient database schemas, or crafting polished user interfaces, I bring precision, creativity, and an engineer&apos;s mindset to everything I build.
              </p>
              <p>
                I believe in <strong className="text-white">continuous learning</strong> and <strong className="text-white">problem solving</strong> — always looking for better ways to architect solutions and grow as a developer. My goal is to work on products that make a real difference in people&apos;s lives.
              </p>
            </div>

            {/* Highlight pills */}
            <div className="flex flex-wrap gap-3 pt-2">
              {HIGHLIGHTS.map(({ icon: Icon, label, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-sm hover:bg-white/10 transition-colors"
                >
                  <Icon size={14} className={color} />
                  <span className="text-slate-300">{label}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.open('/Thabani_Nyathi_CV.pdf', '_blank')}
              className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300"
            >
              Download Resume
              <span>→</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
