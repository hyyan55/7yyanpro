import React, { useState, useEffect } from 'react';
import { Globe, X, ArrowUpRight } from 'lucide-react';
import { Language } from '../types';
import { PERSONAL_INFO, UI_TEXT } from '../data/content';

interface BeyondNavProps {
  lang: Language;
  onLanguageChange: (newLang: Language) => void;
  activeSection: string;
}

export const BeyondNav: React.FC<BeyondNavProps> = ({
  lang,
  onLanguageChange,
  activeSection,
}) => {
  const t = UI_TEXT[lang];
  const [fullscreenMenuOpen, setFullscreenMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'world-01', label: t.navDevelopment, number: '01' },
    { id: 'world-02', label: t.navPhotography, number: '02' },
    { id: 'world-03', label: t.navMedicine, number: '03' },
    { id: 'contact', label: t.navContact, number: '04' },
  ];

  const scrollTo = (id: string) => {
    setFullscreenMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Sticky Header with Backdrop Blur */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/85 backdrop-blur-md border-b border-[#E5E7EB]/80 py-3 shadow-xs'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          {/* Identity Wordmark */}
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 group cursor-pointer text-left"
          >
            <span className="w-2 h-2 rounded-full bg-[#2563EB] group-hover:scale-125 transition-transform" />
            <span className="text-sm font-black tracking-widest text-[#090909] uppercase">
              {PERSONAL_INFO.nameEn}
            </span>
            <span className="text-xs font-semibold text-[#71717A] hidden sm:inline" dir="rtl">
              {PERSONAL_INFO.nameAr}
            </span>
          </button>

          {/* Desktop Minimal Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-[#71717A]">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative py-1 transition-colors cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#090909] font-bold'
                      : 'hover:text-[#090909]'
                  }`}
                >
                  <span className="text-[#2563EB] text-[10px]">{item.number}</span>
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#2563EB]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Language Toggle & Mobile Menu Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onLanguageChange(lang === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold font-mono uppercase text-[#090909] bg-white/90 border border-[#E5E7EB] hover:border-[#2563EB] rounded-full transition-colors cursor-pointer shadow-2xs"
              title={lang === 'en' ? 'التبديل إلى العربية' : 'Switch to English'}
              aria-label="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>{lang === 'en' ? 'العربية' : 'EN'}</span>
            </button>

            {/* Mobile Minimal Menu Toggle */}
            <button
              onClick={() => setFullscreenMenuOpen(!fullscreenMenuOpen)}
              className="md:hidden flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#090909] border border-[#E5E7EB] bg-white/90 rounded-full cursor-pointer shadow-2xs"
              aria-label="Toggle Fullscreen Menu"
            >
              {fullscreenMenuOpen ? <X className="w-4 h-4" /> : <span>MENU</span>}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Menu */}
      {fullscreenMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-[#090909] text-white p-6 sm:p-10 flex flex-col justify-between animate-in fade-in duration-200">
          {/* Top Bar of Fullscreen Menu */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
              <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
                HAYYAN — BEYOND THE GRID
              </span>
            </div>
            <button
              onClick={() => setFullscreenMenuOpen(false)}
              className="p-2 text-slate-300 hover:text-white rounded-full border border-white/20 cursor-pointer"
              aria-label="Close Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Large Expressive Typography Nav Links */}
          <nav className="space-y-6 my-auto">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`w-full flex items-baseline justify-between text-left group py-2 border-b border-white/10 cursor-pointer ${
                    isActive ? 'text-[#2563EB]' : 'text-white hover:text-slate-200'
                  }`}
                >
                  <span className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
                    {item.label}
                  </span>
                  <span className="font-mono text-sm text-slate-400 group-hover:text-[#2563EB]">
                    {item.number} ↗
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Footer of Fullscreen Menu */}
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-6 border-t border-white/10">
            <span>{PERSONAL_INFO.locationEn}</span>
            <button
              onClick={() => {
                onLanguageChange(lang === 'en' ? 'ar' : 'en');
                setFullscreenMenuOpen(false);
              }}
              className="text-[#2563EB] font-bold"
            >
              {lang === 'en' ? 'العربية (RTL)' : 'ENGLISH (LTR)'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
