import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'zimcrafts-hub',
    title: 'Zimcrafts-Hub',
    description:
      'An online marketplace that connects local artisans to international customers to sell artworks or teach how to make them.',
    longDescription:
      'A full-stack application built to empower local artisans. It features a marketplace for selling crafts and a platform for teaching crafting skills. Built with React, React Native, Node.js, and MongoDB.',
    technologies: ['React', 'React Native', 'Node.js', 'MongoDB', 'Express'],
    category: 'web',
    liveUrl: 'https://zimcrafts-hub.vercel.app',
    githubUrl: 'https://github.com/thabani29/Zimcrafts-Hub',
    featured: true,
    gradient: 'from-blue-600 via-sky-400 to-cyan-500',
    icon: '🎨',
  },
  {
    id: 'electronic-store',
    title: 'Electronic Gadgets Store',
    description:
      'An electronic gadget and accessories e-commerce store website.',
    longDescription:
      'A responsive e-commerce web application designed for electronic gadgets and accessories. It features product listings, shopping cart functionality, and seamless user experience. Built with React and Node.js.',
    technologies: ['React', 'Node.js', 'Express', 'JavaScript'],
    category: 'web',
    liveUrl: '#',
    githubUrl: 'https://github.com/thabani29/electronic',
    featured: true,
    gradient: 'from-cyan-600 via-sky-400 to-blue-600',
    icon: '💻',
  },
  {
    id: 'pulse-seo',
    title: 'Pulse SEO Engine',
    description:
      'A modern SEO platform designed to help businesses improve search engine rankings, monitor website performance, and optimize digital visibility.',
    longDescription:
      'Pulse SEO Engine is a comprehensive digital marketing tool that provides real-time SEO analysis, keyword tracking, backlink monitoring, and actionable optimization recommendations to drive organic traffic growth.',
    technologies: ['React', 'Next.js', 'Node.js', 'Express', 'SEO Analytics'],
    category: 'web',
    liveUrl: 'https://pulse-seo.vercel.app',
    githubUrl: 'https://github.com/thabani29/Pulse-SEO-Engine',
    featured: true,
    gradient: 'from-blue-600 via-sky-400 to-cyan-500',
    icon: '🚀',
  },
  {
    id: 'portfolio',
    title: 'Software Engineering Portfolio',
    description:
      'A showcase of software engineering projects, technical skills, and professional achievements.',
    longDescription:
      'A premium, production-ready personal portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion — featuring animations, glassmorphism design, and full SEO optimization.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    category: 'web',
    liveUrl: '#',
    githubUrl: 'https://github.com/thabani29',
    featured: true,
    gradient: 'from-emerald-500 via-cyan-500 to-blue-600',
    icon: '💼',
  },
];
