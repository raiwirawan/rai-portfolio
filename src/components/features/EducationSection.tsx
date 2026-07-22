'use client';

import type { Education } from "@/types/portfolio";
import SectionLabel from "@/components/ui/SectionLabel";
import { useLanguage } from "@/contexts/LanguageContext";

interface EducationSectionProps {
  education: Education[];
}

/**
 * Education Section
 */
export default function EducationSection({ education }: EducationSectionProps) {
  const { language } = useLanguage();

  return (
    <section
      id="education"
      className="max-w-5xl mx-auto px-6 pb-24"
      aria-label="Education"
      style={{ scrollMarginTop: "56px" }}
    >
      <SectionLabel label={language === 'id' ? 'Edukasi' : 'Education'} marker="[+]" />

      <div className="flex flex-col gap-8">
        {education.map((edu) => (
          <div key={edu.id} className="flex flex-col md:flex-row gap-4 md:gap-12 group">
            {/* Meta */}
            <div className="md:w-1/3 flex-shrink-0">
              <h3 className="text-base font-bold text-ink leading-snug">
                {edu.degree[language]}
              </h3>
              <p className="text-sm font-medium text-mute mt-1">
                {edu.institution[language]}
              </p>
              <p className="text-sm text-stone mt-2">
                {edu.period[language]}
              </p>
            </div>
            
            {/* Details */}
            <div className="md:w-2/3 flex flex-col gap-2">
              {edu.achievements.map((achievement, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-mute flex-shrink-0" aria-hidden="true">[-]</span>
                  <p className="text-sm text-body leading-relaxed">
                    {achievement[language]}
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
