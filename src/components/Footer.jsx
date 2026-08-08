import React from 'react';
import { ShieldCheck, Mail, Phone, MapPin, ArrowUpRight, Leaf, Award } from 'lucide-react';

export default function Footer({ setActivePage, onOpenQuote, theme }) {
  const isDark = theme === 'dark';

  const handleNavClick = (id) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t relative overflow-hidden pt-20 pb-14 w-full transition-colors ${
      isDark ? 'bg-[#050505] border-[#1C1C1C] text-gray-400' : 'bg-slate-900 border-slate-800 text-slate-300'
    }`}>
      {/* Background Micro Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#8BC34A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-14 border-b border-[#1C1C1C] dark:border-[#1C1C1C] border-slate-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center space-x-3.5">
              <img
                src="/assets/brand_logo.png"
                alt="SS Carbon Metallic Emblem"
                className="w-11 h-11 sm:w-13 sm:h-13 object-contain filter drop-shadow-md"
              />
              <div>
                <span className="font-orbitron font-black text-3xl text-white tracking-wider">SS CARBON</span>
                <p className="text-xs uppercase tracking-widest text-[#8BC34A] font-bold">Shri Shyam & Company</p>
              </div>
            </div>

            <p className="text-sm text-gray-300 max-w-md leading-relaxed">
              Premier industrial chemical and carbon product manufacturing & fuel supply enterprise. Delivering high-purity Carbon Black, Furnace Oil, Industrial Diesel, and Pigments to global bulk buyers.
            </p>

            <div className="flex items-center space-x-2 text-[#8BC34A] text-xs font-bold bg-[#8BC34A]/10 border border-[#8BC34A]/20 px-4 py-2 rounded-full w-fit">
              <Leaf className="w-4 h-4 text-[#8BC34A]" />
              <span>Tagline: Less CO2. More Greenary.</span>
            </div>

            <div className="flex items-center space-x-6 pt-2">
              <div className="flex items-center space-x-2 text-xs text-gray-300 font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#8BC34A]" />
                <span>ISO 9001:2015 Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-300 font-semibold">
                <Award className="w-4 h-4 text-[#8BC34A]" />
                <span>ASTM Standard Compliant</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron font-bold text-white text-base uppercase tracking-wider mb-5 border-l-3 border-[#8BC34A] pl-3">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {['home', 'about', 'products', 'industries', 'quality', 'contact'].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => handleNavClick(page)}
                    className="hover:text-[#8BC34A] transition-colors uppercase tracking-wider text-xs font-semibold"
                  >
                    {page === 'quality' ? 'Quality & ISO' : page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Industrial Solutions */}
          <div>
            <h4 className="font-orbitron font-bold text-white text-base uppercase tracking-wider mb-5 border-l-3 border-[#8BC34A] pl-3">
              Products
            </h4>
            <ul className="space-y-3 text-xs font-medium text-gray-300">
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNavClick('products')}>Carbon Black Powder (N220/N330)</li>
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNavClick('products')}>Industrial Furnace Oil (FO 180)</li>
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNavClick('products')}>Commercial Industrial Diesel</li>
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNavClick('products')}>Ultra-fine Pigment Powder</li>
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNavClick('products')}>Specialty Rubber Carbon</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-orbitron font-bold text-white text-base uppercase tracking-wider mb-5 border-l-3 border-[#8BC34A] pl-3">
              Head Office
            </h4>
            <div className="space-y-3.5 text-xs">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#8BC34A] shrink-0 mt-0.5" />
                <span>Shri Shyam & Company Industrial Park, Sector 5, Industrial Area, New Delhi, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#8BC34A] shrink-0" />
                <span>+91 98100 XXXXX / +91 11 4500 XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#8BC34A] shrink-0" />
                <span>supply@sscarbon.com</span>
              </div>
              
              <button
                onClick={onOpenQuote}
                className="mt-3 w-full py-3 px-4 rounded-xl bg-[#1C1C1C] border border-[#8BC34A]/30 text-[#8BC34A] font-orbitron text-xs font-bold uppercase tracking-wider hover:bg-[#8BC34A] hover:text-black transition-all flex items-center justify-center space-x-1.5"
              >
                <span>Request B2B Pricing</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} SS Carbon (Shri Shyam & Company). All Rights Reserved.</p>
          <div className="flex items-center space-x-8">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Bulk Supply</span>
            <span className="hover:text-white cursor-pointer">Quality Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
