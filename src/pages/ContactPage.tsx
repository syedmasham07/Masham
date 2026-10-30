import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  MessageCircle,
  Instagram,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Mail,
  AlertCircle
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { settings } = useApp();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage('Please enter your phone number.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Please enter your message or query.');
      return;
    }

    // Success response
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* 13. CONTACT PAGE HEADER */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-widest font-bold text-[#D94332] bg-[#F4EBDD] px-3.5 py-1 rounded-full border border-[#EAE0D4]">
          WE ARE HERE TO HELP
        </span>
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-[#292522]">
          Get in Touch With Us
        </h1>
        <p className="text-sm sm:text-base text-[#77716B]">
          Questions about dietary preferences, bulk orders, event pop-ups, or pre-orders? Reach out directly via WhatsApp, Instagram, or our contact form.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Contact Info Cards (Left Column) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-3xl border border-[#EAE0D4] shadow-xs space-y-4">
            <h3 className="font-display font-bold text-xl text-[#292522]">
              Direct Channels
            </h3>

            <div className="space-y-3">
              <a
                href={`https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hello%20The%20Hotpot%20Bowl,%20I%20have%20an%20inquiry.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#128C7E] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 fill-white" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-[#292522]">WhatsApp Chat</span>
                    <span className="block text-xs text-[#77716B]">Instant order & kitchen replies</span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#128C7E]">Chat Now →</span>
              </a>

              <a
                href={settings.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-[#E1306C]/10 hover:bg-[#E1306C]/20 border border-[#E1306C]/30 text-[#C13584] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E1306C] text-white flex items-center justify-center">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-[#292522]">Instagram DM</span>
                    <span className="block text-xs text-[#77716B]">{settings.instagramHandle}</span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#C13584]">Visit Profile →</span>
              </a>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#FFF9F1] border border-[#EAE0D4]">
                <div className="w-10 h-10 rounded-xl bg-[#F4EBDD] text-[#D94332] flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-[#77716B]">Customer Helpline</span>
                  <span className="block text-sm font-bold text-[#292522]">{settings.displayPhone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div className="bg-white p-6 rounded-3xl border border-[#EAE0D4] shadow-xs space-y-4">
            <h3 className="font-display font-bold text-xl text-[#292522] flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#D94332]" />
              <span>Locations & Collaboration</span>
            </h3>

            <div className="space-y-4 text-xs sm:text-sm">
              {settings.locations.map((loc, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-[#FFF9F1] border border-[#EAE0D4] space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-[#292522]">{loc.name}</h4>
                    <span className="text-[10px] uppercase font-semibold text-[#D94332] bg-[#F4EBDD] px-2 py-0.5 rounded">
                      {loc.label}
                    </span>
                  </div>
                  <p className="text-[#77716B]">{loc.address}</p>
                  <p className="text-[11px] text-[#77716B] italic">{loc.notes}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Operating Hours */}
          <div className="bg-white p-6 rounded-3xl border border-[#EAE0D4] shadow-xs space-y-3">
            <h3 className="font-display font-bold text-xl text-[#292522] flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#F29A38]" />
              <span>Kitchen Operational Hours</span>
            </h3>

            <div className="space-y-2 text-xs">
              {settings.businessHours.map((bh, idx) => (
                <div key={idx} className="flex justify-between py-1 border-b border-[#EAE0D4]/60 last:border-none">
                  <span className="text-[#77716B]">{bh.days}</span>
                  <span className="font-semibold text-[#292522]">{bh.hours}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Contact Form (Right Column) */}
        <div className="lg:col-span-7">
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#EAE0D4] shadow-sm space-y-6">
            
            <div className="space-y-1">
              <h3 className="font-display font-bold text-2xl text-[#292522]">
                Send Us a Message
              </h3>
              <p className="text-xs sm:text-sm text-[#77716B]">
                Fill out the form below and our kitchen relations team will respond promptly.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 text-center space-y-4 bg-[#FFF9F1] rounded-2xl border border-emerald-200">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-xl text-[#292522]">
                  Message Received!
                </h4>
                <p className="text-sm text-[#77716B] max-w-md mx-auto">
                  Thank you, {formData.name}. We have logged your query and will contact you via WhatsApp or Email within a few hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold bg-[#292522] text-white hover:bg-[#1a1715] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#292522] mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Bilal Ahmed"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#EAE0D4] bg-[#FFF9F1] text-[#292522] focus:outline-hidden focus:border-[#D94332]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#292522] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. bilal@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#EAE0D4] bg-[#FFF9F1] text-[#292522] focus:outline-hidden focus:border-[#D94332]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#292522] mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0300 1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#EAE0D4] bg-[#FFF9F1] text-[#292522] focus:outline-hidden focus:border-[#D94332]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#292522] mb-1.5">
                    Your Message / Inquiry *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us what you'd like to ask or share..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#EAE0D4] bg-[#FFF9F1] text-[#292522] focus:outline-hidden focus:border-[#D94332] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-[#D94332] hover:bg-[#c33727] active:scale-98 transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}

          </div>
        </div>

      </div>

    </div>
  );
};
