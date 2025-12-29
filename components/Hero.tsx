
import React from 'react';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 md:px-12 overflow-hidden bg-[#f1f0ec]">
      {/* Editorial Background Image */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover opacity-30 scale-105"
          alt="Clean Living"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f1f0ec]/40 via-transparent to-[#f1f0ec]"></div>
      </div>

      <div className="max-w-5xl w-full text-center space-y-10 z-10">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#707756]/5 border border-[#707756]/10 text-[#707756] text-[10px] font-bold uppercase tracking-[0.25em]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#707756] animate-pulse"></span>
          Clinically Vetted Protocol
        </div>
        
        <h1 className="text-6xl md:text-9xl font-bold text-[#707756] tracking-tight leading-[0.9] md:leading-[1]">
          Root Cause <br />
          <span className="italic font-normal serif-font text-[#afa790]">Reset.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-600 max-w-2xl mx-auto leading-relaxed font-light">
          The Clear Change® 28-Day Program: A comprehensive approach to cellular clearing, energy restoration, and metabolic support.
        </p>

        <div className="flex flex-col items-center gap-8 pt-4">
          <button 
            onClick={onStart}
            className="group relative bg-[#707756] text-white px-12 py-6 rounded-full text-xl font-bold hover:scale-105 transition-all shadow-xl tracking-tight"
          >
            Start Your Transformation — $497
          </button>
          
          <div className="flex flex-col items-center gap-3">
            <p className="text-[#707756]/50 text-[10px] font-bold uppercase tracking-[0.3em]">Featuring Metagenics Technology</p>
            <div className="flex gap-6 opacity-40 items-center grayscale">
              <span className="text-sm font-bold tracking-tighter">UltraClear RENEW</span>
              <span className="text-sm font-bold tracking-tighter">AdvaClear®</span>
            </div>
          </div>
        </div>

        {/* Discovery Box */}
        <div className="max-w-4xl mx-auto bg-white/40 backdrop-blur-md border border-[#707756]/10 p-10 rounded-[2.5rem] text-left mt-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h3 className="text-[#707756] text-lg font-bold">The 28-Day Clear Change Method:</h3>
            <ul className="space-y-4">
              {[
                "Phase I, II, and III liver detox support",
                "Alkalinization and heavy metal metabolism",
                "Low-allergy rice protein nutritional base",
                "Antioxidant protection against detox byproducts"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-600 text-sm">
                  <i className="fas fa-chevron-right text-[#afa790] text-[10px] mt-1"></i>
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-6 border-l border-[#707756]/10 pl-10 hidden md:grid text-center">
            <div className="space-y-1">
              <div className="text-[#707756] font-bold text-3xl font-serif">28</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Days</div>
            </div>
            <div className="space-y-1">
              <div className="text-[#707756] font-bold text-3xl font-serif">50+</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Health Score</div>
            </div>
            <div className="space-y-1">
              <div className="text-[#707756] font-bold text-3xl font-serif">100%</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Digital Guide</div>
            </div>
            <div className="space-y-1">
              <div className="text-[#707756] font-bold text-3xl font-serif">0</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Hidden Costs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
