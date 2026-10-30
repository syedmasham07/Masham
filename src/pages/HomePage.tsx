import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  ArrowRight,
  Flame,
  Sparkles,
  ShoppingBag,
  Instagram,
  CheckCircle,
  Eye,
  Heart,
  Soup,
  ChefHat,
  Leaf
} from 'lucide-react';
import { INITIAL_TESTIMONIALS } from '../data/initialData';

export const HomePage: React.FC = () => {
  const { navigate, menuItems, addToCart, setSelectedProductModal, galleryItems, setActiveLightbox } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Signature dishes for Section 7
  const signatureDishes = menuItems.filter((item) => item.isSignature);

  // Filtered items for Section 6
  const filteredMenuItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ['All', 'Hotpot', 'Ramen', 'Dumplings & Momos', 'Corn Dogs', 'Special Combos'];

  return (
    <div className="space-y-24 md:space-y-32">
      
      {/* 4. HOMEPAGE HERO SECTION */}
      <section className="pt-6 md:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column (Editorial) */}
            <div className="lg:col-span-6 space-y-6 md:space-y-8">
              
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest font-bold text-[#D94332] bg-[#F4EBDD] px-3 py-1 rounded-full border border-[#EAE0D4]">
                  THE COMFORT KITCHEN
                </span>
                <span className="text-xs text-[#77716B] font-medium">
                  · Authentic Asian Recipes
                </span>
              </div>

              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#292522] tracking-tight leading-[1.12] text-balance">
                Comfort Food. <br />
                <span className="italic font-serif text-[#D94332]">Unforgettable</span> Flavours.
              </h1>

              <p className="text-base sm:text-lg text-[#77716B] leading-relaxed max-w-xl">
                From steaming hotpots to delicious dumplings, discover your next favourite comfort meal. Freshly prepared, full of flavour and made with love.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => navigate('menu')}
                  className="px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#D94332] hover:bg-[#c33727] active:scale-98 transition-all shadow-md flex items-center gap-2"
                >
                  <span>Explore Our Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => navigate('menu')}
                  className="px-7 py-3.5 rounded-full text-sm font-semibold text-[#292522] bg-[#F4EBDD] hover:bg-[#EAE0D4] border border-[#EAE0D4] transition-all"
                >
                  Order Now
                </button>
              </div>

              {/* Trust Badge */}
              <div className="pt-4 flex items-center gap-4 border-t border-[#EAE0D4]/80 text-xs text-[#77716B]">
                <div className="flex items-center gap-1.5 font-medium text-[#292522]">
                  <CheckCircle className="w-4 h-4 text-[#D94332]" />
                  <span>Fresh Batches Daily.</span>
                </div>
                <span>·</span>
                <span>Zero Preservatives</span>
                <span>·</span>
                <span>Insulated Hot Dispatch</span>
              </div>

            </div>

            {/* Right Column (Hero Imagery & Floating Cards) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#EAE0D4] shadow-xl bg-[#F4EBDD] aspect-16/11 lg:aspect-4/3">
                <img
                  src="/src/assets/images/hero_steaming_hotpot_spread_1793377739130.jpg"
                  alt="The Hotpot Bowl authentic steaming feast with noodles, dumplings and rich broth"
                  className="w-full h-full object-cover transform hover:scale-103 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

                {/* Floating Card 1: Broth Simmered */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-lg border border-[#EAE0D4] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FFF9F1] text-[#D94332] flex items-center justify-center border border-[#EAE0D4]">
                    <Soup className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-[#292522]">8-Hour Simmered Broth</span>
                    <span className="block text-[11px] text-[#77716B]">Rich umami, simmered slowly</span>
                  </div>
                </div>

                {/* Floating Card 2: Handcrafted Momos */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-lg border border-[#EAE0D4] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FFF9F1] text-[#F29A38] flex items-center justify-center border border-[#EAE0D4]">
                    <Flame className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-[#292522]">Handcrafted Momos</span>
                    <span className="block text-[11px] text-[#77716B]">Folded & steamed fresh</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 10. WHY CHOOSE US */}
      <section className="bg-[#F4EBDD]/50 py-16 border-y border-[#EAE0D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#D94332]">
              OUR COMMITMENT
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#292522]">
              Why You'll Love Every Bowl
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 01 */}
            <div className="bg-white p-7 rounded-2xl border border-[#EAE0D4] shadow-xs space-y-3 hover:translate-y-[-2px] transition-all">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#D94332]">01</span>
                <ChefHat className="w-5 h-5 text-[#D94332]" />
              </div>
              <h3 className="font-display font-semibold text-lg text-[#292522]">Freshly Prepared</h3>
              <p className="text-sm text-[#77716B] leading-relaxed">
                Food prepared with care. Every batch of dough, broth, and momo filling is handcrafted daily in small quantities.
              </p>
            </div>

            {/* 02 */}
            <div className="bg-white p-7 rounded-2xl border border-[#EAE0D4] shadow-xs space-y-3 hover:translate-y-[-2px] transition-all">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#D94332]">02</span>
                <Flame className="w-5 h-5 text-[#F29A38]" />
              </div>
              <h3 className="font-display font-semibold text-lg text-[#292522]">Delicious Flavours</h3>
              <p className="text-sm text-[#77716B] leading-relaxed">
                Enjoy flavourful comfort food. Authentic Sichuan peppercorn aromatics, creamy Alfredo infusions, and savory Japanese tare.
              </p>
            </div>

            {/* 03 */}
            <div className="bg-white p-7 rounded-2xl border border-[#EAE0D4] shadow-xs space-y-3 hover:translate-y-[-2px] transition-all">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#D94332]">03</span>
                <Leaf className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="font-display font-semibold text-lg text-[#292522]">Quality Ingredients</h3>
              <p className="text-sm text-[#77716B] leading-relaxed">
                A focus on quality and freshness. Premium cuts, garden crisp greens, real mozzarella cheese, and artisanal noodles.
              </p>
            </div>

            {/* 04 */}
            <div className="bg-white p-7 rounded-2xl border border-[#EAE0D4] shadow-xs space-y-3 hover:translate-y-[-2px] transition-all">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#D94332]">04</span>
                <Heart className="w-5 h-5 text-[#D94332]" />
              </div>
              <h3 className="font-display font-semibold text-lg text-[#292522]">Made With Love</h3>
              <p className="text-sm text-[#77716B] leading-relaxed">
                Food that brings happiness. Wholesome comforting meals that warm the soul, shared with family and friends.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 7. SIGNATURE SPECIALS (Alternate image-left and image-right) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-[#D94332]">
            CHEF'S SIGNATURES
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#292522]">
            Iconic Dishes You Must Try
          </h2>
          <p className="text-sm text-[#77716B]">
            From our viral creamy dumplings to rich bubbling hotpot bowls
          </p>
        </div>

        <div className="space-y-16 lg:space-y-20">
          {signatureDishes.slice(0, 4).map((dish, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={dish.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative rounded-3xl overflow-hidden border border-[#EAE0D4] bg-[#F4EBDD] aspect-4/3 shadow-md group">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    {dish.badge && (
                      <div className="absolute top-4 left-4 bg-[#D94332] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-xs">
                        {dish.badge}
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-6 space-y-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="text-xs uppercase tracking-wider text-[#D94332] font-bold">
                    {dish.category}
                  </div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#292522]">
                    {dish.name}
                  </h3>
                  <p className="text-base text-[#77716B] leading-relaxed">
                    {dish.description}
                  </p>

                  <div className="flex items-center gap-4">
                    <span className="font-display font-bold text-2xl text-[#292522] tabular-nums">
                      Rs. {dish.price.toLocaleString()}
                    </span>
                    {dish.originalPrice && (
                      <span className="text-sm line-through text-[#77716B] tabular-nums">
                        Rs. {dish.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={() => addToCart(dish, 1)}
                      className="px-6 py-3 rounded-full text-xs font-semibold text-white bg-[#D94332] hover:bg-[#c33727] active:scale-98 transition-all shadow-xs flex items-center gap-2"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Order Now</span>
                    </button>
                    <button
                      onClick={() => setSelectedProductModal(dish)}
                      className="px-5 py-3 rounded-full text-xs font-semibold text-[#292522] bg-[#F4EBDD] hover:bg-[#EAE0D4] border border-[#EAE0D4] transition-all flex items-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Quick View</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. FEATURED MENU SECTION */}
      <section className="bg-[#FFF9F1] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#D94332]">
              CURATED MENU
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#292522]">
              Explore Our Delicious Menu
            </h2>
            <p className="text-sm text-[#77716B]">
              Something delicious for every craving.
            </p>
          </div>

          {/* Search & Category Filter Controls */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-[#F4EBDD] rounded-xl border border-[#EAE0D4] overflow-x-auto max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                    activeCategory === cat
                      ? 'bg-white text-[#D94332] shadow-xs'
                      : 'text-[#77716B] hover:text-[#292522]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="w-full md:w-64">
              <input
                type="text"
                placeholder="Search hotpot, momos, ramen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#EAE0D4] bg-white text-[#292522] focus:outline-hidden focus:border-[#D94332]"
              />
            </div>

          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMenuItems.slice(0, 6).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-[#EAE0D4] overflow-hidden shadow-2xs hover:shadow-md hover:translate-y-[-2px] transition-all flex flex-col justify-between"
              >
                <div>
                  <div
                    onClick={() => setSelectedProductModal(item)}
                    className="relative aspect-4/3 bg-[#F4EBDD] overflow-hidden cursor-pointer group"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    {item.badge && (
                      <span className="absolute top-3 left-3 bg-[#D94332] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-2xs">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#77716B]">
                      <span className="uppercase tracking-wider font-semibold text-[#D94332]">
                        {item.category}
                      </span>
                      {item.spiceLevel && (
                        <div className="flex items-center gap-0.5" title={`Spice level: ${item.spiceLevel}/3`}>
                          {Array.from({ length: item.spiceLevel }).map((_, i) => (
                            <Flame key={i} className="w-3 h-3 text-[#D94332] fill-[#D94332]" />
                          ))}
                        </div>
                      )}
                    </div>

                    <h4
                      onClick={() => setSelectedProductModal(item)}
                      className="font-display font-semibold text-lg text-[#292522] hover:text-[#D94332] transition-colors cursor-pointer"
                    >
                      {item.name}
                    </h4>

                    <p className="text-xs text-[#77716B] line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-[#EAE0D4]/60 mt-2 flex items-center justify-between">
                  <div>
                    <span className="font-display font-bold text-lg text-[#292522] tabular-nums">
                      Rs. {item.price.toLocaleString()}
                    </span>
                    {item.originalPrice && (
                      <span className="text-xs line-through text-[#77716B] ml-2 tabular-nums">
                        Rs. {item.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => addToCart(item, 1)}
                    className="p-2.5 rounded-xl bg-[#D94332] text-white hover:bg-[#c33727] active:scale-95 transition-all shadow-xs"
                    title="Add to Bowl"
                    aria-label={`Add ${item.name} to bowl`}
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => navigate('menu')}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-xs font-semibold text-[#292522] bg-[#F4EBDD] hover:bg-[#EAE0D4] border border-[#EAE0D4] transition-all"
            >
              <span>View Full Menu & Combos ({menuItems.length} items)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* 11. INSTAGRAM FOOD JOURNEY PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest font-bold text-[#D94332]">
              INSTAGRAM SHOWCASE
            </span>
            <h2 className="font-display font-bold text-3xl text-[#292522]">
              Follow Our Food Journey
            </h2>
            <p className="text-xs text-[#77716B]">
              Real kitchen moments, behind the scenes, and daily dispatch stories on <strong className="text-[#292522]">@the.hotpotbowl</strong>
            </p>
          </div>

          <a
            href="https://www.instagram.com/the.hotpotbowl/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-white border border-[#EAE0D4] text-[#292522] hover:border-[#D94332] hover:text-[#D94332] transition-colors shadow-2xs shrink-0 self-start sm:self-auto"
          >
            <Instagram className="w-4 h-4 text-[#D94332]" />
            <span>Follow @the.hotpotbowl</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.slice(0, 4).map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightbox(item)}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-[#F4EBDD] border border-[#EAE0D4] cursor-pointer shadow-xs"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] uppercase font-semibold text-[#F29A38]">{item.category}</span>
                <p className="text-xs font-medium truncate">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 14. CUSTOMER TESTIMONIALS */}
      <section className="bg-[#F4EBDD]/40 py-16 border-t border-[#EAE0D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#D94332]">
              COMMUNITY LOVE
            </span>
            <h2 className="font-display font-bold text-3xl text-[#292522]">
              Loved by Comfort Foodies
            </h2>
            <p className="text-xs text-[#77716B]">
              Real feedback from verified orders and community diners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INITIAL_TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white p-6 rounded-2xl border border-[#EAE0D4] shadow-xs space-y-4 flex flex-col justify-between"
              >
                <p className="text-sm text-[#292522] italic leading-relaxed">
                  "{t.comment}"
                </p>

                <div className="pt-3 border-t border-[#EAE0D4]/60 flex items-center justify-between text-xs">
                  <div>
                    <h5 className="font-semibold text-[#292522]">{t.name}</h5>
                    <span className="text-[11px] text-[#77716B]">{t.location}</span>
                  </div>
                  <span className="text-[11px] font-medium text-[#D94332] bg-[#FFF9F1] px-2 py-0.5 rounded border border-[#EAE0D4]">
                    {t.item}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
