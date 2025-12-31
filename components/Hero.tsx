
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
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#707756]/5 border border-[#707756]/10 text-[#707756] text-xs font-bold uppercase tracking-[0.25em]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#707756] animate-pulse"></span>
          Trusted by 500+ Wellness Seekers
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-[#707756] tracking-tight leading-[1.1]">
          Transform Your Hormone & <br className="hidden md:block" />
          Metabolic Health in <span className="text-[#afa790]">28 Days</span>
        </h1>

        <p className="text-xl md:text-2xl text-zinc-600 max-w-3xl mx-auto leading-relaxed font-light">
          Clear brain fog, boost energy, and reset your metabolism with our science-backed Root Cause Reset program
        </p>

        {/* Value Proposition - What's Included */}
        <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-md border-2 border-[#707756]/20 p-10 rounded-[2.5rem] shadow-2xl mt-8">
          <h3 className="text-[#707756] text-2xl font-bold text-center mb-8">What's Included in Your 28-Day Reset:</h3>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              { icon: "fa-utensils", text: "28 days of meal plans & recipes" },
              { icon: "fa-dumbbell", text: "Science-backed workouts for hormones & metabolism" },
              { icon: "fa-video", text: "Weekly live interactive calls" },
              { icon: "fa-user-md", text: "1:1 coaching support" },
              { icon: "fa-users", text: "Community access for accountability" },
              { icon: "fa-flask", text: "Professional-grade supplement kit delivered" }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#707756] rounded-full flex items-center justify-center flex-shrink-0">
                  <i className={`fas ${item.icon} text-white text-sm`}></i>
                </div>
                <span className="text-zinc-700 text-lg font-medium pt-2">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 pt-4">
          <div className="text-center space-y-3">
            <p className="text-zinc-500 text-sm uppercase tracking-widest">One-Time Investment</p>
            <p className="text-5xl font-bold text-[#707756]">$497</p>
            <p className="text-zinc-600 text-sm">Free shipping • Instant portal access • 100% satisfaction guarantee</p>
          </div>

          <button
            onClick={onStart}
            className="group relative bg-gradient-to-r from-[#707756] to-[#606746] text-white px-16 py-7 rounded-full text-2xl font-bold hover:scale-105 transition-all shadow-2xl"
          >
            Join the 28-Day Reset
          </button>

          <div className="flex flex-col items-center gap-3 mt-4">
            <p className="text-[#707756]/50 text-xs font-bold uppercase tracking-[0.3em]">Featuring Metagenics Clinical Technology</p>
            <div className="flex gap-6 opacity-40 items-center grayscale">
              <span className="text-sm font-bold tracking-tighter">UltraClear RENEW</span>
              <span className="text-sm font-bold tracking-tighter">AdvaClear®</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
