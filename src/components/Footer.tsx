import React from 'react';
import { useApp } from '../context/AppContext';
import { PageRoute } from '../types';
import { Instagram, MessageCircle, MapPin, Clock, Phone, Heart, Settings } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigate, settings } = useApp();

  const handleNav = (route: PageRoute) => {
    navigate(route);
  };

  return (
    <footer className="bg-[#F4EBDD] border-t border-[#EAE0D4] text-[#292522] pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">
          
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#EAE0D4] bg-white flex items-center justify-center shadow-xs">
                <img
                  src="/src/assets/images/the_hotpot_bowl_logo_mark_1793377768494.jpg"
                  alt="The Hotpot Bowl Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl tracking-tight text-[#292522]">
                  {settings.brandName}
                </h3>
                <p className="text-xs text-[#77716B] uppercase tracking-wider">
                  Asian Comfort Food
                </p>
              </div>
            </div>

            <p className="text-sm text-[#77716B] leading-relaxed">
              Serving soul-satisfying hotpot, creamy Alfredo dumplings, authentic chicken momos, artisanal ramen, and crispy Korean corn dogs. Prepared fresh daily with love.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={settings.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#EAE0D4] flex items-center justify-center text-[#292522] hover:text-[#D94332] hover:border-[#D94332] transition-colors shadow-2xs"
                aria-label="Instagram profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#EAE0D4] flex items-center justify-center text-[#292522] hover:text-[#25D366] hover:border-[#25D366] transition-colors shadow-2xs"
                aria-label="WhatsApp direct chat"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-lg text-[#292522]">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="text-[#77716B] hover:text-[#D94332] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('menu')}
                  className="text-[#77716B] hover:text-[#D94332] transition-colors"
                >
                  Full Menu & Combos
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="text-[#77716B] hover:text-[#D94332] transition-colors"
                >
                  Our Story & Kitchen
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gallery')}
                  className="text-[#77716B] hover:text-[#D94332] transition-colors"
                >
                  Instagram Food Journey
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('offers')}
                  className="text-[#77716B] hover:text-[#D94332] transition-colors"
                >
                  Special Offers & Giveaways
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="text-[#77716B] hover:text-[#D94332] transition-colors"
                >
                  Contact & Locations
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Kitchen & Collaborations */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-lg text-[#292522]">
              Locations & Hubs
            </h4>
            <div className="space-y-3 text-sm text-[#77716B]">
              {settings.locations.map((loc, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#D94332] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#292522] font-medium">{loc.name}</strong>
                    <span className="text-xs text-[#77716B] block">{loc.address}</span>
                    <span className="text-[11px] text-[#D94332] block italic">{loc.notes}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Col 4: Hours & Instant Ordering */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-lg text-[#292522]">
              Hours & Inquiries
            </h4>
            <div className="space-y-2 text-sm text-[#77716B]">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#F29A38] shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  {settings.businessHours.map((bh, idx) => (
                    <div key={idx} className="flex justify-between gap-4">
                      <span>{bh.days}:</span>
                      <span className="font-medium text-[#292522]">{bh.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-2">
                <Phone className="w-4 h-4 text-[#D94332] shrink-0" />
                <span className="text-sm font-medium text-[#292522]">
                  {settings.displayPhone}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hello%20The%20Hotpot%20Bowl,%20I%20would%20like%20to%20inquire%20about%20ordering`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#25D366] text-white hover:bg-[#20ba59] transition-colors shadow-2xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Quick WhatsApp Chat</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#EAE0D4] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#77716B]">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} {settings.brandName}. All rights reserved.</span>
            <span aria-hidden="true">·</span>
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#D94332] fill-[#D94332]" />
            <span>for comfort food lovers.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNav('contact')}
              className="hover:text-[#292522] transition-colors"
            >
              Order Queries
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => handleNav('admin')}
              className="inline-flex items-center gap-1 text-[#77716B] hover:text-[#D94332] transition-colors"
            >
              <Settings className="w-3 h-3" />
              <span>Owner Portal</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
