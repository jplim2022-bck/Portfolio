export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface NavLink {
  href: string;
  label: string;
}
