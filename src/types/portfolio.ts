/**
 * TypeScript interfaces for portfolio data structures.
 * All data is hardcoded in src/data/portfolio.ts — no API calls at runtime.
 */

export interface LocalizedString {
  en: string;
  id: string;
}

export interface Profile {
  /** Full name displayed in the hero section */
  name: string;
  /** Professional title / role */
  title: LocalizedString;
  /** ASCII block-pixel wordmark used in the TUI mockup (split into lines) */
  asciiWordmark: string[];
  /** Short bio paragraph(s) */
  bio: LocalizedString;
  /** Phone number for tel: links */
  phone: string;
  /** Professional email for mailto: links */
  email: string;
  /** LinkedIn profile URL */
  linkedin: string;
  /** GitHub profile URL */
  github: string;
  /** Instagram profile URL (optional) */
  instagram?: string;
  /** Path to profile photo relative to /public */
  photoSrc: string;
}

export interface TechBadge {
  /** Display label of the technology */
  label: string;
}

export interface Repo {
  /** Unique identifier */
  id: string;
  /** Repository name (e.g. "rai-portfolio") */
  name: string;
  /** Full description shown on the card */
  description: LocalizedString;
  /** Primary tech stack badges */
  stack: TechBadge[];
  /** Full GitHub repository URL */
  githubUrl: string;
  /** Programming language color accent (optional, for badge styling) */
  language?: string;
}

export interface Project {
  /** Unique identifier */
  id: string;
  /** Project / application name */
  name: string;
  /** What the project does and the problem it solves */
  description: LocalizedString;
  /** Tech stack used */
  stack: TechBadge[];
  /** Public URL of the live deployment */
  liveUrl: string;
  /** Admin Login URL (optional) */
  loginUrl?: string;
  /** GitHub repository URL */
  githubUrl: string;
  /** Path to screenshot image relative to /public */
  screenshotSrc?: string;
}

export interface Design {
  /** Unique identifier */
  id: string;
  /** Design project name */
  name: string;
  /** Aesthetic concept and UX approach */
  description: LocalizedString;
  /** Public Figma file URL */
  figmaUrl: string;
  /** Path to exported Figma mockup image relative to /public */
  thumbnailSrc?: string;
}

export interface Experience {
  id: string;
  role: LocalizedString;
  company: string;
  period: LocalizedString;
  responsibilities: LocalizedString[];
}

export interface Education {
  id: string;
  degree: LocalizedString;
  institution: LocalizedString;
  period: LocalizedString;
  achievements: LocalizedString[];
}

export interface SkillCategory {
  id: string;
  category: LocalizedString;
  items: string[];
}
