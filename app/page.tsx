/**
 * Home page — single-page portfolio SPA.
 *
 * Assembles all sections in order:
 *   1. Navbar (sticky, smooth-scroll anchor links)
 *   2. HeroSection (TUI mockup + profile split-screen)
 *   3. GitHubSection (top 5 repos)
 *   4. ProjectsSection (live hosted websites)
 *   5. DesignsSection (Figma UI showcase)
 *   6. Footer
 *
 * All data is imported from src/data/portfolio.ts — no runtime API calls.
 * Navigation uses native anchor scrolling with CSS scroll-behavior: smooth.
 *
 * @file app/page.tsx
 */

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/features/HeroSection";
import GitHubSection from "@/components/features/GitHubSection";
import ProjectsSection from "@/components/features/ProjectsSection";
import DesignsSection from "@/components/features/DesignsSection";
import { profile, repos, projects, designs } from "@/data/portfolio";

/**
 * Root page — Server Component assembling the full SPA.
 */
export default function Home() {
  return (
    <>
      {/* ── Navigation ── */}
      <Navbar profile={profile} />

      {/* ── Main Content ── */}
      <main id="main-content" className="flex-1">
        {/* Section 1: Hero / Profile */}
        <HeroSection profile={profile} />

        {/* Hairline section divider */}
        <div className="max-w-5xl mx-auto px-6">
          <div className="border-hairline-bottom mb-24" aria-hidden="true" />
        </div>

        {/* Section 2: GitHub Dashboard */}
        <GitHubSection repos={repos} />

        {/* Hairline section divider */}
        <div className="max-w-5xl mx-auto px-6">
          <div className="border-hairline-bottom mb-24" aria-hidden="true" />
        </div>

        {/* Section 3: Live Projects */}
        <ProjectsSection projects={projects} />

        {/* Hairline section divider */}
        <div className="max-w-5xl mx-auto px-6">
          <div className="border-hairline-bottom mb-24" aria-hidden="true" />
        </div>

        {/* Section 4: UI Design Showcase */}
        <DesignsSection designs={designs} />
      </main>

      {/* ── Footer ── */}
      <Footer profile={profile} />
    </>
  );
}
