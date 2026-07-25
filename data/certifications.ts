import { Certification } from '@/types';

export const certifications: Certification[] = [
  {
    id: 'webdev-cert',
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    status: 'in-progress',
    icon: '🌐',
    gradient: 'from-cyan-500 to-blue-600',
  },

  {
    id: 'db-cert',
    title: 'Database Management & SQL',
    issuer: 'Oracle / Coursera',
    status: 'planned',
    icon: '🗄️',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 'cloud-cert',
    title: 'Cloud Computing Fundamentals',
    issuer: 'AWS / Google Cloud',
    status: 'in-progress',
    icon: '☁️',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'cybersec-cert',
    title: 'Cybersecurity Essentials',
    issuer: 'Cisco NetAcad',
    status: 'planned',
    icon: '🔐',
    gradient: 'from-emerald-500 to-cyan-500',
  },
  {
    id: 'react-cert',
    title: 'React Developer Certification',
    issuer: 'Meta / Coursera',
    status: 'in-progress',
    icon: '⚛️',
    gradient: 'from-sky-500 to-cyan-500',
  },
];
