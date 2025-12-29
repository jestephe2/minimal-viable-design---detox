
import React from 'react';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      title: "Toxic Load Overload",
      desc: "Scored over 50 on the Metabolic Detoxification Questionnaire? Your system is working overtime.",
      icon: "fa-triangle-exclamation"
    },
    {
      title: "The Sedentary Trap",
      desc: "Low energy and high stress are often signs that Phase I & II detox pathways are sluggish.",
      icon: "fa-chair"
    },
    {
      title: "Nutrient Gaps",
      desc: "A diet high in processed foods lacks the methylated B12 and folate required for clearance.",
      icon: "fa-bottle-droplet"
    },
    {
      title: "Cellular Fog",
      desc: "Fat-soluble compounds aren't converting to water-soluble forms, leading to systemic 'clutter'.",
      icon: "fa-cloud-meatball"
    }
  ];

  return (
    <section id="problem" className="py-24 px-6 md:px-12 bg-[#edede4]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h4 className="text-[#afa790] font-bold tracking-[0.2em] uppercase text-xs">The Diagnosis</h4>
            <h2 className="text-5xl md:text-6xl text-[#707756] font-bold leading-tight">
              Is your "Toxic Bucket" overflowing?
            </h2>
            <p className="text-xl text-zinc-600 leading-relaxed font-light">
              Modern life is an onslaught of unwanted substances. When Phase III excretion can't keep up with Phase I and II activation, you feel it in your energy, your mood, and your focus.
            </p>
            <div className="pt-4">
              <div className="inline-block p-6 border border-[#707756]/20 rounded-2xl bg-white/50 italic text-zinc-500 text-sm">
                "Metabolic detoxification is the body's natural way of clearing out unwanted substances. We help you turn it back on."
              </div>
            </div>
          </div>
          
          <div className="grid gap-6">
            {problems.map((p, idx) => (
              <div key={idx} className="bg-white/60 p-8 rounded-3xl flex items-start gap-6 hover:shadow-lg transition-all border border-white/40 group cursor-default">
                <div className="w-14 h-14 rounded-2xl bg-[#707756]/5 flex items-center justify-center group-hover:bg-[#707756] group-hover:text-white transition-colors duration-500 text-[#707756]">
                  <i className={`fas ${p.icon} text-lg`}></i>
                </div>
                <div className="space-y-2">
                  <h3 className="text-[#707756] text-xl font-bold">{p.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
