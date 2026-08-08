import React, { useState, useEffect } from 'react';
import { X, Sparkles, PhoneCall, ShieldCheck, ArrowRight } from 'lucide-react';

export default function LeadPopup({ onOpenQuote }) {
  const [isVisible, setIsVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Lead capture requirement: Popup after 8–10 sec delay
    const timer = setTimeout(() => {
      const hasBeenDismissed = sessionStorage.getItem('lead_popup_dismissed');
      if (!hasBeenDismissed) {
        setIsVisible(true);
      }
    }, 8500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setDismissed(true);
    sessionStorage.setItem('lead_popup_dismissed', 'true');
  };

  const handleClaim = () => {
    handleClose();
    onOpenQuote();
  };

  if (!isVisible || dismissed) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 max-w-md w-full animate-slideUp">
      <div className="relative bg-[#141414] border-2 border-[#8BC34A] rounded-2xl p-5 shadow-2xl shadow-[#8BC34A]/20 backdrop-blur-xl">
        
        {/* Dismiss Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 p-1 rounded-full bg-[#262626] text-gray-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content */}
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 rounded-xl bg-[#8BC34A]/20 border border-[#8BC34A] flex items-center justify-center shrink-0 mt-0.5">
            <Sparkles className="w-5 h-5 text-[#8BC34A]" />
          </div>

          <div className="space-y-2 pr-4">
            <div className="inline-block px-2 py-0.5 rounded bg-[#8BC34A]/20 border border-[#8BC34A]/40 text-[#8BC34A] font-orbitron text-[10px] font-bold uppercase tracking-wider">
              Bulk Supply Desk Offer
            </div>

            <h4 className="font-orbitron font-bold text-sm text-white leading-snug">
              Looking for Direct Factory Bulk Rates?
            </h4>

            <p className="text-xs text-gray-300 leading-relaxed">
              Get immediate GST invoice estimates & ASTM lab certificates for Carbon Black, Furnace Oil, or Diesel.
            </p>

            <div className="pt-2 flex items-center space-x-2">
              <button
                onClick={handleClaim}
                className="flex-1 py-2 px-3 rounded-lg bg-[#8BC34A] text-black font-orbitron font-bold text-xs uppercase tracking-wider hover:bg-[#9ECC3B] transition-all flex items-center justify-center space-x-1"
              >
                <span>Get Instant Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleClose}
                className="py-2 px-3 rounded-lg bg-[#262626] text-gray-300 text-xs font-semibold hover:bg-[#333]"
              >
                Later
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
