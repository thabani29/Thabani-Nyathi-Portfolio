'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Clock, CheckCircle2, Target } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { certifications } from '@/data/certifications';
import { CertStatus } from '@/types';

const STATUS_CONFIG: Record<CertStatus, { label: string; icon: typeof CheckCircle2; color: string; bg: string }> = {
  earned:      { label: 'Earned',      icon: CheckCircle2, color: 'text-emerald-400', bg: 'bg-emerald-500/20 border-emerald-500/40' },
  'in-progress': { label: 'In Progress', icon: Clock,        color: 'text-yellow-400',  bg: 'bg-yellow-500/20 border-yellow-500/40' },
  planned:     { label: 'Planned',     icon: Target,       color: 'text-slate-400',   bg: 'bg-slate-500/20 border-slate-500/40' },
};

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 bg-navy-900 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-cyan-700/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials & Learning Paths"
          subtitle="Professional certifications I've earned and am actively pursuing to validate my expertise."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => {
            const { label, icon: StatusIcon, color, bg } = STATUS_CONFIG[cert.status];
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-cyan-500/40 hover:bg-cyan-500/5 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 overflow-hidden"
              >
                {/* Top gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.gradient}`} />

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center text-2xl mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {cert.icon}
                </div>

                {/* Content */}
                <h3 className="text-base font-bold font-poppins text-white mb-1 leading-snug">{cert.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{cert.issuer}</p>
                {cert.date && <p className="text-xs text-slate-500 mb-4">Issued: {cert.date}</p>}

                {/* Status badge */}
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold ${bg} ${color}`}>
                  <StatusIcon size={12} />
                  {label}
                </div>

                {/* Link */}
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-5 right-5 text-slate-500 hover:text-cyan-400 transition-colors"
                    aria-label="View credential"
                  >
                    <ExternalLink size={15} />
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
