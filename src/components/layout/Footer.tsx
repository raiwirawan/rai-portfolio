/**
 * Footer — site footer with link grid and copyright.
 *
 * Design tokens applied:
 *   - Background: canvas (#fdfcfc)
 *   - Top border: 1px hairline
 *   - Typography: caption-md (14px / weight 400 / line-height 2)
 *   - Link grid: GitHub · LinkedIn · Email · GitHub Repos · X
 *   - 5-column desktop, 2-column tablet, 1-column mobile
 *
 * @file src/components/layout/Footer.tsx
 */

'use client';

import type { Profile } from "@/types/portfolio";
import { useLanguage } from "@/contexts/LanguageContext";

interface FooterProps {
  profile: Profile;
}

/** Footer link definition */
interface FooterLink {
  label: string;
  href: string;
  external: boolean;
}

/**
 * Site footer with 5-column link grid and copyright row.
 */
export default function Footer({ profile }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  const footerLinks: FooterLink[] = [
    { label: "GitHub", href: profile.github, external: true },
    { label: "LinkedIn", href: profile.linkedin, external: true },
    { label: "Email", href: `mailto:${profile.email}`, external: false },
    ...(profile.instagram
      ? [{ label: "Instagram", href: profile.instagram, external: true }]
      : []),
    { label: language === 'id' ? "Atas ↑" : "Top ↑", href: "#hero", external: false },
  ];

  return (
    <footer
      className="bg-canvas border-hairline-top mt-24"
      aria-label="Site footer"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* ── Link Grid ── */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 border-hairline"
          style={{ borderRadius: "4px" }}
        >
          {footerLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className={`
                py-4 px-3 text-center text-sm text-mute hover:text-ink transition-colors
                border-hairline-bottom
                ${index < footerLinks.length - 1 ? "border-hairline-strong" : ""}
              `}
              style={{ fontSize: "14px", lineHeight: "2" }}
              aria-label={link.label}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* ── Copyright Row ── */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p
            className="text-mute"
            style={{ fontSize: "14px", lineHeight: "2" }}
          >
            &copy;{currentYear}{" "}
            <span className="text-ink">{profile.name}</span>
          </p>
          <p
            className="text-mute"
            style={{ fontSize: "14px", lineHeight: "2" }}
          >
            {language === 'id' ? 'Dibuat dengan' : 'Built with'}{" "}
            <span className="text-ink">Next.js 16</span>{" "}
            &amp;{" "}
            <span className="text-ink">TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
