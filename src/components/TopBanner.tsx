import React from 'react';
import { useApp } from '../context/AppContext';
import { X, Sparkles } from 'lucide-react';

export const TopBanner: React.FC = () => {
  const { settings, updateSettings, navigate } = useApp();

  if (!settings.topBannerActive) return null;

  return (
    <div className="bg-[#F4EBDD] border-b border-[#EAE0D4] text-[#292522] py-2 px-4 text-xs md:text-sm font-medium transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div 
          onClick={() => navigate('offers')}
          className="flex items-center gap-2 cursor-pointer hover:text-[#D94332] transition-colors truncate mx-auto md:mx-0"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D94332] shrink-0" />
          <span className="truncate">{settings.topBannerText}</span>
          <span className="hidden sm:inline-block font-semibold underline underline-offset-2 ml-1 text-[#D94332] shrink-0">
            View Offers →
          </span>
        </div>
        <button
          onClick={() => updateSettings({ topBannerActive: false })}
          className="text-[#77716B] hover:text-[#292522] p-1 rounded transition-colors shrink-0"
          aria-label="Dismiss banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
