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
  title: {
    en: "Full-Stack Software Engineer",
    id: "Software Engineer Full-Stack",
  },

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

  bio: {
    en: "A full-stack software engineer who thrives both as a focused individual contributor and as a reliable team collaborator. I build clean, scalable, and maintainable applications — from database schema to polished UI — with modern web technologies and a bias for performance.",
    id: "Seorang software engineer full-stack yang berkembang baik sebagai kontributor individu yang fokus maupun sebagai kolaborator tim yang dapat diandalkan. Saya membangun aplikasi yang bersih, dapat diskalakan, dan mudah dipelihara — mulai dari skema database hingga UI yang apik — dengan teknologi web modern dan berorientasi pada performa.",
  },

  // ── Update these with your real contact info ──
  phone: "+6287890318741",
  email: "raiwirawann@gmail.com",
  linkedin: "https://www.linkedin.com/in/raiwirawan",
  github: "https://github.com/raiwirawan",
  instagram: "https://www.instagram.com/raiwirawann/",

  photoSrc: "/images/profile.jpg",
};

// ─────────────────────────────────────────────
// TOP 5 GITHUB REPOSITORIES
// ─────────────────────────────────────────────

export const repos: Repo[] = [
  {
    id: "repo-1",
    name: "auliadekorin",
    description: {
      en: "Wedding Decor, Make Up Artist, and Wedding Attire showcase landing page. There is also a feature for creating wedding invitation landing pages that is accessible exclusively to AuliaDekorin admins via /login and /dashboard.",
      id: "Halaman landing showcase untuk Dekorasi Pernikahan, Make Up Artist, dan Pakaian Pengantin. Terdapat juga fitur pembuatan halaman undangan pernikahan yang dapat diakses khusus oleh admin AuliaDekorin melalui /login dan /dashboard."
    },
    stack: [{ label: "Web" }],
    githubUrl: "https://github.com/raiwirawan/auliadekorin",
  },
  {
    id: "repo-2",
    name: "rai-portfolio",
    description: {
      en: "This is my portfolio website, where you can view my educational background, the projects I have worked on, my skills, and my contact information.",
      id: "Ini adalah website portofolio saya, di mana Anda dapat melihat latar belakang pendidikan saya, proyek yang telah saya kerjakan, keahlian saya, dan informasi kontak saya."
    },
    stack: [{ label: "Next.js" }, { label: "TypeScript" }, { label: "Tailwind CSS" }],
    githubUrl: "https://github.com/raiwirawan/rai-portfolio",
  },
  {
    id: "repo-3",
    name: "carlagreycia-birthday",
    description: {
      en: "This is a landing page for a birthday invitation for a friend who is celebrating their sweet seventeen.",
      id: "Ini adalah halaman landing untuk undangan ulang tahun teman yang sedang merayakan sweet seventeen."
    },
    stack: [{ label: "Web" }],
    githubUrl: "https://github.com/raiwirawan/carlagreycia-birthday",
  },
  {
    id: "repo-4",
    name: "uts-pemrograman-mobile",
    description: {
      en: "This is the repository for the Mobile Programming midterm project, prepared by: Rai (2301010020), Farrel (2301010017), Lutfi (2301010039), and Nakamanda (2301010015).",
      id: "Ini adalah repositori untuk proyek UTS Pemrograman Mobile, disusun oleh: Rai (2301010020), Farrel (2301010017), Lutfi (2301010039), dan Nakamanda (2301010015)."
    },
    stack: [{ label: "Mobile" }],
    githubUrl: "https://github.com/raiwirawan/uts-pemrograman-mobile",
  },
  {
    id: "repo-5",
    name: "pemrograman-mobile",
    description: {
      en: "This is my final exam project for the Mobile Programming course, in which I used React Native and Expo.",
      id: "Ini adalah proyek ujian akhir semester saya untuk mata kuliah Pemrograman Mobile, di mana saya menggunakan React Native dan Expo."
    },
    stack: [{ label: "React Native" }, { label: "Expo" }],
    githubUrl: "https://github.com/raiwirawan/pemrograman-mobile",
    language: "TypeScript",
  },
  {
    id: "repo-6",
    name: "visibilitas",
    description: {
      en: "This is a landing page project I created for the Bali Startup Camp held at Primakara University. The project aims to showcase clothing designed by artists with disabilities.",
      id: "Ini adalah proyek halaman landing yang saya buat untuk Bali Startup Camp yang diselenggarakan di Universitas Primakara. Proyek ini bertujuan untuk memamerkan pakaian yang dirancang oleh seniman penyandang disabilitas."
    },
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
    description: {
      en: "Wedding Decor, Make Up Artist, and Wedding Attire showcase landing page. There is also a feature for creating wedding invitation landing pages that is accessible exclusively to AuliaDekorin admins via /login and /dashboard.",
      id: "Halaman landing showcase untuk Dekorasi Pernikahan, Make Up Artist, dan Pakaian Pengantin. Terdapat juga fitur pembuatan halaman undangan pernikahan yang dapat diakses khusus oleh admin AuliaDekorin melalui /login dan /dashboard."
    },
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
    name: "Rai Wirawan — Personal Portfolio",
    description: {
      en: "Personal portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. Styled after a terminal-aesthetic design system with responsive layouts and smooth scroll navigation.",
      id: "Website portofolio pribadi yang dibangun dengan Next.js, React, TypeScript, dan Tailwind CSS. Didesain dengan sistem desain bergaya terminal dengan tata letak yang responsif dan navigasi gulir yang mulus."
    },
    stack: [
      { label: "Next.js" },
      { label: "React" },
      { label: "TypeScript" },
      { label: "Tailwind CSS" },
    ],
    liveUrl: "https://rai-wirawan.vercel.app/",
    githubUrl: "https://github.com/raiwirawan/rai-portfolio",
    screenshotSrc: "/images/rai-wirawan_vercel_app.webp",
  },
];

// ─────────────────────────────────────────────
// UI DESIGN SHOWCASE (FIGMA)
// ─────────────────────────────────────────────

export const designs: Design[] = [
  {
    id: "design-1",
    name: "AuliaDekorin",
    description: {
      en: "This is a high fidelity prototype of my AuliaDekorin project which you can visit via the live project or its GitHub repository.",
      id: "Ini adalah high fidelity prototype dari proyek AuliaDekorin saya yang bisa Anda kunjungi di live project ataupun repository githubnya"
    },
    figmaUrl: "https://www.figma.com/design/AHHRwDG8AZ5UvRn5CGOSda/Everlasting--Sebelum-AuliaDekorin-?node-id=1-1045&p=f&t=aWnnLZiXan3gCZOk-0",
  },
  {
    id: "design-2",
    name: "NoteApp UI",
    description: {
      en: "This is a project from my college assignment, where I was tasked with creating a free-form application design, and I decided to create a note-taking app design.",
      id: "Ini adalah proyek dari tugas kuliah saya, dimana saya ditugaskan untuk membuat desain aplikasi secara bebas, dan saya memutuskan untuk membuat desain aplikasi catatan."
    },
    figmaUrl: "https://www.figma.com/design/3wFhkkC8qbYg9a9673LqhN/NoteApp-Design?node-id=0-1&p=f&t=NAT4rQzRjDnEaPKt-0",
  },
  {
    id: "design-3",
    name: "Fashion App UI",
    description: {
      en: "This is an assignment from my User Interface Design course, where I designed a clothing e-commerce app.",
      id: "Ini adalah tugas dari mata kuliah User Interface Design saya, dimana saya membuat aplikasi jual baju."
    },
    figmaUrl: "https://www.figma.com/design/ndvMkSbmtElejHX6IwOgCV/UID-Prototyping?t=08X42o7VGXXcFQrh-0",
  },
];
