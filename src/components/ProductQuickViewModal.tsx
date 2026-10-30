import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Plus, Minus, ShoppingBag, Flame, Sparkles } from 'lucide-react';

export const ProductQuickViewModal: React.FC = () => {
  const { selectedProductModal, setSelectedProductModal, addToCart } = useApp();
  const [quantity, setQuantity] = useState(1);
  const [specialNote, setSpecialNote] = useState('');

  if (!selectedProductModal) return null;

  const handleClose = () => {
    setSelectedProductModal(null);
    setQuantity(1);
    setSpecialNote('');
  };

  const handleAdd = () => {
    addToCart(selectedProductModal, quantity, specialNote);
    handleClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div
          onClick={handleClose}
          className="fixed inset-0 bg-[#292522]/60 backdrop-blur-xs transition-opacity"
        />

        {/* Modal Box */}
        <div className="relative w-full max-w-2xl bg-[#FFF9F1] rounded-2xl shadow-2xl overflow-hidden border border-[#EAE0D4] z-10">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#292522] flex items-center justify-center shadow-xs transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Image Col */}
            <div className="relative h-64 md:h-full min-h-[280px] bg-[#F4EBDD]">
              <img
                src={selectedProductModal.image}
                alt={selectedProductModal.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {selectedProductModal.badge && (
                <div className="absolute top-3 left-3 bg-[#D94332] text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>{selectedProductModal.badge}</span>
                </div>
              )}
            </div>

            {/* Info Col */}
            <div className="p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="text-xs uppercase tracking-wider text-[#77716B] font-medium">
                  {selectedProductModal.category}
                </div>

                <h3 className="font-display font-bold text-2xl text-[#292522]">
                  {selectedProductModal.name}
                </h3>

                <div className="flex items-center gap-3">
                  <span className="text-xl font-bold text-[#D94332] tabular-nums">
                    Rs. {selectedProductModal.price.toLocaleString()}
                  </span>
                  {selectedProductModal.originalPrice && (
                    <span className="text-sm line-through text-[#77716B] tabular-nums">
                      Rs. {selectedProductModal.originalPrice.toLocaleString()}
                    </span>
                  )}
                  {selectedProductModal.spiceLevel && (
                    <div className="flex items-center gap-0.5 ml-auto text-xs text-[#D94332]" title={`Spice Level: ${selectedProductModal.spiceLevel}/3`}>
                      {Array.from({ length: selectedProductModal.spiceLevel }).map((_, i) => (
                        <Flame key={i} className="w-3.5 h-3.5 fill-[#D94332]" />
                      ))}
                    </div>
                  )}
                </div>

                <p className="text-sm text-[#77716B] leading-relaxed">
                  {selectedProductModal.description}
                </p>

                {/* Special Instructions */}
                <div className="pt-2">
                  <label className="block text-xs font-medium text-[#292522] mb-1">
                    Custom note (e.g. less spicy, extra spring onions):
                  </label>
                  <input
                    type="text"
                    placeholder="Any specific preference?"
                    value={specialNote}
                    onChange={(e) => setSpecialNote(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-lg border border-[#EAE0D4] bg-white text-[#292522] focus:outline-hidden focus:border-[#D94332]"
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-[#EAE0D4] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-[#77716B]">Quantity:</span>
                  <div className="flex items-center border border-[#EAE0D4] rounded-lg bg-white overflow-hidden">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-1.5 hover:bg-[#F4EBDD] text-[#292522] transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-8 text-center text-xs font-bold tabular-nums text-[#292522]">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-1.5 hover:bg-[#F4EBDD] text-[#292522] transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAdd}
                  className="w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-[#D94332] hover:bg-[#c33727] active:scale-98 transition-all shadow-xs flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>
                    Add to Bowl — Rs. {(selectedProductModal.price * quantity).toLocaleString()}
                  </span>
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
