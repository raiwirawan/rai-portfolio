/**
 * DesignCard — displays a single Figma UI design project.
 *
 * Features:
 * - Figma mockup thumbnail (or ASCII placeholder)
 * - Design name and description
 * - "Open in Figma →" pure link button
 * - Hover interaction via .card-hover
 *
 * Note: This section uses static links only — no Figma embed API or widgets.
 *
 * @file src/components/ui/DesignCard.tsx
 */

'use client';

import Image from "next/image";
import type { Design } from "@/types/portfolio";
import { useLanguage } from "@/contexts/LanguageContext";

interface DesignCardProps {
  design: Design;
}

/**
 * Figma design showcase card with thumbnail and direct link.
 */
export default function DesignCard({ design }: DesignCardProps) {
  const { language } = useLanguage();

  return (
    <article
      className="card-hover border-hairline flex flex-col bg-canvas overflow-hidden"
      style={{ borderRadius: "4px" }}
      aria-label={`UI Design: ${design.name}`}
    >
      {/* ── Thumbnail / Figma Preview Placeholder ── */}
      <div className="relative w-full aspect-video overflow-hidden bg-surface-dark">
        {design.thumbnailSrc ? (
          <Image
            src={design.thumbnailSrc}
            alt={`Figma mockup for ${design.name}`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          /* Figma-branded ASCII placeholder */
          <div className="screenshot-placeholder w-full h-full flex-col gap-2">
            <pre
              className="text-center text-ash select-none"
              style={{ fontSize: "10px", lineHeight: 1.4 }}
              aria-hidden="true"
            >
{`╔═══════════════════════════════════╗
║                                   ║
║   ◆  FIGMA                        ║
║   ─────────────────────────       ║
║   Frame 1  /  Components          ║
║   Prototype  ▸ Preview            ║
║                                   ║
╚═══════════════════════════════════╝`}
            </pre>
          </div>
        )}
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col gap-4 p-5 flex-1">
        {/* Label badge */}
        <span
          className="self-start text-xs px-2 py-0.5 bg-surface-dark text-on-dark"
          style={{ borderRadius: "4px", fontSize: "12px" }}
          aria-hidden="true"
        >
          Figma
        </span>

        {/* Title */}
        <h3 className="text-base font-bold text-ink leading-snug">
          {design.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-body leading-relaxed flex-1">
          {design.description[language]}
        </p>

        {/* ── CTA ── */}
        <a
          href={design.figmaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center h-9 px-5 bg-ink text-canvas text-sm font-medium hover:bg-ink-deep transition-colors mt-auto"
          style={{ borderRadius: "4px" }}
          aria-label={`Open ${design.name} in Figma`}
        >
          {language === 'id' ? 'Buka di Figma →' : 'Open in Figma →'}
        </a>
      </div>
    </article>
  );
}
