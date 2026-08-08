import React, { useState } from 'react';
import { Download, FileText, CheckCircle, ArrowRight, Layers, Flame, Droplet, Sparkles, Filter } from 'lucide-react';

export default function ProductsPage({ onOpenQuote }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const productsList = [
    {
      id: 'carbon-black-n220',
      category: 'carbon-black',
      name: 'Carbon Black Powder (N220 Grade)',
      image: '/assets/product_carbon_black.jpg',
      tagline: 'High Reinforcement & Abrasion Resistance',
      description: 'N220 is an intermediate super abrasion furnace (ISAF) grade offering exceptional tensile strength, tear resistance, and high abrasion performance. Ideal for premium tyre treads and heavy industrial rubber goods.',
      specifications: [
        { label: 'Iodine Adsorption Number', value: '121 ± 5 g/kg' },
        { label: 'DBP Absorption Number', value: '114 ± 5 cm³/100g' },
        { label: 'Compressed DBP Absorption', value: '98 ± 5 cm³/100g' },
        { label: 'NSA Multipoint', value: '119 m²/g' },
        { label: 'Ash Content', value: '≤ 0.5%' },
        { label: 'Heat Loss @ 105°C', value: '≤ 1.0%' }
      ],
      useCases: ['Passenger & Truck Tyre Treads', 'Conveyor Belting Compounds', 'High-wear Rubber Seals & Hoses', 'Technical Molded Rubber Parts']
    },
    {
      id: 'carbon-black-n330',
      category: 'carbon-black',
      name: 'Carbon Black Powder (N330 Grade)',
      image: '/assets/product_carbon_black.jpg',
      tagline: 'Universal High Abrasion Furnace (HAF)',
      description: 'The industry standard general-purpose carbon black. Provides excellent balance between reinforcement, hysteresis, and processability across rubber compounds and plastic masterbatches.',
      specifications: [
        { label: 'Iodine Adsorption Number', value: '82 ± 5 g/kg' },
        { label: 'DBP Absorption Number', value: '102 ± 5 cm³/100g' },
        { label: 'Compressed DBP Absorption', value: '88 ± 5 cm³/100g' },
        { label: 'NSA Multipoint', value: '78 m²/g' },
        { label: 'Ash Content', value: '≤ 0.45%' },
        { label: 'Sieve Residue (325 Mesh)', value: '≤ 0.02%' }
      ],
      useCases: ['Tyre Sidewalls & Carcass Compounds', 'Solid Tyres & Cable Sheathing', 'Plastic Masterbatch Compounding', 'Industrial Rubber Extrusions']
    },
    {
      id: 'furnace-oil-fo180',
      category: 'furnace-oil',
      name: 'Industrial Furnace Oil (FO 180 cSt)',
      image: '/assets/product_furnace_oil.jpg',
      tagline: 'High GCV Heavy Boiler Fuel',
      description: 'Refined heavy petroleum distillate designed for high-capacity industrial boilers, glass melting kilns, thermic fluid heaters, and metallurgical furnaces requiring high heat output.',
      specifications: [
        { label: 'Kinematic Viscosity @ 50°C', value: '180 cSt max' },
        { label: 'Gross Calorific Value (GCV)', value: '10,200 kcal/kg min' },
        { label: 'Flash Point (Pensky Martens)', value: '> 66°C' },
        { label: 'Water Content', value: '< 1.0% v/v' },
        { label: 'Sulphur Content', value: 'Standard / Low-Sulphur Options' },
        { label: 'Ash Content', value: '< 0.1% w/w' }
      ],
      useCases: ['Steam Generation Boilers', 'Glass & Ceramic Melting Furnaces', 'Chemical Processing Plants', 'Thermic Fluid & Reheating Kilns']
    },
    {
      id: 'industrial-diesel-hsd',
      category: 'industrial-diesel',
      name: 'High-Speed Industrial Diesel (HSD)',
      image: '/assets/product_diesel_oil.jpg',
      tagline: 'Clean Burning Commercial Fuel',
      description: 'Ultra-pure commercial grade diesel fuel for captive power generators, heavy logistics trucks, earthmoving machinery, and factory utility backup generators.',
      specifications: [
        { label: 'Cetane Index', value: '51 min' },
        { label: 'Density @ 15°C', value: '820 - 845 kg/m³' },
        { label: 'Flash Point (Abel)', value: '> 35°C' },
        { label: 'Distillation 95% Recovered', value: '360°C max' },
        { label: 'Total Sulphur', value: '< 10 mg/kg (BS VI Standard)' },
        { label: 'Viscosity @ 40°C', value: '2.0 - 4.5 cSt' }
      ],
      useCases: ['Factory Captive DG Sets', 'Heavy Mining & Fleet Logistics', 'Construction Heavy Equipment', 'Agricultural Processing Plants']
    },
    {
      id: 'pigment-powder-coating',
      category: 'pigment-powder',
      name: 'Ultra-Fine Carbon Pigment Powder',
      image: '/assets/product_pigment_powder.jpg',
      tagline: 'High Jetness Paint & Coating Grade',
      description: 'Micro-sized carbon black pigment engineered for extreme jetness, UV resistance, and weatherability in industrial paints, automotive OEM coatings, and printing inks.',
      specifications: [
        { label: 'Primary Particle Size', value: '18 ± 2 nm' },
        { label: 'Tinting Strength', value: '118% ASTM standard' },
        { label: 'pH Value', value: '7.5 - 9.0' },
        { label: 'Oil Absorption', value: '120 g/100g' },
        { label: 'Volatile Matter', value: '1.2% max' },
        { label: 'Purity Level', value: '99.9%' }
      ],
      useCases: ['Automotive OEM & Refinish Paints', 'Plastics & Film Masterbatches', 'Industrial Protective Coatings', 'Printing Inks & Synthetic Leather']
    }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? productsList
    : productsList.filter(p => p.category === selectedCategory);

  const handleDownloadSpecSheet = (productName) => {
    // Generate simulated PDF text download
    const element = document.createElement("a");
    const file = new Blob([
      `===================================================\nSS CARBON (SHRI SHYAM & COMPANY)\nTECHNICAL DATASHEET & CERTIFICATE OF ANALYSIS\n===================================================\nProduct: ${productName}\nISO 9001:2015 Certified Manufacturing Facility\nASTM Standard Tested\n\nQuality Assurance Desk: supply@sscarbon.com\nHead Office: New Delhi, India\n===================================================`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${productName.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_specsheet.txt`;
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="pt-32 pb-24 space-y-20 w-full max-w-[1800px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#8BC34A]/10 border border-[#8BC34A]/30 text-[#8BC34A] text-xs font-orbitron font-bold uppercase tracking-wider">
          <Layers className="w-3.5 h-3.5" />
          <span>Complete Technical Catalog</span>
        </div>
        <h1 className="font-orbitron font-black text-4xl sm:text-6xl text-white tracking-tight">
          Industrial Products & <span className="text-eco-gradient">Specifications</span>
        </h1>
        <p className="text-sm text-gray-300">
          Browse our certified grades for Carbon Black, Heavy Furnace Oil, Industrial Diesel, and Specialty Carbon Pigments. All shipments include batch COA reports.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 bg-[#121212] p-2 rounded-2xl border border-[#262626] max-w-3xl mx-auto">
        {[
          { id: 'all', label: 'All Products' },
          { id: 'carbon-black', label: 'Carbon Black Powder' },
          { id: 'furnace-oil', label: 'Furnace Oil' },
          { id: 'industrial-diesel', label: 'Industrial Diesel' },
          { id: 'pigment-powder', label: 'Pigment Powder' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedCategory(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs font-orbitron font-bold uppercase tracking-wider transition-all ${
              selectedCategory === tab.id
                ? 'bg-[#8BC34A] text-black shadow-lg shadow-[#8BC34A]/20'
                : 'text-gray-400 hover:text-white hover:bg-[#1C1C1C]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Product List Cards */}
      <div className="space-y-12">
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            className="bg-[#121212] border border-[#262626] rounded-3xl p-6 sm:p-8 hover:border-[#8BC34A]/50 transition-all space-y-6"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              
              {/* Image & Title */}
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden h-56 border border-[#262626]">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-lg bg-[#0A0A0A]/90 backdrop-blur-md border border-[#8BC34A]/40 text-[#8BC34A] font-orbitron text-xs font-bold uppercase">
                    ASTM Standard Grade
                  </div>
                </div>

                <div>
                  <h3 className="font-orbitron font-extrabold text-2xl text-white">{p.name}</h3>
                  <p className="text-xs text-[#8BC34A] font-semibold uppercase tracking-wider mt-1">{p.tagline}</p>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed">
                  {p.description}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={onOpenQuote}
                    className="flex-1 py-3 px-4 rounded-xl bg-[#8BC34A] text-black font-orbitron font-bold text-xs uppercase tracking-wider hover:bg-[#9ECC3B] transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleDownloadSpecSheet(p.name)}
                    className="py-3 px-4 rounded-xl bg-[#1C1C1C] border border-[#333] text-gray-300 font-orbitron font-bold text-xs uppercase tracking-wider hover:text-white hover:border-[#8BC34A] transition-all flex items-center justify-center space-x-1.5"
                  >
                    <Download className="w-4 h-4 text-[#8BC34A]" />
                    <span>Spec Sheet</span>
                  </button>
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div className="bg-[#1A1A1A] p-5 rounded-2xl border border-[#262626] space-y-3">
                <h4 className="font-orbitron font-bold text-sm text-white uppercase tracking-wider border-b border-[#262626] pb-2.5 flex items-center space-x-2">
                  <FileText className="w-4 h-4 text-[#8BC34A]" />
                  <span>Technical Data Sheet (TDS)</span>
                </h4>
                <div className="space-y-2 text-xs">
                  {p.specifications.map((spec, idx) => (
                    <div key={idx} className="flex justify-between items-center py-1 border-b border-[#262626]/50">
                      <span className="text-gray-400 font-medium">{spec.label}</span>
                      <span className="text-[#8BC34A] font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Primary Industrial Use Cases */}
              <div className="bg-[#1A1A1A] p-5 rounded-2xl border border-[#262626] space-y-3">
                <h4 className="font-orbitron font-bold text-sm text-white uppercase tracking-wider border-b border-[#262626] pb-2.5">
                  Target Industrial Applications
                </h4>
                <div className="space-y-2.5">
                  {p.useCases.map((uc, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-xs text-gray-300">
                      <CheckCircle className="w-4 h-4 text-[#8BC34A] shrink-0 mt-0.5" />
                      <span>{uc}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-[#262626] text-[11px] text-gray-400">
                  ⚡ Packaging: Available in 25 kg paper bags, 500 kg Jumbo Bags, or Tanker Loads.
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
