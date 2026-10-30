export interface MenuItem {
  id: string;
  name: string;
  category: 'Hotpot' | 'Ramen' | 'Dumplings & Momos' | 'Corn Dogs' | 'Special Combos';
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  spiceLevel?: 1 | 2 | 3;
  isAvailable: boolean;
  isSignature?: boolean;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  specialInstructions?: string;
}

export interface SpecialOffer {
  id: string;
  title: string;
  subtitle: string;
  status: 'Active' | 'Expired' | 'Coming Soon';
  badgeText: string;
  description: string;
  terms?: string;
  instagramPostUrl: string;
  validUntil?: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'All' | 'Dishes' | 'Kitchen & Prep' | 'Orders & Dispatch';
  caption: string;
  image: string;
  instagramUrl: string;
  date: string;
}

export interface LocationInfo {
  name: string;
  label: string;
  address: string;
  notes: string;
}

export interface RestaurantSettings {
  brandName: string;
  tagline: string;
  whatsappNumber: string;
  displayPhone: string;
  instagramHandle: string;
  instagramUrl: string;
  topBannerActive: boolean;
  topBannerText: string;
  locations: LocationInfo[];
  businessHours: { days: string; hours: string }[];
}

export type PageRoute = 'home' | 'menu' | 'about' | 'gallery' | 'offers' | 'contact' | 'admin';
