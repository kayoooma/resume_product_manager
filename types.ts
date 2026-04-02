export type Language = 'ru' | 'en' | 'uz';

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  tags: string[];
  metrics?: { label: string; value: string; trend: 'up' | 'down'; data?: number[] }[];
}

export interface EducationItem {
  id: string;
  school: string;
  degree: string;
  year: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  year: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ContentData {
  nav: {
    about: string;
    experience: string;
    skills: string;
    education: string;
    contact: string;
    lang_label: string;
  };
  hero: {
    greeting: string;
    name: string;
    role_prefix: string;
    role_suffix: string;
    description: string;
    cta_primary: string;
    cta_secondary: string;
    open_to_work: string;
    photo_error_title: string;
    photo_error_msg: string;
  };
  marquee: string[];
  about: {
    title_line1: string;
    title_highlight: string;
    title_line2: string;
    quote: string;
    content_p1: string;
    highlighted_text: string;
    content_p2: string;
    stats: { label: string; value: string }[];
  };
  experience: {
    section_title: string;
    scroll_hint: string;
    items: ExperienceItem[];
  };
  book: {
    title: string;
    author: string;
    label: string;
    description: string;
    quote: string;
    cover_title: string;
    cover_subtitle: string;
  };
  skills: {
    title_line1: string;
    title_highlight: string;
    subtitle: string;
    categories: SkillCategory[];
  };
  education: {
    title: string;
    items: EducationItem[];
    certTitle: string;
    certs: CertificationItem[];
  };
  contact: {
    available_badge: string;
    title_line1: string;
    title_highlight: string;
    description: string;
    telegram_btn: string;
    email_label: string;
    phone_label: string;
    email: string;
    phone: string;
    linkedin: string;
    location: string;
    footer: string;
    back_to_top: string;
    click_to_copy: string;
    copied: string;
  };
}