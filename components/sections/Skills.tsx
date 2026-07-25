'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { skillCategories } from '@/data/skills';

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);
  const category = skillCategories[activeTab];

  return (
    <section id="skills" className="relative py-28 bg-[color:var(--surface-950)] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--surface-900)]/50 to-[color:var(--surface-950)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-800/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills & Technologies"
          title="My Technical Arsenal"
          subtitle="A curated set of tools and technologies I use to build modern, scalable software."
        />

        {/* Tab bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((cat, i) => (
            <button
              key={cat.name}
              suppressHydrationWarning
              id={`skills-tab-${cat.name.toLowerCase()}`}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === i
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-white/5 border border-white/10 text-[color:var(--text-secondary)] hover:bg-white/10 hover:text-[color:var(--text-primary)]'
              }`}
            >
              <span>{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {category.skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[color:var(--text-primary)] font-semibold text-sm">{skill.name}</span>
                <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  {skill.proficiency}%
                </span>
              </div>
              {/* Bar */}
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.proficiency}%` }}
                  transition={{ duration: 0.8, delay: i * 0.06 + 0.1, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
                />
              </div>
              {/* Proficiency label */}
              <div className="mt-2 text-xs text-[color:var(--text-muted)]">
                {skill.proficiency >= 90 ? 'Expert' : skill.proficiency >= 75 ? 'Advanced' : skill.proficiency >= 60 ? 'Intermediate' : 'Learning'}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {['React', 'Next.js', 'TypeScript', 'Node.js', 'Java', 'PHP', 'MySQL', 'MongoDB', 'Git', 'Docker'].map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[color:var(--text-secondary)] text-sm hover:border-cyan-500/40 hover:text-cyan-400 transition-all duration-200 cursor-default"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
