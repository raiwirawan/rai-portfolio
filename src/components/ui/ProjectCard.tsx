/**
 * ProjectCard — displays a single live-hosted project.
 *
 * Features:
 * - Screenshot thumbnail (or ASCII placeholder if no image)
 * - Project name, description, tech stack badges
 * - "Live Demo" + "Source Code" dual action buttons
 * - Hover: translateY(-4px) + shadow expansion
 *
 * @file src/components/ui/ProjectCard.tsx
 */

'use client';

import Image from "next/image";
import type { Project } from "@/types/portfolio";
import Badge from "@/components/ui/Badge";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProjectCardProps {
  project: Project;
}

/**
 * Live project card with screenshot thumbnail and dual CTAs.
 */
export default function ProjectCard({ project }: ProjectCardProps) {
  const { language } = useLanguage();

  return (
    <article
      className="card-hover border-hairline flex flex-col bg-canvas overflow-hidden"
      style={{ borderRadius: "4px" }}
      aria-label={`Project: ${project.name}`}
    >
      {/* ── Screenshot / Placeholder ── */}
      <div className="relative w-full aspect-video overflow-hidden bg-surface-dark">
        {project.screenshotSrc ? (
          <Image
            src={project.screenshotSrc}
            alt={`Screenshot of ${project.name}`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          /* ASCII-style placeholder matching the TUI aesthetic */
          <div className="screenshot-placeholder w-full h-full flex-col gap-2">
            <pre
              className="text-center text-ash select-none"
              style={{ fontSize: "10px", lineHeight: 1.4 }}
              aria-hidden="true"
            >
{`┌─────────────────────────────────────┐
│                                     │
│   $ npm run dev                     │
│   ▸ Ready on http://localhost:3000  │
│                                     │
│   [STATUS: RUNNING]                 │
│                                     │
└─────────────────────────────────────┘`}
            </pre>
          </div>
        )}
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col gap-4 p-5 flex-1">
        {/* Title */}
        <h3 className="text-base font-bold text-ink leading-snug">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-body leading-relaxed flex-1">
          {project.description[language]}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((badge) => (
            <Badge key={badge.label} badge={badge} />
          ))}
        </div>

        {/* ── Dual CTAs ── */}
        <div className="flex gap-3 flex-wrap pt-1">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-9 px-5 bg-ink text-canvas text-sm font-medium hover:bg-ink-deep transition-colors"
            style={{ borderRadius: "4px" }}
            aria-label={`Open live demo of ${project.name}`}
          >
            🔗 {language === 'id' ? 'Demo Langsung' : 'Live Demo'}
          </a>
          {project.loginUrl && (
            <a
              href={project.loginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-9 px-5 bg-ink text-canvas text-sm font-medium hover:bg-ink-deep transition-colors"
              style={{ borderRadius: "4px" }}
              aria-label={`Admin Login for ${project.name}`}
            >
              🔐 Login Admin
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-9 px-5 border-hairline-strong bg-canvas text-ink text-sm font-medium hover:bg-surface-soft transition-colors"
            style={{ borderRadius: "4px" }}
            aria-label={`View source code of ${project.name} on GitHub`}
          >
            💻 {language === 'id' ? 'Kode Sumber' : 'Source Code'}
          </a>
        </div>
      </div>
    </article>
  );
}
