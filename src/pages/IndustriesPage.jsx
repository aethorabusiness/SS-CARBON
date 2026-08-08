import React from 'react';
import { Layers, Factory, ShieldCheck, ArrowRight, Zap, CheckCircle } from 'lucide-react';

export default function IndustriesPage({ onOpenQuote }) {
  const industries = [
    {
      id: 'rubber',
      name: 'Rubber & Tyre Industry',
      tagline: 'High Reinforcement & Tensile Strength',
      description: 'Supplying heavy-duty furnace carbon black grades (N220, N330, N550, N660) to leading tyre manufacturers, conveyor belt producers, and molded rubber component plants.',
      benefits: ['Enhances tear and abrasion resistance', 'Improves dynamic flex performance', 'Consistent structure and particle sizing'],
      recommendedGrades: ['Carbon Black N220', 'Carbon Black N330', 'Specialty Rubber Oil'],
      stats: '45,000+ MT Supplied Annually'
    },
    {
      id: 'plastic',
      name: 'Plastics & Polymers',
      tagline: 'UV Protection & Masterbatch Tinting',
      description: 'Ultra-fine dispersion carbon black for PE/PP masterbatch compounding, agricultural piping, geomembranes, and conductive plastic polymers.',
      benefits: ['Exceptional UV degradation shielding', 'Deep black jetness & color consistency', 'Smooth melt index processing'],
      recommendedGrades: ['Carbon Black N550', 'Micro Pigment Powder', 'High Jetness Masterbatch Powder'],
      stats: '300+ Plastic Compounding Units'
    },
    {
      id: 'paint',
      name: 'Paint, Coatings & Inks',
      tagline: 'Deep Jetness & Tinting Strength',
      description: 'Specialty pigment black engineered for automotive OEM refinishes, architectural coatings, anti-corrosive industrial paints, and flexographic inks.',
      benefits: ['Maximum tinting strength & undertone', 'Easy dispersibility in solvent & water systems', 'Superior weather & chemical resistance'],
      recommendedGrades: ['Carbon Pigment Powder', 'High Jetness Specialty Black'],
      stats: '115% ASTM Tinting Rating'
    },
    {
      id: 'manufacturing',
      name: 'Heavy Manufacturing & Boilers',
      tagline: 'Continuous High GCV Thermal Energy',
      description: 'Reliable bulk supply of Industrial Furnace Oil (FO 180) and Commercial Diesel Fuel for factory steam boilers, reheating furnaces, glass kilns, and generator units.',
      benefits: ['Guaranteed High Calorific Value (>10,200 kcal/kg)', 'Low water content & minimal ash buildup', 'Nationwide tanker fleet dispatch'],
      recommendedGrades: ['Furnace Oil 180 cSt', 'Industrial Diesel HSD'],
      stats: '24/7 Dispatch Fleet'
    }
  ];

  return (
    <div className="pt-32 pb-24 space-y-20 w-full max-w-[1800px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#8BC34A]/10 border border-[#8BC34A]/30 text-[#8BC34A] text-xs font-orbitron font-bold uppercase tracking-wider">
          <Factory className="w-3.5 h-3.5" />
          <span>Industrial Application Sectors</span>
        </div>
        <h1 className="font-orbitron font-black text-4xl sm:text-6xl text-white tracking-tight">
          Industries Served By <span className="text-eco-gradient">SS Carbon</span>
        </h1>
        <p className="text-sm text-gray-300">
          Providing specialized carbon chemistry and thermal fuel solutions tailored to the exacting specifications of bulk industrial buyers.
        </p>
      </div>

      {/* Industry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {industries.map((ind) => (
          <div
            key={ind.id}
            className="bg-[#121212] border border-[#262626] rounded-3xl p-8 hover:border-[#8BC34A]/50 transition-all flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded bg-[#8BC34A]/10 border border-[#8BC34A]/30 text-[#8BC34A] font-orbitron text-xs font-bold uppercase">
                  {ind.stats}
                </span>
              </div>

              <div>
                <h3 className="font-orbitron font-extrabold text-2xl text-white">{ind.name}</h3>
                <p className="text-xs text-[#8BC34A] font-semibold uppercase tracking-wider mt-1">{ind.tagline}</p>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed">
                {ind.description}
              </p>

              <div className="space-y-2 pt-2">
                <div className="text-xs font-orbitron font-bold text-gray-200 uppercase">Key Technical Advantages:</div>
                {ind.benefits.map((b, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs text-gray-300">
                    <CheckCircle className="w-4 h-4 text-[#8BC34A] shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#1A1A1A] p-4 rounded-xl border border-[#262626] space-y-1">
                <div className="text-[11px] font-orbitron font-bold text-gray-400 uppercase">Recommended Products:</div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {ind.recommendedGrades.map((rg, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-[#262626] text-white text-[11px] font-medium border border-[#333]">
                      {rg}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={onOpenQuote}
              className="w-full py-3 rounded-xl bg-[#8BC34A] text-black font-orbitron font-bold text-xs uppercase tracking-wider hover:bg-[#9ECC3B] transition-all flex items-center justify-center space-x-2"
            >
              <span>Inquire For {ind.name}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}
