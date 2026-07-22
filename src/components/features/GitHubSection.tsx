/**
 * GitHubSection — Responsive grid of top 5 GitHub repository cards.
 *
 * Grid layout:
 *   - Desktop (≥ 1024px): 3 columns
 *   - Tablet (640–1023px): 2 columns
 *   - Mobile (< 640px): 1 column
 *
 * @file src/components/features/GitHubSection.tsx
 */

import type { Repo } from "@/types/portfolio";
import SectionLabel from "@/components/ui/SectionLabel";
import RepoCard from "@/components/ui/RepoCard";

interface GitHubSectionProps {
  repos: Repo[];
}

/**
 * GitHub Dashboard section — Top 5 repositories grid.
 */
export default function GitHubSection({ repos }: GitHubSectionProps) {
  return (
    <section
      id="repos"
      className="max-w-5xl mx-auto px-6 pb-24"
      aria-label="GitHub repositories"
      style={{ scrollMarginTop: "56px" }}
    >
      <SectionLabel label="GitHub Dashboard" marker="[+]" />

      {/* Stat sub-header */}
      <p className="text-sm text-mute mb-8">
        <span className="text-ink font-medium">
          Top {repos.length} repositories
        </span>
        {" · "}
        Open source contributions and personal projects
      </p>

      {/* Repo Cards Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        role="list"
      >
        {repos.map((repo) => (
          <div key={repo.id} role="listitem">
            <RepoCard repo={repo} />
          </div>
        ))}
      </div>
    </section>
  );
}
