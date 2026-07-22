'use client';

import React, { useEffect, useState } from 'react';
import { useLanguage, Language } from '@/contexts/LanguageContext';

export default function LanguageModal() {
  const { isInitialized, setLanguage } = useLanguage();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Only show if context has initialized and no preference is saved
    if (isInitialized) {
      const savedLang = localStorage.getItem('app-language');
      if (!savedLang) {
        setShowModal(true);
      }
    }
  }, [isInitialized]);

  if (!showModal) return null;

  const handleSelect = (lang: Language) => {
    setLanguage(lang);
    setShowModal(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-canvas p-4">
      <div 
        className="bg-canvas border-hairline w-full max-w-md p-6 flex flex-col gap-6"
        style={{ borderRadius: "4px" }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="language-modal-title"
      >
        <div className="text-center">
          <h2 id="language-modal-title" className="text-xl font-bold text-ink mb-2">
            Select Language / Pilih Bahasa
          </h2>
          <p className="text-sm text-mute">
            Choose your preferred language to view the portfolio.
            <br />
            Pilih bahasa pilihan Anda untuk melihat portofolio.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => handleSelect('en')}
            className="flex-1 px-4 py-3 bg-ink text-canvas hover:bg-ink-deep transition-colors font-medium text-sm"
            style={{ borderRadius: "4px" }}
          >
            English
          </button>
          <button
            onClick={() => handleSelect('id')}
            className="flex-1 px-4 py-3 bg-ink text-canvas hover:bg-ink-deep transition-colors font-medium text-sm"
            style={{ borderRadius: "4px" }}
          >
            Bahasa Indonesia
          </button>
        </div>
      </div>
    </div>
  );
}
