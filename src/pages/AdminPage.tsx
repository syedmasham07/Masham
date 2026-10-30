import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MenuItem, SpecialOffer } from '../types';
import {
  Lock,
  Unlock,
  Plus,
  Trash2,
  Edit2,
  Save,
  RotateCcw,
  CheckCircle,
  MessageCircle,
  Tag,
  Phone,
  Sparkles,
  ShoppingBag
} from 'lucide-react';

export const AdminPage: React.FC = () => {
  const {
    menuItems,
    updateMenuItem,
    addMenuItem,
    deleteMenuItem,
    offers,
    updateOffer,
    addOffer,
    deleteOffer,
    settings,
    updateSettings,
    resetAllDataToDefaults
  } = useApp();

  const [pin, setPin] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState<'menu' | 'offers' | 'settings'>('menu');
  const [toastMessage, setToastMessage] = useState('');

  // Editing dish state
  const [editingDish, setEditingDish] = useState<MenuItem | null>(null);
  const [isAddingNewDish, setIsAddingNewDish] = useState(false);

  // Editing offer state
  const [editingOffer, setEditingOffer] = useState<SpecialOffer | null>(null);
  const [isAddingNewOffer, setIsAddingNewOffer] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin.trim() === 'hotpot2026' || pin.trim() === 'admin' || pin.trim() === '1234') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Incorrect passcode. Use default: hotpot2026');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto px-4 py-20">
        <div className="bg-white p-8 rounded-3xl border border-[#EAE0D4] shadow-md space-y-6 text-center">
          <div className="w-14 h-14 rounded-2xl bg-[#FFF9F1] border border-[#EAE0D4] text-[#D94332] flex items-center justify-center mx-auto">
            <Lock className="w-6 h-6" />
          </div>

          <div className="space-y-1">
            <h1 className="font-display font-bold text-2xl text-[#292522]">
              Restaurant Owner Portal
            </h1>
            <p className="text-xs text-[#77716B]">
              Enter management passcode to edit menu, WhatsApp number, and live promotions.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Enter passcode (e.g. hotpot2026)"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="w-full px-4 py-2.5 text-center text-sm rounded-xl border border-[#EAE0D4] bg-[#FFF9F1] focus:outline-hidden focus:border-[#D94332]"
              autoFocus
            />

            {authError && (
              <p className="text-xs text-red-600 bg-red-50 p-2 rounded-lg border border-red-200">
                {authError}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl text-xs font-semibold text-white bg-[#D94332] hover:bg-[#c33727] transition-all shadow-xs"
            >
              Sign In to Dashboard
            </button>
          </form>

          <p className="text-[11px] text-[#77716B]">
            Demo Passcode: <span className="font-mono font-bold text-[#292522]">hotpot2026</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 bg-[#292522] text-white px-4 py-2.5 rounded-xl text-xs font-medium shadow-lg flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EAE0D4] pb-6">
        <div>
          <span className="text-xs font-bold text-[#D94332] uppercase tracking-wider">
            RESTAURANT MANAGER
          </span>
          <h1 className="font-display font-bold text-3xl text-[#292522]">
            The Hotpot Bowl Control Center
          </h1>
          <p className="text-xs text-[#77716B]">
            Manage live prices, menu items, WhatsApp ordering destination, and offers.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (confirm('Reset all menu, offers, and settings to original defaults?')) {
                resetAllDataToDefaults();
                showToast('Reset data to defaults.');
              }
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-[#77716B] hover:text-[#292522] bg-[#F4EBDD] hover:bg-[#EAE0D4] transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 transition-colors"
          >
            <Unlock className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-[#EAE0D4] pb-1">
        <button
          onClick={() => setActiveTab('menu')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
            activeTab === 'menu'
              ? 'bg-[#292522] text-white'
              : 'text-[#77716B] hover:text-[#292522]'
          }`}
        >
          Menu Products ({menuItems.length})
        </button>
        <button
          onClick={() => setActiveTab('offers')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
            activeTab === 'offers'
              ? 'bg-[#292522] text-white'
              : 'text-[#77716B] hover:text-[#292522]'
          }`}
        >
          Special Offers ({offers.length})
        </button>
        <button
          onClick={() => setActiveTab('settings')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
            activeTab === 'settings'
              ? 'bg-[#292522] text-white'
              : 'text-[#77716B] hover:text-[#292522]'
          }`}
        >
          WhatsApp & Business Info
        </button>
      </div>

      {/* TAB 1: MENU ITEMS */}
      {activeTab === 'menu' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-semibold text-lg text-[#292522]">
              Menu Dish List & Pricing
            </h3>
            <button
              onClick={() => {
                setEditingDish({
                  id: `item-${Date.now()}`,
                  name: '',
                  category: 'Hotpot',
                  description: '',
                  price: 1500,
                  image: '/src/assets/images/dish_signature_hotpot_pot_1793377740550.jpg',
                  isAvailable: true,
                  spiceLevel: 1
                });
                setIsAddingNewDish(true);
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#D94332] hover:bg-[#c33727] transition-all shadow-2xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add New Dish</span>
            </button>
          </div>

          {/* Edit / Create Form Modal */}
          {(editingDish || isAddingNewDish) && (
            <div className="bg-white p-6 rounded-2xl border border-[#D94332]/40 shadow-sm space-y-4">
              <h4 className="font-bold text-sm text-[#292522]">
                {isAddingNewDish ? 'Add New Menu Item' : `Edit: ${editingDish?.name}`}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                <div>
                  <label className="block font-medium mb-1">Product Name</label>
                  <input
                    type="text"
                    value={editingDish?.name || ''}
                    onChange={(e) => setEditingDish(editingDish ? { ...editingDish, name: e.target.value } : null)}
                    className="w-full px-3 py-2 border rounded-lg bg-[#FFF9F1]"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1">Category</label>
                  <select
                    value={editingDish?.category || 'Hotpot'}
                    onChange={(e) => setEditingDish(editingDish ? { ...editingDish, category: e.target.value as any } : null)}
                    className="w-full px-3 py-2 border rounded-lg bg-[#FFF9F1]"
                  >
                    <option value="Hotpot">Hotpot</option>
                    <option value="Ramen">Ramen</option>
                    <option value="Dumplings & Momos">Dumplings & Momos</option>
                    <option value="Corn Dogs">Corn Dogs</option>
                    <option value="Special Combos">Special Combos</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium mb-1">Price (Rs.)</label>
                  <input
                    type="number"
                    value={editingDish?.price || 0}
                    onChange={(e) => setEditingDish(editingDish ? { ...editingDish, price: Number(e.target.value) } : null)}
                    className="w-full px-3 py-2 border rounded-lg bg-[#FFF9F1]"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1">Badge / Tag (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Signature, Popular"
                    value={editingDish?.badge || ''}
                    onChange={(e) => setEditingDish(editingDish ? { ...editingDish, badge: e.target.value } : null)}
                    className="w-full px-3 py-2 border rounded-lg bg-[#FFF9F1]"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1">Spice Level (1-3)</label>
                  <select
                    value={editingDish?.spiceLevel || 1}
                    onChange={(e) => setEditingDish(editingDish ? { ...editingDish, spiceLevel: Number(e.target.value) as any } : null)}
                    className="w-full px-3 py-2 border rounded-lg bg-[#FFF9F1]"
                  >
                    <option value={1}>Mild (1)</option>
                    <option value={2}>Medium (2)</option>
                    <option value={3}>Hot (3)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium mb-1">Availability</label>
                  <button
                    type="button"
                    onClick={() => setEditingDish(editingDish ? { ...editingDish, isAvailable: !editingDish.isAvailable } : null)}
                    className={`w-full py-2 rounded-lg font-semibold transition-colors ${
                      editingDish?.isAvailable ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {editingDish?.isAvailable ? 'Available In Kitchen' : 'Sold Out / Unavailable'}
                  </button>
                </div>

                <div className="sm:col-span-2 lg:col-span-3">
                  <label className="block font-medium mb-1">Description</label>
                  <textarea
                    rows={2}
                    value={editingDish?.description || ''}
                    onChange={(e) => setEditingDish(editingDish ? { ...editingDish, description: e.target.value } : null)}
                    className="w-full px-3 py-2 border rounded-lg bg-[#FFF9F1] resize-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  onClick={() => {
                    setEditingDish(null);
                    setIsAddingNewDish(false);
                  }}
                  className="px-4 py-2 rounded-lg text-xs bg-[#F4EBDD] text-[#77716B] hover:text-[#292522]"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    if (editingDish) {
                      if (isAddingNewDish) {
                        addMenuItem(editingDish);
                        showToast(`Added dish "${editingDish.name}".`);
                      } else {
                        updateMenuItem(editingDish);
                        showToast(`Updated "${editingDish.name}".`);
                      }
                      setEditingDish(null);
                      setIsAddingNewDish(false);
                    }
                  }}
                  className="px-5 py-2 rounded-lg text-xs font-semibold bg-[#292522] text-white hover:bg-[#1a1715]"
                >
                  Save Dish
                </button>
              </div>
            </div>
          )}

          {/* Dish Table */}
          <div className="bg-white rounded-2xl border border-[#EAE0D4] overflow-hidden shadow-2xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#F4EBDD] border-b border-[#EAE0D4] text-[#77716B] uppercase">
                  <tr>
                    <th className="py-3 px-4">Item</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Price</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAE0D4]/60">
                  {menuItems.map((dish) => (
                    <tr key={dish.id} className="hover:bg-[#FFF9F1]/80">
                      <td className="py-3 px-4 flex items-center gap-3">
                        <img
                          src={dish.image}
                          alt={dish.name}
                          className="w-10 h-10 rounded-lg object-cover bg-[#F4EBDD]"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <strong className="block text-[#292522] font-semibold">{dish.name}</strong>
                          <span className="text-[11px] text-[#77716B] line-clamp-1">{dish.description}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 font-medium text-[#77716B]">{dish.category}</td>
                      <td className="py-3 px-4 font-bold text-[#292522] tabular-nums">
                        Rs. {dish.price.toLocaleString()}
                      </td>
                      <td className="py-3 px-4">
                        <button
                          onClick={() => {
                            updateMenuItem({ ...dish, isAvailable: !dish.isAvailable });
                            showToast(`Toggled ${dish.name} availability.`);
                          }}
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            dish.isAvailable ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {dish.isAvailable ? 'Active' : 'Sold Out'}
                        </button>
                      </td>
                      <td className="py-3 px-4 text-right space-x-2">
                        <button
                          onClick={() => {
                            setEditingDish(dish);
                            setIsAddingNewDish(false);
                          }}
                          className="p-1.5 rounded text-[#77716B] hover:text-[#292522] hover:bg-[#F4EBDD]"
                          title="Edit Dish"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`Delete ${dish.name}?`)) {
                              deleteMenuItem(dish.id);
                              showToast(`Deleted ${dish.name}`);
                            }
                          }}
                          className="p-1.5 rounded text-red-500 hover:text-red-700 hover:bg-red-50"
                          title="Delete Dish"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: OFFERS */}
      {activeTab === 'offers' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-semibold text-lg text-[#292522]">
              Instagram Promotional Offers & Drops
            </h3>
            <button
              onClick={() => {
                setEditingOffer({
                  id: `off-${Date.now()}`,
                  title: '',
                  subtitle: '',
                  status: 'Active',
                  badgeText: 'Promotion',
                  description: '',
                  instagramPostUrl: settings.instagramUrl,
                  image: '/src/assets/images/promo_dispatch_orders_instagram_1793377769846.jpg'
                });
                setIsAddingNewOffer(true);
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#D94332] hover:bg-[#c33727] transition-all shadow-2xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Promotional Offer</span>
            </button>
          </div>

          {(editingOffer || isAddingNewOffer) && (
            <div className="bg-white p-6 rounded-2xl border border-[#D94332]/40 shadow-sm space-y-4 text-xs">
              <h4 className="font-bold text-sm text-[#292522]">
                {isAddingNewOffer ? 'New Offer' : `Edit Offer`}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-1">Offer Title</label>
                  <input
                    type="text"
                    value={editingOffer?.title || ''}
                    onChange={(e) => setEditingOffer(editingOffer ? { ...editingOffer, title: e.target.value } : null)}
                    className="w-full px-3 py-2 border rounded-lg bg-[#FFF9F1]"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">Subtitle / Kicker</label>
                  <input
                    type="text"
                    value={editingOffer?.subtitle || ''}
                    onChange={(e) => setEditingOffer(editingOffer ? { ...editingOffer, subtitle: e.target.value } : null)}
                    className="w-full px-3 py-2 border rounded-lg bg-[#FFF9F1]"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">Status</label>
                  <select
                    value={editingOffer?.status || 'Active'}
                    onChange={(e) => setEditingOffer(editingOffer ? { ...editingOffer, status: e.target.value as any } : null)}
                    className="w-full px-3 py-2 border rounded-lg bg-[#FFF9F1]"
                  >
                    <option value="Active">Active</option>
                    <option value="Expired">Expired</option>
                    <option value="Coming Soon">Coming Soon</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium mb-1">Badge Tag</label>
                  <input
                    type="text"
                    value={editingOffer?.badgeText || ''}
                    onChange={(e) => setEditingOffer(editingOffer ? { ...editingOffer, badgeText: e.target.value } : null)}
                    className="w-full px-3 py-2 border rounded-lg bg-[#FFF9F1]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block font-medium mb-1">Description</label>
                  <textarea
                    rows={2}
                    value={editingOffer?.description || ''}
                    onChange={(e) => setEditingOffer(editingOffer ? { ...editingOffer, description: e.target.value } : null)}
                    className="w-full px-3 py-2 border rounded-lg bg-[#FFF9F1] resize-none"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  onClick={() => {
                    setEditingOffer(null);
                    setIsAddingNewOffer(false);
                  }}
                  className="px-4 py-2 rounded-lg bg-[#F4EBDD]"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    if (editingOffer) {
                      if (isAddingNewOffer) {
                        addOffer(editingOffer);
                        showToast(`Added offer "${editingOffer.title}".`);
                      } else {
                        updateOffer(editingOffer);
                        showToast(`Updated offer.`);
                      }
                      setEditingOffer(null);
                      setIsAddingNewOffer(false);
                    }
                  }}
                  className="px-5 py-2 rounded-lg font-semibold bg-[#292522] text-white"
                >
                  Save Offer
                </button>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {offers.map((offer) => (
              <div key={offer.id} className="bg-white p-5 rounded-2xl border border-[#EAE0D4] space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    offer.status === 'Active' ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {offer.status}
                  </span>
                  <div className="space-x-1">
                    <button
                      onClick={() => setEditingOffer(offer)}
                      className="p-1 text-[#77716B] hover:text-[#292522]"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm('Delete offer?')) deleteOffer(offer.id);
                      }}
                      className="p-1 text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                <h4 className="font-bold text-sm text-[#292522]">{offer.title}</h4>
                <p className="text-xs text-[#77716B]">{offer.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: SETTINGS & WHATSAPP */}
      {activeTab === 'settings' && (
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EAE0D4] shadow-xs space-y-6">
          <h3 className="font-display font-semibold text-xl text-[#292522]">
            Business Profile & WhatsApp Configuration
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
            <div>
              <label className="block font-medium mb-1.5 flex items-center gap-1.5">
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Destination Number (For receiving incoming orders)</span>
              </label>
              <input
                type="text"
                placeholder="+923001234567"
                value={settings.whatsappNumber}
                onChange={(e) => updateSettings({ whatsappNumber: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#EAE0D4] bg-[#FFF9F1] text-[#292522]"
              />
              <span className="text-[11px] text-[#77716B] block mt-1">
                All checkout messages will open WhatsApp chat directly to this number.
              </span>
            </div>

            <div>
              <label className="block font-medium mb-1.5 flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-[#D94332]" />
                <span>Customer Display Phone</span>
              </label>
              <input
                type="text"
                value={settings.displayPhone}
                onChange={(e) => updateSettings({ displayPhone: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#EAE0D4] bg-[#FFF9F1] text-[#292522]"
              />
            </div>

            <div>
              <label className="block font-medium mb-1.5">Instagram URL</label>
              <input
                type="text"
                value={settings.instagramUrl}
                onChange={(e) => updateSettings({ instagramUrl: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#EAE0D4] bg-[#FFF9F1] text-[#292522]"
              />
            </div>

            <div>
              <label className="block font-medium mb-1.5">Instagram Handle</label>
              <input
                type="text"
                value={settings.instagramHandle}
                onChange={(e) => updateSettings({ instagramHandle: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#EAE0D4] bg-[#FFF9F1] text-[#292522]"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block font-medium mb-1.5 flex items-center justify-between">
                <span>Top Notification Banner Text</span>
                <button
                  type="button"
                  onClick={() => updateSettings({ topBannerActive: !settings.topBannerActive })}
                  className="text-[#D94332] underline"
                >
                  {settings.topBannerActive ? 'Disable Banner' : 'Enable Banner'}
                </button>
              </label>
              <input
                type="text"
                value={settings.topBannerText}
                onChange={(e) => updateSettings({ topBannerText: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#EAE0D4] bg-[#FFF9F1] text-[#292522]"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-[#EAE0D4] flex items-center justify-between">
            <span className="text-xs text-emerald-700 font-medium flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4" />
              <span>Settings automatically saved to browser local database.</span>
            </span>
            <button
              onClick={() => showToast('Settings confirmed & synced!')}
              className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#292522] hover:bg-[#1a1715] transition-colors"
            >
              Confirm Changes
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
