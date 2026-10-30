import React from 'react';
import { useApp } from '../context/AppContext';
import { X, Instagram, Calendar, Tag } from 'lucide-react';

export const LightboxModal: React.FC = () => {
  const { activeLightbox, setActiveLightbox } = useApp();

  if (!activeLightbox) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div
          onClick={() => setActiveLightbox(null)}
          className="fixed inset-0 bg-[#292522]/80 backdrop-blur-xs transition-opacity"
        />

        {/* Modal Window */}
        <div className="relative w-full max-w-3xl bg-[#FFF9F1] rounded-2xl shadow-2xl overflow-hidden border border-[#EAE0D4] z-10 flex flex-col md:flex-row">
          
          <button
            onClick={() => setActiveLightbox(null)}
            className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#292522] flex items-center justify-center shadow-xs transition-colors"
            aria-label="Close image lightbox"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Image */}
          <div className="md:w-3/5 bg-black flex items-center justify-center min-h-[300px]">
            <img
              src={activeLightbox.image}
              alt={activeLightbox.title}
              className="max-h-[75vh] w-full object-cover md:object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Details */}
          <div className="md:w-2/5 p-6 flex flex-col justify-between space-y-4 bg-[#FFF9F1]">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs text-[#77716B]">
                <Tag className="w-3.5 h-3.5 text-[#D94332]" />
                <span className="font-medium text-[#D94332]">{activeLightbox.category}</span>
                <span>·</span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{activeLightbox.date}</span>
                </div>
              </div>

              <h3 className="font-display font-bold text-xl text-[#292522]">
                {activeLightbox.title}
              </h3>

              <p className="text-sm text-[#77716B] leading-relaxed">
                {activeLightbox.caption}
              </p>
            </div>

            <div className="pt-4 border-t border-[#EAE0D4]">
              <a
                href={activeLightbox.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#D94332] text-white hover:bg-[#c33727] transition-all shadow-xs"
              >
                <Instagram className="w-4 h-4" />
                <span>View on Instagram (@the.hotpotbowl)</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
