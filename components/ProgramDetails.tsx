
import React from 'react';

const ProgramDetails: React.FC = () => {
  const components = [
    {
      label: "Foundation",
      title: "UltraClear RENEW",
      desc: "Specialized detox powder for liver detox and heavy metal metabolism. Features low-allergy rice protein base.",
      icon: "fa-bottle-water"
    },
    {
      label: "Support",
      title: "AdvaClear® Capsules",
      desc: "Provides antioxidant protection and enhances liver enzymes with methylated B12 and folic acid.",
      icon: "fa-capsules"
    },
    {
      label: "Tools",
      title: "Shaker Cup & Guide",
      desc: "Convenient mixing tool plus the easy-to-follow 28-day manual with menu plans and recipes.",
      icon: "fa-book-open"
    }
  ];

  return (
    <section id="details" className="py-32 px-6 md:px-12 bg-[#edede4]">
      <div className="max-w-6xl mx-auto space-y-24">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div className="space-y-16">
            <div className="space-y-6">
              <h2 className="text-5xl text-[#707756] font-bold leading-tight">A complete kit <br />for metabolic renewal.</h2>
              <p className="text-zinc-500 text-lg font-light leading-relaxed">No separate shopping lists. No confusion. Your box arrives with every clinical-grade nutrient required for the 28-day reset.</p>
            </div>

            <div className="space-y-8">
              {components.map((item, idx) => (
                <div key={idx} className="group p-8 rounded-[2rem] bg-white border border-[#707756]/5 hover:shadow-md transition-all">
                  <div className="text-[#afa790] text-[9px] font-bold uppercase tracking-[0.3em] mb-2">{item.label}</div>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-xl bg-[#707756]/5 flex items-center justify-center text-[#707756] flex-shrink-0 group-hover:bg-[#707756] group-hover:text-white transition-colors duration-500">
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                    <div className="space-y-2">
                       <h3 className="text-xl text-[#707756] font-bold">{item.title}</h3>
                       <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="sticky top-32">
            <div className="bg-white p-12 rounded-[3rem] border border-[#707756]/10 shadow-sm space-y-10">
              <div className="text-center space-y-2">
                <span className="text-[#afa790] uppercase tracking-[0.2em] text-[10px] font-bold">Program Overview</span>
                <h3 className="text-[#707756] text-3xl font-bold">28 Days of Clarity</h3>
              </div>
              
              <div className="space-y-6">
                {[
                  "Days 1-6: Initial Clearing",
                  "Days 7-13: Intensive Detoxification",
                  "Days 14-28: Gradual Reintroduction",
                  "Instant Portal & Guide Access",
                  "Free Shipping on Supplement Kit"
                ].map((text, i) => (
                  <div key={i} className="flex gap-4 items-center border-b border-zinc-100 pb-4">
                    <div className="w-5 h-5 rounded-full bg-[#707756]/10 flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-check text-[#707756] text-[8px]"></i>
                    </div>
                    <span className="text-zinc-600 text-sm font-medium">{text}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-6">
                <div className="flex justify-between items-center mb-8 bg-[#edede4]/50 p-6 rounded-2xl">
                  <div>
                    <span className="block text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Full Investment</span>
                    <span className="text-3xl font-bold text-[#707756]">$497</span>
                  </div>
                  <div className="text-right">
                    <div className="text-[#afa790] text-[10px] font-bold uppercase">All Inclusive</div>
                    <div className="text-zinc-400 text-xs italic">Limited to current stock</div>
                  </div>
                </div>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="w-full bg-[#707756] text-white py-6 rounded-full font-bold hover:bg-[#606746] transition-all shadow-xl text-lg"
                >
                  Join The Program
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramDetails;
