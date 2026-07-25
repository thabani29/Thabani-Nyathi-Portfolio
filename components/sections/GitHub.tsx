'use client';
import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const FALLBACK_REPOS = [
  {
    id: 1,
    name: 'Zimcrafts-Hub',
    html_url: 'https://github.com/thabani29/Zimcrafts-Hub',
    description: 'Online marketplace for local artisans using React, Node.js & MongoDB',
    stargazers_count: 0,
    forks_count: 0,
    language: 'JavaScript',
    updated_at: '',
  },
  {
    id: 2,
    name: 'electronic',
    html_url: 'https://github.com/thabani29/electronic',
    description: 'Electronic gadget and accessories store website using React & Node.js',
    stargazers_count: 0,
    forks_count: 0,
    language: 'JavaScript',
    updated_at: '',
  },
  {
    id: 3,
    name: 'Java-Assignment-Submission',
    html_url: 'https://github.com/thabani29/Java-Assignment-Submission',
    description: 'Java university assignment submissions',
    stargazers_count: 0,
    forks_count: 0,
    language: 'Java',
    updated_at: '',
  },
  {
    id: 4,
    name: 'Java-assignment-1',
    html_url: 'https://github.com/thabani29/Java-assignment-1',
    description: 'First Java programming assignment',
    stargazers_count: 0,
    forks_count: 0,
    language: 'Java',
    updated_at: '',
  },
];

const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: '#f1e05a',
  TypeScript: '#2b7489',
  Java: '#b07219',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
};

function getLanguageColor(language: string | null) {
  return language ? LANGUAGE_COLORS[language] ?? '#94a3b8' : '#94a3b8';
}

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
};

type GitHubUser = {
  public_repos: number;
  followers: number;
};

export default function GitHubSection() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<Repo[]>(FALLBACK_REPOS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch('https://api.github.com/users/thabani29'),
          fetch('https://api.github.com/users/thabani29/repos?sort=updated&per_page=100'),
        ]);

        if (!userRes.ok || !reposRes.ok) {
          throw new Error('GitHub API response error');
        }

        const userData = await userRes.json();
        const reposData: Repo[] = await reposRes.json();
        setUser({ public_repos: userData.public_repos, followers: userData.followers });
        setRepos(reposData.slice(0, 4));
      } catch (err) {
        setError('Unable to load live GitHub data. Displaying cached values.');
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, []);

  const totalStars = useMemo(
    () => repos.reduce((sum, repo) => sum + repo.stargazers_count, 0),
    [repos]
  );

  const stats = [
    { label: 'Public repos', value: user ? String(user.public_repos) : '—', icon: '📁' },
    { label: 'Followers', value: user ? String(user.followers) : '—', icon: '👥' },
    { label: 'Total stars', value: String(totalStars), icon: '⭐' },
    { label: 'Live data', value: loading ? 'Loading…' : error ? 'Fallback mode' : 'Current', icon: '⏱️' },
  ];

  return (
    <section id="github" className="relative py-28 bg-navy-950 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-800/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Open Source"
          title="GitHub Activity"
          subtitle="Live GitHub metrics, freshest repositories, and open source highlights."
        />

        {error ? (
          <div className="mb-8 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-4 text-sm text-rose-200">
            {error}
          </div>
        ) : null}

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:border-cyan-500/30 transition-colors"
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl font-black font-poppins text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">{stat.value}</div>
              <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-10"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
            <div className="text-white font-semibold font-poppins flex items-center gap-2">
              <Github size={18} className="text-cyan-400" />
              Live GitHub activity
            </div>
            <a
              href="https://github.com/thabani29"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-cyan-400 transition-colors"
            >
              View on GitHub →
            </a>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            This section fetches public GitHub data in real time. Repo counts, followers, and star totals refresh automatically when the page loads.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {repos.map((repo, i) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className="group bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Github size={16} className="text-slate-400" />
                  <span className="text-white font-semibold text-sm group-hover:text-cyan-400 transition-colors">{repo.name}</span>
                </div>
                {repo.language ? (
                  <span className="text-xs rounded-full px-2 py-1 bg-slate-800/70 text-slate-300">{repo.language}</span>
                ) : null}
              </div>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {repo.description || 'No repository description available.'}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: getLanguageColor(repo.language) }} />
                  {repo.language ?? 'Unknown'}
                </span>
                <span className="inline-flex items-center gap-1"><Star size={12} /> {repo.stargazers_count}</span>
                <span className="inline-flex items-center gap-1"><GitFork size={12} /> {repo.forks_count}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
