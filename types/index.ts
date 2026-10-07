// ─── Projects ────────────────────────────────────────────────────────────────
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'web' | 'desktop' | 'other';
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  gradient: string;
  icon: string;
}

// ─── Skills ──────────────────────────────────────────────────────────────────
export interface Skill {
  name: string;
  proficiency: number; // 0–100
  icon?: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

// ─── Experience ──────────────────────────────────────────────────────────────
export type ExperienceType = 'education' | 'work' | 'internship' | 'development';

export interface Experience {
  id: string;
  type: ExperienceType;
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string[];
  tags: string[];
  gradient: string;
}

// ─── Certifications ──────────────────────────────────────────────────────────
export type CertStatus = 'earned' | 'in-progress' | 'planned';

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  status: CertStatus;
  credentialUrl?: string;
  icon: string;
  gradient: string;
}

// ─── Testimonials ────────────────────────────────────────────────────────────
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  content: string;
  avatar: string;
  rating: number;
}

// ─── Contact ─────────────────────────────────────────────────────────────────
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
