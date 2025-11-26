'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  const [locale, setLocale] = useState<string>('es');
  const [translations, setTranslations] = useState<any>(null);

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0];
    const detectedLocale = browserLang === 'en' || browserLang === 'es' ? browserLang : 'es';
    setLocale(detectedLocale);
  }, []);

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const response = await fetch(`/locales/${locale}.json`);
        const data = await response.json();
        setTranslations(data);
      } catch (error) {
        console.error('Error loading translations:', error);
      }
    };

    loadTranslations();
  }, [locale]);

  const handleLocaleChange = (newLocale: string) => {
    setLocale(newLocale);
  };

  if (!translations) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="w-12 h-12 border-4 border-[#7ab1e5] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Header
        locale={locale}
        translations={translations.header}
        onLocaleChange={handleLocaleChange}
      />
      <Hero translations={translations.hero} />
    {/**   <About translations={translations.about} /> */}
      <Services translations={translations.services} />
      
     <Contact translations={translations.contact} />
       <Footer locale={locale} />
    </div>
  );
}
