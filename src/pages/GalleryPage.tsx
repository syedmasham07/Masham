import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Instagram, Eye, ArrowUpRight, Sparkles } from 'lucide-react';
import { GalleryItem } from '../types';

export const GalleryPage: React.FC = () => {
  const { galleryItems, setActiveLightbox, settings } = useApp();
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Dishes' | 'Kitchen & Prep' | 'Orders & Dispatch'>('All');

  const filterTabs: ('All' | 'Dishes' | 'Kitchen & Prep' | 'Orders & Dispatch')[] = [
    'All',
    'Dishes',
    'Kitchen & Prep',
    'Orders & Dispatch'
  ];

  const filteredGallery = galleryItems.filter((item) => {
    if (selectedFilter === 'All') return true;
    return item.category === selectedFilter;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* 11. INSTAGRAM GALLERY HEADING */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#EAE0D4] pb-8">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs uppercase tracking-widest font-bold text-[#D94332] flex items-center gap-1.5">
            <Instagram className="w-4 h-4" />
            <span>@the.hotpotbowl</span>
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-[#292522]">
            Follow Our Food Journey
          </h1>
          <p className="text-sm sm:text-base text-[#77716B]">
            From simmering bone broths and morning dumpling pleating to evening dispatch seals, take a look behind our kitchen doors.
          </p>
        </div>

        <a
          href={settings.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-[#D94332] text-white hover:bg-[#c33727] active:scale-98 transition-all shadow-xs shrink-0 self-start md:self-auto"
        >
          <Instagram className="w-4 h-4" />
          <span>Follow Us on Instagram</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {filterTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedFilter(tab)}
            className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all focus-visible:outline-hidden ${
              selectedFilter === tab
                ? 'bg-[#292522] text-white shadow-xs'
                : 'bg-[#F4EBDD] text-[#77716B] hover:text-[#292522] hover:bg-[#EAE0D4]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Responsive Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGallery.map((item: GalleryItem) => (
          <div
            key={item.id}
            onClick={() => setActiveLightbox(item)}
            className="group relative bg-white rounded-2xl border border-[#EAE0D4] overflow-hidden shadow-2xs hover:shadow-lg cursor-pointer transition-all duration-300 flex flex-col"
          >
            {/* Image Box */}
            <div className="relative aspect-4/3 bg-[#F4EBDD] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="p-3 rounded-full bg-white/90 text-[#292522] shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <Eye className="w-5 h-5" />
                </span>
              </div>
              <span className="absolute top-3 left-3 bg-[#FFF9F1]/90 backdrop-blur-xs text-[#292522] text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-[#EAE0D4]">
                {item.category}
              </span>
            </div>

            {/* Caption & Metadata */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
              <div>
                <h3 className="font-display font-semibold text-lg text-[#292522] group-hover:text-[#D94332] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#77716B] leading-relaxed line-clamp-2 mt-1">
                  {item.caption}
                </p>
              </div>

              <div className="pt-3 border-t border-[#EAE0D4]/60 flex items-center justify-between text-[11px] text-[#77716B]">
                <span>{item.date}</span>
                <span className="inline-flex items-center gap-1 font-semibold text-[#D94332]">
                  <Instagram className="w-3 h-3" /> View Post
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Instagram Community Banner */}
      <div className="bg-[#FFF9F1] p-8 rounded-3xl border border-[#EAE0D4] text-center max-w-xl mx-auto space-y-4">
        <div className="w-12 h-12 rounded-full bg-[#F4EBDD] text-[#D94332] flex items-center justify-center mx-auto">
          <Sparkles className="w-6 h-6" />
        </div>
        <h3 className="font-display font-bold text-2xl text-[#292522]">
          Tag Us In Your Food Stories
        </h3>
        <p className="text-xs sm:text-sm text-[#77716B] leading-relaxed">
          Order from The Hotpot Bowl, take a snapshot of your steaming broth bowl or cheesy corn dog pull, and tag <strong>@the.hotpotbowl</strong> for a chance to be featured!
        </p>
        <a
          href={settings.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#D94332] hover:underline underline-offset-4"
        >
          <span>Visit @the.hotpotbowl on Instagram</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

    </div>
  );
};
