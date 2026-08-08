import React from 'react';
import HeroCanvas3D from '../components/HeroCanvas3D';
import { ArrowRight, ShieldCheck, Factory, Award, Truck, ChevronRight, Zap, Sparkles, Layers } from 'lucide-react';

export default function HomePage({ setActivePage, onOpenQuote }) {
  const products = [
    {
      id: 'carbon-black',
      name: 'Carbon Black Powder',
      subtitle: 'Grades N220, N330, N550, N660',
      image: '/assets/product_carbon_black.jpg',
      description: 'High jetness, superior reinforcement carbon black engineered for rubber compounds, tyre treads, plastics, and industrial masterbatches.',
      specs: ['Iodine Abs: 43 - 121 g/kg', 'DBP Abs: 68 - 114 cm³/100g', 'Purity: > 99.5%'],
      badge: 'Bestseller Grade'
    },
    {
      id: 'furnace-oil',
      name: 'Furnace Oil (FO 180)',
      subtitle: 'Heavy Industrial Boiler Fuel',
      image: '/assets/product_furnace_oil.jpg',
      description: 'High-calorific heavy fuel oil processed for industrial boilers, glass furnaces, thermic fluid heaters, and heavy metallurgy kilns.',
      specs: ['Viscosity: 180 cSt @ 50°C', 'Gross Calorific Value: 10,200 kcal/kg', 'Low Sulphur Available'],
      badge: 'High GCV Energy'
    },
    {
      id: 'diesel-oil',
      name: 'Industrial Diesel Fuel',
      subtitle: 'HSD Commercial Grade Fuel',
      image: '/assets/product_diesel_oil.jpg',
      description: 'Low-emission refined industrial diesel for captive power generators, heavy logistics fleets, earthmovers, and factory equipment.',
      specs: ['Cetane Index: > 51', 'Flash Point: > 66°C', 'Clean Combustion'],
      badge: 'Pure Refined'
    },
    {
      id: 'pigment-powder',
      name: 'Carbon Pigment Powder',
      subtitle: 'Ultra-fine Coating & Tinting Powder',
      image: '/assets/product_pigment_powder.jpg',
      description: 'Specialty micro-fine pigment powder providing deep blackness, UV stability, and excellent dispersibility in automotive paints & coatings.',
      specs: ['Particle Size: 18 - 25 nm', 'Tinting Strength: 115%', 'High Dispersion'],
      badge: 'Specialty Grade'
    }
  ];

  const benefits = [
    {
      icon: ShieldCheck,
      title: 'ISO & ASTM Certified',
      description: 'Strict batch testing ensuring 99.8% chemical purity and ASTM standard compliance for every bulk shipment.'
    },
    {
      icon: Truck,
      title: 'Bulk Fleet Delivery',
      description: 'Dedicated fleet of heavy tankers and container logistics dispatching 100,000+ MT annually across nationwide factories.'
    },
    {
      icon: Factory,
      title: 'Direct Refinery Pricing',
      description: 'Eliminate middleman margins with direct plant pricing from Shri Shyam & Company manufacturing hubs.'
    },
    {
      icon: Zap,
      title: 'Eco-Green Commitment',
      description: 'Advanced carbon capture technology aligned with our founding motto: "Less CO2. More Greenary."'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-28 pb-16 w-full">
      
      {/* HERO SECTION - MOBILE WEB OPTIMIZED */}
      <section className="relative min-h-[90vh] sm:min-h-[92vh] flex items-center justify-center pt-28 sm:pt-32 pb-14 sm:pb-20 overflow-hidden w-full">
        {/* 3D Particle Sphere Canvas Background */}
        <HeroCanvas3D />

        {/* Ambient Dark Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-[#0A0A0A]/30 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-carbon-mesh opacity-40 pointer-events-none z-10" />

        <div className="relative z-20 w-full max-w-[1800px] mx-auto px-4 sm:px-10 lg:px-16 xl:px-24 text-center">
          
          {/* Trust Badge Header */}
          <div className="inline-flex items-center space-x-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#1C1C1C]/90 border border-[#8BC34A]/40 backdrop-blur-md mb-6 sm:mb-8 shadow-2xl animate-fadeIn max-w-full">
            <span className="font-orbitron text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white truncate">
              Shri Shyam & Company Industrial Supply Desk
            </span>
          </div>

          {/* Main Title - Mobile Fluid Scale */}
          <h1 className="font-orbitron font-black text-4xl sm:text-7xl lg:text-9xl tracking-tight text-white uppercase mb-4 sm:mb-6 leading-none drop-shadow-2xl">
            SS <span className="text-eco-gradient">CARBON</span>
          </h1>

          {/* Subtitle / Tagline */}
          <p className="font-rajdhani font-bold text-xl sm:text-3xl lg:text-4xl text-gray-200 tracking-wider mb-4 sm:mb-6">
            Less CO2. <span className="text-[#8BC34A]">More Greenary.</span>
          </p>

          <p className="max-w-3xl mx-auto text-xs sm:text-base text-gray-300 font-normal leading-relaxed mb-8 sm:mb-12 px-2">
            India's premier B2B manufacturer and bulk supplier of high-purity Carbon Black Powder, Industrial Furnace Oil, Commercial Diesel, and Carbon Pigments for industrial plants and factories.
          </p>

          {/* Hero CTAs - Mobile Responsive Stack */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 px-4 sm:px-0">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-xl bg-gradient-to-r from-[#8BC34A] to-[#689F38] text-black font-orbitron font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-2xl shadow-[#8BC34A]/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center space-x-2 group"
            >
              <span>Get Instant Bulk Quote</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => setActivePage('products')}
              className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-xl bg-[#141414] border border-[#262626] text-white font-orbitron font-bold text-xs sm:text-sm uppercase tracking-wider hover:border-[#8BC34A] hover:bg-[#1C1C1C] transition-all flex items-center justify-center space-x-2"
            >
              <span>Explore Products</span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#8BC34A]" />
            </button>
          </div>

          {/* Key Metrics Bar - Mobile 2-Col Grid */}
          <div className="mt-12 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-6xl mx-auto border-t border-[#262626] pt-8 sm:pt-10">
            <div className="p-3 sm:p-4 bg-[#121212]/80 rounded-xl sm:rounded-2xl border border-[#262626]">
              <div className="font-orbitron font-extrabold text-xl sm:text-4xl text-[#8BC34A]">100,000+</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-400 font-bold mt-1">MT Output / Yr</div>
            </div>
            <div className="p-3 sm:p-4 bg-[#121212]/80 rounded-xl sm:rounded-2xl border border-[#262626]">
              <div className="font-orbitron font-extrabold text-xl sm:text-4xl text-white">500+</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-400 font-bold mt-1">B2B Factories</div>
            </div>
            <div className="p-3 sm:p-4 bg-[#121212]/80 rounded-xl sm:rounded-2xl border border-[#262626]">
              <div className="font-orbitron font-extrabold text-xl sm:text-4xl text-[#8BC34A]">99.8%</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-400 font-bold mt-1">ASTM Purity</div>
            </div>
            <div className="p-3 sm:p-4 bg-[#121212]/80 rounded-xl sm:rounded-2xl border border-[#262626]">
              <div className="font-orbitron font-extrabold text-xl sm:text-4xl text-white">ISO 9001</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-400 font-bold mt-1">Certified Unit</div>
            </div>
          </div>

        </div>
      </section>

      {/* PRODUCTS OVERVIEW SECTION */}
      <section className="w-full max-w-[1800px] mx-auto px-4 sm:px-10 lg:px-16 xl:px-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-14 border-b border-[#1C1C1C] pb-6 sm:pb-8">
          <div>
            <div className="flex items-center space-x-2 text-[#8BC34A] text-xs font-orbitron font-bold uppercase tracking-widest mb-2">
              <Layers className="w-4 h-4" />
              <span>Industrial Portfolio</span>
            </div>
            <h2 className="font-orbitron font-black text-2xl sm:text-5xl text-white tracking-wide">
              Core Products & Fuel Supply
            </h2>
          </div>
          <button
            onClick={() => setActivePage('products')}
            className="mt-3 md:mt-0 inline-flex items-center space-x-2 text-xs font-bold font-orbitron text-[#8BC34A] hover:text-[#9ECC3B] uppercase tracking-wider"
          >
            <span>View Full Technical Specs</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="metallic-card rounded-2xl sm:rounded-3xl overflow-hidden group flex flex-col justify-between"
            >
              {/* Product Image Container */}
              <div className="relative h-44 sm:h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded bg-[#0A0A0A]/85 border border-[#8BC34A]/50 text-[#8BC34A] font-orbitron text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                  {item.badge}
                </span>
              </div>

              {/* Product Content */}
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-4 sm:space-y-5">
                <div>
                  <h3 className="font-orbitron font-extrabold text-base sm:text-xl text-white group-hover:text-[#8BC34A] transition-colors mb-1">
                    {item.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs font-bold text-[#8BC34A] uppercase tracking-wider mb-2">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Specs List */}
                <div className="bg-[#1C1C1C] p-3 rounded-xl border border-[#262626] space-y-1">
                  {item.specs.map((spec, i) => (
                    <div key={i} className="flex items-center text-[11px] sm:text-xs text-gray-300 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8BC34A] mr-2 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    setActivePage('products');
                  }}
                  className="w-full py-2.5 sm:py-3 rounded-xl bg-[#262626] border border-[#333] text-white font-orbitron font-bold text-xs uppercase tracking-wider hover:bg-[#8BC34A] hover:text-black transition-all flex items-center justify-center space-x-1.5"
                >
                  <span>Product Specs</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT & TRUST OVERVIEW */}
      <section className="w-full max-w-[1800px] mx-auto px-4 sm:px-10 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center bg-[#121212] border border-[#262626] rounded-2xl sm:rounded-3xl p-6 sm:p-14 relative overflow-hidden">
          <div className="space-y-5 sm:space-y-8">
            <div className="inline-flex items-center space-x-2 text-[#8BC34A] text-xs font-orbitron font-bold uppercase tracking-widest">
              <Factory className="w-4 h-4" />
              <span>About Shri Shyam & Company</span>
            </div>

            <h2 className="font-orbitron font-black text-2xl sm:text-5xl text-white leading-tight">
              Pioneering Industrial Strength & Eco-Green Standards
            </h2>

            <p className="text-xs sm:text-base text-gray-300 leading-relaxed">
              Founded under Shri Shyam & Company, SS Carbon stands as a benchmark in industrial carbon refining and commercial fuel distribution. We empower heavy manufacturing facilities with reliable, unadulterated bulk raw materials.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#1A1A1A] p-4 rounded-xl border border-[#262626] space-y-1">
                <div className="font-orbitron font-bold text-sm sm:text-base text-[#8BC34A]">Reliable Tanker Fleet</div>
                <p className="text-xs text-gray-400">Guaranteed 24/7 uninterrupted fuel and carbon powder dispatch.</p>
              </div>
              <div className="bg-[#1A1A1A] p-4 rounded-xl border border-[#262626] space-y-1">
                <div className="font-orbitron font-bold text-sm sm:text-base text-[#8BC34A]">Laboratory Tested</div>
                <p className="text-xs text-gray-400">Every batch issued with Certificate of Analysis (COA).</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setActivePage('about')}
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 rounded-xl bg-[#8BC34A] text-black font-orbitron font-bold text-xs uppercase tracking-wider hover:bg-[#9ECC3B] transition-all inline-flex items-center justify-center space-x-2"
              >
                <span>Read Full Company Profile</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#262626] h-64 sm:h-[440px] group">
            <img
              src="/assets/industrial_facility.jpg"
              alt="SS Carbon Industrial Plant"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0A0A0A]/90 border border-[#8BC34A]/40 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-orbitron font-bold text-xs sm:text-base text-white">Refinery & Processing Facility</h4>
                  <p className="text-[10px] sm:text-xs text-gray-400">ISO 9001:2015 Accredited Unit</p>
                </div>
                <span className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-lg bg-[#8BC34A]/20 text-[#8BC34A] font-orbitron text-[10px] sm:text-xs font-bold">ACTIVE PLANT</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="w-full max-w-[1800px] mx-auto px-4 sm:px-10 lg:px-16 xl:px-24">
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-16 space-y-2.5">
          <div className="inline-flex items-center space-x-2 text-[#8BC34A] text-xs font-orbitron font-bold uppercase tracking-widest">
            <Award className="w-4 h-4" />
            <span>Core Pillars</span>
          </div>
          <h2 className="font-orbitron font-black text-2xl sm:text-5xl text-white">
            Why Factory Leaders Choose SS Carbon
          </h2>
          <p className="text-xs sm:text-base text-gray-400">
            Engineered for high performance, zero batch variation, and direct commercial pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="bg-[#141414] border border-[#262626] p-6 sm:p-8 rounded-2xl sm:rounded-3xl hover:border-[#8BC34A]/60 transition-all group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#8BC34A]/10 border border-[#8BC34A]/30 flex items-center justify-center text-[#8BC34A] mb-4 sm:mb-6 group-hover:bg-[#8BC34A] group-hover:text-black transition-colors">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h3 className="font-orbitron font-bold text-base sm:text-lg text-white mb-2 group-hover:text-[#8BC34A] transition-colors">
                  {b.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {b.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* LEAD GENERATION CTA BANNER */}
      <section className="w-full max-w-[1800px] mx-auto px-4 sm:px-10 lg:px-16 xl:px-24">
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#1C1C1C] via-[#141414] to-[#0A0A0A] border-2 border-[#8BC34A]/60 p-6 sm:p-16 overflow-hidden text-center space-y-5 sm:space-y-8 shadow-2xl shadow-[#8BC34A]/10">
          
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#8BC34A]/20 border border-[#8BC34A]/40 text-[#8BC34A] text-[11px] sm:text-xs font-orbitron font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Instant Commercial Inquiry</span>
          </div>

          <h2 className="font-orbitron font-black text-2xl sm:text-6xl text-white tracking-wide max-w-4xl mx-auto leading-snug">
            Ready to Optimize Your Plant Raw Material & Fuel Costs?
          </h2>

          <p className="max-w-2xl mx-auto text-xs sm:text-base text-gray-300">
            Get instant bulk quotations with customized ASTM lab certificates and direct factory dispatch timelines within 24 hours.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 rounded-xl bg-[#8BC34A] text-black font-orbitron font-extrabold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#9ECC3B] shadow-2xl shadow-[#8BC34A]/30 transition-all flex items-center justify-center space-x-2"
            >
              <span>Get Instant Quote</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button
              onClick={() => setActivePage('contact')}
              className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-xl bg-[#262626] text-white font-orbitron font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#333] transition-all"
            >
              Contact Sales Desk
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
