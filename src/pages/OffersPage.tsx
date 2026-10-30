import React from 'react';
import { useApp } from '../context/AppContext';
import { SpecialOffer } from '../types';
import { Tag, Calendar, Instagram, MessageCircle, Gift, Clock, Sparkles } from 'lucide-react';

export const OffersPage: React.FC = () => {
  const { offers, settings } = useApp();

  const getStatusBadge = (status: SpecialOffer['status']) => {
    switch (status) {
      case 'Active':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Coming Soon':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Expired':
        return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* 8. SPECIAL OFFERS PAGE HEADER */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-widest font-bold text-[#D94332] bg-[#F4EBDD] px-3.5 py-1 rounded-full border border-[#EAE0D4]">
          PROMOTIONS & GIVEAWAYS
        </span>
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-[#292522]">
          Special Offers & Announcements
        </h1>
        <p className="text-sm sm:text-base text-[#77716B]">
          Official promotional specials, batch pre-order announcements, and Instagram giveaways directly from our kitchen.
        </p>
      </div>

      {/* Offers Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="bg-white rounded-3xl border border-[#EAE0D4] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              {/* Image banner */}
              <div className="relative aspect-16/10 bg-[#F4EBDD] overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border shadow-2xs ${getStatusBadge(offer.status)}`}>
                    {offer.status}
                  </span>
                  <span className="text-[11px] font-medium bg-white/90 text-[#292522] px-2 py-1 rounded-full border border-[#EAE0D4] shadow-2xs">
                    {offer.badgeText}
                  </span>
                </div>
              </div>

              {/* Offer Info */}
              <div className="p-6 space-y-3">
                <h3 className="font-display font-bold text-xl text-[#292522]">
                  {offer.title}
                </h3>
                <h4 className="text-xs font-semibold text-[#D94332] uppercase tracking-wide">
                  {offer.subtitle}
                </h4>
                <p className="text-xs sm:text-sm text-[#77716B] leading-relaxed">
                  {offer.description}
                </p>

                {offer.terms && (
                  <div className="p-3 bg-[#FFF9F1] rounded-xl border border-[#EAE0D4] text-[11px] text-[#77716B] space-y-1">
                    <strong className="block text-[#292522]">Note / Terms:</strong>
                    <span>{offer.terms}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-6 pt-0 border-t border-[#EAE0D4]/60 mt-4 space-y-3">
              {offer.validUntil && (
                <div className="flex items-center gap-1.5 text-xs text-[#77716B] pt-2">
                  <Clock className="w-3.5 h-3.5 text-[#F29A38]" />
                  <span>Validity: {offer.validUntil}</span>
                </div>
              )}

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={offer.instagramPostUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold bg-[#FFF9F1] hover:bg-[#F4EBDD] text-[#292522] border border-[#EAE0D4] transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#D94332]" />
                  <span>Instagram</span>
                </a>

                <a
                  href={`https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hello%20The%20Hotpot%20Bowl,%20I%20am%20inquiring%20about%20the%20${encodeURIComponent(offer.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold bg-[#25D366] hover:bg-[#20ba59] text-white transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>Claim / Pre-order</span>
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Owner note */}
      <div className="p-5 bg-[#F4EBDD] rounded-2xl border border-[#EAE0D4] text-xs text-[#77716B] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#D94332]" />
          <span>Promotions are managed in real-time to match daily kitchen batches and Instagram drops.</span>
        </div>
      </div>

    </div>
  );
};
