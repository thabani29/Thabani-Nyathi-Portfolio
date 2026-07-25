import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'HTML5', proficiency: 95 },
      { name: 'CSS3', proficiency: 90 },
      { name: 'JavaScript', proficiency: 88 },
      { name: 'TypeScript', proficiency: 78 },
      { name: 'React', proficiency: 82 },
      { name: 'Next.js', proficiency: 75 },
      { name: 'Tailwind CSS', proficiency: 85 },
    ],
  },
  {
    name: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', proficiency: 80 },
      { name: 'Express', proficiency: 78 },
      { name: 'Java', proficiency: 82 },
      { name: 'PHP', proficiency: 75 },
      { name: 'REST APIs', proficiency: 85 },
    ],
  },
  {
    name: 'Databases',
    icon: '🗄️',
    skills: [
      { name: 'MySQL', proficiency: 85 },
      { name: 'PostgreSQL', proficiency: 72 },
      { name: 'MongoDB', proficiency: 70 },
    ],
  },
  {
    name: 'Tools',
    icon: '🛠️',
    skills: [
      { name: 'Git', proficiency: 88 },
      { name: 'GitHub', proficiency: 88 },
      { name: 'Docker', proficiency: 60 },
      { name: 'Linux', proficiency: 72 },
      { name: 'VS Code', proficiency: 95 },
    ],
  },
  {
    name: 'Other',
    icon: '🧠',
    skills: [
      { name: 'Software Engineering', proficiency: 85 },
      { name: 'System Design', proficiency: 78 },
      { name: 'Database Design', proficiency: 82 },
      { name: 'UI/UX Fundamentals', proficiency: 72 },
      { name: 'SEO Fundamentals', proficiency: 75 },
    ],
  },
];
