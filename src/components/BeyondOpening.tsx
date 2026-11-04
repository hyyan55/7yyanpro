import React, { useState, useEffect } from 'react';
import { ArrowDown, Image as ImageIcon, MapPin, Globe } from 'lucide-react';
import { Language } from '../types';
import { PERSONAL_INFO, UI_TEXT } from '../data/content';
import { HeroInteractiveCanvas } from './HeroInteractiveCanvas';

interface BeyondOpeningProps {
  lang: Language;
  onExploreClick: () => void;
}

export const BeyondOpening: React.FC<BeyondOpeningProps> = ({ lang, onExploreClick }) => {
  const t = UI_TEXT[lang];
  const isRtl = lang === 'ar';
  const [avatarSrc, setAvatarSrc] = useState(
    '/src/assets/images/avatar_hayyan_portrait_1793815401189.jpg'
  );
  const [showImagePrompt, setShowImagePrompt] = useState(false);
  const [customUrlInput, setCustomUrlInput] = useState('');
  const [localTime, setLocalTime] = useState('');

  // Live ticking Kassala, Sudan time (UTC+2)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Kassala is Africa/Khartoum (UTC+2)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Khartoum',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setLocalTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleApplyCustomAvatar = (e: React.FormEvent) => {
    e.preventDefault();
    if (customUrlInput.trim()) {
      setAvatarSrc(customUrlInput.trim());
      setShowImagePrompt(false);
      setCustomUrlInput('');
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-10 px-4 sm:px-8 lg:px-16 overflow-hidden border-b border-[#090909]">
      {/* Interactive Cursor/Touch-Reactive Canvas */}
      <HeroInteractiveCanvas />

      {/* Top Swiss Metadata Strip */}
      <div className="w-full flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-widest text-[#71717A] pb-6 border-b border-[#E5E7EB]">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
          <span className="font-bold text-[#090909]">
            {lang === 'ar' ? PERSONAL_INFO.locationAr : PERSONAL_INFO.locationEn}
          </span>
          <span className="text-[#D1D5DB]" aria-hidden="true">·</span>
          <span>15°27'N 36°24'E</span>
          <span className="text-[#D1D5DB] hidden sm:inline" aria-hidden="true">·</span>
          <span className="text-[#090909] font-bold hidden sm:inline">
            {localTime ? `${localTime} CAT` : 'KASSALA TIME'}
          </span>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <span className="text-[#2563EB] font-bold">VOL. 2026</span>
          <span className="text-[#D1D5DB]" aria-hidden="true">·</span>
          <span className="text-[#090909] font-semibold">BEYOND THE GRID</span>
        </div>
      </div>

      {/* Dominant Screen-Filling Hero Artwork */}
      <div className="my-auto py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-end">
          {/* Enormous Typographic Monument */}
          <div className="lg:col-span-8 space-y-4">
            <div className="space-y-0 select-none">
              <span className="text-xs sm:text-sm font-mono tracking-widest text-[#2563EB] uppercase block font-bold mb-2">
                {lang === 'ar' ? PERSONAL_INFO.identityAr : PERSONAL_INFO.identityEn}
              </span>

              {/* Screen-Filling HAYYAN Display Typography */}
              <h1 className="text-[clamp(4.2rem,15vw,13.5rem)] font-display font-black text-[#090909] leading-[0.82] tracking-tighter uppercase">
                HAYYAN
              </h1>

              {/* Arabic Name Sculpture */}
              <div className="flex items-baseline gap-4 pt-1">
                <span
                  className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#2563EB] tracking-tight"
                  dir="rtl"
                >
                  {PERSONAL_INFO.nameAr}
                </span>
                <span className="text-sm font-mono text-[#71717A] tracking-wider uppercase hidden sm:inline">
                  — PORTFOLIO ARCHIVE
                </span>
              </div>
            </div>

            {/* Ultra-Concise One-Sentence Statement (No Paragraphs) */}
            <p className="text-lg sm:text-2xl text-[#71717A] font-normal leading-relaxed max-w-xl pt-2">
              "{lang === 'ar' ? PERSONAL_INFO.introAr : PERSONAL_INFO.introEn}"
            </p>
          </div>

          {/* Artistic Overlapping Portrait Composition */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div className="relative w-full max-w-xs sm:max-w-sm group/portrait">
              {/* Electric-Blue Precision Frame Accents */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#2563EB] pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#2563EB] pointer-events-none" />

              {/* Portrait Image Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-[#090909] border border-[#090909] aspect-[4/5] shadow-2xl transition-all duration-500">
                <img
                  src={avatarSrc}
                  alt="Hayyan Mohamed | حيان محمد"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top grayscale group-hover/portrait:grayscale-0 transition-all duration-700 ease-out scale-100 group-hover/portrait:scale-104"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      '/src/assets/images/avatar_hayyan_portrait_1793815401189.jpg';
                  }}
                />

                {/* Scrim with Clean Caption */}
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white flex items-center justify-between">
                  <div className="text-[11px] font-mono uppercase tracking-wider">
                    <span className="block font-black text-white">HAYYAN MOHAMED</span>
                    <span className="text-slate-400">Kassala · Sudan</span>
                  </div>

                  <button
                    onClick={() => setShowImagePrompt(!showImagePrompt)}
                    className="p-2 rounded-full bg-white/20 hover:bg-[#2563EB] text-white backdrop-blur-xs transition-colors cursor-pointer"
                    title={lang === 'ar' ? 'تعديل الصورة' : 'Customize Portrait'}
                    aria-label="Customize Portrait Image"
                  >
                    <ImageIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Custom Image URL Drawer */}
              {showImagePrompt && (
                <div className="mt-3 p-4 bg-white border border-[#E5E7EB] rounded-2xl shadow-xl text-xs z-30 animate-in fade-in">
                  <p className="font-bold text-[#090909] mb-2 font-mono">
                    {lang === 'ar' ? 'رابط صورة بورتريه مخصصة:' : 'ENTER CUSTOM IMAGE URL:'}
                  </p>
                  <form onSubmit={handleApplyCustomAvatar} className="space-y-2">
                    <input
                      type="url"
                      placeholder="https://..."
                      value={customUrlInput}
                      onChange={(e) => setCustomUrlInput(e.target.value)}
                      className="w-full px-3 py-2 border border-[#E5E7EB] rounded-lg text-xs font-mono focus:outline-none focus:border-[#2563EB]"
                    />
                    <div className="flex gap-2 pt-1">
                      <button
                        type="submit"
                        className="flex-1 px-3 py-1.5 bg-[#2563EB] text-white rounded-lg font-bold font-mono text-xs cursor-pointer hover:bg-[#1D4ED8]"
                      >
                        {lang === 'ar' ? 'تطبيق' : 'APPLY'}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setAvatarSrc('/src/assets/images/avatar_hayyan_portrait_1793815401189.jpg');
                          setShowImagePrompt(false);
                        }}
                        className="px-3 py-1.5 text-[#71717A] hover:text-[#090909] border border-[#E5E7EB] rounded-lg text-xs font-mono cursor-pointer"
                      >
                        {lang === 'ar' ? 'استعادة' : 'RESET'}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Exploration Anchor */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#E5E7EB]">
        <button
          onClick={onExploreClick}
          className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#090909] hover:text-[#2563EB] transition-colors cursor-pointer group self-start"
        >
          <span className="w-10 h-[1.5px] bg-[#090909] group-hover:w-16 group-hover:bg-[#2563EB] transition-all" />
          <span className="font-bold">{t.scrollExplore}</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform text-[#2563EB]" />
        </button>

        <div className="flex items-center gap-6 font-mono text-xs text-[#71717A]">
          <span>01 DEVELOPMENT</span>
          <span>·</span>
          <span>02 PHOTOGRAPHY</span>
          <span>·</span>
          <span>03 MEDICINE</span>
        </div>
      </div>
    </section>
  );
};
