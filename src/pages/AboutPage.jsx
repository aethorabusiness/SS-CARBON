import React from 'react';
import { ShieldCheck, Factory, Award, Leaf, CheckCircle, ArrowRight } from 'lucide-react';

export default function AboutPage({ onOpenQuote }) {
  const values = [
    {
      title: 'Uncompromised Trust',
      desc: 'Transparent pricing structures, unadulterated chemical composition, and strict adherence to agreed commercial supply contracts.',
      icon: ShieldCheck
    },
    {
      title: 'Precision Quality',
      desc: 'ISO 9001:2015 certified laboratory protocols ensuring every metric ton meets exact ASTM particle and calorific specifications.',
      icon: Award
    },
    {
      title: 'Bulk Supply Reliability',
      desc: 'Dedicated heavy transport fleet and strategic warehousing preventing factory downtime and raw material shortages.',
      icon: Factory
    },
    {
      title: 'Eco-Green Future',
      desc: 'Advancing low-emission refining methods under our core commitment: "Less CO2. More Greenary."',
      icon: Leaf
    }
  ];

  const milestones = [
    { year: '2008', title: 'Shri Shyam & Company Established', desc: 'Started operations as a specialized regional fuel and carbon derivative trading firm.' },
    { year: '2014', title: 'Refinery Processing Plant Unveiled', desc: 'Commissioned automated carbon black micronization and fuel blending facility.' },
    { year: '2019', title: 'ISO 9001 & ISO 14001 Accreditation', desc: 'Achieved international quality management and environmental safety certification.' },
    { year: '2024', title: '100,000+ MT Milestone', desc: 'Expanded nationwide logistics network delivering to over 500 bulk industrial plants.' }
  ];

  return (
    <div className="pt-32 pb-24 space-y-24 w-full max-w-[1800px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
      
      {/* Page Header */}
      <div className="text-center max-w-4xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#8BC34A]/10 border border-[#8BC34A]/30 text-[#8BC34A] text-xs font-orbitron font-bold uppercase tracking-wider">
          <Factory className="w-4 h-4" />
          <span>Shri Shyam & Company Enterprise</span>
        </div>
        <h1 className="font-orbitron font-black text-5xl sm:text-7xl text-white tracking-tight">
          Pioneering Heavy Industrial <span className="text-eco-gradient">Carbon & Fuel</span>
        </h1>
        <p className="text-base text-gray-300">
          Shri Shyam & Company operates as a market leader in industrial carbon chemistry and commercial fuel supply, supplying high-performance raw materials to rubber, plastic, paint, and manufacturing plants.
        </p>
      </div>

      {/* Main Vision Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-[#121212] border border-[#262626] rounded-3xl p-10 sm:p-16 relative overflow-hidden">
        <div className="space-y-6">
          <h2 className="font-orbitron font-extrabold text-4xl text-white">
            Our Mission: Less CO2. More Greenary.
          </h2>
          <p className="text-base text-gray-300 leading-relaxed">
            In an era demanding both high industrial throughput and environmental stewardship, SS Carbon bridges the gap. We utilize energy-efficient carbon black processing and low-sulphur fuel blends that minimize greenhouse emissions without sacrificing industrial yield.
          </p>
          <div className="space-y-3.5 pt-2">
            <div className="flex items-center space-x-3 text-sm text-gray-200">
              <CheckCircle className="w-5 h-5 text-[#8BC34A] shrink-0" />
              <span>Direct factory-to-factory bulk transport logistics</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-200">
              <CheckCircle className="w-5 h-5 text-[#8BC34A] shrink-0" />
              <span>Strict batch Certificate of Analysis (COA) with every dispatch</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-200">
              <CheckCircle className="w-5 h-5 text-[#8BC34A] shrink-0" />
              <span>Customized ASTM grades tailored for specific compounding requirements</span>
            </div>
          </div>
          <button
            onClick={onOpenQuote}
            className="mt-6 px-8 py-4 rounded-xl bg-[#8BC34A] text-black font-orbitron font-bold text-xs uppercase tracking-wider hover:bg-[#9ECC3B] transition-all inline-flex items-center space-x-2"
          >
            <span>Partner With SS Carbon</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="relative rounded-3xl overflow-hidden border border-[#262626] h-[400px]">
          <img
            src="/assets/industrial_facility.jpg"
            alt="Refinery plant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
            <div className="bg-[#0A0A0A]/90 p-5 rounded-2xl border border-[#8BC34A]/40 w-full backdrop-blur-md">
              <div className="font-orbitron font-bold text-white text-base">Industrial Processing Unit</div>
              <div className="text-xs text-[#8BC34A] font-bold mt-0.5">Capacity: 100,000+ Metric Tons / Year</div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Grid */}
      <div className="space-y-12">
        <div className="text-center space-y-2">
          <h2 className="font-orbitron font-black text-4xl text-white">Our Core Value System</h2>
          <p className="text-xs text-gray-400 font-orbitron uppercase tracking-widest">Built On Four Pillars of Excellence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} className="bg-[#141414] border border-[#262626] p-8 rounded-3xl space-y-5 hover:border-[#8BC34A]/50 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-[#8BC34A]/10 border border-[#8BC34A]/30 flex items-center justify-center text-[#8BC34A]">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-orbitron font-bold text-lg text-white">{v.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Historical Milestones */}
      <div className="space-y-12">
        <div className="text-center space-y-2">
          <h2 className="font-orbitron font-black text-4xl text-white">Growth Timeline</h2>
          <p className="text-xs text-gray-400 font-orbitron uppercase tracking-widest">Shri Shyam & Company Corporate Journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {milestones.map((m, i) => (
            <div key={i} className="bg-[#121212] border border-[#262626] p-8 rounded-3xl relative space-y-4">
              <div className="font-orbitron font-black text-4xl text-[#8BC34A]">{m.year}</div>
              <h4 className="font-orbitron font-bold text-base text-white">{m.title}</h4>
              <p className="text-xs text-gray-400 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
