/**
 * SectionLabel — Renders a bracketed section heading with a hairline rule.
 *
 * Renders as: `[+] Section Title` followed by a 1px hairline divider.
 * Matches the `badge-section-label` + section-divider pattern from DESIGN-opencode.ai.md.
 *
 * @file src/components/ui/SectionLabel.tsx
 */

interface SectionLabelProps {
  /** Section heading text */
  label: string;
  /** ASCII bracket marker. Defaults to "[+]" */
  marker?: "[+]" | "[-]" | "[x]";
  /** Optional id for anchor navigation */
  id?: string;
}

/**
 * Bracketed section heading used at the top of every major section.
 */
export default function SectionLabel({
  label,
  marker = "[+]",
  id,
}: SectionLabelProps) {
  return (
    <div id={id} className="mb-8">
      <h2 className="text-base font-bold text-ink mb-3">
        <span className="text-mute mr-2" aria-hidden="true">
          {marker}
        </span>
        {label}
      </h2>
      <div className="border-hairline-bottom" aria-hidden="true" />
    </div>
  );
}
