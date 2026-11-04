import React, { useState } from 'react';
import { Camera, MapPin, Maximize2, Plus } from 'lucide-react';
import { PhotoItem, Language } from '../types';
import { PHOTOGRAPHY_GALLERY, THREE_WORLDS, UI_TEXT } from '../data/content';
import { PhotoLightbox } from './PhotoLightbox';

interface WorldTwoPhotographyProps {
  lang: Language;
}

export const WorldTwoPhotography: React.FC<WorldTwoPhotographyProps> = ({ lang }) => {
  const t = UI_TEXT[lang];
  const world = THREE_WORLDS.world2;

  const [gallery, setGallery] = useState<PhotoItem[]>(PHOTOGRAPHY_GALLERY);
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);
  const [showAddCustom, setShowAddCustom] = useState(false);
  const [customPhotoInput, setCustomPhotoInput] = useState({
    title: '',
    url: '',
    category: 'landscape' as const,
  });

  const handleAddCustomPhoto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customPhotoInput.url.trim() || !customPhotoInput.title.trim()) return;

    const newPhoto: PhotoItem = {
      id: `custom-${Date.now()}`,
      title: customPhotoInput.title,
      titleAr: customPhotoInput.title,
      location: 'Kassala, Sudan',
      locationAr: 'كسلا، السودان',
      category: customPhotoInput.category,
      aspectRatio: '4:3',
      image: customPhotoInput.url.trim(),
      cameraInfo: 'Hayyan Mohamed Photography',
      cameraInfoAr: 'تصوير حيان محمد',
      year: '2026',
      description: 'Personal photograph added to exhibition.',
      descriptionAr: 'صورة شخصية مضافة إلى المعرض.',
    };

    setGallery([newPhoto, ...gallery]);
    setCustomPhotoInput({ title: '', url: '', category: 'landscape' });
    setShowAddCustom(false);
  };

  return (
    <section
      id="world-02"
      className="w-full py-28 sm:py-40 bg-[#090909] text-white px-4 sm:px-8 lg:px-16 scroll-mt-16 transition-colors duration-700"
    >
      <div className="w-full space-y-20 sm:space-y-28">
        {/* Exhibition Room Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#2563EB]">
              <span>{lang === 'ar' ? world.tagAr : world.tagEn}</span>
              <span className="w-12 h-[1.5px] bg-[#2563EB]" />
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-8xl font-display font-black text-white tracking-tighter leading-[0.9] uppercase">
              {lang === 'ar' ? world.titleAr : world.titleEn}
            </h2>

            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed">
              {lang === 'ar' ? world.subtitleAr : world.subtitleEn}
            </p>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-auto">
            <span className="px-4 py-2 rounded-full border border-white/20 text-xs font-mono uppercase tracking-wider text-slate-300">
              {t.exhibitionBadge}
            </span>
          </div>
        </div>

        {/* EXHIBITION GALLERY SPREAD */}
        <div className="space-y-16">
          {/* Main Panoramic Exhibition Piece: Taka Mountains */}
          {gallery[0] && (
            <div
              onClick={() => setActivePhoto(gallery[0])}
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#141414] aspect-[16/9] sm:aspect-[21/9] cursor-pointer shadow-2xl"
            >
              <img
                src={gallery[0].image}
                alt={gallery[0].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-103 opacity-90 group-hover:opacity-100"
              />

              {/* Minimalist Exhibition Label */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-12 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>{lang === 'ar' ? gallery[0].locationAr : gallery[0].location}</span>
                    <span className="text-white/20">·</span>
                    <span>{gallery[0].year}</span>
                  </div>
                  <h3 className="text-2xl sm:text-5xl font-display font-black tracking-tight text-white">
                    {lang === 'ar' ? gallery[0].titleAr : gallery[0].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl">
                    {lang === 'ar' ? gallery[0].descriptionAr : gallery[0].description}
                  </p>
                </div>

                <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-mono uppercase text-white group-hover:bg-[#2563EB] transition-colors self-start sm:self-auto">
                  <Maximize2 className="w-4 h-4" />
                  <span>{t.viewFullscreen}</span>
                </div>
              </div>
            </div>
          )}

          {/* Asymmetric 2-Piece Diptych Spread */}
          {gallery.length > 1 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              {/* Street Documentary (4:3) */}
              {gallery[1] && (
                <div
                  onClick={() => setActivePhoto(gallery[1])}
                  className="lg:col-span-7 group relative rounded-3xl overflow-hidden border border-white/10 bg-[#141414] aspect-[4/3] cursor-pointer shadow-xl flex flex-col justify-end"
                >
                  <img
                    src={gallery[1].image}
                    alt={gallery[1].title}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-103 opacity-90 group-hover:opacity-100"
                  />
                  <div className="relative p-6 sm:p-10 bg-gradient-to-t from-black/95 via-black/40 to-transparent">
                    <div className="text-xs font-mono text-slate-400 mb-1">
                      {lang === 'ar' ? gallery[1].cameraInfoAr : gallery[1].cameraInfo}
                    </div>
                    <h4 className="text-2xl sm:text-3xl font-display font-black text-white">
                      {lang === 'ar' ? gallery[1].titleAr : gallery[1].title}
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 max-w-md">
                      {lang === 'ar' ? gallery[1].descriptionAr : gallery[1].description}
                    </p>
                  </div>
                </div>
              )}

              {/* Architecture Study (3:4) */}
              {gallery[2] && (
                <div
                  onClick={() => setActivePhoto(gallery[2])}
                  className="lg:col-span-5 group relative rounded-3xl overflow-hidden border border-white/10 bg-[#141414] aspect-[3/4] cursor-pointer shadow-xl flex flex-col justify-end"
                >
                  <img
                    src={gallery[2].image}
                    alt={gallery[2].title}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-103 opacity-90 group-hover:opacity-100"
                  />
                  <div className="relative p-6 sm:p-10 bg-gradient-to-t from-black/95 via-black/40 to-transparent">
                    <div className="text-xs font-mono text-slate-400 mb-1">
                      {lang === 'ar' ? gallery[2].cameraInfoAr : gallery[2].cameraInfo}
                    </div>
                    <h4 className="text-2xl sm:text-3xl font-display font-black text-white">
                      {lang === 'ar' ? gallery[2].titleAr : gallery[2].title}
                    </h4>
                    <p className="text-xs text-slate-300 mt-1">
                      {lang === 'ar' ? gallery[2].descriptionAr : gallery[2].description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Exhibition Footer & Photo Link Manager */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-10 border-t border-white/10 text-xs font-mono text-slate-400">
          <span>{lang === 'ar' ? 'التصوير التوثيقي لشرق السودان' : 'Eastern Sudan Visual Documentation'}</span>

          <button
            onClick={() => setShowAddCustom(!showAddCustom)}
            className="px-5 py-2.5 rounded-full border border-white/20 text-white hover:border-[#2563EB] hover:text-[#2563EB] transition-colors cursor-pointer"
          >
            {showAddCustom
              ? lang === 'ar'
                ? 'إغلاق'
                : 'Close'
              : lang === 'ar'
              ? '+ إضافة صورة مخصصة للمعرض'
              : '+ Add Custom Exhibition Photo'}
          </button>
        </div>

        {/* Custom Photo Form */}
        {showAddCustom && (
          <form
            onSubmit={handleAddCustomPhoto}
            className="p-6 bg-[#141414] border border-white/20 rounded-2xl space-y-4 animate-in fade-in"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Title</label>
                <input
                  type="text"
                  required
                  value={customPhotoInput.title}
                  onChange={(e) =>
                    setCustomPhotoInput({ ...customPhotoInput, title: e.target.value })
                  }
                  placeholder="e.g. Sunset in Kassala"
                  className="w-full px-3 py-2 bg-[#090909] border border-white/20 rounded-lg text-xs text-white focus:outline-none focus:border-[#2563EB]"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Image URL</label>
                <input
                  type="url"
                  required
                  value={customPhotoInput.url}
                  onChange={(e) =>
                    setCustomPhotoInput({ ...customPhotoInput, url: e.target.value })
                  }
                  placeholder="https://..."
                  className="w-full px-3 py-2 bg-[#090909] border border-white/20 rounded-lg text-xs text-white focus:outline-none focus:border-[#2563EB]"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Category</label>
                <select
                  value={customPhotoInput.category}
                  onChange={(e) =>
                    setCustomPhotoInput({ ...customPhotoInput, category: e.target.value as any })
                  }
                  className="w-full px-3 py-2 bg-[#090909] border border-white/20 rounded-lg text-xs text-white focus:outline-none focus:border-[#2563EB]"
                >
                  <option value="landscape">Landscape</option>
                  <option value="documentary">Documentary</option>
                  <option value="architecture">Architecture</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-[#2563EB] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#1D4ED8] transition-colors cursor-pointer"
              >
                Add to Exhibition
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <PhotoLightbox
        photo={activePhoto}
        photos={gallery}
        lang={lang}
        onClose={() => setActivePhoto(null)}
        onSelectPhoto={(p) => setActivePhoto(p)}
      />
    </section>
  );
};
