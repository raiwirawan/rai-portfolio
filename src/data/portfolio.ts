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
  phone: "+6287890318741",
  email: "raiwirawann@gmail.com",
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
    name: "auliadekorin",
    description:
      "Wedding Decor, Make Up Artist, and Wedding Attire showcase landing page. There is also a feature for creating wedding invitation landing pages that is accessible exclusively to AuliaDekorin admins via /login and /dashboard.",
    stack: [{ label: "Web" }],
    githubUrl: "https://github.com/raiwirawan/auliadekorin",
  },
  {
    id: "repo-2",
    name: "landing-page-uts-pbw",
    description:
      "Project landing page for the Web-Based Programming (PBW) course midterm exam.",
    stack: [{ label: "Web" }],
    githubUrl: "https://github.com/raiwirawan/landing-page-uts-pbw",
  },
  {
    id: "repo-3",
    name: "carlagreycia-birthday",
    description:
      "This is a landing page for a birthday invitation for a friend who is celebrating their sweet seventeen.",
    stack: [{ label: "Web" }],
    githubUrl: "https://github.com/raiwirawan/carlagreycia-birthday",
  },
  {
    id: "repo-4",
    name: "uts-pemrograman-mobile",
    description:
      "This is the repository for the Mobile Programming midterm project, prepared by: Rai (2301010020), Farrel (2301010017), Lutfi (2301010039), and Nakamanda (2301010015).",
    stack: [{ label: "Mobile" }],
    githubUrl: "https://github.com/raiwirawan/uts-pemrograman-mobile",
  },
  {
    id: "repo-5",
    name: "pemrograman-mobile",
    description:
      "This is my final exam project for the Mobile Programming course, in which I used React Native and Expo.",
    stack: [{ label: "React Native" }, { label: "Expo" }],
    githubUrl: "https://github.com/raiwirawan/pemrograman-mobile",
    language: "TypeScript",
  },
  {
    id: "repo-6",
    name: "visibilitas",
    description:
      "This is a landing page project I created for the Bali Startup Camp held at Primakara University. The project aims to showcase clothing designed by artists with disabilities.",
    stack: [{ label: "Web" }],
    githubUrl: "https://github.com/wiraonedev/visibilitas",
  },
];

// ─────────────────────────────────────────────
// LIVE HOSTED PROJECTS
// ─────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: "project-1",
    name: "AuliaDekorin — Wedding Showcase",
    description:
      "Wedding Decor, Make Up Artist, and Wedding Attire showcase landing page. There is also a feature for creating wedding invitation landing pages that is accessible exclusively to AuliaDekorin admins via /login and /dashboard.",
    stack: [
      { label: "Next.js" },
      { label: "Tailwind CSS" },
      { label: "React" },
    ],
    liveUrl: "https://auliadekorin.vercel.app/",
    loginUrl: "https://auliadekorin.vercel.app/login",
    githubUrl: "https://github.com/raiwirawan/auliadekorin",
    screenshotSrc: "/images/auliadekorin_vercel_app.webp",
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
