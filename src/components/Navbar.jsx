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
      isScrolled ? 'py-3 bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-[#262626] shadow-2xl' : 'py-5 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent'
    }`}>
      {/* Full Width Wide Desktop Header Bar */}
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="flex items-center justify-between">
          
          {/* Logo Section & Navigation Container */}
          <div className="flex items-center space-x-12 xl:space-x-20">
            {/* Brand Logo */}
            <div 
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-3.5 cursor-pointer group shrink-0"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1C1C1C] to-[#0A0A0A] border-2 border-[#8BC34A]/50 flex items-center justify-center shadow-lg group-hover:border-[#8BC34A] group-hover:scale-105 transition-all">
                <span className="font-orbitron font-black text-2xl text-[#8BC34A] tracking-tighter">SS</span>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-orbitron font-black text-2xl tracking-wider text-white">SS CARBON</span>
                </div>
                <p className="text-[11px] uppercase font-rajdhani font-semibold tracking-widest text-[#8BC34A]">Shri Shyam & Company</p>
              </div>
            </div>

            {/* Generous Space Before Home & Desktop Nav Links */}
            <nav className="hidden lg:flex items-center space-x-2 bg-[#141414]/90 p-2 rounded-full border border-[#262626] shadow-inner ml-8 xl:ml-16">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-orbitron font-bold uppercase tracking-wider transition-all duration-200 ${
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

          {/* Right Action Desk & Phone */}
          <div className="hidden lg:flex items-center space-x-6">
            <a 
              href="tel:+919810000000" 
              className="flex items-center space-x-2.5 text-xs font-orbitron font-semibold text-gray-300 hover:text-[#8BC34A] transition-colors bg-[#141414] px-4 py-2.5 rounded-full border border-[#262626]"
            >
              <PhoneCall className="w-4 h-4 text-[#8BC34A]" />
              <span>Bulk Desk: +91 98100 XXXXX</span>
            </a>
            
            <button
              onClick={onOpenQuote}
              className="relative group px-6 py-3 rounded-xl bg-gradient-to-r from-[#8BC34A] to-[#689F38] text-black font-orbitron font-extrabold text-xs uppercase tracking-wider shadow-xl shadow-[#8BC34A]/20 hover:shadow-[#8BC34A]/40 hover:scale-105 transition-all flex items-center space-x-2 active:scale-95 shrink-0"
            >
              <span>Get Instant Quote</span>
              <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-3">
            <button
              onClick={onOpenQuote}
              className="px-3.5 py-2 rounded-lg bg-[#8BC34A] text-black font-orbitron font-bold text-xs uppercase tracking-wider"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#1C1C1C] border border-[#262626] text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 bg-[#0A0A0A]/95 border-b border-[#262626] backdrop-blur-xl px-6 pt-4 pb-6 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-xs font-orbitron font-bold uppercase tracking-wider flex items-center justify-between ${
                activePage === item.id
                  ? 'bg-[#8BC34A] text-black font-bold'
                  : 'text-gray-300 hover:bg-[#1C1C1C]'
              }`}
            >
              <span>{item.label}</span>
              {activePage === item.id && <Zap className="w-4 h-4 text-black" />}
            </button>
          ))}
          <div className="pt-3 border-t border-[#262626] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3.5 rounded-xl bg-[#8BC34A] text-black font-orbitron font-bold text-xs uppercase tracking-widest text-center"
            >
              Request Bulk Pricing
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
