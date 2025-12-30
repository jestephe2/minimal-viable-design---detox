import React from 'react';

interface Upsell2aPageProps {
  onAccept: () => void;
  onDecline: () => void;
}

const Upsell2aPage: React.FC<Upsell2aPageProps> = ({ onAccept, onDecline }) => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto space-y-6">
          <div className="inline-block px-6 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-sm font-bold uppercase tracking-widest">
            🎯 Final Opportunity - Limited Spots Available
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Don't Lose Your <span className="text-emerald-400">Momentum</span>
          </h1>

          <p className="text-2xl md:text-3xl text-zinc-300 font-light">
            What happens on Day 29? Keep the transformation going with our <span className="text-emerald-400 font-bold">Maintenance & Extension Plan</span>
          </p>

          <div className="bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-3xl p-8 max-w-2xl mx-auto">
            <p className="text-lg text-zinc-400 mb-4">
              Here's the hard truth most people discover too late...
            </p>
            <p className="text-xl text-white font-semibold">
              The first 28 days are just the beginning. Day 29-58 is where the real, lasting transformation happens.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-6 md:px-12 bg-zinc-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Happens When You Stop After 28 Days?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "fa-undo",
                title: "The Rebound Effect",
                description: "Without a maintenance plan, 67% of people regain weight and symptoms within 60 days of finishing their detox."
              },
              {
                icon: "fa-chart-line-down",
                title: "Lost Momentum",
                description: "You've spent 28 days building new habits. Without continued support, they fade and you're back to square one."
              },
              {
                icon: "fa-door-open",
                title: "Incomplete Healing",
                description: "Your body is just getting started. True cellular regeneration takes 60-90 days to fully complete."
              }
            ].map((item, i) => (
              <div key={i} className="bg-zinc-800/50 border border-red-900/20 rounded-2xl p-6 space-y-3">
                <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center">
                  <i className={`fas ${item.icon} text-red-400 text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The <span className="text-emerald-400">Maintenance & Extension Plan</span>
            </h2>
            <p className="text-xl text-zinc-400">
              30 additional days of guided support to lock in your results permanently
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "fa-clipboard-list",
                title: "Transition Protocol Guide",
                description: "Step-by-step plan for reintroducing foods without triggering inflammation or weight gain"
              },
              {
                icon: "fa-utensils",
                title: "30-Day Meal Plans",
                description: "Delicious maintenance recipes designed to sustain your energy and keep the weight off"
              },
              {
                icon: "fa-heartbeat",
                title: "Extended Supplement Support",
                description: "30-day supply of maintenance supplements to support ongoing cellular health"
              },
              {
                icon: "fa-user-md",
                title: "1-on-1 Check-In Call",
                description: "30-minute coaching session to review progress, troubleshoot challenges, and plan your next 90 days"
              }
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-zinc-800 to-zinc-900 border border-emerald-500/20 rounded-2xl p-6 space-y-3">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center">
                  <i className={`fas ${item.icon} text-emerald-400 text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Value Comparison */}
          <div className="mt-12 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 max-w-2xl mx-auto">
            <div className="text-center space-y-4">
              <p className="text-zinc-400 text-lg">Regular Maintenance Plan:</p>
              <div className="text-5xl font-bold line-through text-zinc-600">$197</div>
              <p className="text-2xl text-emerald-400 font-semibold">Special Upgrade Price:</p>
              <div className="text-6xl font-bold text-emerald-400">$97</div>
              <p className="text-yellow-400 text-xl font-semibold">
                Save $100 (51% OFF) - Today Only
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 md:px-12 bg-zinc-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            The Numbers Don't Lie
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                stat: "87%",
                label: "Maintain their weight loss long-term with a maintenance plan"
              },
              {
                stat: "2.4x",
                label: "More energy reported by people who continue for 60 days vs. 28"
              },
              {
                stat: "92%",
                label: "Say the transition protocol prevented them from relapsing"
              }
            ].map((item, i) => (
              <div key={i} className="space-y-3">
                <div className="text-5xl md:text-6xl font-bold text-emerald-400">{item.stat}</div>
                <p className="text-zinc-300 text-lg">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Success Stories from Extended Members
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Jessica R.",
                result: "Kept off 22 lbs for 6+ months",
                quote: "The transition protocol was a lifesaver. I learned exactly how to reintroduce foods without gaining the weight back. Six months later and I'm still going strong!"
              },
              {
                name: "Michael P.",
                result: "Doubled his energy levels",
                quote: "I almost stopped at day 28, but I'm so glad I continued. The second month is where everything clicked. Now I wake up at 5am naturally with more energy than I've had in 20 years."
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-zinc-800 border border-zinc-700 rounded-2xl p-6 space-y-4">
                <div className="flex gap-1 text-emerald-400">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <p className="text-zinc-300 italic">"{testimonial.quote}"</p>
                <div className="border-t border-zinc-700 pt-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-emerald-400 text-sm font-semibold">{testimonial.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 md:px-12 bg-zinc-900/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Quick Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "When does the maintenance plan start?",
                a: "You'll receive your materials immediately, designed to begin on Day 29 after your initial 28-day detox is complete."
              },
              {
                q: "What if I want to take a break first?",
                a: "We recommend starting the maintenance phase right after completing the detox for optimal results, but the materials are yours to use whenever you're ready."
              },
              {
                q: "Can I get this offer later?",
                a: "Unfortunately no. This special $97 pricing is only available right now as a one-time offer. After this page, the Maintenance Plan returns to $197."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-3">
                <h3 className="text-xl font-bold text-emerald-400">{faq.q}</h3>
                <p className="text-zinc-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Lock In Your Results Forever
          </h2>

          <div className="bg-zinc-900/80 backdrop-blur border border-emerald-500/30 rounded-3xl p-8 space-y-6">
            <div className="space-y-2">
              <p className="text-zinc-400 line-through text-2xl">Regular Price: $197</p>
              <p className="text-5xl font-bold text-emerald-400">Just $97 Today</p>
              <p className="text-yellow-400 font-semibold text-xl">Save $100 - One-Time Offer</p>
            </div>

            <button
              onClick={onAccept}
              className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-6 px-8 rounded-full text-2xl font-bold hover:scale-105 transition-all shadow-2xl shadow-emerald-500/20"
            >
              YES! Add Maintenance Plan — $97
            </button>

            <div className="flex items-center justify-center gap-2 text-zinc-400 text-sm">
              <i className="fas fa-lock"></i>
              <span>Secure checkout • 30-day money-back guarantee</span>
            </div>
          </div>

          <button
            onClick={onDecline}
            className="text-zinc-500 hover:text-zinc-300 font-medium transition-colors text-lg underline"
          >
            No thanks, I'll complete my purchase without the maintenance plan
          </button>

          <div className="pt-8 border-t border-zinc-800">
            <p className="text-zinc-600 text-sm italic">
              This pricing is only available on this page and expires when you continue.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Upsell2aPage;
