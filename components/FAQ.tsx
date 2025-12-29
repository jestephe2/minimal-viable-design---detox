
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const questions = [
    {
      q: "Is this safe for me?",
      a: "Root Cause Reset is designed for adult men and women. However, if you're pregnant, nursing, have a serious medical condition, or take prescription medications, please consult your doctor first. This is a functional medicine approach, not a restrictive crash diet."
    },
    {
      q: "What if I have dietary restrictions?",
      a: "The meal plans include modifications for gluten-free, dairy-free, and common allergen avoidances. The supplement protocol is vetted for purity and quality. It's built for flexibility."
    },
    {
      q: "I've tried detoxes before and felt terrible. Why this?",
      a: "Most detoxes fail because they don't support the liver's natural detox pathways. We focus on Phase 1 & 2 liver support. It's about nourishment, not deprivation."
    },
    {
      q: "How much time does this take daily?",
      a: "Plan for 15-30 minutes for meal prep (even less if you batch cook). The daily guidance is 5-10 minutes. It's designed for busy professionals, not health monks."
    },
    {
      q: "What's your refund policy?",
      a: "We offer a 7-day, no-questions-asked money-back guarantee. If you decide Root Cause Reset isn't for you within the first week, just email us for a full refund."
    },
    {
      q: "Can I do this while working full-time?",
      a: "Absolutely. In fact, most of our members are busy executives and entrepreneurs. The system simplifies your choices so you actually have MORE cognitive energy for work."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 md:px-12 bg-zinc-950">
      <div className="max-w-3xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-white">Objection Removal</h2>
          <p className="text-zinc-500">Everything you need to know before we start on Jan 19th.</p>
        </div>
        
        <div className="space-y-4">
          {questions.map((faq, idx) => (
            <div key={idx} className="glass-panel rounded-3xl overflow-hidden border border-white/5">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-8 text-left flex justify-between items-center group transition-colors"
              >
                <span className="text-white font-bold text-lg group-hover:text-[#c8a87d] transition-colors">{faq.q}</span>
                <i className={`fas fa-plus text-zinc-500 transition-transform ${openIdx === idx ? 'rotate-45' : ''}`}></i>
              </button>
              {openIdx === idx && (
                <div className="px-8 pb-8 text-zinc-400 leading-relaxed text-sm animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <a href="#join" className="text-white font-bold underline decoration-zinc-700 underline-offset-8 hover:decoration-white transition-all tracking-tight">
            Ready to Start? Join Root Cause Reset Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
