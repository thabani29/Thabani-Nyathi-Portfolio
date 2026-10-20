import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'HTML5', proficiency: 80 },
      { name: 'CSS3', proficiency: 75 },
      { name: 'JavaScript', proficiency: 60 },
      { name: 'TypeScript', proficiency: 40 },
      { name: 'React', proficiency: 70 },
      { name: 'Next.js', proficiency: 75 },
      { name: 'Tailwind CSS', proficiency: 65 },
    ],
  },
  {
    name: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', proficiency: 70 },
      { name: 'Express', proficiency: 70 },
      { name: 'Java', proficiency: 45 },
      { name: 'PHP', proficiency: 40 },
      { name: 'REST APIs', proficiency: 85 },
    ],
  },
  {
    name: 'Databases',
    icon: '🗄️',
    skills: [
      { name: 'MySQL', proficiency: 80 },
      { name: 'PostgreSQL', proficiency: 50 },
      { name: 'MongoDB', proficiency: 90 },
    ],
  },
  {
    name: 'Tools',
    icon: '🛠️',
    skills: [
      { name: 'Git', proficiency: 88 },
      { name: 'GitHub', proficiency: 88 },
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
      { name: 'UI/UX Fundamentals', proficiency: 70 },
      { name: 'SEO Fundamentals', proficiency: 75 },
    ],
  },
];
