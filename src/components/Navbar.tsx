import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { PageRoute } from '../types';
import { ShoppingBag, Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { currentPage, navigate, cartCount, setIsCartOpen } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; route: PageRoute }[] = [
    { label: 'Home', route: 'home' },
    { label: 'Our Menu', route: 'menu' },
    { label: 'About Us', route: 'about' },
    { label: 'Gallery', route: 'gallery' },
    { label: 'Special Offers', route: 'offers' },
    { label: 'Contact', route: 'contact' },
  ];

  const handleNavClick = (route: PageRoute) => {
    navigate(route);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFF9F1]/95 backdrop-blur-md shadow-xs border-b border-[#EAE0D4]/80 py-3'
          : 'bg-[#FFF9F1] border-b border-[#EAE0D4]/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Brand Wordmark & Icon */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group whitespace-nowrap shrink-0 focus-visible:outline-hidden"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border border-[#EAE0D4] bg-white flex items-center justify-center shadow-xs">
              <img
                src="/src/assets/images/the_hotpot_bowl_logo_mark_1793377768494.jpg"
                alt="The Hotpot Bowl Logo"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="font-display font-bold text-xl md:text-2xl text-[#292522] tracking-tight group-hover:text-[#D94332] transition-colors block leading-tight">
                The Hotpot Bowl
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#77716B] block">
                Asian Comfort Kitchen
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = currentPage === link.route;
              return (
                <button
                  key={link.route}
                  onClick={() => handleNavClick(link.route)}
                  className={`relative py-1 text-sm font-medium whitespace-nowrap transition-colors focus-visible:outline-hidden ${
                    isActive
                      ? 'text-[#D94332] font-semibold'
                      : 'text-[#292522]/80 hover:text-[#D94332]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D94332] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Cart Trigger & Primary Order Action */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full text-[#292522] bg-[#F4EBDD] hover:bg-[#EAE0D4] transition-colors focus-visible:outline-hidden"
              aria-label={`View shopping cart with ${cartCount} items`}
            >
              <ShoppingBag className="w-5 h-5 text-[#292522]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#D94332] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Primary Order Now Button */}
            <button
              onClick={() => handleNavClick('menu')}
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#D94332] hover:bg-[#c33727] active:scale-98 transition-all shadow-xs whitespace-nowrap shrink-0 focus-visible:outline-hidden"
            >
              <span>Order Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#292522] hover:bg-[#F4EBDD] transition-colors focus-visible:outline-hidden"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[#EAE0D4] bg-[#FFF9F1] px-4 pt-3 pb-6 space-y-1 shadow-lg">
          {navLinks.map((link) => {
            const isActive = currentPage === link.route;
            return (
              <button
                key={link.route}
                onClick={() => handleNavClick(link.route)}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-[#F4EBDD] text-[#D94332] font-semibold'
                    : 'text-[#292522] hover:bg-[#F4EBDD]/60'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <div className="pt-3 px-2">
            <button
              onClick={() => handleNavClick('menu')}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white bg-[#D94332] hover:bg-[#c33727] shadow-xs"
            >
              <span>Explore Menu & Order</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
