import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    id: 'modern-web-dev',
    title: 'Modern Web Development Practices in 2025',
    excerpt:
      'Exploring the latest trends in web development — from server components and edge computing to AI-assisted coding and the future of the web platform.',
    category: 'Web Development',
    date: '2025-05-15',
    readTime: 8,
    tags: ['React', 'Next.js', 'Web', 'Trends'],
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'computer-architecture',
    title: 'Understanding Computer Architecture: A Developer\'s Perspective',
    excerpt:
      'A deep dive into how modern CPUs work, why understanding hardware makes you a better software engineer, and how memory hierarchies affect application performance.',
    category: 'Computer Science',
    date: '2025-04-22',
    readTime: 12,
    tags: ['Architecture', 'Hardware', 'Performance', 'CS'],
    gradient: 'from-sky-500 to-blue-600',
  },
  {
    id: 'database-design',
    title: 'Database Design Principles Every Developer Should Know',
    excerpt:
      'From normalization and indexing strategies to choosing between SQL and NoSQL — a comprehensive guide to designing databases that scale with your application.',
    category: 'Databases',
    date: '2025-03-10',
    readTime: 10,
    tags: ['MySQL', 'PostgreSQL', 'MongoDB', 'Design'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 'computer-graphics',
    title: 'Introduction to Computer Graphics: From Pixels to 3D',
    excerpt:
      'An accessible introduction to computer graphics fundamentals — rasterization, shading, transformations, and how modern GPUs render the world in real time.',
    category: 'Computer Science',
    date: '2025-02-18',
    readTime: 9,
    tags: ['Graphics', 'OpenGL', 'Rendering', 'CS'],
    gradient: 'from-cyan-600 to-emerald-500',
  },
  {
    id: 'se-best-practices',
    title: 'Software Engineering Best Practices for Student Developers',
    excerpt:
      'Lessons learned building real projects at university — clean code, version control, testing, documentation, and the habits that separate good developers from great ones.',
    category: 'Software Engineering',
    date: '2025-01-05',
    readTime: 7,
    tags: ['Best Practices', 'Git', 'Clean Code', 'Career'],
    gradient: 'from-emerald-600 to-blue-500',
  },
];
