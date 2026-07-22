'use client';

import type { SkillCategory } from "@/types/portfolio";
import SectionLabel from "@/components/ui/SectionLabel";
import { useLanguage } from "@/contexts/LanguageContext";

interface SkillsSectionProps {
  skills: SkillCategory[];
}

/**
 * Skills & Additional Information Section
 */
export default function SkillsSection({ skills }: SkillsSectionProps) {
  const { language } = useLanguage();

  return (
    <section
      id="skills"
      className="max-w-5xl mx-auto px-6 pb-24"
      aria-label="Skills & Additional Information"
      style={{ scrollMarginTop: "56px" }}
    >
      <SectionLabel label={language === 'id' ? 'Keahlian' : 'Skills'} marker="[+]" />

      <div className="flex flex-col">
        {skills.map((skill) => (
          <div key={skill.id} className="py-2 bg-canvas text-body text-sm font-mono border-hairline-bottom last:border-none flex items-start gap-2">
            <span className="text-mute flex-shrink-0" aria-hidden="true">[+]</span>
            <div>
              <span className="font-bold text-ink">{skill.category[language]}</span>
              <span className="text-stone mx-2">/</span>
              <span className="text-body">{skill.items.join(", ")}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
