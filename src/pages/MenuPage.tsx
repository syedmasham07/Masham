import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Search, Flame, ShoppingBag, Eye, Sparkles, Filter } from 'lucide-react';
import { MenuItem } from '../types';

export const MenuPage: React.FC = () => {
  const { menuItems, addToCart, setSelectedProductModal } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [spiceFilter, setSpiceFilter] = useState<number | null>(null);

  const categories = [
    'All',
    'Hotpot',
    'Ramen',
    'Dumplings & Momos',
    'Corn Dogs',
    'Special Combos'
  ];

  const filteredItems = menuItems.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpice = spiceFilter === null || item.spiceLevel === spiceFilter;
    return matchesCat && matchesSearch && matchesSpice;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Editorial Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-widest font-bold text-[#D94332]">
          FRESH DAILY BATCHES
        </span>
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-[#292522]">
          Our Comfort Menu
        </h1>
        <p className="text-sm sm:text-base text-[#77716B]">
          Authentic Asian broths, tender dumplings, artisan ramen, and Korean street favorites. Made fresh to order.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-[#EAE0D4] shadow-xs space-y-4">
        
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all focus-visible:outline-hidden ${
                selectedCategory === cat
                  ? 'bg-[#D94332] text-white shadow-xs'
                  : 'bg-[#F4EBDD] text-[#292522] hover:bg-[#EAE0D4]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search & Spice Filter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-[#EAE0D4]/60">
          
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#77716B]" />
            <input
              type="text"
              placeholder="Search dishes, ingredients, broths..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-[#EAE0D4] bg-[#FFF9F1] text-[#292522] focus:outline-hidden focus:border-[#D94332]"
            />
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto text-xs text-[#77716B]">
            <Filter className="w-3.5 h-3.5 text-[#292522]" />
            <span>Spice Level:</span>
            <button
              onClick={() => setSpiceFilter(null)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                spiceFilter === null ? 'bg-[#292522] text-white' : 'bg-[#F4EBDD] hover:bg-[#EAE0D4]'
              }`}
            >
              Any
            </button>
            <button
              onClick={() => setSpiceFilter(1)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors flex items-center gap-1 ${
                spiceFilter === 1 ? 'bg-[#D94332] text-white' : 'bg-[#F4EBDD] hover:bg-[#EAE0D4]'
              }`}
            >
              <Flame className="w-3 h-3 fill-current" /> Mild
            </button>
            <button
              onClick={() => setSpiceFilter(2)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors flex items-center gap-1 ${
                spiceFilter === 2 ? 'bg-[#D94332] text-white' : 'bg-[#F4EBDD] hover:bg-[#EAE0D4]'
              }`}
            >
              <Flame className="w-3 h-3 fill-current" /> Med
            </button>
            <button
              onClick={() => setSpiceFilter(3)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors flex items-center gap-1 ${
                spiceFilter === 3 ? 'bg-[#D94332] text-white' : 'bg-[#F4EBDD] hover:bg-[#EAE0D4]'
              }`}
            >
              <Flame className="w-3 h-3 fill-current" /> Hot
            </button>
          </div>

        </div>

      </div>

      {/* Menu Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-[#EAE0D4] space-y-3">
          <p className="text-base text-[#292522] font-semibold">No menu items match your search or filter.</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
              setSpiceFilter(null);
            }}
            className="text-xs text-[#D94332] font-semibold underline underline-offset-4"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-[#EAE0D4] overflow-hidden shadow-2xs hover:shadow-md hover:translate-y-[-2px] transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image Box */}
                <div
                  onClick={() => setSelectedProductModal(item)}
                  className="relative aspect-4/3 bg-[#F4EBDD] overflow-hidden cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {item.badge && (
                    <span className="absolute top-3 left-3 bg-[#D94332] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-2xs flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>{item.badge}</span>
                    </span>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProductModal(item);
                    }}
                    className="absolute bottom-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white text-[#292522] shadow-xs opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Quick Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Details */}
                <div className="p-5 space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-[#77716B]">
                    <span className="uppercase tracking-wider font-semibold text-[#D94332]">
                      {item.category}
                    </span>
                    {item.spiceLevel && (
                      <div className="flex items-center gap-0.5" title={`Spice level: ${item.spiceLevel}/3`}>
                        {Array.from({ length: item.spiceLevel }).map((_, i) => (
                          <Flame key={i} className="w-3.5 h-3.5 text-[#D94332] fill-[#D94332]" />
                        ))}
                      </div>
                    )}
                  </div>

                  <h3
                    onClick={() => setSelectedProductModal(item)}
                    className="font-display font-semibold text-xl text-[#292522] hover:text-[#D94332] transition-colors cursor-pointer"
                  >
                    {item.name}
                  </h3>

                  <p className="text-xs text-[#77716B] leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Price & Cart Action */}
              <div className="p-5 pt-0 border-t border-[#EAE0D4]/60 mt-2 flex items-center justify-between">
                <div>
                  <span className="font-display font-bold text-xl text-[#292522] tabular-nums">
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
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#D94332] hover:bg-[#c33727] active:scale-95 transition-all shadow-xs"
                  aria-label={`Add ${item.name} to bowl`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bowl</span>
                </button>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* Special Combos Banner */}
      <div className="bg-[#F4EBDD] p-6 sm:p-8 rounded-3xl border border-[#EAE0D4] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-xs uppercase font-bold text-[#D94332] tracking-wider">
            BULK & GATHERING ORDERS
          </span>
          <h3 className="font-display font-bold text-2xl text-[#292522]">
            Hosting a Dinner or Late-Night Gathering?
          </h3>
          <p className="text-sm text-[#77716B] max-w-xl">
            Pre-order our Hotpot Feast Cauldrons and Dumpling Party Trays with custom spice broths. Delivered in sealed thermal packages.
          </p>
        </div>

        <a
          href="https://wa.me/+923001234567?text=Hello%20The%20Hotpot%20Bowl,%20I%20would%20like%20to%20inquire%20about%20a%20family%20gathering%20order"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full text-xs font-semibold bg-[#25D366] text-white hover:bg-[#20ba59] transition-all shadow-xs whitespace-nowrap shrink-0"
        >
          Inquire Catering via WhatsApp
        </a>
      </div>

    </div>
  );
};
