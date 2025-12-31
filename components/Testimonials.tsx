
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      quote: "The most noticeable difference I felt was the lightness of my body. I was holding on to all of this inflammation unbeknownst to me. Didn't realize I could feel this good in my body.",
      outcome: "Energy: 3/10 → 9/10",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Jennifer K.",
      quote: "The meals weren't restrictive, I never felt hungry or angry!",
      outcome: "Resolved: Chronic Bloating",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200"
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
        <div className="grid md:grid-cols-12 gap-6 auto-rows-[350px] md:auto-rows-[400px]">
          {/* Main Large Testimonial */}
          <div className="md:col-span-8 md:row-span-2 relative rounded-[3rem] overflow-hidden group border border-[#707756]/10 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90"
              alt="Transformation"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#707756]/80 via-transparent to-transparent p-8 md:p-12 flex flex-col justify-end text-white">
              <div className="max-w-md space-y-4 md:space-y-6">
                <p className="text-xl md:text-3xl font-bold leading-tight italic serif-font">"{testimonials[0].quote}"</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 border-t border-white/20 pt-4 md:pt-6">
                  <span className="font-bold text-base md:text-lg uppercase tracking-tighter">{testimonials[0].name}</span>
                  <span className="text-white/80 font-bold uppercase tracking-[0.2em] text-xs px-3 py-1 bg-white/10 rounded-full inline-block self-start">{testimonials[0].outcome}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vertical Small Testimonials */}
          <div className="md:col-span-4 bg-[#707756] text-white rounded-[3rem] p-10 flex flex-col justify-center space-y-8 shadow-xl">
             <div className="text-white/40 font-bold uppercase tracking-[0.3em] text-xs">200+ Resetters</div>
             <p className="text-2xl italic font-serif leading-relaxed">"{testimonials[1].quote}"</p>
             <div className="flex items-center gap-4">
               <img src={testimonials[1].image} className="w-12 h-12 rounded-full grayscale border border-white/20" alt="User" />
               <div className="space-y-1">
                  <span className="block font-bold text-sm">{testimonials[1].name}</span>
                  <span className="block text-xs uppercase text-white/50 tracking-widest">{testimonials[1].outcome}</span>
               </div>
             </div>
          </div>

          <div className="md:col-span-4 bg-white p-10 rounded-[3rem] flex flex-col justify-center space-y-6 border border-[#707756]/5 shadow-sm">
            <div className="flex gap-1.5">
              {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star text-[#707756] text-xs"></i>)}
            </div>
            <p className="text-[#707756] font-serif text-lg leading-relaxed">"My goal wasn't to lose weight, but I found I dropped 3 pounds in the first 2 weeks, without starving myself!"</p>
            <span className="text-[#afa790] text-xs font-bold uppercase tracking-[0.3em]">— Lori M.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
