/**
 * Badge — displays a tech stack label.
 *
 * Uses the install-snippet style from the design system:
 * background surface-card (#f1eeee), ink text, 4px radius.
 *
 * @file src/components/ui/Badge.tsx
 */

import type { TechBadge } from "@/types/portfolio";

interface BadgeProps {
  badge: TechBadge;
}

/**
 * A small monospaced tech-stack chip rendered in the surface-card tone.
 */
export default function Badge({ badge }: BadgeProps) {
  return (
    <span
      className="inline-block px-2 py-0.5 text-sm bg-surface-card text-ink border-hairline font-mono leading-relaxed"
      style={{ borderRadius: "4px", fontSize: "13px" }}
    >
      {badge.label}
    </span>
  );
}
