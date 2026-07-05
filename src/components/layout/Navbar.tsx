'use client';

/**
 * Navbar — Primary navigation for the portfolio.
 *
 * Design tokens applied:
 *   - Height: 56px (primary-nav spec)
 *   - Background: canvas (#fdfcfc)
 *   - Bottom border: 1px hairline
 *   - Text: body-strong (16px / weight 500)
 *   - Wordmark: block-pixel ASCII-style brand identity
 *
 * Mobile: hamburger drawer at < 768px. Download CTA stays visible at all widths.
 *
 * @file src/components/layout/Navbar.tsx
 */

import { useState } from "react";
import type { Profile } from "@/types/portfolio";

interface NavbarProps {
  profile: Profile;
}

/** Navigation link definition */
interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#hero" },
  { label: "Repos", href: "#repos" },
  { label: "Projects", href: "#projects" },
  { label: "Designs", href: "#designs" },
];

/**
 * Sticky top navigation with ASCII wordmark and smooth-scroll anchor links.
 */
export default function Navbar({ profile }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);
  const handleMenuClose = () => setMenuOpen(false);

  return (
    <>
      <header
        className="sticky top-0 z-50 bg-canvas border-hairline-bottom"
        style={{ height: "56px" }}
      >
        <nav
          className="h-full max-w-5xl mx-auto px-6 flex items-center justify-between"
          aria-label="Primary navigation"
        >
          {/* ── ASCII Wordmark (brand identity) ── */}
          <a
            href="#hero"
            className="flex-shrink-0 font-mono text-ink font-bold text-sm leading-none tracking-tighter hover:text-charcoal transition-colors"
            aria-label={`${profile.name} — home`}
            onClick={handleMenuClose}
          >
            <span aria-hidden="true" className="font-bold text-base">
              RAI<span className="text-mute">.</span>WIRAWAN
            </span>
          </a>

          {/* ── Desktop Nav Links ── */}
          <ul
            className="hidden md:flex items-center gap-6 list-none m-0 p-0"
            role="list"
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-mute hover:text-ink transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* ── Right: Contact CTA + Mobile Hamburger ── */}
          <div className="flex items-center gap-4">
            {/* Hire Me CTA — always visible */}
            <a
              href={`mailto:${profile.email}`}
              className="h-9 px-5 bg-ink text-canvas text-sm font-medium hover:bg-ink-deep transition-colors inline-flex items-center"
              style={{ borderRadius: "4px" }}
              aria-label="Send a hiring email"
            >
              Hire Me
            </a>

            {/* Hamburger — mobile only */}
            <button
              type="button"
              className="md:hidden flex flex-col gap-1 p-1"
              onClick={handleMenuToggle}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={`block w-5 h-0.5 bg-ink transition-all duration-200 origin-center ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`}
              />
              <span
                className={`block w-5 h-0.5 bg-ink transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-5 h-0.5 bg-ink transition-all duration-200 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile Drawer ── */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed top-14 left-0 right-0 z-40 bg-canvas border-hairline-bottom shadow-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <ul className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-1 list-none m-0 p-0">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleMenuClose}
                  className="block py-3 text-sm font-medium text-ink border-hairline-bottom hover:text-mute transition-colors"
                >
                  <span className="text-mute mr-2" aria-hidden="true">
                    [+]
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
