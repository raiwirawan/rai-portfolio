/**
 * DesignsSection — UI Design Showcase (Figma preview cards).
 *
 * Displays design cards in a responsive grid with Figma thumbnails
 * and direct static links. No Figma embed API — pure static links only
 * for maximum page load performance (as per portfolio-specification.md).
 *
 * @file src/components/features/DesignsSection.tsx
 */

import type { Design } from "@/types/portfolio";
import SectionLabel from "@/components/ui/SectionLabel";
import DesignCard from "@/components/ui/DesignCard";

interface DesignsSectionProps {
  designs: Design[];
}

/**
 * UI Design Showcase — Figma design portfolio.
 */
export default function DesignsSection({ designs }: DesignsSectionProps) {
  return (
    <section
      id="designs"
      className="max-w-5xl mx-auto px-6 pb-24"
      aria-label="UI design showcase"
      style={{ scrollMarginTop: "56px" }}
    >
      <SectionLabel label="UI Design Showcase" marker="[+]" />

      {/* Sub-header */}
      <p className="text-sm text-mute mb-8">
        <span className="text-ink font-medium">
          {designs.length} design projects
        </span>
        {" · "}
        Figma — UX/UI design work and prototypes
      </p>

      {/* Design Cards Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        role="list"
      >
        {designs.map((design) => (
          <div key={design.id} role="listitem">
            <DesignCard design={design} />
          </div>
        ))}
      </div>
    </section>
  );
}
