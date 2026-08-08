import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle, ShieldCheck } from 'lucide-react';

export default function ContactPage({ onOpenQuote }) {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    product: 'Carbon Black Powder',
    volume: '25 MT',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="pt-32 pb-24 space-y-20 w-full max-w-[1800px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#8BC34A]/10 border border-[#8BC34A]/30 text-[#8BC34A] text-xs font-orbitron font-bold uppercase tracking-wider">
          <Mail className="w-3.5 h-3.5" />
          <span>Direct Commercial Desk</span>
        </div>
        <h1 className="font-orbitron font-black text-4xl sm:text-6xl text-white tracking-tight">
          Contact <span className="text-eco-gradient">SS Carbon</span>
        </h1>
        <p className="text-sm text-gray-300">
          Get in touch with Shri Shyam & Company sales executives for bulk pricing, contract supply terms, or sample dispatch requests.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        
        {/* Contact Info Sidebar */}
        <div className="space-y-6 lg:col-span-1">
          <div className="bg-[#121212] border border-[#262626] rounded-3xl p-6 space-y-6">
            <h3 className="font-orbitron font-bold text-lg text-white border-b border-[#262626] pb-3">
              Head Office & Sales Desk
            </h3>

            <div className="space-y-4 text-xs">
              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-lg bg-[#8BC34A]/10 border border-[#8BC34A]/30 flex items-center justify-center text-[#8BC34A] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-orbitron font-bold text-white uppercase mb-0.5">Plant Location</div>
                  <p className="text-gray-300 leading-relaxed">
                    Shri Shyam & Company Industrial Park, Sector 5, Industrial Area, New Delhi, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-lg bg-[#8BC34A]/10 border border-[#8BC34A]/30 flex items-center justify-center text-[#8BC34A] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-orbitron font-bold text-white uppercase mb-0.5">Bulk Supply Phone</div>
                  <p className="text-gray-300">+91 98100 XXXXX / +91 11 4500 XXXX</p>
                  <p className="text-[11px] text-[#8BC34A] font-semibold">24/7 Commercial Support</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-lg bg-[#8BC34A]/10 border border-[#8BC34A]/30 flex items-center justify-center text-[#8BC34A] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-orbitron font-bold text-white uppercase mb-0.5">Official Email</div>
                  <p className="text-gray-300">supply@sscarbon.com</p>
                  <p className="text-gray-300">sales@sscarbon.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-lg bg-[#8BC34A]/10 border border-[#8BC34A]/30 flex items-center justify-center text-[#8BC34A] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-orbitron font-bold text-white uppercase mb-0.5">Dispatch Desk Hours</div>
                  <p className="text-gray-300">Monday - Saturday: 8:00 AM - 8:00 PM</p>
                  <p className="text-gray-300">Tanker Dispatch: 24 Hours Active</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/919810000000?text=Hello%20SS%20Carbon,%20I%20want%20to%20inquire%20about%20bulk%20supply."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#8BC34A] text-black font-orbitron font-bold text-xs uppercase tracking-wider hover:bg-[#9ECC3B] transition-all flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Visual */}
          <div className="bg-[#121212] border border-[#262626] rounded-3xl p-4 overflow-hidden relative">
            <div className="h-48 rounded-2xl bg-[#1A1A1A] border border-[#262626] flex items-center justify-center relative overflow-hidden">
              {/* Map SVG Pattern */}
              <div className="absolute inset-0 bg-carbon-mesh opacity-40" />
              <div className="relative z-10 text-center space-y-2 p-4">
                <MapPin className="w-8 h-8 text-[#8BC34A] mx-auto animate-bounce" />
                <div className="font-orbitron font-bold text-white text-xs">New Delhi Processing Plant Hub</div>
                <div className="text-[11px] text-gray-400">Serving North & Pan-India Industrial Zones</div>
              </div>
            </div>
          </div>
        </div>

        {/* B2B Commercial Inquiry Form */}
        <div className="lg:col-span-2 bg-[#121212] border border-[#262626] rounded-3xl p-8 space-y-6">
          <div className="border-b border-[#262626] pb-4">
            <h3 className="font-orbitron font-extrabold text-2xl text-white">Send Official B2B Inquiry</h3>
            <p className="text-xs text-gray-400 mt-1">Receive direct factory quote & ASTM datasheets within 24 hours.</p>
          </div>

          {submitted ? (
            <div className="p-8 text-center space-y-4">
              <CheckCircle className="w-12 h-12 text-[#8BC34A] mx-auto" />
              <h4 className="font-orbitron font-bold text-xl text-white">Inquiry Successfully Submitted!</h4>
              <p className="text-xs text-gray-300">
                Our commercial desk manager will review your requirement for <span className="text-[#8BC34A]">{formData.product}</span> ({formData.volume}) and send a formal RFQ quotation to your email.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-lg bg-[#8BC34A] text-black font-orbitron font-bold text-xs uppercase"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-orbitron text-gray-300 uppercase mb-1">Company / Factory Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Apex Rubber Industries Ltd"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1C1C1C] border border-[#262626] text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#8BC34A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-orbitron text-gray-300 uppercase mb-1">Contact Person Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rajesh Sharma (Purchase Mgr)"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1C1C1C] border border-[#262626] text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#8BC34A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-orbitron text-gray-300 uppercase mb-1">Mobile / Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98100 XXXXX"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1C1C1C] border border-[#262626] text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#8BC34A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-orbitron text-gray-300 uppercase mb-1">Corporate Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="purchase@factory.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1C1C1C] border border-[#262626] text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#8BC34A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-orbitron text-gray-300 uppercase mb-1">Product Requirement *</label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1C1C1C] border border-[#262626] text-xs text-white focus:outline-none focus:border-[#8BC34A]"
                  >
                    <option value="Carbon Black Powder">Carbon Black Powder (N220 / N330 / N550)</option>
                    <option value="Furnace Oil">Industrial Furnace Oil (FO 180 cSt)</option>
                    <option value="Industrial Diesel">High Speed Industrial Diesel (HSD)</option>
                    <option value="Pigment Powder">Carbon Pigment Powder</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-orbitron text-gray-300 uppercase mb-1">Monthly Requirement Volume</label>
                  <input
                    type="text"
                    value={formData.volume}
                    onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                    placeholder="e.g. 50 MT / 100 KL per month"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1C1C1C] border border-[#262626] text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#8BC34A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-orbitron text-gray-300 uppercase mb-1">Specific Requirement Details</label>
                <textarea
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Mention target delivery location, specific ASTM grade requirement, or delivery schedule..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1C1C1C] border border-[#262626] text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#8BC34A]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center space-x-1 text-[11px] text-gray-400">
                  <ShieldCheck className="w-4 h-4 text-[#8BC34A]" />
                  <span>GST Registered B2B Entity</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3.5 rounded-xl bg-[#8BC34A] text-black font-orbitron font-bold text-xs uppercase tracking-wider hover:bg-[#9ECC3B] shadow-lg shadow-[#8BC34A]/20 transition-all flex items-center space-x-2"
                >
                  {loading ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Send Commercial Inquiry</span>
                      <Send className="w-4 h-4 text-black" />
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
