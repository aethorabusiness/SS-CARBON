import React, { useState, useEffect } from 'react';
import { PhoneCall, Menu, X, ArrowUpRight, Zap } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'industries', label: 'Industries' },
    { id: 'quality', label: 'Quality & ISO' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-2.5 sm:py-3 bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-[#262626] shadow-2xl' 
        : 'py-3.5 sm:py-5 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/85 to-transparent'
    }`}>
      {/* Full Width Responsive Header Bar */}
      <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-24">
        <div className="flex items-center justify-between">
          
          {/* Logo Section & Navigation Container */}
          <div className="flex items-center space-x-6 lg:space-x-12 xl:space-x-20">
            {/* Brand Logo with Metallic Emblem Image */}
            <div 
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-3 cursor-pointer group shrink-0"
            >
              <img
                src="/assets/brand_logo.png"
                alt="SS Carbon Metallic Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain filter drop-shadow-lg group-hover:scale-105 transition-transform"
              />
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-orbitron font-black text-xl sm:text-2xl tracking-wider text-white">SS CARBON</span>
                </div>
                <p className="text-[10px] sm:text-[11px] uppercase font-rajdhani font-semibold tracking-widest text-[#8BC34A]">Shri Shyam & Company</p>
              </div>
            </div>

            {/* Space Before Home & Desktop Nav Links */}
            <nav className="hidden lg:flex items-center space-x-1.5 bg-[#141414]/90 p-1.5 rounded-full border border-[#262626] shadow-inner ml-6 xl:ml-16">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 xl:px-5 py-2 rounded-full text-xs font-orbitron font-bold uppercase tracking-wider transition-all duration-200 ${
                    activePage === item.id
                      ? 'bg-[#8BC34A] text-black shadow-lg shadow-[#8BC34A]/25 scale-105'
                      : 'text-gray-300 hover:text-white hover:bg-[#262626]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Right Action Desk & Phone (Desktop) */}
          <div className="hidden lg:flex items-center space-x-5">
            <a 
              href="tel:+919810000000" 
              className="flex items-center space-x-2 text-xs font-orbitron font-semibold text-gray-300 hover:text-[#8BC34A] transition-colors bg-[#141414] px-3.5 py-2 rounded-full border border-[#262626]"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#8BC34A]" />
              <span>Bulk Desk: +91 98100 XXXXX</span>
            </a>
            
            <button
              onClick={onOpenQuote}
              className="relative group px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#8BC34A] to-[#689F38] text-black font-orbitron font-extrabold text-xs uppercase tracking-wider shadow-xl shadow-[#8BC34A]/20 hover:shadow-[#8BC34A]/40 hover:scale-105 transition-all flex items-center space-x-1.5 active:scale-95 shrink-0"
            >
              <span>Get Instant Quote</span>
              <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Action Bar */}
          <div className="flex lg:hidden items-center space-x-2.5">
            <button
              onClick={onOpenQuote}
              className="px-3 py-1.5 rounded-lg bg-[#8BC34A] text-black font-orbitron font-bold text-[11px] uppercase tracking-wider shadow-md active:scale-95"
            >
              Get Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#1C1C1C] border border-[#262626] text-gray-200 hover:text-white active:scale-95"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 bg-[#0A0A0A]/98 border-b border-[#262626] backdrop-blur-2xl px-5 pt-3 pb-6 space-y-2.5 animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-xs font-orbitron font-bold uppercase tracking-wider flex items-center justify-between transition-colors ${
                activePage === item.id
                  ? 'bg-[#8BC34A] text-black font-extrabold shadow-md'
                  : 'text-gray-300 hover:bg-[#1C1C1C]'
              }`}
            >
              <span>{item.label}</span>
              {activePage === item.id && <Zap className="w-4 h-4 text-black" />}
            </button>
          ))}
          <div className="pt-3 border-t border-[#262626] flex flex-col gap-2.5">
            <a
              href="tel:+919810000000"
              className="w-full py-2.5 px-4 rounded-xl bg-[#1C1C1C] border border-[#262626] text-gray-300 font-orbitron font-semibold text-xs flex items-center justify-center space-x-2"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#8BC34A]" />
              <span>Call Desk: +91 98100 XXXXX</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 rounded-xl bg-[#8BC34A] text-black font-orbitron font-extrabold text-xs uppercase tracking-widest text-center shadow-lg shadow-[#8BC34A]/20"
            >
              Request Commercial Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
