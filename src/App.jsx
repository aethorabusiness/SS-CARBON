import React, { useState } from 'react';
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
        return <HomePage setActivePage={setActivePage} onOpenQuote={() => handleOpenQuote()} />;
      case 'about':
        return <AboutPage onOpenQuote={() => handleOpenQuote()} />;
      case 'products':
        return <ProductsPage onOpenQuote={() => handleOpenQuote()} />;
      case 'industries':
        return <IndustriesPage onOpenQuote={() => handleOpenQuote()} />;
      case 'quality':
        return <QualityPage onOpenQuote={() => handleOpenQuote()} />;
      case 'contact':
        return <ContactPage onOpenQuote={() => handleOpenQuote()} />;
      default:
        return <HomePage setActivePage={setActivePage} onOpenQuote={() => handleOpenQuote()} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-gray-100 font-sans antialiased selection:bg-[#8BC34A] selection:text-black relative">
      {/* Sticky Navigation Header */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Main Page Area */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* Industrial Footer */}
      <Footer
        setActivePage={setActivePage}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Interactive B2B Bulk Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        selectedProductDefault={selectedProduct}
      />

      {/* Timed Lead Capture Popup (8-10 sec delay) */}
      <LeadPopup
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Fixed WhatsApp Action Button */}
      <WhatsAppButton />
    </div>
  );
}
