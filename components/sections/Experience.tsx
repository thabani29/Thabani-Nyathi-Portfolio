'use client';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Code2, Star } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import { experiences } from '@/data/experience';
import { ExperienceType } from '@/types';

const TYPE_ICONS: Record<ExperienceType, { icon: typeof GraduationCap; color: string }> = {
  education: { icon: GraduationCap, color: 'text-blue-400' },
  work: { icon: Briefcase, color: 'text-cyan-400' },
  internship: { icon: Star, color: 'text-yellow-400' },
  development: { icon: Code2, color: 'text-emerald-400' },
};

const TYPE_LABELS: Record<ExperienceType, string> = {
  education: 'Education',
  work: 'Work',
  internship: 'Internship',
  development: 'Development',
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 bg-navy-950 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-700/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-cyan-700/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="My Journey"
          title="Experience & Education"
          subtitle="A timeline of my academic achievements and professional development."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const { icon: Icon, color } = TYPE_ICONS[exp.type];
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  className="relative pl-16 sm:pl-20"
                >
                  {/* Icon bubble */}
                  <div className={`absolute left-0 top-0 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center shadow-lg`}>
                    <Icon size={20} className="text-white" />
                  </div>

                  {/* Card */}
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-cyan-500/30 hover:bg-white/8 transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="blue" size="sm">{TYPE_LABELS[exp.type]}</Badge>
                          {exp.current && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 text-xs font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-bold font-poppins text-white leading-tight">{exp.title}</h3>
                        <p className="text-blue-400 font-medium text-sm mt-0.5">{exp.organization}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-sm text-slate-400">{exp.startDate} — {exp.endDate}</div>
                        <div className="text-xs text-slate-500 mt-0.5">📍 {exp.location}</div>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-1.5 mb-4">
                      {exp.description.map((d, di) => (
                        <li key={di} className="flex items-start gap-2 text-sm text-slate-400">
                          <span className={`mt-0.5 shrink-0 ${color}`}>▸</span>
                          {d}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <Badge key={tag} variant="default" size="sm">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
