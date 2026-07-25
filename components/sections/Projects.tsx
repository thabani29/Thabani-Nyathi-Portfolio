'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import { projects } from '@/data/projects';
import { Project } from '@/types';

type Filter = 'all' | 'web' | 'desktop' | 'other';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-400 flex flex-col"
    >
      {/* Top gradient bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

      {/* Card header */}
      <div className={`relative h-44 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300 flex items-center justify-center overflow-hidden`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-100`} />
        <span className="relative text-6xl z-10 drop-shadow-xl">{project.icon}</span>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }} />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold font-poppins text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-emerald-400 transition-all duration-300 leading-tight">
            {project.title}
          </h3>
          <Badge variant="blue" size="sm" className="ml-2 shrink-0 capitalize">{project.category}</Badge>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg bg-white/8 border border-white/10 text-xs text-slate-400 hover:border-cyan-500/40 hover:text-cyan-400 transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${project.title}`}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View GitHub for ${project.title}`}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Github size={14} />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('all');

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  const filters: { key: Filter; label: string }[] = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web' },
    { key: 'desktop', label: 'Desktop' },
    { key: 'other', label: 'Other' },
  ];

  return (
    <section id="projects" className="relative py-28 bg-navy-900 overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-700/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Work"
          title="Projects That Define Me"
          subtitle="A selection of projects showcasing my skills in building real-world applications."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map(({ key, label }) => (
            <button
              key={key}
              suppressHydrationWarning
              id={`project-filter-${key}`}
              onClick={() => setFilter(key)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                filter === key
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 text-center"
        >
          <a
            href="https://github.com/thabani29"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200 text-sm font-medium"
          >
            <Github size={16} />
            View all projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
