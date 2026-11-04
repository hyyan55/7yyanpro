import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Language } from '../types';
import { PERSONAL_INFO, UI_TEXT } from '../data/content';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = UI_TEXT[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#E5E7EB] bg-white py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-[#71717A]">
          {/* Brand & Copyright */}
          <div className="flex flex-wrap items-center gap-3 text-center sm:text-left">
            <span className="font-bold text-[#090909]">
              © 2026 {lang === 'ar' ? PERSONAL_INFO.nameAr : PERSONAL_INFO.nameFullEn}.
            </span>
            <span>{t.allRightsReserved}</span>
            <span className="text-[#D1D5DB]" aria-hidden="true">·</span>
            <span>{lang === 'ar' ? 'كسلا، السودان' : 'Kassala, Sudan'}</span>
          </div>

          {/* Identity Tag & Back to Top */}
          <div className="flex items-center gap-6">
            <span className="hidden md:inline text-[11px] uppercase tracking-wider text-[#71717A]">
              HAYYAN — BEYOND THE GRID
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E5E7EB] hover:border-[#2563EB] hover:text-[#090909] transition-colors cursor-pointer text-xs uppercase tracking-wider"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#2563EB]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
