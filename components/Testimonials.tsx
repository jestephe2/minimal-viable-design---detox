
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      quote: "I lost 12 lbs of inflammation in 28 days - I didn't think that was possible. The brain fog is totally gone.",
      outcome: "Energy: 3/10 → 9/10",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Jennifer K.",
      quote: "Finally, a detox that didn't leave me starving. I've reclaimed my afternoon focus.",
      outcome: "Resolved: Chronic Bloating",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Amanda R.",
      quote: "My skin cleared up by week 3 and I'm sleeping through the night for the first time in years.",
      outcome: "Deep Sleep Recovered",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
    }
  ];

  return (
    <section id="proof" className="py-32 px-6 md:px-12 bg-[#f1f0ec] text-zinc-900 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-24">
        <div className="text-center space-y-6">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tight text-[#707756]">The new standard <br /><span className="italic font-normal serif-font text-[#afa790]">for results.</span></h2>
          <p className="text-zinc-500 text-lg font-light">94% of clients report significant improvement by week 2.</p>
        </div>
        
        {/* Editorial Grid */}
        <div className="grid md:grid-cols-12 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          {/* Main Large Testimonial */}
          <div className="md:col-span-8 md:row-span-2 relative rounded-[3rem] overflow-hidden group border border-[#707756]/10 shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90" 
              alt="Transformation"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#707756]/80 via-transparent to-transparent p-12 flex flex-col justify-end text-white">
              <div className="max-w-md space-y-6">
                <p className="text-3xl font-bold leading-tight italic serif-font">"{testimonials[0].quote}"</p>
                <div className="flex items-center gap-6 border-t border-white/20 pt-6">
                  <span className="font-bold text-lg uppercase tracking-tighter">{testimonials[0].name}</span>
                  <span className="text-white/80 font-bold uppercase tracking-[0.2em] text-[10px] px-3 py-1 bg-white/10 rounded-full">{testimonials[0].outcome}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vertical Small Testimonials */}
          <div className="md:col-span-4 bg-[#707756] text-white rounded-[3rem] p-10 flex flex-col justify-center space-y-8 shadow-xl">
             <div className="text-white/40 font-bold uppercase tracking-[0.3em] text-[9px]">200+ Resetters</div>
             <p className="text-2xl italic font-serif leading-relaxed">"{testimonials[1].quote}"</p>
             <div className="flex items-center gap-4">
               <img src={testimonials[1].image} className="w-12 h-12 rounded-full grayscale border border-white/20" alt="User" />
               <div className="space-y-1">
                  <span className="block font-bold text-sm">{testimonials[1].name}</span>
                  <span className="block text-[10px] uppercase text-white/50 tracking-widest">{testimonials[1].outcome}</span>
               </div>
             </div>
          </div>

          <div className="md:col-span-4 bg-white p-10 rounded-[3rem] flex flex-col justify-center space-y-6 border border-[#707756]/5 shadow-sm">
            <div className="flex gap-1.5">
              {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star text-[#707756] text-[10px]"></i>)}
            </div>
            <p className="text-[#707756] font-serif text-lg leading-relaxed">"Finally, a protocol that actually respects my time and cellular health."</p>
            <span className="text-[#afa790] text-[10px] font-bold uppercase tracking-[0.3em]">— Jennifer L.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
