'use client';
import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle2, AlertCircle, Phone } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { ContactFormData } from '@/types';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const SOCIAL_LINKS = [
  { icon: Github, label: 'GitHub', value: 'github.com/thabani29', href: 'https://github.com/thabani29', color: 'hover:text-white' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/thabani-nyathi-3143142aa', href: 'https://www.linkedin.com/in/thabani-nyathi-3143142aa', color: 'hover:text-blue-400' },
  { icon: Mail, label: 'Email', value: 'nyathiza31@gmail.com', href: 'mailto:nyathiza31@gmail.com', color: 'hover:text-cyan-400' },
  { icon: Phone, label: 'Phone', value: '+263 78 965 7604', href: 'tel:+263789657604', color: 'hover:text-emerald-400' },
];

const INITIAL: ContactFormData = { name: '', email: '', subject: '', message: '' };

function validate(data: ContactFormData): Partial<Record<keyof ContactFormData, string>> {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};
  if (!data.name.trim()) errors.name = 'Name is required';
  if (!data.email.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Invalid email address';
  if (!data.subject.trim()) errors.subject = 'Subject is required';
  if (!data.message.trim()) errors.message = 'Message is required';
  else if (data.message.trim().length < 20) errors.message = 'Message must be at least 20 characters';
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<ContactFormData>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((err) => ({ ...err, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setStatus('sending');
    // Simulate send
    await new Promise((r) => setTimeout(r, 1800));
    setStatus('success');
    setForm(INITIAL);
  };

  const inputClass = (field: keyof ContactFormData) =>
    `w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-slate-500 text-sm focus:outline-none transition-all duration-200 ${
      errors[field]
        ? 'border-red-500/60 focus:border-red-500'
        : 'border-white/10 focus:border-cyan-500/60 focus:bg-cyan-500/5'
    }`;

  return (
    <section id="contact" className="relative py-28 bg-navy-900 overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-700/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let&apos;s Work Together"
          subtitle="Have a project in mind? Looking to hire? I&apos;d love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold font-poppins text-white mb-3">Ready to collaborate?</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Whether you&apos;re looking for a software engineering intern, a freelance developer, or a collaborator on an open source project — I&apos;m always open to exciting opportunities.
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                  <MapPin size={16} className="text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-0.5">Location</div>
                  <div className="text-white text-sm font-medium">Harare, Zimbabwe</div>
                </div>
              </div>

              {SOCIAL_LINKS.map(({ icon: Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all duration-200 group`}
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:border-cyan-500/30 transition-all duration-200">
                    <Icon size={16} className={`text-slate-400 ${color} transition-colors`} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">{label}</div>
                    <div className="text-white text-sm font-medium">{value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-green-500/10 border border-green-500/30">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shrink-0" />
              <span className="text-green-400 text-sm font-medium">Available for opportunities</span>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-8 gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center">
                    <CheckCircle2 size={28} className="text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold font-poppins text-white">Message Sent!</h3>
                  <p className="text-slate-400 text-sm max-w-xs">Thanks for reaching out. I&apos;ll get back to you as soon as possible.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-medium text-slate-400 mb-1.5">Full Name *</label>
                      <input
                        id="contact-name"
                        suppressHydrationWarning
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={inputClass('name')}
                        autoComplete="name"
                      />
                      {errors.name && <p className="mt-1 text-xs text-red-400 flex items-center gap-1"><AlertCircle size={11} />{errors.name}</p>}
                    </div>
                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-medium text-slate-400 mb-1.5">Email Address *</label>
                      <input
                        id="contact-email"
                        suppressHydrationWarning
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={inputClass('email')}
                        autoComplete="email"
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-400 flex items-center gap-1"><AlertCircle size={11} />{errors.email}</p>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-medium text-slate-400 mb-1.5">Subject *</label>
                    <input
                      id="contact-subject"
                      suppressHydrationWarning
                      name="subject"
                      type="text"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className={inputClass('subject')}
                    />
                    {errors.subject && <p className="mt-1 text-xs text-red-400 flex items-center gap-1"><AlertCircle size={11} />{errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-medium text-slate-400 mb-1.5">Message *</label>
                    <textarea
                      id="contact-message"
                      suppressHydrationWarning
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      className={`${inputClass('message')} resize-none`}
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-400 flex items-center gap-1"><AlertCircle size={11} />{errors.message}</p>}
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    suppressHydrationWarning
                    disabled={status === 'sending'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    {status === 'sending' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  {status === 'error' && (
                    <p className="text-center text-sm text-red-400">Something went wrong. Please try again.</p>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
