import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Camera, Calendar } from 'lucide-react';
import { PhotoItem, Language } from '../types';
import { UI_TEXT } from '../data/content';

interface PhotoLightboxProps {
  photo: PhotoItem | null;
  photos: PhotoItem[];
  lang: Language;
  onClose: () => void;
  onSelectPhoto: (photo: PhotoItem) => void;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({
  photo,
  photos,
  lang,
  onClose,
  onSelectPhoto,
}) => {
  const t = UI_TEXT[lang];

  useEffect(() => {
    if (!photo) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        const currentIndex = photos.findIndex((p) => p.id === photo.id);
        const nextIndex = (currentIndex + 1) % photos.length;
        onSelectPhoto(photos[nextIndex]);
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = photos.findIndex((p) => p.id === photo.id);
        const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
        onSelectPhoto(photos[prevIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photo, photos, onClose, onSelectPhoto]);

  if (!photo) return null;

  const currentIndex = photos.findIndex((p) => p.id === photo.id);
  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    onSelectPhoto(photos[prevIndex]);
  };
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % photos.length;
    onSelectPhoto(photos[nextIndex]);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center bg-[#111111] text-white rounded-2xl overflow-hidden shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with count & close */}
        <div className="w-full flex items-center justify-between px-5 py-3 border-b border-white/10 bg-[#18181B]">
          <div className="text-xs text-slate-400 font-mono">
            {currentIndex + 1} / {photos.length}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label={t.closeExhibition}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Frame with Prev/Next Controls */}
        <div className="relative w-full flex-1 flex items-center justify-center p-4 bg-black/40 min-h-[300px] max-h-[65vh]">
          {/* Previous Button */}
          {photos.length > 1 && (
            <button
              onClick={handlePrev}
              className="absolute left-3 z-10 p-2 text-white bg-black/60 hover:bg-[#2563EB] rounded-full border border-white/20 transition-all cursor-pointer"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          <img
            src={photo.image}
            alt={lang === 'ar' ? photo.titleAr : photo.title}
            referrerPolicy="no-referrer"
            className="max-h-[62vh] max-w-full object-contain rounded-lg"
          />

          {/* Next Button */}
          {photos.length > 1 && (
            <button
              onClick={handleNext}
              className="absolute right-3 z-10 p-2 text-white bg-black/60 hover:bg-[#2563EB] rounded-full border border-white/20 transition-all cursor-pointer"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Bottom Details Bar */}
        <div className="w-full p-5 bg-[#18181B] border-t border-white/10 space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="text-base sm:text-lg font-bold text-white">
              {lang === 'ar' ? photo.titleAr : photo.title}
            </h3>
            <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>{lang === 'ar' ? photo.locationAr : photo.location}</span>
              </span>
              <span className="text-white/20">·</span>
              <span className="flex items-center gap-1.5">
                <Camera className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>{lang === 'ar' ? photo.cameraInfoAr : photo.cameraInfo}</span>
              </span>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {lang === 'ar' ? photo.descriptionAr : photo.description}
          </p>
        </div>
      </div>
    </div>
  );
};
