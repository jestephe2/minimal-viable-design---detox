
import React from 'react';

interface FinalCTAProps {
  onStart: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onStart }) => {
  return (
    <section id="join" className="py-40 px-6 md:px-12 bg-[#f1f0ec] relative overflow-hidden text-[#707756]">
      {/* Visual Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#707756]/5 rounded-full blur-[140px] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto text-center space-y-20 relative z-10">
        <div className="space-y-8">
          <h2 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] max-w-5xl mx-auto">
            Ready for a <br /> 
            <span className="italic font-normal serif-font text-[#afa790]">Total Reset?</span>
          </h2>
          <p className="text-2xl text-zinc-500 max-w-2xl mx-auto font-light leading-relaxed">
            Stop managing symptoms. Start the clinically-backed 28-day roadmap to biological clarity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch text-left max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm p-12 rounded-[3rem] border border-[#707756]/10 space-y-10">
            <h3 className="text-3xl font-bold text-[#707756]">Why Start Today?</h3>
            <ul className="space-y-8">
              {[
                { t: "The Investment", d: "One-time $497 payment. Lifetime metabolic knowledge." },
                { t: "The Effort", d: "Meal plans, supplement timing, and recipes are pre-mapped." },
                { t: "The Trust", d: "Metagenics-powered nutrients used by global top practitioners." },
                { t: "The Risk", d: "7-day no-questions-asked guarantee if it's not the right fit." }
              ].map((item, i) => (
                <li key={i} className="flex gap-5">
                  <div className="w-6 h-6 rounded-full bg-[#707756]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-check text-[#707756] text-[10px]"></i>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#afa790]">{item.t}</div>
                    <div className="text-zinc-600 text-sm leading-snug">{item.d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center gap-10 p-12">
            <div className="space-y-4">
              <span className="text-[#afa790] uppercase tracking-[0.3em] text-[10px] font-bold">Full Program Kit</span>
              <div className="text-8xl font-bold text-[#707756] tracking-tighter">$497</div>
              <p className="text-[#707756] font-bold text-xs uppercase tracking-[0.1em]">Free Domestic Shipping Included</p>
            </div>
            
            <button 
              onClick={onStart}
              className="w-full bg-[#707756] text-white py-8 rounded-full text-2xl font-bold hover:scale-105 transition-all shadow-2xl active:scale-95"
            >
              Join Clear Change® Now
            </button>
            
            <div className="flex flex-wrap gap-6 opacity-40 text-[9px] font-bold uppercase tracking-[0.2em] justify-center text-[#707756]">
              <span>Verified Secure</span>
              <span>•</span>
              <span>Instant Guide Access</span>
              <span>•</span>
              <span>Kit Ships Today</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
