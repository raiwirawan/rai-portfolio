/**
 * Home page — single-page portfolio SPA.
 *
 * Assembles all sections in order:
 *   1. Navbar (sticky, smooth-scroll anchor links)
 *   2. HeroSection (TUI mockup + profile split-screen)
 *   3. SkillsSection
 *   4. ExperienceSection
 *   5. EducationSection
 *   6. GitHubSection (top 5 repos)
 *   7. ProjectsSection (live hosted websites)
 *   8. DesignsSection (Figma UI showcase)
 *   9. Footer
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
import SkillsSection from "@/components/features/SkillsSection";
import ExperienceSection from "@/components/features/ExperienceSection";
import EducationSection from "@/components/features/EducationSection";
import { profile, repos, projects, designs, skills, experiences, education } from "@/data/portfolio";

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

        {/* Section 2: Skills */}
        <SkillsSection skills={skills} />

        {/* Hairline section divider */}
        <div className="max-w-5xl mx-auto px-6">
          <div className="border-hairline-bottom mb-24" aria-hidden="true" />
        </div>

        {/* Section 3: Work Experience */}
        <ExperienceSection experiences={experiences} />

        {/* Hairline section divider */}
        <div className="max-w-5xl mx-auto px-6">
          <div className="border-hairline-bottom mb-24" aria-hidden="true" />
        </div>

        {/* Section 4: Education */}
        <EducationSection education={education} />

        {/* Hairline section divider */}
        <div className="max-w-5xl mx-auto px-6">
          <div className="border-hairline-bottom mb-24" aria-hidden="true" />
        </div>

        {/* Section 5: GitHub Dashboard */}
        <GitHubSection repos={repos} />

        {/* Hairline section divider */}
        <div className="max-w-5xl mx-auto px-6">
          <div className="border-hairline-bottom mb-24" aria-hidden="true" />
        </div>

        {/* Section 6: Live Projects */}
        <ProjectsSection projects={projects} />

        {/* Hairline section divider */}
        <div className="max-w-5xl mx-auto px-6">
          <div className="border-hairline-bottom mb-24" aria-hidden="true" />
        </div>

        {/* Section 7: UI Design Showcase */}
        <DesignsSection designs={designs} />
      </main>

      {/* ── Footer ── */}
      <Footer profile={profile} />
    </>
  );
}
