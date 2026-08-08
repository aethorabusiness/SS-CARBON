import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle, ShieldCheck, Globe, Users, ExternalLink } from 'lucide-react';

export default function ContactPage({ onOpenQuote, theme }) {
  const isDark = theme === 'dark';

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
    <div className="pt-32 pb-24 space-y-16 w-full max-w-[1800px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className={`inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border text-xs font-orbitron font-bold uppercase tracking-wider ${
          isDark ? 'bg-[#8BC34A]/10 border-[#8BC34A]/30 text-[#8BC34A]' : 'bg-[#8BC34A]/15 border-[#8BC34A]/40 text-[#65A30D]'
        }`}>
          <Mail className="w-3.5 h-3.5" />
          <span>Shri Shyam & Co. Commercial Desk</span>
        </div>
        <h1 className={`font-orbitron font-black text-4xl sm:text-6xl tracking-tight ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          Contact <span className="text-eco-gradient">SS CARBON</span>
        </h1>
        <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
          Get in touch with Shri Shyam & Co. management and sales executives for bulk pricing, contract supply terms, or sample dispatch requests.
        </p>
      </div>

      {/* Main Grid: Info Sidebar & RFQ Form */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        
        {/* Contact Info Sidebar */}
        <div className="space-y-6 lg:col-span-1">

          {/* Official Business Card Image Box */}
          <div className={`border rounded-3xl p-5 space-y-4 shadow-xl transition-all ${
            isDark ? 'bg-[#121212] border-[#262626]' : 'bg-white border-slate-200 shadow-slate-200'
          }`}>
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-[#262626] pb-3">
              <span className={`font-orbitron font-bold text-xs uppercase tracking-wider ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Official Business Card
              </span>
              <span className="px-2.5 py-0.5 rounded bg-[#8BC34A]/20 text-[#8BC34A] font-orbitron text-[10px] font-bold">
                SHRI SHYAM & CO.
              </span>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-[#262626] group shadow-md">
              <img
                src="/assets/business_card.jpg"
                alt="Shri Shyam & Co. Official Business Card"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
          {/* Detailed Contact Points */}
          <div className={`border rounded-3xl p-6 space-y-6 shadow-xl ${
            isDark ? 'bg-[#121212] border-[#262626]' : 'bg-white border-slate-200 shadow-slate-200'
          }`}>
            <h3 className={`font-orbitron font-bold text-lg border-b pb-3 ${
              isDark ? 'text-white border-[#262626]' : 'text-slate-900 border-slate-200'
            }`}>
              Company Directory & Key Contacts
            </h3>

            {/* Leadership Executives */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-xs font-orbitron font-bold text-[#8BC34A]">
                <Users className="w-4 h-4" />
                <span>MANAGEMENT & DIRECTORS</span>
              </div>
              <div className={`p-3 rounded-xl border text-xs font-bold font-orbitron space-y-1 ${
                isDark ? 'bg-[#1A1A1A] border-[#262626] text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
              }`}>
                <div>• RP KHUNTETA</div>
                <div>• SAURABH KHUNTETA</div>
                <div>• GAURAV KHUNTETA</div>
              </div>
            </div>

            <div className="space-y-4 text-xs">
              
              {/* Phone Numbers */}
              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-xl bg-[#8BC34A]/10 border border-[#8BC34A]/30 flex items-center justify-center text-[#8BC34A] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className={`font-orbitron font-bold uppercase mb-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>Phone / Mobile Desk</div>
                  <a href="tel:+919649076667" className={`block hover:underline font-semibold ${isDark ? 'text-gray-200' : 'text-slate-700'}`}>+91-9649076667</a>
                  <a href="tel:+919829011870" className={`block hover:underline font-semibold ${isDark ? 'text-gray-200' : 'text-slate-700'}`}>+91-9829011870</a>
                </div>
              </div>

              {/* Emails */}
              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-xl bg-[#8BC34A]/10 border border-[#8BC34A]/30 flex items-center justify-center text-[#8BC34A] shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className={`font-orbitron font-bold uppercase mb-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>Official Email</div>
                  <a href="mailto:sales@sscompany.in" className={`block hover:underline ${isDark ? 'text-gray-200' : 'text-slate-700'}`}>sales@sscompany.in</a>
                  <a href="mailto:khuntetasr@gmail.com" className={`block hover:underline ${isDark ? 'text-gray-200' : 'text-slate-700'}`}>khuntetasr@gmail.com</a>
                </div>
              </div>

              {/* Factory Address */}
              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-xl bg-[#8BC34A]/10 border border-[#8BC34A]/30 flex items-center justify-center text-[#8BC34A] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className={`font-orbitron font-bold uppercase mb-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>Factory / Plant Address</div>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                    G-322 Manda II, RIICO Industrial Area, Jaipur, Rajasthan, India
                  </p>
                </div>
              </div>

              {/* Office Address */}
              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-xl bg-[#8BC34A]/10 border border-[#8BC34A]/30 flex items-center justify-center text-[#8BC34A] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className={`font-orbitron font-bold uppercase mb-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>Corporate Office</div>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                    B 11 Sain Colony, Kabir Marg, Bani Park, Jaipur, Rajasthan, India
                  </p>
                </div>
              </div>

              {/* Web Portal */}
              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-xl bg-[#8BC34A]/10 border border-[#8BC34A]/30 flex items-center justify-center text-[#8BC34A] shrink-0 mt-0.5">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <div className={`font-orbitron font-bold uppercase mb-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>Official Website</div>
                  <a href="https://www.sscompany.in" target="_blank" rel="noopener noreferrer" className="text-[#8BC34A] font-semibold hover:underline flex items-center space-x-1">
                    <span>www.sscompany.in</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/919649076667?text=Hello%20Shri%20Shyam%20%26%20Co.,%20I%20want%20to%20inquire%20about%20bulk%20supply."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#8BC34A] text-black font-orbitron font-bold text-xs uppercase tracking-wider hover:bg-[#9ECC3B] transition-all flex items-center justify-center space-x-2 shadow-lg shadow-[#8BC34A]/20"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>Chat Direct on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* B2B Commercial Inquiry Form */}
        <div className={`lg:col-span-2 border rounded-3xl p-8 space-y-6 shadow-xl ${
          isDark ? 'bg-[#121212] border-[#262626]' : 'bg-white border-slate-200 shadow-slate-200'
        }`}>
          <div className="border-b border-slate-200 dark:border-[#262626] pb-4">
            <h3 className={`font-orbitron font-extrabold text-2xl ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Send Official B2B Commercial Inquiry
            </h3>
            <p className={`text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
              Direct response from RP Khunteta, Saurabh Khunteta & Gaurav Khunteta with GST invoice quotes & ASTM lab certificates within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 text-center space-y-4">
              <CheckCircle className="w-12 h-12 text-[#8BC34A] mx-auto animate-bounce" />
              <h4 className={`font-orbitron font-bold text-xl ${isDark ? 'text-white' : 'text-slate-900'}`}>Inquiry Successfully Submitted!</h4>
              <p className={`text-xs max-w-md mx-auto ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                Thank you <span className="text-[#8BC34A] font-bold">{formData.name}</span>. Our commercial desk manager will review your requirement for <span className="text-[#8BC34A] font-bold">{formData.product}</span> ({formData.volume}) and email direct factory rates to <span className="font-semibold">{formData.email}</span>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-xl bg-[#8BC34A] text-black font-orbitron font-bold text-xs uppercase shadow-md"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-orbitron uppercase mb-1 font-semibold ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>Company / Factory Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Apex Rubber Industries Ltd"
                    className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-[#8BC34A] ${
                      isDark ? 'bg-[#1C1C1C] border-[#262626] text-white placeholder-gray-500' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-orbitron uppercase mb-1 font-semibold ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>Contact Person Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Purchase Director"
                    className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-[#8BC34A] ${
                      isDark ? 'bg-[#1C1C1C] border-[#262626] text-white placeholder-gray-500' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-orbitron uppercase mb-1 font-semibold ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>Mobile / Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91-9649076667"
                    className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-[#8BC34A] ${
                      isDark ? 'bg-[#1C1C1C] border-[#262626] text-white placeholder-gray-500' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-orbitron uppercase mb-1 font-semibold ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>Corporate Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sales@sscompany.in"
                    className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-[#8BC34A] ${
                      isDark ? 'bg-[#1C1C1C] border-[#262626] text-white placeholder-gray-500' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-orbitron uppercase mb-1 font-semibold ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>Product Requirement *</label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-[#8BC34A] ${
                      isDark ? 'bg-[#1C1C1C] border-[#262626] text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  >
                    <option value="Carbon Black Powder">Carbon Black Powder (N220 / N330 / N550)</option>
                    <option value="Furnace Oil">Industrial Furnace Oil (FO 180 cSt)</option>
                    <option value="Industrial Diesel">High Speed Industrial Diesel (HSD)</option>
                    <option value="Pigment Powder">Carbon Pigment Powder</option>
                  </select>
                </div>

                <div>
                  <label className={`block text-xs font-orbitron uppercase mb-1 font-semibold ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>Monthly Requirement Volume</label>
                  <input
                    type="text"
                    value={formData.volume}
                    onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                    placeholder="e.g. 50 MT / 100 KL per month"
                    className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-[#8BC34A] ${
                      isDark ? 'bg-[#1C1C1C] border-[#262626] text-white placeholder-gray-500' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className={`block text-xs font-orbitron uppercase mb-1 font-semibold ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>Specific Requirement Details</label>
                <textarea
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Mention delivery location, target ASTM grade requirement, or trial order timeline..."
                  className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-[#8BC34A] ${
                    isDark ? 'bg-[#1C1C1C] border-[#262626] text-white placeholder-gray-500' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                  }`}
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-1.5 text-xs text-gray-400">
                  <ShieldCheck className="w-4 h-4 text-[#8BC34A]" />
                  <span>GST Registered Supplier (Shri Shyam & Co.)</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#8BC34A] text-black font-orbitron font-bold text-xs uppercase tracking-wider hover:bg-[#9ECC3B] shadow-lg shadow-[#8BC34A]/20 transition-all flex items-center justify-center space-x-2"
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
