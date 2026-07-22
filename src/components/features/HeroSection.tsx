/**
 * HeroSection — Split-screen profile hero with TUI mockup.
 *
 * Layout (desktop): two-column split
 *   - Left: Dark TUI mockup card (surface-dark) with:
 *       • ASCII block-pixel wordmark
 *       • Terminal prompt row (tui-prompt-row style)
 *       • Keybinding hint row
 *   - Right: Profile photo + name + title + bio + contact panel + social links
 *
 * Layout (mobile): stacked vertically, TUI mockup on top
 *
 * @file src/components/features/HeroSection.tsx
 */

'use client';

import Image from "next/image";
import type { Profile } from "@/types/portfolio";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroSectionProps {
  profile: Profile;
}

/**
 * Hero section integrating the OpenCode TUI mockup with the personal profile.
 */
export default function HeroSection({ profile }: HeroSectionProps) {
  const { language } = useLanguage();

  return (
    <section
      id="hero"
      className="max-w-5xl mx-auto px-6 pt-16 pb-24"
      aria-label="Hero — profile and contact"
      style={{ scrollMarginTop: "56px" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-hairline overflow-hidden"
        style={{ borderRadius: "4px" }}
      >
        {/* ═══════════════════════════════════════
            LEFT — Dark TUI Mockup
        ═══════════════════════════════════════ */}
        <div
          className="bg-surface-dark flex flex-col justify-between px-8 py-12 min-h-72 md:min-h-96"
          aria-label="Terminal interface mockup"
        >
          {/* ASCII Block-pixel wordmark */}
          <div className="flex-1 flex items-center justify-center overflow-hidden">
            <div
              className="ascii-wordmark text-on-dark select-none"
              aria-label={profile.name}
              aria-hidden="true"
            >
              {profile.asciiWordmark.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          </div>

          {/* TUI prompt row */}
          <div className="space-y-3">
            <div
              className="bg-surface-dark-elevated text-on-dark px-3 py-2 flex items-center gap-2 text-sm"
              style={{ borderRadius: "4px" }}
              aria-label="Terminal prompt"
            >
              <span className="text-success" aria-hidden="true">▸</span>
              <span className="text-on-dark-mute">~</span>
              <span className="font-medium">Full-Stack Engineer</span>
              <span className="text-on-dark-mute mx-1">|</span>
              <span className="text-ash">Next.js · TypeScript · React</span>
              <span className="cursor-blink ml-1" aria-hidden="true" />
            </div>

            {/* Keybinding hint row */}
            <div className="flex items-center justify-between text-ash" style={{ fontSize: "12px" }}>
              <span>tab switch section</span>
              <span>ctrl-c contact</span>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════
            RIGHT — Profile Info
        ═══════════════════════════════════════ */}
        <div className="flex flex-col gap-6 px-8 py-10 border-hairline md:border-l">
          {/* Profile Photo */}
          <div className="relative w-20 h-20 overflow-hidden flex-shrink-0 border-hairline"
            style={{ borderRadius: "4px" }}
          >
            <Image
              src={profile.photoSrc}
              alt={`Profile photo of ${profile.name}`}
              fill
              className="object-cover"
              priority
              sizes="80px"
            />
          </div>

          {/* Name + Title */}
          <div>
            <h1
              className="font-bold text-ink leading-tight mb-1"
              style={{ fontSize: "clamp(22px, 3vw, 38px)", lineHeight: 1.3 }}
            >
              {profile.name}
            </h1>
            <p className="text-sm font-medium text-mute">{profile.title[language]}</p>
          </div>

          {/* Bio */}
          <p className="text-sm text-body leading-relaxed">{profile.bio[language]}</p>

          {/* Contact Panel */}
          <div className="border-hairline-top pt-4 space-y-2">
            <p className="text-xs font-bold text-mute mb-2 uppercase tracking-widest">
              {language === 'id' ? 'Kontak' : 'Contact'}
            </p>
            <a
              href={`https://wa.me/${profile.phone.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-ink hover:text-mute transition-colors"
              aria-label={`WhatsApp ${profile.phone}`}
            >
              <span className="text-mute" aria-hidden="true">[wa]</span>
              {profile.phone}
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 text-sm text-ink hover:text-mute transition-colors"
              aria-label={`Email ${profile.email}`}
            >
              <span className="text-mute" aria-hidden="true">[mail]</span>
              {profile.email}
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 border-hairline-top pt-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-mute hover:text-ink transition-colors"
              aria-label="GitHub profile"
            >
              GitHub
            </a>
            <span className="text-ash" aria-hidden="true">·</span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-mute hover:text-ink transition-colors"
              aria-label="LinkedIn profile"
            >
              LinkedIn
            </a>
            {profile.instagram && (
              <>
                <span className="text-ash" aria-hidden="true">·</span>
                <a
                  href={profile.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-mute hover:text-ink transition-colors"
                  aria-label="Instagram profile"
                >
                  Instagram
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
