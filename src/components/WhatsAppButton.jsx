import React from 'react';
import { MessageSquare, PhoneCall } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/919810000000?text=Hello%20SS%20Carbon%20(Shri%20Shyam%20%26%20Company),%20I%20am%20interested%20in%20a%20bulk%20inquiry%20quote.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group flex items-center"
      aria-label="Contact SS Carbon on WhatsApp"
    >
      {/* Tooltip */}
      <div className="mr-3 px-3 py-1.5 rounded-xl bg-[#141414] border border-[#8BC34A]/50 text-white font-rajdhani text-xs font-semibold uppercase tracking-wider shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden sm:block">
        Direct B2B WhatsApp Desk 💬
      </div>

      {/* Button Icon */}
      <div className="relative w-14 h-14 rounded-full bg-[#8BC34A] text-black flex items-center justify-center shadow-2xl shadow-[#8BC34A]/40 group-hover:scale-110 transition-transform active:scale-95">
        <span className="absolute inset-0 rounded-full bg-[#8BC34A] animate-ping opacity-30"></span>
        <MessageSquare className="w-7 h-7 text-black fill-black" />
      </div>
    </a>
  );
}
