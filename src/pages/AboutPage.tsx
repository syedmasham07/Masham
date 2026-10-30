import React from 'react';
import { useApp } from '../context/AppContext';
import { Heart, Sparkles, ChefHat, CheckCircle2, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigate } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-20">
      
      {/* 9. ABOUT US BRAND STORY */}
      <section className="space-y-6 text-center max-w-3xl mx-auto">
        <span className="text-xs uppercase tracking-widest font-bold text-[#D94332] bg-[#F4EBDD] px-3.5 py-1 rounded-full border border-[#EAE0D4]">
          OUR CRAFT & PASSION
        </span>
        <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-[#292522] tracking-tight leading-tight">
          A Little Bowl of Happiness
        </h1>
        <p className="text-base sm:text-lg text-[#77716B] leading-relaxed">
          At The Hotpot Bowl, comfort food is more than just dinner—it is warmth, connection, and the deep joy of sharing unforgettable flavours.
        </p>
      </section>

      {/* Editorial Grid: Kitchen Story + Real Photos */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        <div className="lg:col-span-6 space-y-6">
          <h2 className="font-display font-bold text-3xl text-[#292522]">
            Simmered With Care, <br />
            Folded With Love
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-[#77716B] leading-relaxed">
            <p>
              We believe great Asian comfort food starts with patience. Our signature hotpot broths are slowly coaxed over gentle heat for hours, allowing fragrant spices, roasted chili oils, and rich aromatics to marry into a comforting umami nectar.
            </p>
            <p>
              Every morning in our kitchen, fresh batches of dough are kneaded, rolled, and hand-pleated into our beloved chicken momos and dumplings. Whether tossed in velvety garlic Alfredo reduction or served steaming hot from traditional bamboo baskets, quality and authentic flavor remain at the heart of every single order.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#EAE0D4]">
            <div className="space-y-1">
              <span className="font-display font-bold text-xl text-[#292522] block">Handmade</span>
              <span className="text-xs text-[#77716B]">Pleated momos & dumplings crafted fresh daily</span>
            </div>
            <div className="space-y-1">
              <span className="font-display font-bold text-xl text-[#D94332] block">Slow-Simmered</span>
              <span className="text-xs text-[#77716B]">Authentic broths with rich Sichuan aromatics</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative rounded-3xl overflow-hidden border border-[#EAE0D4] shadow-lg bg-[#F4EBDD] aspect-4/3">
            <img
              src="/src/assets/images/kitchen_prep_behind_scenes_1793377769312.jpg"
              alt="The Hotpot Bowl kitchen team hand-folding fresh momos and dumplings"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-xs p-3 rounded-xl border border-[#EAE0D4] text-xs text-[#292522] flex items-center justify-between">
              <span className="font-medium">Kitchen Prep & Momos Folding</span>
              <span className="text-[#D94332] font-semibold text-[11px]">Morning Batch</span>
            </div>
          </div>
        </div>

      </section>

      {/* The 4 Principles of Comfort */}
      <section className="bg-white p-8 sm:p-12 rounded-3xl border border-[#EAE0D4] shadow-xs space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-[#D94332]">
            OUR PHILOSOPHY
          </span>
          <h3 className="font-display font-bold text-3xl text-[#292522]">
            What Defines The Hotpot Bowl
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#FFF9F1] border border-[#EAE0D4] flex items-center justify-center text-[#D94332] shrink-0">
              <ChefHat className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-display font-semibold text-lg text-[#292522]">Delicious Asian Comfort</h4>
              <p className="text-xs sm:text-sm text-[#77716B] leading-relaxed">
                Classic hotpot rituals, cozy ramen noodles, and savory street delicacies that bring warmth to every meal.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#FFF9F1] border border-[#EAE0D4] flex items-center justify-center text-[#D94332] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-display font-semibold text-lg text-[#292522]">Freshly Prepared Meals</h4>
              <p className="text-xs sm:text-sm text-[#77716B] leading-relaxed">
                Zero pre-packaged frozen dishes. We cook in daily limited batches so every bowl arrives full of vibrancy.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#FFF9F1] border border-[#EAE0D4] flex items-center justify-center text-[#D94332] shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-display font-semibold text-lg text-[#292522]">Quality Ingredients</h4>
              <p className="text-xs sm:text-sm text-[#77716B] leading-relaxed">
                Pure spices, natural broths, tender chicken, and crisp seasonal greens carefully selected every morning.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#FFF9F1] border border-[#EAE0D4] flex items-center justify-center text-[#D94332] shrink-0">
              <Heart className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-display font-semibold text-lg text-[#292522]">A Warm Food Experience</h4>
              <p className="text-xs sm:text-sm text-[#77716B] leading-relaxed">
                Whether dining at our partner pop-up or unwrapping sealed insulated parcels at home, we deliver heartwarming comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dispatch Section & Invitation */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="relative rounded-3xl overflow-hidden border border-[#EAE0D4] shadow-lg bg-[#F4EBDD] aspect-4/3">
            <img
              src="/src/assets/images/promo_dispatch_orders_instagram_1793377769846.jpg"
              alt="Packing and dispatching fresh takeout parcels"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <span className="text-xs uppercase tracking-widest font-bold text-[#D94332]">
            FROM OUR KITCHEN TO YOUR TABLE
          </span>
          <h2 className="font-display font-bold text-3xl text-[#292522]">
            Ready For Your Next Comfort Meal?
          </h2>
          <p className="text-sm sm:text-base text-[#77716B] leading-relaxed">
            Order directly via WhatsApp for fast preparation and delivery. Join hundreds of comfort food lovers who make The Hotpot Bowl their evening tradition.
          </p>

          <button
            onClick={() => navigate('menu')}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#D94332] hover:bg-[#c33727] active:scale-98 transition-all shadow-md"
          >
            <span>Explore The Menu</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
