import React from 'react';

interface Upsell1PageProps {
  onAccept: () => void;
  onDecline: () => void;
}

const Upsell1Page: React.FC<Upsell1PageProps> = ({ onAccept, onDecline }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-100/40 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto space-y-6">
          <div className="inline-block px-6 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-sm font-bold uppercase tracking-widest">
            ⚡ One-Time Exclusive Offer - Save $150 Today
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-zinc-900">
            <span className="text-amber-600">Wait!</span> Take Your Detox<br />to the Next Level
          </h1>

          <p className="text-2xl md:text-3xl text-zinc-700 font-light">
            Get <span className="text-amber-600 font-bold">maximum results</span> with pharmaceutical-grade supplements delivered to your door
          </p>

          <div className="bg-white/80 backdrop-blur border border-amber-200 rounded-3xl p-8 max-w-2xl mx-auto shadow-xl">
            <p className="text-lg text-zinc-600 mb-4">
              You've committed to transforming your health. Now ensure you have everything you need to succeed...
            </p>
            <p className="text-xl text-zinc-900 font-semibold">
              The right supplements can amplify your results, reduce detox symptoms, and help you achieve breakthrough transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-6 md:px-12 bg-amber-50/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-zinc-900">
            Don't Let Missing Nutrients Hold You Back
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "fa-battery-quarter",
                title: "Energy Crashes",
                description: "Without proper supplementation, your body may struggle to maintain energy during detoxification."
              },
              {
                icon: "fa-exclamation-triangle",
                title: "Detox Symptoms",
                description: "Headaches, fatigue, and discomfort are common when your body lacks the nutrients it needs to process toxins."
              },
              {
                icon: "fa-chart-line",
                title: "Slower Results",
                description: "Your body needs specific vitamins and minerals to optimize detoxification pathways and accelerate transformation."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white border border-amber-200 rounded-2xl p-6 space-y-3 shadow-lg">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                  <i className={`fas ${item.icon} text-red-500 text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-zinc-900">{item.title}</h3>
                <p className="text-zinc-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900">
              Introducing: The <span className="text-amber-600">Premium Supplement Bundle</span>
            </h2>
            <p className="text-xl text-zinc-600">
              Professional-grade supplements drop-shipped to your home — ready to take for your detox
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-3xl p-8 mb-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-center mb-6 text-zinc-900">Your Complete Supplement Protocol</h3>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "PhytoMulti® Multivitamin",
                  icon: "fa-capsules",
                  description: "Comprehensive phytonutrient support for cellular health and detoxification"
                },
                {
                  name: "Magnesium Glycinate",
                  icon: "fa-moon",
                  description: "Supports relaxation, sleep quality, and over 300 biochemical reactions"
                },
                {
                  name: "Vitamin D3 5000 + K",
                  icon: "fa-sun",
                  description: "Immune support and calcium regulation for optimal health"
                },
                {
                  name: "UltraFlora® Balance Probiotic",
                  icon: "fa-bacteria",
                  description: "Gut health support with 15 billion CFU for optimal digestion and immunity"
                },
                {
                  name: "OmegaGenics® Fish Oil EPA-DHA 1000mg",
                  icon: "fa-fish",
                  description: "Essential fatty acids for brain health, inflammation reduction, and cellular function"
                }
              ].map((supplement, i) => (
                <div key={i} className="bg-white border border-amber-200 rounded-xl p-5 space-y-2 shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className={`fas ${supplement.icon} text-amber-600 text-lg`}></i>
                    </div>
                    <h4 className="text-lg font-bold text-zinc-900">{supplement.name}</h4>
                  </div>
                  <p className="text-zinc-600 text-sm pl-13">{supplement.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white border border-amber-300 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-book-medical text-amber-600 text-xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-zinc-900 mb-2">BONUS: Protocol Overview from Rachel</h4>
                  <p className="text-zinc-600">
                    Detailed guide explaining exactly how to take each supplement, optimal timing, and how they work together to maximize your detox results.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Value Comparison */}
          <div className="mt-12 bg-gradient-to-br from-amber-100 to-orange-100 border-2 border-amber-400 rounded-3xl p-8 max-w-2xl mx-auto shadow-2xl">
            <div className="text-center space-y-4">
              <p className="text-zinc-700 text-lg font-semibold">Retail Value of Supplements:</p>
              <div className="text-5xl font-bold line-through text-zinc-500">$307</div>
              <p className="text-2xl text-amber-700 font-semibold">Your Price Today:</p>
              <div className="text-6xl font-bold text-amber-600">$157</div>
              <p className="text-emerald-600 text-xl font-semibold">
                Save $150 (49% OFF) - One-Time Offer
              </p>
              <div className="bg-white/60 rounded-xl p-4 mt-4">
                <p className="text-sm text-zinc-700 font-medium">
                  ✓ All supplements drop-shipped to your home<br />
                  ✓ Ready to take for your 28-day detox<br />
                  ✓ Professional-grade, pharmaceutical quality
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-6 md:px-12 bg-amber-50/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-zinc-900">
            What Our Members Are Saying
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Sarah M.",
                result: "Lost 22 lbs with minimal symptoms",
                quote: "The supplement bundle made ALL the difference. I had almost zero detox headaches and my energy stayed high throughout. Worth every penny!"
              },
              {
                name: "Jennifer L.",
                result: "Smoothest detox ever",
                quote: "I've tried detoxing before without supplements and it was miserable. This time with the premium bundle, I felt amazing the whole time. The protocol guide from Rachel was so helpful!"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white border border-amber-200 rounded-2xl p-6 space-y-4 shadow-lg">
                <div className="flex gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <p className="text-zinc-700 italic">"{testimonial.quote}"</p>
                <div className="border-t border-amber-200 pt-4">
                  <p className="font-bold text-zinc-900">{testimonial.name}</p>
                  <p className="text-emerald-600 text-sm font-semibold">{testimonial.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-zinc-900">
            Common Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "When will I receive my supplements?",
                a: "Your supplements ship within 24 hours and typically arrive within 3-5 business days. We recommend starting your detox once they arrive so you have everything you need from day one."
              },
              {
                q: "Are these the same supplements Rachel recommends?",
                a: "Yes! These are the exact professional-grade supplements Rachel uses with her private clients. They're pharmaceutical quality and specially selected to optimize detox results."
              },
              {
                q: "Can I buy these supplements myself somewhere else?",
                a: "You could, but you'd pay $307+ retail and spend hours researching dosages and timing. This bundle saves you $150 and includes Rachel's protocol guide showing you exactly how to take everything."
              },
              {
                q: "What if I'm already taking supplements?",
                a: "That's great! These supplements are specifically formulated to support detoxification. You can continue your current routine and add these, or consult with your healthcare provider about adjusting."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-amber-50 border border-amber-200 rounded-2xl p-6 space-y-3 shadow-md">
                <h3 className="text-xl font-bold text-amber-700">{faq.q}</h3>
                <p className="text-zinc-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-amber-100 to-orange-100">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
            Ready to Maximize Your Results?
          </h2>

          <div className="bg-white backdrop-blur border-2 border-amber-400 rounded-3xl p-8 space-y-6 shadow-2xl">
            <div className="space-y-2">
              <p className="text-zinc-600 line-through text-2xl">Retail Price: $307</p>
              <p className="text-5xl font-bold text-amber-600">Just $157 Today</p>
              <p className="text-emerald-600 font-semibold text-xl">Save $150 - Never Offered Again</p>
            </div>

            <button
              onClick={onAccept}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-6 px-8 rounded-full text-2xl font-bold hover:scale-105 transition-all shadow-2xl shadow-amber-500/30"
            >
              YES! Add Premium Supplements — $157
            </button>

            <div className="flex items-center justify-center gap-2 text-zinc-600 text-sm">
              <i className="fas fa-lock"></i>
              <span>Secure checkout • Ships within 24 hours • 30-day guarantee</span>
            </div>
          </div>

          <button
            onClick={onDecline}
            className="text-zinc-500 hover:text-zinc-700 font-medium transition-colors text-lg underline"
          >
            No thanks, I'll continue without the premium supplements
          </button>

          <div className="pt-8 border-t border-amber-300">
            <p className="text-zinc-500 text-sm italic">
              This offer expires when you leave this page and cannot be retrieved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Upsell1Page;
