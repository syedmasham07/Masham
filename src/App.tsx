/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { TopBanner } from './components/TopBanner';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { LightboxModal } from './components/LightboxModal';

// Pages
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { OffersPage } from './pages/OffersPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';

const AppContent: React.FC = () => {
  const { currentPage } = useApp();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'menu':
        return <MenuPage />;
      case 'about':
        return <AboutPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'offers':
        return <OffersPage />;
      case 'contact':
        return <ContactPage />;
      case 'admin':
        return <AdminPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F1] text-[#292522]">
      {/* Top Banner Announcement */}
      <TopBanner />

      {/* Sticky Header with Top Bar Contract */}
      <Navbar />

      {/* Main Page Area */}
      <main className="flex-1 w-full">
        {renderCurrentPage()}
      </main>

      {/* Premium Light-Themed Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <CartDrawer />
      <ProductQuickViewModal />
      <LightboxModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
