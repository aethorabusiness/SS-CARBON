import React from 'react';
import { ShieldCheck, Award, FileText, CheckCircle, ArrowRight, Zap, Microscope, Leaf } from 'lucide-react';

export default function QualityPage({ onOpenQuote }) {
  const steps = [
    {
      step: '01',
      title: 'Raw Stock Verification',
      desc: 'Rigorous spectral testing of incoming petroleum feedstock and crude carbon derivatives before processing.'
    },
    {
      step: '02',
      title: 'Micronization & Blending Control',
      desc: 'Automated furnace temperature and airflow control ensuring exact particle structure and surface area formation.'
    },
    {
      step: '03',
      title: 'In-House Laboratory Spectrometry',
      desc: 'Batch testing for Iodine Adsorption, DBP Absorption, Moisture content, and Ash residue according to ASTM standards.'
    },
    {
      step: '04',
      title: 'COA Certification Issuance',
      desc: 'Generating formal Certificate of Analysis with exact technical metrics attached to every tanker or bag batch.'
    },
    {
      step: '05',
      title: 'Sealed Dispatch & Delivery',
      desc: 'Sealed container bags and tamper-evident fuel tankers dispatched directly to client factory gates.'
    }
  ];

  return (
    <div className="pt-32 pb-24 space-y-20 w-full max-w-[1800px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#8BC34A]/10 border border-[#8BC34A]/30 text-[#8BC34A] text-xs font-orbitron font-bold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Quality & Certification Assurance</span>
        </div>
        <h1 className="font-orbitron font-black text-4xl sm:text-6xl text-white tracking-tight">
          Uncompromising <span className="text-eco-gradient">Quality Control</span>
        </h1>
        <p className="text-sm text-gray-300">
          Shri Shyam & Company operates under international ISO 9001:2015 standards, ensuring zero batch variation and 99.8% chemical purity across all industrial product dispatches.
        </p>
      </div>

      {/* ISO Badges Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-[#121212] border border-[#262626] rounded-3xl p-8 sm:p-12 relative overflow-hidden">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-[#8BC34A]/20 border border-[#8BC34A] flex items-center justify-center text-[#8BC34A]">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-orbitron font-extrabold text-2xl text-white">ISO 9001:2015 & ISO 14001</h3>
              <p className="text-xs text-[#8BC34A] font-semibold uppercase tracking-wider">Certified Manufacturing & Environmental Safety</p>
            </div>
          </div>

          <p className="text-sm text-gray-300 leading-relaxed">
            Our state-of-the-art analytical testing laboratory features automated spectrophotometers, DBP absorption testers, and high-precision calorimeters. We guarantee every shipment aligns with strict ASTM D-series testing norms.
          </p>

          <div className="bg-[#1A1A1A] p-4 rounded-xl border border-[#262626] space-y-2">
            <div className="text-xs font-orbitron font-bold text-[#8BC34A] uppercase">Certificate of Analysis (COA) Included:</div>
            <p className="text-xs text-gray-400">
              Every invoice is accompanied by an authenticated lab test report confirming Iodine Value, DBP Absorption, Moisture, Ash, and Viscosity.
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="px-6 py-3 rounded-lg bg-[#8BC34A] text-black font-orbitron font-bold text-xs uppercase tracking-wider hover:bg-[#9ECC3B] transition-all inline-flex items-center space-x-2"
          >
            <span>Request Lab COA Sample</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-[#262626]">
          <img
            src="/assets/quality_iso_lab.jpg"
            alt="Quality Control Laboratory"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
            <div className="bg-[#0A0A0A]/90 p-4 rounded-xl border border-[#8BC34A]/40 w-full backdrop-blur-md">
              <div className="font-orbitron font-bold text-white text-sm">Central QA Analytical Laboratory</div>
              <div className="text-xs text-gray-400">Testing parameters: ASTM D1510, D2414, D1506, ISO 11357</div>
            </div>
          </div>
        </div>
      </div>

      {/* 5-Stage QA Process */}
      <div className="space-y-10">
        <div className="text-center space-y-2">
          <h2 className="font-orbitron font-extrabold text-3xl text-white">5-Stage Quality Assurance Protocol</h2>
          <p className="text-xs text-gray-400 font-orbitron uppercase tracking-widest">From Raw Stock To Factory Gate</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-[#141414] border border-[#262626] p-5 rounded-2xl space-y-3 relative">
              <div className="font-orbitron font-black text-2xl text-[#8BC34A]">{s.step}</div>
              <h4 className="font-orbitron font-bold text-sm text-white">{s.title}</h4>
              <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
