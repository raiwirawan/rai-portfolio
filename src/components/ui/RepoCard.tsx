/**
 * RepoCard — displays a single GitHub repository.
 *
 * Features:
 * - Repository name, description, tech stack badges
 * - "View on GitHub →" button (primary CTA style)
 * - Hover: translateY(-4px) + shadow expansion (via .card-hover CSS class)
 *
 * @file src/components/ui/RepoCard.tsx
 */

'use client';

import type { Repo } from "@/types/portfolio";
import Badge from "@/components/ui/Badge";
import { useLanguage } from "@/contexts/LanguageContext";

interface RepoCardProps {
  repo: Repo;
}

/**
 * GitHub repository card with hover interaction and ASCII-style layout.
 */
export default function RepoCard({ repo }: RepoCardProps) {
  const { language } = useLanguage();

  return (
    <article
      className="card-hover border-hairline p-5 flex flex-col gap-4 bg-canvas"
      style={{ borderRadius: "4px" }}
      aria-label={`GitHub repository: ${repo.name}`}
    >
      {/* ── Header ── */}
      <div className="flex items-start gap-3">
        {/* Small GitHub-style avatar placeholder */}
        <div
          className="w-6 h-6 flex-shrink-0 bg-surface-dark flex items-center justify-center text-on-dark"
          style={{ borderRadius: "4px", fontSize: "9px", lineHeight: 1 }}
          aria-hidden="true"
        >
          {/* GitHub octocat pixel-char stand-in */}
          <span>gh</span>
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-bold text-ink truncate leading-snug">
            {repo.name}
          </h3>
          {repo.language && (
            <span className="text-xs text-mute">{repo.language}</span>
          )}
        </div>
      </div>

      {/* ── Description ── */}
      <p className="text-sm text-body leading-relaxed flex-1">
        {repo.description[language]}
      </p>

      {/* ── Tech Stack Badges ── */}
      <div className="flex flex-wrap gap-2">
        {repo.stack.map((badge) => (
          <Badge key={badge.label} badge={badge} />
        ))}
      </div>

      {/* ── CTA ── */}
      <a
        href={repo.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center h-9 px-5 bg-ink text-canvas text-sm font-medium hover:bg-ink-deep transition-colors"
        style={{ borderRadius: "4px" }}
        aria-label={`View ${repo.name} on GitHub`}
      >
        {language === 'id' ? 'Lihat di GitHub →' : 'View on GitHub →'}
      </a>
    </article>
  );
}
