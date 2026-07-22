'use client';

import type { Experience } from "@/types/portfolio";
import SectionLabel from "@/components/ui/SectionLabel";
import { useLanguage } from "@/contexts/LanguageContext";

interface ExperienceSectionProps {
  experiences: Experience[];
}

/**
 * Work Experience Section
 */
export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const { language } = useLanguage();

  return (
    <section
      id="experience"
      className="max-w-5xl mx-auto px-6 pb-24"
      aria-label="Work Experience"
      style={{ scrollMarginTop: "56px" }}
    >
      <SectionLabel label={language === 'id' ? 'Pengalaman Kerja' : 'Work Experience'} marker="[+]" />

      <div className="flex flex-col gap-8">
        {experiences.map((exp) => (
          <div key={exp.id} className="flex flex-col md:flex-row gap-4 md:gap-12 group">
            {/* Meta */}
            <div className="md:w-1/3 flex-shrink-0">
              <h3 className="text-base font-bold text-ink leading-snug">
                {exp.role[language]}
              </h3>
              <p className="text-sm font-medium text-mute mt-1">
                {exp.company}
              </p>
              <p className="text-sm text-stone mt-2">
                {exp.period[language]}
              </p>
            </div>
            
            {/* Details */}
            <div className="md:w-2/3 flex flex-col gap-2">
              {exp.responsibilities.map((resp, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-mute flex-shrink-0" aria-hidden="true">[-]</span>
                  <p className="text-sm text-body leading-relaxed">
                    {resp[language]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
