/**
 * Hardcoded portfolio data.
 * Edit this file to update all content on the site — no API calls or runtime fetches.
 *
 * @file src/data/portfolio.ts
 */

import type { Profile, Repo, Project, Design } from "@/types/portfolio";

// ─────────────────────────────────────────────
// PROFILE
// ─────────────────────────────────────────────

export const profile: Profile = {
  name: "Rai Wirawan",
  title: "Full-Stack Software Engineer",

  /**
   * ASCII block-pixel wordmark — rendered inside the TUI hero mockup.
   * Each string is one line of the block-art wordmark.
   */
  asciiWordmark: [
    "██████╗  █████╗ ██╗    ██╗██╗██████╗  █████╗ ██╗    ██╗ █████╗ ███╗  ██╗",
    "██╔══██╗██╔══██╗██║    ██║██║██╔══██╗██╔══██╗██║    ██║██╔══██╗████╗ ██║",
    "██████╔╝███████║██║ █╗ ██║██║██████╔╝███████║██║ █╗ ██║███████║██╔██╗██║",
    "██╔══██╗██╔══██║██║███╗██║██║██╔══██╗██╔══██║██║███╗██║██╔══██║██║╚████║",
    "██║  ██║██║  ██║╚███╔███╔╝██║██║  ██║██║  ██║╚███╔███╔╝██║  ██║██║ ╚███║",
    "╚═╝  ╚═╝╚═╝  ╚═╝ ╚══╝╚══╝ ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚══╝",
  ],

  bio: "A full-stack software engineer who thrives both as a focused individual contributor and as a reliable team collaborator. I build clean, scalable, and maintainable applications — from database schema to polished UI — with modern web technologies and a bias for performance.",

  // ── Update these with your real contact info ──
  phone: "+62 821 0000 0000",
  email: "rai@wirawan.dev",
  linkedin: "https://linkedin.com/in/raiwirawan",
  github: "https://github.com/raiwirawan",
  twitter: "https://x.com/raiwirawan",

  photoSrc: "/images/profile.jpg",
};

// ─────────────────────────────────────────────
// TOP 5 GITHUB REPOSITORIES
// ─────────────────────────────────────────────

export const repos: Repo[] = [
  {
    id: "repo-1",
    name: "rai-portfolio",
    description:
      "Personal portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS. Styled after the OpenCode.ai terminal-aesthetic design system.",
    stack: [
      { label: "Next.js" },
      { label: "TypeScript" },
      { label: "Tailwind CSS" },
      { label: "React 19" },
    ],
    githubUrl: "https://github.com/raiwirawan/rai-portfolio",
    language: "TypeScript",
  },
  {
    id: "repo-2",
    name: "expense-tracker-api",
    description:
      "RESTful API for personal expense tracking with JWT authentication, budget management, category tagging, and monthly analytics endpoints.",
    stack: [
      { label: "Node.js" },
      { label: "Express" },
      { label: "PostgreSQL" },
      { label: "Prisma" },
    ],
    githubUrl: "https://github.com/raiwirawan/expense-tracker-api",
    language: "JavaScript",
  },
  {
    id: "repo-3",
    name: "chat-app-realtime",
    description:
      "Real-time chat application with WebSocket support, public and private rooms, message history, and read receipts — built in a weekend.",
    stack: [
      { label: "React" },
      { label: "Socket.io" },
      { label: "Node.js" },
      { label: "MongoDB" },
    ],
    githubUrl: "https://github.com/raiwirawan/chat-app-realtime",
    language: "JavaScript",
  },
  {
    id: "repo-4",
    name: "ml-image-classifier",
    description:
      "Image classification pipeline using CNNs. Trained on a custom dataset with 10 categories. Achieves 94% validation accuracy. Includes Jupyter notebooks and a FastAPI inference endpoint.",
    stack: [
      { label: "Python" },
      { label: "TensorFlow" },
      { label: "Scikit-learn" },
      { label: "FastAPI" },
    ],
    githubUrl: "https://github.com/raiwirawan/ml-image-classifier",
    language: "Python",
  },
  {
    id: "repo-5",
    name: "ui-component-library",
    description:
      "A reusable React component library with full TypeScript support, Storybook documentation, and automated visual regression tests. Published to NPM.",
    stack: [
      { label: "React" },
      { label: "TypeScript" },
      { label: "Storybook" },
      { label: "Rollup" },
    ],
    githubUrl: "https://github.com/raiwirawan/ui-component-library",
    language: "TypeScript",
  },
];

// ─────────────────────────────────────────────
// LIVE HOSTED PROJECTS
// ─────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: "project-1",
    name: "TaskFlow — Project Management SaaS",
    description:
      "A full-featured project management tool with Kanban boards, task assignments, due dates, team collaboration, and real-time activity feeds. Deployed on Vercel with a Supabase backend.",
    stack: [
      { label: "Next.js" },
      { label: "Supabase" },
      { label: "Tailwind CSS" },
      { label: "Vercel" },
    ],
    liveUrl: "https://taskflow.raiwirawan.dev",
    githubUrl: "https://github.com/raiwirawan/taskflow",
  },
  {
    id: "project-2",
    name: "StoreFront — E-Commerce Platform",
    description:
      "A production-grade e-commerce platform with cart management, Stripe payment integration, order tracking, and an admin dashboard for inventory and analytics.",
    stack: [
      { label: "Next.js" },
      { label: "Stripe" },
      { label: "PostgreSQL" },
      { label: "Prisma" },
    ],
    liveUrl: "https://storefront.raiwirawan.dev",
    githubUrl: "https://github.com/raiwirawan/storefront",
  },
  {
    id: "project-3",
    name: "DevLog — Developer Blog Platform",
    description:
      "A developer-focused blog with MDX content authoring, syntax-highlighted code blocks, reading time estimates, tag filtering, and newsletter subscription via Resend.",
    stack: [
      { label: "Next.js" },
      { label: "MDX" },
      { label: "Contentlayer" },
      { label: "Resend" },
    ],
    liveUrl: "https://devlog.raiwirawan.dev",
    githubUrl: "https://github.com/raiwirawan/devlog",
  },
];

// ─────────────────────────────────────────────
// UI DESIGN SHOWCASE (FIGMA)
// ─────────────────────────────────────────────

export const designs: Design[] = [
  {
    id: "design-1",
    name: "E-Commerce Mobile App",
    description:
      "A complete mobile shopping experience with a modern card-based product grid, immersive product detail pages, smooth checkout flow, and a personalized home feed. Focused on reducing time-to-purchase.",
    figmaUrl: "https://figma.com/file/placeholder-ecommerce",
  },
  {
    id: "design-2",
    name: "SaaS Analytics Dashboard",
    description:
      "A data-rich admin dashboard for a SaaS product. Designed with strong information hierarchy, custom chart components, a collapsible sidebar, and a dark-mode-first color system.",
    figmaUrl: "https://figma.com/file/placeholder-dashboard",
  },
  {
    id: "design-3",
    name: "Banking Super App",
    description:
      "A comprehensive banking application design featuring biometric authentication, investment portfolio tracking, peer-to-peer transfers, and a card management system. Dark mode with high-contrast accessibility.",
    figmaUrl: "https://figma.com/file/placeholder-banking",
  },
];
