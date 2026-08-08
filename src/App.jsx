import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import LeadPopup from './components/LeadPopup';
import WhatsAppButton from './components/WhatsAppButton';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import IndustriesPage from './pages/IndustriesPage';
import QualityPage from './pages/QualityPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  
  // Theme state: default to 'dark', sync with document.documentElement class
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('ss_carbon_theme') || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('ss_carbon_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenQuote = (productName = '') => {
    setSelectedProduct(productName);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage setActivePage={setActivePage} onOpenQuote={() => handleOpenQuote()} theme={theme} />;
      case 'about':
        return <AboutPage onOpenQuote={() => handleOpenQuote()} theme={theme} />;
      case 'products':
        return <ProductsPage onOpenQuote={() => handleOpenQuote()} theme={theme} />;
      case 'industries':
        return <IndustriesPage onOpenQuote={() => handleOpenQuote()} theme={theme} />;
      case 'quality':
        return <QualityPage onOpenQuote={() => handleOpenQuote()} theme={theme} />;
      case 'contact':
        return <ContactPage onOpenQuote={() => handleOpenQuote()} theme={theme} />;
      default:
        return <HomePage setActivePage={setActivePage} onOpenQuote={() => handleOpenQuote()} theme={theme} />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 font-sans antialiased selection:bg-[#8BC34A] selection:text-black relative ${
      theme === 'dark' ? 'bg-[#0A0A0A] text-gray-100' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Sticky Navigation Header */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenQuote={() => handleOpenQuote()}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Page Area */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* Industrial Footer */}
      <Footer
        setActivePage={setActivePage}
        onOpenQuote={() => handleOpenQuote()}
        theme={theme}
      />

      {/* Interactive B2B Bulk Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        selectedProductDefault={selectedProduct}
        theme={theme}
      />

      {/* Timed Lead Capture Popup (8-10 sec delay) */}
      <LeadPopup
        onOpenQuote={() => handleOpenQuote()}
        theme={theme}
      />

      {/* Fixed WhatsApp Action Button */}
      <WhatsAppButton />
    </div>
  );
}
