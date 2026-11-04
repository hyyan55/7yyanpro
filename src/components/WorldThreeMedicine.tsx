import React, { useState } from 'react';
import {
  Github,
  Mail,
  Copy,
  Check,
  Send,
  MapPin,
  ExternalLink,
  ArrowUpRight,
} from 'lucide-react';
import { Language } from '../types';
import { PERSONAL_INFO, THREE_WORLDS, UI_TEXT } from '../data/content';

interface WorldThreeMedicineProps {
  lang: Language;
}

export const WorldThreeMedicine: React.FC<WorldThreeMedicineProps> = ({ lang }) => {
  const t = UI_TEXT[lang];
  const isRtl = lang === 'ar';
  const world = THREE_WORLDS.world3;

  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(subject || 'Inquiry from Portfolio');
    const mailtoBody = encodeURIComponent(
      `Name: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="world-03" className="w-full py-24 sm:py-36 px-4 sm:px-8 lg:px-16 border-b border-[#090909] scroll-mt-20 bg-white">
      {/* Chapter 03 Header */}
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

      {/* Editorial Spread: Academic Restraint & Diagnostic Synthesis */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-28">
        {/* Left Editorial Philosophy */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="text-3xl sm:text-4xl font-display font-black text-[#090909] tracking-tight leading-tight">
            {lang === 'ar'
              ? 'الطب يرسخ منهجية الملاحظة والمسؤولية، وهندسة البرمجيات تمنح القدرة على ابتكار النظم النافعة.'
              : 'Clinical medicine instills diagnostic patience and systematic analysis; software engineering materializes functional solutions.'}
          </h3>

          <p className="text-base sm:text-lg text-[#71717A] leading-relaxed">
            {lang === 'ar' ? PERSONAL_INFO.aboutBriefAr : PERSONAL_INFO.aboutBriefEn}
          </p>

          <p className="text-sm text-[#71717A] leading-relaxed">
            {lang === 'ar'
              ? 'من دراسة علم وظائف الأعضاء في كسلا إلى تطوير برمجيات مصرفية تخدم التحويلات المالية في السودان، يبقى المعيار ثابتاً: الوضوح، والمنفعة، والاستدامة.'
              : 'From studying human anatomy and pathology in Kassala to deploying financial utilities across Sudan, the design philosophy remains uncompromising: clarity, purpose, and lasting value.'}
          </p>
        </div>

        {/* Right Academic Restraint Presentation (No CV cards) */}
        <div className="lg:col-span-5 border-l-2 lg:border-l-0 lg:border-t-2 border-[#090909] pt-6 pl-6 lg:pl-0 space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-[#2563EB] font-bold">
              ACADEMIC TRAJECTORY
            </span>
            <span className="text-xs font-mono text-[#71717A]">Undergraduate</span>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-mono text-[#71717A] uppercase block">Identity & Discipline</span>
            <h4 className="text-2xl sm:text-3xl font-display font-black text-[#090909]">
              {t.medicalStudentTitle}
            </h4>
            <p className="text-sm font-mono font-bold text-[#2563EB]">
              {lang === 'ar' ? PERSONAL_INFO.universityAr : PERSONAL_INFO.universityEn}
            </p>
            <span className="text-xs text-[#71717A] font-mono block">
              {lang === 'ar' ? 'كسلا، السودان' : 'Kassala, Sudan'}
            </span>
          </div>

          <div className="pt-4 border-t border-[#E5E7EB] space-y-2 text-xs font-mono text-[#71717A]">
            <div>· Anatomy, Physiology & Pathology</div>
            <div>· Clinical Diagnostic Problem Solving</div>
            <div>· Digital Healthcare Systems Interest</div>
          </div>
        </div>
      </div>

      {/* GitHub Feature Banner */}
      <div className="mb-28 bg-[#090909] text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden group">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#2563EB] uppercase tracking-wider font-bold">
              <Github className="w-4 h-4" />
              <span>OPEN SOURCE & CODEBASES</span>
            </div>
            <h3 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white">
              github.com/hyyan55
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-mono">
              {lang === 'ar'
                ? 'استكشف المستودعات البرمجية المفتوحة لتطبيقات BBAN السودان و Easy Convert والمشاريع الخدمية.'
                : 'Inspect the public repositories for BBAN Sudan, Easy Convert, and responsive utilities.'}
            </p>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white text-[#090909] hover:bg-[#2563EB] hover:text-white transition-colors cursor-pointer shadow-xl self-start md:self-auto"
          >
            <span>{t.viewGithub}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* CONTACT SECTION — Monumental Typography & Direct Outreach */}
      <div id="contact" className="scroll-mt-24 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Direct Outreach & Massive Heading */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#2563EB] block font-bold">
                04 / DIRECT OUTREACH
              </span>
              <h3 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black text-[#090909] tracking-tighter leading-[0.9] uppercase">
                {t.contactHeadline}
              </h3>
            </div>

            <p className="text-base sm:text-lg text-[#71717A] leading-relaxed">
              {t.contactPrompt}
            </p>

            {/* Direct Verified Email Box */}
            <div className="p-6 rounded-3xl border border-[#BFDBFE] bg-[#EFF6FF] space-y-2 max-w-md">
              <span className="text-[10px] font-mono text-[#2563EB] uppercase tracking-wider block font-bold">
                Direct Email:
              </span>
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-sm sm:text-base font-bold text-[#090909] select-all break-all">
                  {PERSONAL_INFO.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-3 rounded-2xl bg-white border border-[#BFDBFE] text-[#2563EB] hover:bg-[#DBEAFE] transition-colors cursor-pointer shrink-0 shadow-xs"
                  title={t.copyEmail}
                  aria-label={t.copyEmail}
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <p className="text-xs text-emerald-700 font-mono font-semibold pt-1 flex items-center gap-1.5 animate-in fade-in">
                  <Check className="w-3.5 h-3.5" />
                  <span>{t.emailCopied}</span>
                </p>
              )}
            </div>

            {/* Geographical Base */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#71717A] pt-2">
              <MapPin className="w-4 h-4 text-[#2563EB]" />
              <span className="text-[#090909] font-bold">
                {lang === 'ar' ? PERSONAL_INFO.locationAr : PERSONAL_INFO.locationEn}
              </span>
              <span className="text-[#D1D5DB]">·</span>
              <span>Eastern Sudan</span>
            </div>
          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-6 bg-slate-50 border border-[#090909] rounded-3xl p-6 sm:p-10 shadow-xs">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#090909] font-bold mb-6">
              {lang === 'ar' ? 'إرسال رسالة مباشرة عبر البريد' : 'Compose Direct Message'}
            </h4>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-[#090909] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Tariq"
                    className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-xl text-xs text-[#090909] focus:outline-none focus:border-[#2563EB]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-[#090909] mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="e.g. tariq@domain.com"
                    className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-xl text-xs text-[#090909] focus:outline-none focus:border-[#2563EB]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-[#090909] mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. BBAN inquiry or digital project"
                  className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-xl text-xs text-[#090909] focus:outline-none focus:border-[#2563EB]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-[#090909] mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    lang === 'ar' ? 'اكتب رسالتك هنا...' : 'Write your project inquiry or message...'
                  }
                  className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-xl text-xs text-[#090909] focus:outline-none focus:border-[#2563EB] resize-none"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-xs font-mono text-[#2563EB] hover:underline font-bold flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{t.directEmail}</span>
                </a>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#090909] hover:bg-[#2563EB] rounded-full transition-colors cursor-pointer shadow-lg"
                >
                  <span>Dispatch Email</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
