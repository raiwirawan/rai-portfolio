/**
 * ProjectsSection — Live hosted projects showcase.
 *
 * Displays project cards in a responsive grid with screenshot thumbnails,
 * tech stack badges, and dual action buttons (Live Demo + Source Code).
 *
 * @file src/components/features/ProjectsSection.tsx
 */

import type { Project } from "@/types/portfolio";
import SectionLabel from "@/components/ui/SectionLabel";
import ProjectCard from "@/components/ui/ProjectCard";

interface ProjectsSectionProps {
  projects: Project[];
}

/**
 * Live Projects Showcase — production-hosted websites.
 */
export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className="max-w-5xl mx-auto px-6 pb-24"
      aria-label="Live projects showcase"
      style={{ scrollMarginTop: "56px" }}
    >
      <SectionLabel label="Live Projects" marker="[+]" />

      {/* Sub-header */}
      <p className="text-sm text-mute mb-8">
        <span className="text-ink font-medium">
          {projects.length} projects
        </span>
        {" · "}
        Production-deployed applications in live environments
      </p>

      {/* Project Cards Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        role="list"
      >
        {projects.map((project) => (
          <div key={project.id} role="listitem">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
