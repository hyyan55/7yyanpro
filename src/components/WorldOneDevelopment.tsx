import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, Copy, Check, Sliders, RefreshCw } from 'lucide-react';
import { Language } from '../types';
import { PROJECTS, THREE_WORLDS, DEVELOPER_SKILLS, UI_TEXT } from '../data/content';

interface WorldOneDevelopmentProps {
  lang: Language;
}

export const WorldOneDevelopment: React.FC<WorldOneDevelopmentProps> = ({ lang }) => {
  const t = UI_TEXT[lang];
  const isRtl = lang === 'ar';
  const world = THREE_WORLDS.world1;

  // In-page live simulator for BBAN Sudan
  const [bbanAccount, setBbanAccount] = useState('1029384756');
  const [bbanBank, setBbanBank] = useState('BOK');
  const [bbanResult, setBbanResult] = useState('SD42BOK00000001029384756');
  const [bbanCopied, setBbanCopied] = useState(false);

  // In-page live simulator for Easy Convert
  const [convertAmount, setConvertAmount] = useState('100');
  const [convertMode, setConvertMode] = useState<'usd-sdg' | 'km-miles' | 'c-f'>('usd-sdg');

  const updateBBAN = (acc: string, bank: string) => {
    const clean = acc.replace(/\D/g, '').padStart(16, '0').slice(-16);
    setBbanResult(`SD77${bank}${clean}`);
  };

  const handleCopyBBAN = () => {
    navigator.clipboard.writeText(bbanResult);
    setBbanCopied(true);
    setTimeout(() => setBbanCopied(false), 2000);
  };

  const getConvertedOutput = () => {
    const num = parseFloat(convertAmount) || 0;
    switch (convertMode) {
      case 'usd-sdg':
        return `${(num * 2700).toLocaleString()} SDG`;
      case 'km-miles':
        return `${(num * 0.621371).toFixed(2)} Miles`;
      case 'c-f':
        return `${((num * 9) / 5 + 32).toFixed(1)} °F`;
      default:
        return '';
    }
  };

  const bbanProject = PROJECTS.find((p) => p.id === 'bban-sudan')!;
  const easyConvertProject = PROJECTS.find((p) => p.id === 'easy-convert')!;

  return (
    <section id="world-01" className="w-full py-24 sm:py-36 px-4 sm:px-8 lg:px-16 border-b border-[#090909] scroll-mt-20 bg-white">
      {/* Chapter Tag & Headline */}
      <div className="space-y-4 mb-20 sm:mb-28">
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#2563EB]">
          <span>{lang === 'ar' ? world.tagAr : world.tagEn}</span>
          <span className="w-12 h-[1.5px] bg-[#2563EB]" />
        </div>

        <h2 className="text-4xl sm:text-6xl lg:text-8xl font-display font-black text-[#090909] tracking-tighter leading-[0.9] uppercase">
          {lang === 'ar' ? world.titleAr : world.titleEn}
        </h2>

        <p className="text-lg sm:text-xl text-[#71717A] max-w-2xl leading-relaxed">
          {lang === 'ar' ? world.subtitleAr : world.subtitleEn}
        </p>
      </div>

      {/* PROJECT 01: BBAN SUDAN — Monumental Editorial Showcase */}
      <div className="mb-32 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[#090909] pb-4">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-3xl font-black text-[#2563EB]">01.</span>
            <h3 className="text-3xl sm:text-5xl font-display font-black text-[#090909] tracking-tight">
              {lang === 'ar' ? bbanProject.titleAr : bbanProject.title}
            </h3>
          </div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#71717A]">
            Fintech Utility · Interbank Banking Standards
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Visual Device Frame */}
          <div className="lg:col-span-7">
            <div className="relative group/bban overflow-hidden rounded-3xl border border-[#090909] bg-[#090909] shadow-2xl aspect-[16/10]">
              <img
                src={bbanProject.image}
                alt={bbanProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover/bban:scale-103 opacity-95 group-hover/bban:opacity-100"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-mono text-[#090909] border border-[#E5E7EB] shadow-xs">
                bban-sd.pages.dev
              </div>

              {/* Click to open destination */}
              <a
                href={bbanProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black/40 opacity-0 group-hover/bban:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
              >
                <span className="px-6 py-3 rounded-full bg-white text-[#090909] font-bold text-xs font-mono uppercase tracking-wider shadow-lg flex items-center gap-2 hover:bg-[#2563EB] hover:text-white transition-colors">
                  <span>{t.visitProject}</span>
                  <ExternalLink className="w-4 h-4" />
                </span>
              </a>
            </div>
          </div>

          {/* Editorial Specs & Interactive Simulator */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-lg sm:text-xl text-[#090909] font-medium leading-relaxed">
              {lang === 'ar' ? bbanProject.descriptionAr : bbanProject.description}
            </p>

            {/* In-Page Interactive BBAN Simulator Widget */}
            <div className="p-6 rounded-3xl border border-[#BFDBFE] bg-[#EFF6FF] space-y-4">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-[#2563EB]">
                <span className="flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5" />
                  <span>{lang === 'ar' ? 'نموذج محاكاة التحويل' : 'Interactive BBAN Simulator'}</span>
                </span>
                <span className="text-[10px] uppercase text-[#71717A]">Live Logic</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <select
                  value={bbanBank}
                  onChange={(e) => {
                    setBbanBank(e.target.value);
                    updateBBAN(bbanAccount, e.target.value);
                  }}
                  className="px-3 py-2 text-xs bg-white border border-[#BFDBFE] rounded-xl font-mono font-semibold"
                >
                  <option value="BOK">Bank of Khartoum (BOK)</option>
                  <option value="FAIS">Faisal Islamic Bank</option>
                  <option value="OMAR">Omdurman National</option>
                  <option value="BARK">Al Baraka Bank</option>
                </select>

                <input
                  type="text"
                  value={bbanAccount}
                  onChange={(e) => {
                    setBbanAccount(e.target.value);
                    updateBBAN(e.target.value, bbanBank);
                  }}
                  placeholder="Account number..."
                  className="sm:col-span-2 px-3 py-2 text-xs bg-white border border-[#BFDBFE] rounded-xl font-mono focus:outline-none focus:border-[#2563EB]"
                />
              </div>

              {/* Result Row */}
              <div className="flex items-center justify-between gap-2 pt-1">
                <div>
                  <span className="text-[10px] font-mono text-[#2563EB] uppercase block font-bold">
                    Generated BBAN:
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-bold text-[#090909]">
                    {bbanResult}
                  </span>
                </div>

                <button
                  onClick={handleCopyBBAN}
                  className="px-3.5 py-1.5 bg-white text-[#2563EB] border border-[#BFDBFE] rounded-xl text-xs font-mono font-bold hover:bg-[#DBEAFE] transition-colors cursor-pointer flex items-center gap-1"
                >
                  {bbanCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{bbanCopied ? 'COPIED' : 'COPY'}</span>
                </button>
              </div>
            </div>

            {/* Visit Project Primary Action */}
            <div className="pt-2">
              <a
                href={bbanProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#090909] hover:bg-[#2563EB] rounded-full transition-colors cursor-pointer shadow-lg group/btn"
              >
                <span>{t.visitProject}</span>
                <ArrowUpRight className={`w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform ${isRtl ? 'rotate-[-90deg]' : ''}`} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* PROJECT 02: EASY CONVERT — Asymmetric Inverted Showcase */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[#090909] pb-4">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-3xl font-black text-[#2563EB]">02.</span>
            <h3 className="text-3xl sm:text-5xl font-display font-black text-[#090909] tracking-tight">
              {lang === 'ar' ? easyConvertProject.titleAr : easyConvertProject.title}
            </h3>
          </div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#71717A]">
            Utility Application · Zero Latency Architecture
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Details & In-Page Simulator */}
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
            <p className="text-lg sm:text-xl text-[#090909] font-medium leading-relaxed">
              {lang === 'ar' ? easyConvertProject.descriptionAr : easyConvertProject.description}
            </p>

            {/* Live Interactive Converter Simulator */}
            <div className="p-6 rounded-3xl border border-[#BFDBFE] bg-[#EFF6FF] space-y-4">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-[#2563EB]">
                <span className="flex items-center gap-1.5">
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>{lang === 'ar' ? 'محاكاة التحويل السريع' : 'Interactive Unit Converter'}</span>
                </span>
                <span className="text-[10px] uppercase text-[#71717A]">Realtime</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <select
                  value={convertMode}
                  onChange={(e) => setConvertMode(e.target.value as any)}
                  className="px-3 py-2 text-xs bg-white border border-[#BFDBFE] rounded-xl font-mono font-semibold"
                >
                  <option value="usd-sdg">USD ($) → SDG (Sudanese)</option>
                  <option value="km-miles">Kilometers → Miles</option>
                  <option value="c-f">Celsius (°C) → Fahrenheit (°F)</option>
                </select>

                <input
                  type="number"
                  value={convertAmount}
                  onChange={(e) => setConvertAmount(e.target.value)}
                  className="px-3 py-2 text-xs bg-white border border-[#BFDBFE] rounded-xl font-mono focus:outline-none focus:border-[#2563EB]"
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-[10px] font-mono text-[#2563EB] uppercase font-bold">Output:</span>
                <span className="font-mono text-base font-black text-[#090909]">
                  {getConvertedOutput()}
                </span>
              </div>
            </div>

            {/* Visit Project Primary Action */}
            <div className="pt-2">
              <a
                href={easyConvertProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#090909] hover:bg-[#2563EB] rounded-full transition-colors cursor-pointer shadow-lg group/btn"
              >
                <span>{t.visitProject}</span>
                <ArrowUpRight className={`w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform ${isRtl ? 'rotate-[-90deg]' : ''}`} />
              </a>
            </div>
          </div>

          {/* Device Showcase Frame */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative group/easy overflow-hidden rounded-3xl border border-[#090909] bg-[#090909] shadow-2xl aspect-[16/10]">
              <img
                src={easyConvertProject.image}
                alt={easyConvertProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover/easy:scale-103 opacity-95 group-hover/easy:opacity-100"
              />
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-mono text-[#090909] border border-[#E5E7EB] shadow-xs">
                easy-convert-9ff25.web.app
              </div>

              {/* Click to open destination */}
              <a
                href={easyConvertProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black/40 opacity-0 group-hover/easy:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
              >
                <span className="px-6 py-3 rounded-full bg-white text-[#090909] font-bold text-xs font-mono uppercase tracking-wider shadow-lg flex items-center gap-2 hover:bg-[#2563EB] hover:text-white transition-colors">
                  <span>{t.visitProject}</span>
                  <ExternalLink className="w-4 h-4" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Swiss Technical Composition */}
      <div className="mt-28 pt-12 border-t border-[#090909] flex flex-col sm:flex-row sm:items-baseline justify-between gap-6">
        <span className="text-xs font-mono uppercase tracking-widest text-[#2563EB] font-bold">
          ENGINEERING DISCIPLINE
        </span>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm sm:text-base font-mono font-bold text-[#090909]">
          {DEVELOPER_SKILLS.map((skill) => (
            <div key={skill.name} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
