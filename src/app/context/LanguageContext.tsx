'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Language = 'En' | 'De';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'En';
    const storedLang = localStorage.getItem('lang');
    return storedLang === 'En' || storedLang === 'De' ? storedLang : 'En';
  });

  useEffect(() => {
    localStorage.setItem('lang', language);
    document.documentElement.setAttribute('lang', language === 'En' ? 'De' : 'En');
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
