import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { BeyondNav } from './components/BeyondNav';
import { BeyondOpening } from './components/BeyondOpening';
import { WorldOneDevelopment } from './components/WorldOneDevelopment';
import { WorldTwoPhotography } from './components/WorldTwoPhotography';
import { WorldThreeMedicine } from './components/WorldThreeMedicine';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [activeSection, setActiveSection] = useState<string>('home');

  // Synchronize document dir, lang, and title on language switch
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    if (lang === 'ar') {
      document.title = 'حيان محمد | HAYYAN — Beyond the Grid';
    } else {
      document.title = 'HAYYAN | حيان محمد — Beyond the Grid';
    }
  }, [lang]);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = ['home', 'world-01', 'world-02', 'world-03', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleExploreClick = () => {
    const worldOne = document.getElementById('world-01');
    if (worldOne) {
      worldOne.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#090909] antialiased selection:bg-[#EFF6FF] selection:text-[#2563EB] overflow-x-hidden">
      {/* Razor-thin Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Floating Sticky Navigation with Fullscreen Mobile Menu */}
      <BeyondNav
        lang={lang}
        onLanguageChange={setLang}
        activeSection={activeSection}
      />

      {/* Main Full-Width Experience Canvas */}
      <main className="w-full">
        {/* The Opening Experience: Monumental HAYYAN Artwork & Asymmetric Portrait */}
        <div id="home">
          <BeyondOpening lang={lang} onExploreClick={handleExploreClick} />
        </div>

        {/* Chapter 01: Development — I BUILD DIGITAL EXPERIENCES. */}
        <WorldOneDevelopment lang={lang} />

        {/* Chapter 02: Photography — I CAPTURE STORIES. (Deep Black Exhibition) */}
        <WorldTwoPhotography lang={lang} />

        {/* Chapter 03: Medicine & Personal Identity — ALWAYS LEARNING. + Contact */}
        <WorldThreeMedicine lang={lang} />
      </main>

      {/* Minimal Editorial Footer */}
      <Footer lang={lang} />
    </div>
  );
}
