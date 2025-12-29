
import React from 'react';

const SolutionSection: React.FC = () => {
  return (
    <section id="method" className="py-32 px-6 md:px-12 bg-[#f1f0ec] text-zinc-900">
      <div className="max-w-6xl mx-auto space-y-24">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.9] text-[#707756]">
            The Science of <br />
            <span className="italic font-normal serif-font text-[#afa790]">Transformation.</span>
          </h2>
          <p className="text-xl text-zinc-500 font-light">
            We don't just "cleanse." We support the three-step biological process of metabolic clearance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "Phase I",
              title: "Activation",
              desc: "Fat-soluble toxins are targeted for processing. Requires specialized liver enzymes and antioxidants.",
              icon: "fa-gears"
            },
            {
              step: "Phase II",
              title: "Neutralization",
              desc: "Methylated B12 and folic acid help bind activated compounds, making them water-soluble.",
              icon: "fa-vial-circle-check"
            },
            {
              step: "Phase III",
              title: "Excretion",
              desc: "Safe removal of water-soluble substances via optimized metabolic pathways.",
              icon: "fa-leaf"
            }
          ].map((item, i) => (
            <div key={i} className="group space-y-8 p-10 rounded-[2.5rem] bg-white border border-[#707756]/5 hover:border-[#707756]/20 transition-all shadow-sm">
              <div className="flex justify-between items-center">
                <span className="text-[#afa790] text-[10px] font-bold uppercase tracking-[0.2em]">{item.step}</span>
                <i className={`fas ${item.icon} text-[#707756]/30 group-hover:text-[#707756] transition-colors`}></i>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-[#707756]">{item.title}</h3>
                <p className="text-zinc-500 leading-relaxed text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#707756] text-white p-16 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="space-y-4 relative z-10 text-center md:text-left">
            <h3 className="text-4xl font-bold">Comprehensive metabolic support.</h3>
            <p className="text-zinc-300 font-light max-w-lg">Everything included: UltraClear RENEW, AdvaClear, and your 28-day roadmap.</p>
          </div>
          <a 
            href="#join"
            className="bg-white text-[#707756] px-12 py-6 rounded-full font-bold text-xl whitespace-nowrap hover:scale-105 transition-all shadow-xl relative z-10"
          >
            Join Clear Change® — $497
          </a>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
