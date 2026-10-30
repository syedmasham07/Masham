import { MenuItem, SpecialOffer, GalleryItem, RestaurantSettings } from '../types';

export const INITIAL_SETTINGS: RestaurantSettings = {
  brandName: 'The Hotpot Bowl',
  tagline: 'Asian Comfort Food · Handcrafted Dumplings & Hotpot',
  whatsappNumber: '+923001234567', // Editable business WhatsApp number placeholder
  displayPhone: '+92 300 1234567',
  instagramHandle: '@the.hotpotbowl',
  instagramUrl: 'https://www.instagram.com/the.hotpotbowl/',
  topBannerActive: true,
  topBannerText: '🔥 Fresh Batches Simmering Daily! Place orders early via WhatsApp for evening delivery.',
  locations: [
    {
      name: 'The Palestine Pot',
      label: 'Partner Kitchen & Dine-in Hub',
      address: 'Main Commercial District (Referenced on Instagram)',
      notes: 'Hotpot bowls served fresh on order & dine-in collaboration.'
    },
    {
      name: 'The Hotpot Bowl Central Cloud Kitchen',
      label: 'Main Delivery & Pickup Hub',
      address: 'Central Food Boulevard (Editable in Admin)',
      notes: 'Takeaway orders, momo batch pickups, and citywide delivery dispatch.'
    }
  ],
  businessHours: [
    { days: 'Monday – Thursday', hours: '1:00 PM – 11:30 PM' },
    { days: 'Friday – Saturday', hours: '1:00 PM – 12:30 AM' },
    { days: 'Sunday', hours: '2:00 PM – 11:00 PM' }
  ]
};

export const INITIAL_MENU_ITEMS: MenuItem[] = [
  {
    id: 'hp-01',
    name: 'Authentic Hotpot Base',
    category: 'Hotpot',
    description: 'Slow-simmered 8-hour aromatic bone and chili broth infused with Sichuan peppercorns, star anise, enoki mushrooms, bok choy, and chewy noodles.',
    price: 1850,
    originalPrice: 2100,
    image: '/src/assets/images/dish_signature_hotpot_pot_1793377740550.jpg',
    badge: 'Signature',
    spiceLevel: 3,
    isAvailable: true,
    isSignature: true
  },
  {
    id: 'hp-02',
    name: 'Signature Personal Hotpot Bowl',
    category: 'Hotpot',
    description: 'A comforting individual bowl filled with hand-shaved tender beef slices, tofu curd, glass noodles, fresh greens, and rich umami broth.',
    price: 1650,
    image: '/src/assets/images/hero_steaming_hotpot_spread_1793377739130.jpg',
    badge: 'Popular',
    spiceLevel: 2,
    isAvailable: true,
    isSignature: true
  },
  {
    id: 'dm-01',
    name: 'Creamy Alfredo Dumplings',
    category: 'Dumplings & Momos',
    description: 'The viral house special! Pan-crisped Asian dumplings smothered in a velvety Alfredo cream reduction, topped with crushed chili flakes and fresh coriander.',
    price: 1250,
    image: '/src/assets/images/dish_creamy_alfredo_dumplings_1793377740386.jpg',
    badge: 'Viral Special',
    spiceLevel: 1,
    isAvailable: true,
    isSignature: true
  },
  {
    id: 'dm-02',
    name: 'Authentic Steamed Chicken Momos',
    category: 'Dumplings & Momos',
    description: 'Delicately pleated dumplings stuffed with juicy seasoned minced chicken, ginger, and scallions, served in a bamboo steamer with fiery red dipping chutney.',
    price: 950,
    image: '/src/assets/images/dish_steamed_chicken_momos_1793377740984.jpg',
    badge: 'House Favorite',
    spiceLevel: 2,
    isAvailable: true,
    isSignature: true
  },
  {
    id: 'dm-03',
    name: 'Crispy Pan-Fried Chicken Momos',
    category: 'Dumplings & Momos',
    description: 'Golden, crispy-bottomed chicken momos offering the perfect crunch and tender juicy center, paired with house chili oil.',
    price: 1050,
    image: '/src/assets/images/dish_steamed_chicken_momos_1793377740984.jpg',
    spiceLevel: 2,
    isAvailable: true
  },
  {
    id: 'rm-01',
    name: 'Special Ramen Bowl',
    category: 'Ramen',
    description: 'Springy artisanal ramen noodles steeped in rich, golden savoury broth topped with charred chashu slices, marinated jammy egg, scallions, and toasted nori.',
    price: 1550,
    image: '/src/assets/images/dish_special_ramen_bowl_1793377741185.jpg',
    badge: 'Chef Choice',
    spiceLevel: 1,
    isAvailable: true,
    isSignature: true
  },
  {
    id: 'rm-02',
    name: 'Spicy Chili Garlic Ramen',
    category: 'Ramen',
    description: 'Fiery roasted garlic chili broth, tender braised chicken bites, sweet corn, bamboo shoots, and perfectly bouncy noodles.',
    price: 1450,
    image: '/src/assets/images/dish_special_ramen_bowl_1793377741185.jpg',
    spiceLevel: 3,
    isAvailable: true
  },
  {
    id: 'cd-01',
    name: 'Crispy Korean Mozzarella Corn Dog',
    category: 'Corn Dogs',
    description: 'Coated in golden panko breadcrumbs and fried to shatteringly crisp perfection. Filled with gooey stretchy mozzarella, drizzled with spicy sriracha mayo.',
    price: 650,
    image: '/src/assets/images/dish_crispy_korean_corn_dog_1793377767197.jpg',
    badge: 'Street Food Star',
    spiceLevel: 1,
    isAvailable: true
  },
  {
    id: 'cd-02',
    name: 'Half & Half Sausage & Cheese Corn Dog',
    category: 'Corn Dogs',
    description: 'The best of both worlds: half savory smoked sausage, half melted premium mozzarella, sprinkled with sweet sugar dusting and honey mustard.',
    price: 700,
    image: '/src/assets/images/dish_crispy_korean_corn_dog_1793377767197.jpg',
    spiceLevel: 1,
    isAvailable: true
  },
  {
    id: 'cb-01',
    name: 'Comfort Duo Combo: Hotpot Bowl + Momos',
    category: 'Special Combos',
    description: 'One full Signature Personal Hotpot Bowl + 6 pieces of Steamed Chicken Momos with spicy dip and chilled refreshing beverage.',
    price: 2450,
    originalPrice: 2800,
    image: '/src/assets/images/hero_steaming_hotpot_spread_1793377739130.jpg',
    badge: 'Best Value',
    spiceLevel: 2,
    isAvailable: true
  },
  {
    id: 'cb-02',
    name: 'The Hotpot Feast Platter (For 2–3)',
    category: 'Special Combos',
    description: 'Large sharing Hotpot cauldron, 1 plate Creamy Alfredo Dumplings, 1 plate Steamed Momos, and 2 Crispy Corn Dogs.',
    price: 4200,
    originalPrice: 4750,
    image: '/src/assets/images/hero_steaming_hotpot_spread_1793377739130.jpg',
    badge: 'Feast',
    spiceLevel: 2,
    isAvailable: true
  }
];

export const INITIAL_OFFERS: SpecialOffer[] = [
  {
    id: 'off-01',
    title: '24-Hour Instagram Giveaway',
    subtitle: 'Win a Free Signature Hotpot Feast + Dumpling Sampler',
    status: 'Active',
    badgeText: 'Instagram Exclusive',
    description: 'Check our latest Instagram post on @the.hotpotbowl! Tag 3 friends in the comments, share to your story, and win a complimentary luxury dinner for two.',
    terms: 'Winner announced daily on Instagram stories. Valid for dine-in & delivery.',
    instagramPostUrl: 'https://www.instagram.com/the.hotpotbowl/',
    validUntil: 'Live on Instagram Stories',
    image: '/src/assets/images/promo_dispatch_orders_instagram_1793377769846.jpg'
  },
  {
    id: 'off-02',
    title: 'Tomorrow Order Dispatch & Fresh Batch Pre-Order',
    subtitle: 'Lock in your evening comfort bowls before batches sell out',
    status: 'Active',
    badgeText: 'Pre-Order Now',
    description: 'We prepare all hotpot broths, dumpling doughs, and momo fillings in fresh morning batches. Place your delivery pre-order today for priority dispatch tomorrow evening.',
    terms: 'Dispatched in thermal insulated kraft packaging to ensure piping hot delivery.',
    instagramPostUrl: 'https://www.instagram.com/the.hotpotbowl/',
    validUntil: 'Every Evening Dispatch',
    image: '/src/assets/images/promo_dispatch_orders_instagram_1793377769846.jpg'
  },
  {
    id: 'off-03',
    title: 'Community Feature: The Palestine Pot',
    subtitle: 'Comfort Food in Solidarity & Community Dining',
    status: 'Active',
    badgeText: 'Community Partner',
    description: 'Visit our collaboration pop-up at The Palestine Pot! Enjoy specialized warm broth bowls while supporting local community culinary gatherings.',
    terms: 'Available during active venue operational hours.',
    instagramPostUrl: 'https://www.instagram.com/the.hotpotbowl/',
    validUntil: 'Ongoing Collaboration',
    image: '/src/assets/images/kitchen_prep_behind_scenes_1793377769312.jpg'
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: 'gal-01',
    title: 'Steaming Cauldron Hotpot',
    category: 'Dishes',
    caption: 'Bubbling broth packed with tender beef, hand-pulled noodles, enoki mushrooms, and fragrant chili oil.',
    image: '/src/assets/images/hero_steaming_hotpot_spread_1793377739130.jpg',
    instagramUrl: 'https://www.instagram.com/the.hotpotbowl/',
    date: 'Recent Post'
  },
  {
    id: 'gal-02',
    title: 'Alfredo Dumplings In The Making',
    category: 'Dishes',
    caption: 'Crisp golden dumplings resting in velvety garlic cream reduction with a hint of chili spice.',
    image: '/src/assets/images/dish_creamy_alfredo_dumplings_1793377740386.jpg',
    instagramUrl: 'https://www.instagram.com/the.hotpotbowl/',
    date: 'Recent Post'
  },
  {
    id: 'gal-03',
    title: 'Hand-Pleating Chicken Momos',
    category: 'Kitchen & Prep',
    caption: 'Every single momo is shaped and pleated by hand every morning for optimal tenderness.',
    image: '/src/assets/images/kitchen_prep_behind_scenes_1793377769312.jpg',
    instagramUrl: 'https://www.instagram.com/the.hotpotbowl/',
    date: 'Recent Post'
  },
  {
    id: 'gal-04',
    title: 'Artisan Ramen Broth Perfection',
    category: 'Dishes',
    caption: 'The art of balancing tare, golden broth, and melt-in-mouth chashu with jammy soft-boiled eggs.',
    image: '/src/assets/images/dish_special_ramen_bowl_1793377741185.jpg',
    instagramUrl: 'https://www.instagram.com/the.hotpotbowl/',
    date: 'Recent Post'
  },
  {
    id: 'gal-05',
    title: 'Dispatching Evening Pre-Orders',
    category: 'Orders & Dispatch',
    caption: 'Packed with love, sealed fresh, and sent out to bring comfort food to your homes tonight!',
    image: '/src/assets/images/promo_dispatch_orders_instagram_1793377769846.jpg',
    instagramUrl: 'https://www.instagram.com/the.hotpotbowl/',
    date: 'Recent Post'
  },
  {
    id: 'gal-06',
    title: 'The Ultimate Stretchy Mozzarella Pull',
    category: 'Dishes',
    caption: 'Crunchy golden Korean panko corn dogs with that unforgettable cheese pull!',
    image: '/src/assets/images/dish_crispy_korean_corn_dog_1793377767197.jpg',
    instagramUrl: 'https://www.instagram.com/the.hotpotbowl/',
    date: 'Recent Post'
  }
];

export const INITIAL_TESTIMONIALS = [
  {
    id: 't-1',
    name: 'Ayesha M.',
    location: 'Verified Instagram Customer',
    comment: 'The Creamy Alfredo Dumplings are completely out of this world! The hotpot broth arrived piping hot and so rich in authentic spice. Hands down the best comfort food in town.',
    item: 'Creamy Alfredo Dumplings & Hotpot'
  },
  {
    id: 't-2',
    name: 'Hamza K.',
    location: 'Order #318 — Delivered Fresh',
    comment: 'Finally authentic momos with the real spicy red dip! The bamboo steam texture was preserved perfectly. Super easy ordering through WhatsApp too.',
    item: 'Chicken Momos & Korean Corn Dog'
  },
  {
    id: 't-3',
    name: 'Zainab R.',
    location: 'Dine-in at The Palestine Pot',
    comment: 'Had the Hotpot Bowl during their community evening. Warm, comforting, and generously portioned. You can taste the hours put into the stock.',
    item: 'Signature Hotpot Bowl'
  }
];
