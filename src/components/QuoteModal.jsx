import React, { useState } from 'react';
import { X, CheckCircle, Calculator, Send, Shield } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, selectedProductDefault = '' }) {
  const [product, setProduct] = useState(selectedProductDefault || 'Carbon Black Powder');
  const [quantity, setQuantity] = useState(25);
  const [unit, setUnit] = useState('Metric Tons (MT)');
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [remarks, setRemarks] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#121212] border border-[#8BC34A]/40 rounded-2xl sm:rounded-3xl shadow-2xl shadow-[#8BC34A]/10 overflow-hidden my-4 sm:my-8 max-h-[92vh] flex flex-col">
        
        {/* Top Metallic Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 bg-gradient-to-r from-[#1C1C1C] via-[#141414] to-[#1C1C1C] border-b border-[#262626] shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-xl bg-[#8BC34A]/20 border border-[#8BC34A] flex items-center justify-center shrink-0">
              <Calculator className="w-4 h-4 text-[#8BC34A]" />
            </div>
            <div>
              <h3 className="font-orbitron font-bold text-sm sm:text-lg text-white tracking-wide">
                B2B Bulk Quote Calculator
              </h3>
              <p className="text-[10px] sm:text-[11px] text-gray-400 font-rajdhani uppercase tracking-wider">
                Shri Shyam & Company Industrial Supply Desk
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-[#262626] text-gray-400 hover:text-white hover:bg-[#333] transition-colors"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-4 sm:p-6 flex-1 space-y-5">
          {submitted ? (
            <div className="py-6 text-center space-y-5">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#8BC34A]/20 border-2 border-[#8BC34A] flex items-center justify-center mx-auto text-[#8BC34A] animate-bounce">
                <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <div className="space-y-2">
                <h4 className="font-orbitron font-bold text-xl sm:text-2xl text-white">Quotation Request Received!</h4>
                <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto">
                  Thank you <span className="text-[#8BC34A] font-semibold">{contactName || 'Valued Partner'}</span> ({companyName || 'Factory Representative'}). Our B2B commercial desk has generated your reference ticket:
                </p>
                <div className="bg-[#1C1C1C] border border-[#8BC34A]/30 p-2.5 rounded-xl max-w-xs mx-auto text-xs font-mono text-[#8BC34A]">
                  REF: SSC-RFQ-{Math.floor(100000 + Math.random() * 900000)}
                </div>
              </div>

              <div className="bg-[#181818] p-4 rounded-xl text-left border border-[#262626] text-xs space-y-2">
                <div className="flex justify-between border-b border-[#262626] pb-1.5">
                  <span className="text-gray-400">Selected Product:</span>
                  <span className="text-white font-semibold">{product}</span>
                </div>
                <div className="flex justify-between border-b border-[#262626] pb-1.5">
                  <span className="text-gray-400">Bulk Quantity:</span>
                  <span className="text-[#8BC34A] font-bold">{quantity} {unit}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Estimated Lead Time:</span>
                  <span className="text-white font-semibold">24 - 48 Hours</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#8BC34A] text-black font-orbitron font-bold text-xs uppercase tracking-wider hover:bg-[#9ECC3B] transition-all"
              >
                Done / Request Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Step 1: Select Product & Quantity */}
              <div className="space-y-2.5">
                <label className="block text-xs font-orbitron uppercase text-gray-300 font-semibold">
                  1. Select Chemical / Fuel Product
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    'Carbon Black Powder',
                    'Furnace Oil',
                    'Industrial Diesel',
                    'Pigment Powder'
                  ].map((item) => (
                    <button
                      type="button"
                      key={item}
                      onClick={() => {
                        setProduct(item);
                        if (item.includes('Oil') || item.includes('Diesel')) {
                          setUnit('Kiloliters (KL)');
                        } else {
                          setUnit('Metric Tons (MT)');
                        }
                      }}
                      className={`p-2.5 rounded-xl text-xs font-medium border text-center transition-all ${
                        product === item
                          ? 'bg-[#8BC34A]/20 border-[#8BC34A] text-[#8BC34A] font-bold shadow-md'
                          : 'bg-[#1C1C1C] border-[#262626] text-gray-400 hover:border-gray-600'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Slider */}
              <div className="bg-[#181818] p-4 rounded-xl border border-[#262626] space-y-2.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-300 font-medium">Estimated Monthly Volume:</span>
                  <span className="text-[#8BC34A] font-orbitron font-bold text-xs sm:text-sm bg-[#8BC34A]/10 px-2.5 py-1 rounded-lg border border-[#8BC34A]/30">
                    {quantity} {unit}
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="500"
                  step="5"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full h-2 bg-[#262626] rounded-lg appearance-none cursor-pointer accent-[#8BC34A]"
                />
                <div className="flex justify-between text-[10px] text-gray-500">
                  <span>5 {unit} (Trial Order)</span>
                  <span>100 {unit}</span>
                  <span>500+ {unit} (Bulk Supply)</span>
                </div>
              </div>

              {/* Contact Details Grid */}
              <div className="space-y-2.5">
                <label className="block text-xs font-orbitron uppercase text-gray-300 font-semibold">
                  2. Factory & Buyer Contact Details
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Company / Factory Name *"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1C1C1C] border border-[#262626] text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#8BC34A]"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Contact Person Name *"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1C1C1C] border border-[#262626] text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#8BC34A]"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Mobile / Phone Number *"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1C1C1C] border border-[#262626] text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#8BC34A]"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Corporate Email Address *"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1C1C1C] border border-[#262626] text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#8BC34A]"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    rows="2"
                    placeholder="Specific ASTM Grade / Viscosity / Delivery Location (Optional)"
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#1C1C1C] border border-[#262626] text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#8BC34A]"
                  />
                </div>
              </div>

              {/* Bottom Disclaimer & Submit */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center space-x-1.5 text-[11px] text-gray-400">
                  <Shield className="w-3.5 h-3.5 text-[#8BC34A] shrink-0" />
                  <span>Bulk Pricing Protected under NDA & ISO Standards</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#8BC34A] to-[#689F38] text-black font-orbitron font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center space-x-2 shadow-lg"
                >
                  {loading ? (
                    <span>Generating Quote...</span>
                  ) : (
                    <>
                      <span>Submit Commercial RFQ</span>
                      <Send className="w-3.5 h-3.5 text-black" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
