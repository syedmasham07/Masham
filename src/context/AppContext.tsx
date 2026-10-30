import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem, CartItem, SpecialOffer, GalleryItem, RestaurantSettings, PageRoute } from '../types';
import {
  INITIAL_MENU_ITEMS,
  INITIAL_OFFERS,
  INITIAL_GALLERY,
  INITIAL_SETTINGS
} from '../data/initialData';

interface AppContextType {
  currentPage: PageRoute;
  navigate: (page: PageRoute) => void;
  menuItems: MenuItem[];
  offers: SpecialOffer[];
  galleryItems: GalleryItem[];
  settings: RestaurantSettings;
  cart: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addToCart: (item: MenuItem, quantity?: number, instructions?: string) => void;
  updateCartQuantity: (itemId: string, quantity: number) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  cartCount: number;
  cartSubtotal: number;
  selectedProductModal: MenuItem | null;
  setSelectedProductModal: (item: MenuItem | null) => void;
  activeLightbox: GalleryItem | null;
  setActiveLightbox: (item: GalleryItem | null) => void;
  updateMenuItem: (item: MenuItem) => void;
  addMenuItem: (item: MenuItem) => void;
  deleteMenuItem: (id: string) => void;
  updateOffer: (offer: SpecialOffer) => void;
  addOffer: (offer: SpecialOffer) => void;
  deleteOffer: (id: string) => void;
  updateSettings: (newSettings: Partial<RestaurantSettings>) => void;
  resetAllDataToDefaults: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  MENU: 'hotpot_menu_items_v1',
  OFFERS: 'hotpot_offers_v1',
  SETTINGS: 'hotpot_settings_v1',
  CART: 'hotpot_cart_v1'
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Page routing via hash or internal state
  const [currentPage, setCurrentPage] = useState<PageRoute>(() => {
    const hash = window.location.hash.replace('#', '') as PageRoute;
    const validPages: PageRoute[] = ['home', 'menu', 'about', 'gallery', 'offers', 'contact', 'admin'];
    return validPages.includes(hash) ? hash : 'home';
  });

  const [menuItems, setMenuItems] = useState<MenuItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.MENU);
      return saved ? JSON.parse(saved) : INITIAL_MENU_ITEMS;
    } catch {
      return INITIAL_MENU_ITEMS;
    }
  });

  const [offers, setOffers] = useState<SpecialOffer[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.OFFERS);
      return saved ? JSON.parse(saved) : INITIAL_OFFERS;
    } catch {
      return INITIAL_OFFERS;
    }
  });

  const [settings, setSettings] = useState<RestaurantSettings>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      return saved ? JSON.parse(saved) : INITIAL_SETTINGS;
    } catch {
      return INITIAL_SETTINGS;
    }
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CART);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProductModal, setSelectedProductModal] = useState<MenuItem | null>(null);
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.MENU, JSON.stringify(menuItems));
  }, [menuItems]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.OFFERS, JSON.stringify(offers));
  }, [offers]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
  }, [cart]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageRoute;
      const validPages: PageRoute[] = ['home', 'menu', 'about', 'gallery', 'offers', 'contact', 'admin'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page: PageRoute) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cart operations
  const addToCart = (item: MenuItem, quantity = 1, instructions = '') => {
    setCart((prev) => {
      const existing = prev.find((ci) => ci.menuItem.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.menuItem.id === item.id
            ? { ...ci, quantity: ci.quantity + quantity, specialInstructions: instructions || ci.specialInstructions }
            : ci
        );
      }
      return [...prev, { menuItem: item, quantity, specialInstructions: instructions }];
    });
    setIsCartOpen(true);
  };

  const updateCartQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart((prev) =>
      prev.map((ci) => (ci.menuItem.id === itemId ? { ...ci, quantity } : ci))
    );
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((ci) => ci.menuItem.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cart.reduce((sum, item) => sum + item.menuItem.price * item.quantity, 0);

  // Admin mutation helpers
  const updateMenuItem = (item: MenuItem) => {
    setMenuItems((prev) => prev.map((m) => (m.id === item.id ? item : m)));
  };

  const addMenuItem = (item: MenuItem) => {
    setMenuItems((prev) => [item, ...prev]);
  };

  const deleteMenuItem = (id: string) => {
    setMenuItems((prev) => prev.filter((m) => m.id !== id));
  };

  const updateOffer = (offer: SpecialOffer) => {
    setOffers((prev) => prev.map((o) => (o.id === offer.id ? offer : o)));
  };

  const addOffer = (offer: SpecialOffer) => {
    setOffers((prev) => [offer, ...prev]);
  };

  const deleteOffer = (id: string) => {
    setOffers((prev) => prev.filter((o) => o.id !== id));
  };

  const updateSettings = (newSettings: Partial<RestaurantSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  const resetAllDataToDefaults = () => {
    setMenuItems(INITIAL_MENU_ITEMS);
    setOffers(INITIAL_OFFERS);
    setSettings(INITIAL_SETTINGS);
    setCart([]);
    localStorage.removeItem(STORAGE_KEYS.MENU);
    localStorage.removeItem(STORAGE_KEYS.OFFERS);
    localStorage.removeItem(STORAGE_KEYS.SETTINGS);
    localStorage.removeItem(STORAGE_KEYS.CART);
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        navigate,
        menuItems,
        offers,
        galleryItems: INITIAL_GALLERY,
        settings,
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        updateCartQuantity,
        removeFromCart,
        clearCart,
        cartCount,
        cartSubtotal,
        selectedProductModal,
        setSelectedProductModal,
        activeLightbox,
        setActiveLightbox,
        updateMenuItem,
        addMenuItem,
        deleteMenuItem,
        updateOffer,
        addOffer,
        deleteOffer,
        updateSettings,
        resetAllDataToDefaults
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
