import React, { useState, useEffect } from 'react';
import { PhoneCall, Menu, X, ArrowUpRight, Zap, Sun, Moon } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, onOpenQuote, theme, toggleTheme }) {
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
        ? theme === 'dark' 
          ? 'py-2.5 sm:py-3 bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-[#262626] shadow-2xl' 
          : 'py-2.5 sm:py-3 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-lg'
        : theme === 'dark'
          ? 'py-3.5 sm:py-5 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/85 to-transparent'
          : 'py-3.5 sm:py-5 bg-gradient-to-b from-white via-white/85 to-transparent'
    }`}>
      {/* Full Width Layout with Centered Tabs & Generous Margin Spacing */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between">
          
          {/* TOP LEFT: Brand Logo & Company Name */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 cursor-pointer group shrink-0"
          >
            <img
              src="/assets/brand_logo.png"
              alt="SS Carbon Metallic Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain filter drop-shadow-md group-hover:scale-105 transition-transform"
            />
            <div>
              <div className="flex items-center space-x-2">
                <span className={`font-orbitron font-black text-xl sm:text-2xl tracking-wider ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  SS CARBON
                </span>
              </div>
              <p className={`text-[10px] sm:text-[11px] uppercase font-rajdhani font-bold tracking-widest ${
                theme === 'dark' ? 'text-[#8BC34A]' : 'text-[#65A30D]'
              }`}>
                Shri Shyam & Company
              </p>
            </div>
          </div>

          {/* CENTER: Navigation Tabs with Generous Whitespace Margin on Both Sides */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8 xl:mx-16">
            <nav className={`flex items-center space-x-1.5 p-1.5 rounded-full border shadow-inner transition-colors ${
              theme === 'dark'
                ? 'bg-[#141414]/90 border-[#262626]'
                : 'bg-white/90 border-slate-200 shadow-slate-200'
            }`}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 xl:px-5 py-2 rounded-full text-xs font-orbitron font-bold uppercase tracking-wider transition-all duration-200 ${
                    activePage === item.id
                      ? 'bg-[#8BC34A] text-black shadow-lg shadow-[#8BC34A]/25 scale-105'
                      : theme === 'dark'
                        ? 'text-gray-300 hover:text-white hover:bg-[#262626]'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* TOP RIGHT: Bulk Desk, Dark/Light Mode Toggle & Instant Quote */}
          <div className="hidden lg:flex items-center space-x-4 shrink-0">
            
            {/* Theme Toggle Button (Sun/Moon) */}
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-full border transition-all ${
                theme === 'dark'
                  ? 'bg-[#1C1C1C] border-[#262626] text-amber-400 hover:bg-[#262626]'
                  : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
              }`}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              aria-label="Toggle Theme Mode"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Bulk Desk Link */}
            <a 
              href="tel:+919810000000" 
              className={`flex items-center space-x-2 text-xs font-orbitron font-semibold transition-colors px-3.5 py-2.5 rounded-full border ${
                theme === 'dark'
                  ? 'bg-[#141414] border-[#262626] text-gray-300 hover:text-[#8BC34A]'
                  : 'bg-white border-slate-200 text-slate-700 hover:text-[#65A30D]'
              }`}
            >
              <PhoneCall className={`w-3.5 h-3.5 ${theme === 'dark' ? 'text-[#8BC34A]' : 'text-[#65A30D]'}`} />
              <span>Bulk Desk: +91 98100 XXXXX</span>
            </a>
            
            {/* Instant Quote CTA */}
            <button
              onClick={onOpenQuote}
              className="relative group px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#8BC34A] to-[#689F38] text-black font-orbitron font-extrabold text-xs uppercase tracking-wider shadow-xl shadow-[#8BC34A]/20 hover:shadow-[#8BC34A]/40 hover:scale-105 transition-all flex items-center space-x-1.5 active:scale-95 shrink-0"
            >
              <span>Get Instant Quote</span>
              <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Action Bar */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl border ${
                theme === 'dark' ? 'bg-[#1C1C1C] border-[#262626] text-amber-400' : 'bg-slate-100 border-slate-300 text-slate-700'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            
            <button
              onClick={onOpenQuote}
              className="px-3 py-1.5 rounded-lg bg-[#8BC34A] text-black font-orbitron font-bold text-[11px] uppercase tracking-wider shadow-md"
            >
              Get Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl border ${
                theme === 'dark' ? 'bg-[#1C1C1C] border-[#262626] text-gray-200' : 'bg-white border-slate-300 text-slate-800'
              }`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`lg:hidden mt-2 border-b backdrop-blur-2xl px-5 pt-3 pb-6 space-y-2.5 animate-fadeIn ${
          theme === 'dark' ? 'bg-[#0A0A0A]/98 border-[#262626]' : 'bg-white/98 border-slate-200'
        }`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-xs font-orbitron font-bold uppercase tracking-wider flex items-center justify-between ${
                activePage === item.id
                  ? 'bg-[#8BC34A] text-black font-extrabold shadow-md'
                  : theme === 'dark'
                    ? 'text-gray-300 hover:bg-[#1C1C1C]'
                    : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span>{item.label}</span>
              {activePage === item.id && <Zap className="w-4 h-4 text-black" />}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-200 dark:border-[#262626] flex flex-col gap-2.5">
            <a
              href="tel:+919810000000"
              className={`w-full py-2.5 px-4 rounded-xl border font-orbitron font-semibold text-xs flex items-center justify-center space-x-2 ${
                theme === 'dark' ? 'bg-[#1C1C1C] border-[#262626] text-gray-300' : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}
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
