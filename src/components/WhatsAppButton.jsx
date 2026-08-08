import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/919649076667?text=Hello%20SS%20Carbon%20(Shri%20Shyam%20%26%20Co.),%20I%20am%20interested%20in%20a%20bulk%20inquiry%20quote.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 group flex items-center"
      aria-label="Contact SS Carbon on WhatsApp"
    >
      {/* Tooltip */}
      <div className="mr-3 px-3 py-1.5 rounded-xl bg-[#141414] border border-[#8BC34A]/50 text-white font-rajdhani text-xs font-semibold uppercase tracking-wider shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden sm:block">
        Direct B2B WhatsApp Desk 💬
      </div>

      {/* Button Icon */}
      <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#8BC34A] text-black flex items-center justify-center shadow-2xl shadow-[#8BC34A]/40 group-hover:scale-110 transition-transform active:scale-95">
        <span className="absolute inset-0 rounded-full bg-[#8BC34A] animate-ping opacity-30"></span>
        <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 text-black fill-black" />
      </div>
    </a>
  );
}
