import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Plus, Minus, Trash2, MessageCircle, ShoppingBag, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateCartQuantity,
    removeFromCart,
    clearCart,
    cartSubtotal,
    cartCount,
    settings,
    navigate
  } = useApp();

  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [lastOrderMessage, setLastOrderMessage] = useState('');
  const [formError, setFormError] = useState('');

  if (!isCartOpen) return null;

  const handleCheckoutWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!customerName.trim()) {
      setFormError('Please enter your name.');
      return;
    }
    if (!phoneNumber.trim()) {
      setFormError('Please enter your contact phone number.');
      return;
    }
    if (!deliveryAddress.trim()) {
      setFormError('Please provide your complete delivery address or mention Dine-in / Pickup.');
      return;
    }

    // Format WhatsApp message
    const orderItemsText = cart
      .map(
        (item, idx) =>
          `${idx + 1}. *${item.menuItem.name}* x ${item.quantity} — Rs. ${(item.menuItem.price * item.quantity).toLocaleString()}${
            item.specialInstructions ? `\n   ↳ Note: _${item.specialInstructions}_` : ''
          }`
      )
      .join('\n');

    const cleanWaNumber = settings.whatsappNumber.replace(/[^0-9]/g, '');

    const message = `🍲 *NEW ORDER — THE HOTPOT BOWL*\n` +
      `----------------------------------------\n` +
      `👤 *Customer Name:* ${customerName.trim()}\n` +
      `📞 *Phone Number:* ${phoneNumber.trim()}\n` +
      `📍 *Delivery / Pickup Address:*\n${deliveryAddress.trim()}\n` +
      (specialInstructions.trim() ? `📝 *Special Notes:* ${specialInstructions.trim()}\n` : '') +
      `----------------------------------------\n` +
      `🥢 *ORDER SUMMARY:*\n${orderItemsText}\n` +
      `----------------------------------------\n` +
      `💰 *Grand Total:* Rs. ${cartSubtotal.toLocaleString()}\n` +
      `⏱ *Ordered At:* ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}\n\n` +
      `Please confirm availability, preparation time, and delivery ETA. Thank you!`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${cleanWaNumber}?text=${encoded}`;

    setLastOrderMessage(message);
    setOrderSubmitted(true);

    // Open WhatsApp in new tab / app
    window.open(whatsappUrl, '_blank');
  };

  const handleClose = () => {
    setIsCartOpen(false);
    if (orderSubmitted) {
      clearCart();
      setOrderSubmitted(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-[#292522]/50 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFF9F1] shadow-2xl flex flex-col border-l border-[#EAE0D4]">
          
          {/* Header */}
          <div className="p-5 border-b border-[#EAE0D4] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#F4EBDD] flex items-center justify-center text-[#D94332]">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-[#292522]">Your Order</h3>
                <span className="text-xs text-[#77716B]">
                  {cartCount} {cartCount === 1 ? 'item' : 'items'} in bowl
                </span>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="p-2 rounded-full text-[#77716B] hover:text-[#292522] hover:bg-[#F4EBDD] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            
            {orderSubmitted ? (
              <div className="text-center py-12 px-4 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-display font-bold text-xl text-[#292522]">
                  Order Sent to WhatsApp!
                </h4>
                <p className="text-sm text-[#77716B] leading-relaxed">
                  Your order details have been forwarded to The Hotpot Bowl kitchen team via WhatsApp. We will reply shortly to confirm preparation time!
                </p>

                <div className="bg-white p-4 rounded-xl border border-[#EAE0D4] text-left text-xs font-mono text-[#292522] max-h-48 overflow-y-auto whitespace-pre-wrap">
                  {lastOrderMessage}
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(lastOrderMessage);
                      alert('Order summary copied to clipboard!');
                    }}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#F4EBDD] hover:bg-[#EAE0D4] text-[#292522] transition-colors"
                  >
                    Copy Order Text
                  </button>
                  <button
                    onClick={handleClose}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#D94332] text-white hover:bg-[#c33727] transition-colors"
                  >
                    Close & Continue Browsing
                  </button>
                </div>
              </div>
            ) : cart.length === 0 ? (
              <div className="text-center py-16 px-4 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#F4EBDD] flex items-center justify-center mx-auto text-[#77716B]">
                  <ShoppingBag className="w-8 h-8 stroke-1" />
                </div>
                <h4 className="font-display font-semibold text-lg text-[#292522]">
                  Your cart is empty
                </h4>
                <p className="text-sm text-[#77716B] max-w-xs mx-auto">
                  Explore our piping hotpot, steamed chicken momos, or creamy Alfredo dumplings.
                </p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate('menu');
                  }}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold bg-[#D94332] text-white hover:bg-[#c33727] transition-all shadow-xs"
                >
                  <span>Explore Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <>
                {/* Cart Items List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#77716B] pb-1 border-b border-[#EAE0D4]">
                    <span>Items Selected</span>
                    <button
                      onClick={clearCart}
                      className="text-[#D94332] hover:underline"
                    >
                      Clear All
                    </button>
                  </div>

                  {cart.map((item) => (
                    <div
                      key={item.menuItem.id}
                      className="bg-white p-3 rounded-xl border border-[#EAE0D4] flex gap-3 shadow-2xs items-center"
                    >
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-[#F4EBDD] shrink-0 border border-[#EAE0D4]/60">
                        <img
                          src={item.menuItem.image}
                          alt={item.menuItem.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h5 className="font-medium text-sm text-[#292522] truncate">
                          {item.menuItem.name}
                        </h5>
                        <div className="text-xs text-[#77716B] mt-0.5">
                          Rs. {item.menuItem.price.toLocaleString()} each
                        </div>
                        {item.specialInstructions && (
                          <div className="text-[11px] text-[#D94332] italic truncate mt-0.5">
                            Note: {item.specialInstructions}
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col items-end gap-1.5 shrink-0">
                        <span className="text-sm font-semibold text-[#292522] tabular-nums">
                          Rs. {(item.menuItem.price * item.quantity).toLocaleString()}
                        </span>

                        <div className="flex items-center border border-[#EAE0D4] rounded-lg bg-[#FFF9F1] overflow-hidden">
                          <button
                            onClick={() => updateCartQuantity(item.menuItem.id, item.quantity - 1)}
                            className="p-1 hover:bg-[#EAE0D4] text-[#292522] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            {item.quantity === 1 ? (
                              <Trash2 className="w-3.5 h-3.5 text-[#D94332]" />
                            ) : (
                              <Minus className="w-3.5 h-3.5" />
                            )}
                          </button>
                          <span className="w-7 text-center text-xs font-semibold tabular-nums text-[#292522]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateCartQuantity(item.menuItem.id, item.quantity + 1)}
                            className="p-1 hover:bg-[#EAE0D4] text-[#292522] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Subtotal Calculation */}
                <div className="bg-[#F4EBDD]/60 p-4 rounded-xl border border-[#EAE0D4] space-y-2">
                  <div className="flex justify-between text-xs text-[#77716B]">
                    <span>Items Subtotal</span>
                    <span className="tabular-nums font-medium text-[#292522]">
                      Rs. {cartSubtotal.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-[#77716B]">
                    <span>Delivery Packaging</span>
                    <span className="text-emerald-700 font-medium">Included (Kraft Sealed)</span>
                  </div>
                  <div className="pt-2 border-t border-[#EAE0D4] flex justify-between text-sm font-bold text-[#292522]">
                    <span>Estimated Total</span>
                    <span className="tabular-nums text-[#D94332] text-base">
                      Rs. {cartSubtotal.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Customer Checkout Information Form */}
                <form id="order-form" onSubmit={handleCheckoutWhatsApp} className="space-y-3 pt-2">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#292522] uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-[#D94332]" />
                    <span>Customer Details for WhatsApp Order</span>
                  </div>

                  {formError && (
                    <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-xs text-red-600">
                      {formError}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-medium text-[#292522] mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Khan"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-[#EAE0D4] bg-white text-[#292522] focus:outline-hidden focus:border-[#D94332]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#292522] mb-1">
                      Contact WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0300 1234567"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-[#EAE0D4] bg-white text-[#292522] focus:outline-hidden focus:border-[#D94332]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#292522] mb-1">
                      Delivery Address / Pickup Point *
                    </label>
                    <textarea
                      required
                      rows={2}
                      placeholder="House / Apartment #, Street, Area, Landmark"
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-[#EAE0D4] bg-white text-[#292522] focus:outline-hidden focus:border-[#D94332] resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#292522] mb-1">
                      Special Cooking or Dispatch Notes (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. extra spicy chili dip, dispatch around 7:30 PM"
                      value={specialInstructions}
                      onChange={(e) => setSpecialInstructions(e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-[#EAE0D4] bg-white text-[#292522] focus:outline-hidden focus:border-[#D94332]"
                    />
                  </div>
                </form>
              </>
            )}

          </div>

          {/* Footer Actions */}
          {!orderSubmitted && cart.length > 0 && (
            <div className="p-4 border-t border-[#EAE0D4] bg-white space-y-2">
              <button
                type="submit"
                form="order-form"
                className="w-full py-3.5 px-4 rounded-xl text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-99 transition-all shadow-md flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Submit Order via WhatsApp (Rs. {cartSubtotal.toLocaleString()})</span>
              </button>
              <p className="text-[11px] text-center text-[#77716B]">
                Directly opens WhatsApp with complete itemized order and delivery details.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
