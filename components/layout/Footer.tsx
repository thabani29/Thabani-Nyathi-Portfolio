'use client';
import { Github, Linkedin, Mail, Code2, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const QUICK_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

const SOCIALS = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/thabani29' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/thabani-nyathi-3143142aa' },
  { icon: Mail, label: 'Email', href: 'mailto:nyathiza31@gmail.com' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="relative bg-navy-950 border-t border-white/10 pt-16 pb-8 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-48 bg-blue-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-64 h-48 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl overflow-hidden border border-cyan-500/40 shadow-lg shadow-cyan-500/30">
                <Image
                  src="/thabani.png"
                  alt="Thabani Nyathi"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <span className="font-poppins font-bold text-xl text-white">
                T<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">N</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Software Engineer & Computer Science student at the Harare Institute of Technology. Building software that solves real problems.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/20 transition-colors duration-200"
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold font-poppins mb-5 text-sm uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    suppressHydrationWarning
                    onClick={() => scrollTo(link.href)}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white font-semibold font-poppins mb-5 text-sm uppercase tracking-widest">Get In Touch</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>📍 Harare, Zimbabwe</li>
              <li>🎓 Harare Institute of Technology</li>
              <li>
                <a href="tel:+263789657604" className="hover:text-cyan-400 transition-colors">
                  📞 +263 78 965 7604
                </a>
              </li>
              <li>
                <a href="mailto:nyathiza31@gmail.com" className="hover:text-cyan-400 transition-colors">
                  ✉️ nyathiza31@gmail.com
                </a>
              </li>
              <li>
                <a href="https://github.com/thabani29" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  💻 github.com/thabani29
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>© 2026 Thabani Nyathi. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart size={13} className="text-red-400 fill-red-400" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
