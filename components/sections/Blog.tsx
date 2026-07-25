'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Search, Tag } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import { blogPosts } from '@/data/blog';
import { formatDate } from '@/lib/utils';

export default function Blog() {
  const [query, setQuery] = useState('');

  const filtered = blogPosts.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <section id="blog" className="relative py-28 bg-navy-900 overflow-hidden">
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-blue-700/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-cyan-700/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technical Writing"
          title="From The Blog"
          subtitle="Thoughts, tutorials, and insights on software engineering and computer science."
        />

        {/* Search */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              id="blog-search"
              suppressHydrationWarning
              type="text"
              placeholder="Search articles..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/60 focus:bg-cyan-500/5 transition-all duration-200"
            />
          </div>
        </div>

        {/* Cards */}
        {filtered.length === 0 ? (
          <p className="text-center text-slate-500 py-12">No articles found for &quot;{query}&quot;</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col cursor-pointer"
              >
                {/* Header gradient */}
                <div className={`h-2 w-full bg-gradient-to-r ${post.gradient}`} />
                <div className={`h-28 bg-gradient-to-br ${post.gradient} opacity-15 group-hover:opacity-25 transition-opacity duration-300 relative overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient}`} style={{ opacity: 0.25 }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Tag size={40} className="text-white/20" />
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="cyan" size="sm">{post.category}</Badge>
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <Clock size={11} />
                      {post.readTime} min read
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold font-poppins text-white mb-2 leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">{post.excerpt}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-500">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-xs text-slate-500">{formatDate(post.date)}</span>
                    <span className="text-xs text-cyan-400 group-hover:underline">Read more →</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
