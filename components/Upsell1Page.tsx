import React from 'react';

interface Upsell1PageProps {
  onAccept: () => void;
  onDecline: () => void;
}

const Upsell1Page: React.FC<Upsell1PageProps> = ({ onAccept, onDecline }) => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto space-y-6">
          <div className="inline-block px-6 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-sm font-bold uppercase tracking-widest animate-pulse">
            ⚡ One-Time Exclusive Offer - Save $150 Today
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-yellow-400">Wait!</span> Don't Go It Alone
          </h1>

          <p className="text-2xl md:text-3xl text-zinc-300 font-light">
            Most people see <span className="text-yellow-400 font-bold">3x faster results</span> when they have expert support every step of the way
          </p>

          <div className="bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-3xl p-8 max-w-2xl mx-auto">
            <p className="text-lg text-zinc-400 mb-4">
              You've just invested in your health transformation. But here's what most people don't realize...
            </p>
            <p className="text-xl text-white font-semibold">
              The difference between "okay results" and "life-changing results" is having a guide who's done this thousands of times before.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-6 md:px-12 bg-zinc-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Here's What Happens When You Try to Detox Without Support...
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "fa-question-circle",
                title: "Confusion Sets In",
                description: "Questions pile up. You're not sure if what you're experiencing is normal or if you should adjust your approach."
              },
              {
                icon: "fa-battery-quarter",
                title: "Motivation Fades",
                description: "By day 7-10, the initial excitement wears off and you're tempted to quit before the real transformation happens."
              },
              {
                icon: "fa-chart-line",
                title: "Results Plateau",
                description: "Without advanced protocols and personalization, you hit a wall and never reach your full potential."
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
              Introducing: The <span className="text-yellow-400">Premium Support Bundle</span>
            </h2>
            <p className="text-xl text-zinc-400">
              Everything you need to maximize results, stay motivated, and transform faster
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "fa-video",
                title: "1-on-1 Kickoff Call (30 min)",
                value: "$75",
                description: "Personalized protocol review, goal setting, and strategy session with a certified detox specialist"
              },
              {
                icon: "fa-flask",
                title: "Advanced Supplement Protocol",
                value: "$89",
                description: "Upgraded Clear Change formula plus targeted support supplements based on your specific needs"
              },
              {
                icon: "fa-users",
                title: "VIP Community Access",
                value: "$47/mo",
                description: "Private group with daily accountability, recipe sharing, and 24/7 peer support (3 months included)"
              },
              {
                icon: "fa-calendar-check",
                title: "Weekly Group Coaching",
                value: "$97/mo",
                description: "Live Q&A sessions, troubleshooting support, and expert guidance throughout your journey (28 days included)"
              }
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-zinc-800 to-zinc-900 border border-yellow-500/20 rounded-2xl p-6 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center">
                    <i className={`fas ${item.icon} text-yellow-400 text-xl`}></i>
                  </div>
                  <span className="text-yellow-400 font-bold text-lg">{item.value} Value</span>
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Value Comparison */}
          <div className="mt-12 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 max-w-2xl mx-auto">
            <div className="text-center space-y-4">
              <p className="text-zinc-400 text-lg">Total Value if Purchased Separately:</p>
              <div className="text-5xl font-bold line-through text-zinc-600">$308</div>
              <p className="text-2xl text-yellow-400 font-semibold">Your Price Today:</p>
              <div className="text-6xl font-bold text-yellow-400">$157</div>
              <p className="text-emerald-400 text-xl font-semibold">
                Save $151 (49% OFF) - One-Time Offer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-6 md:px-12 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Premium Members Are Saying
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Maria T.",
                result: "Lost 18 lbs in 28 days",
                quote: "The weekly coaching calls kept me on track when I wanted to quit. My coach helped me troubleshoot my plateau and I ended up losing 18 pounds total. Best investment ever!"
              },
              {
                name: "David K.",
                result: "Energy levels tripled",
                quote: "Having someone to text when I had questions was game-changing. The VIP community alone was worth the price - everyone is so supportive and the recipe swaps are incredible."
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-zinc-800 border border-zinc-700 rounded-2xl p-6 space-y-4">
                <div className="flex gap-1 text-yellow-400">
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
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Common Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Can I add this later if I change my mind?",
                a: "Unfortunately no. This special pricing is only available right now as a one-time offer for new members. After this page, the Premium Bundle returns to its regular $308 price."
              },
              {
                q: "When does my kickoff call happen?",
                a: "Within 24-48 hours of purchase, you'll receive a scheduling link to book your 30-minute personalized strategy session at a time that works for you."
              },
              {
                q: "What if I'm already experienced with detoxing?",
                a: "Even better! Our advanced protocols and supplement upgrades are specifically designed for people who want to go deeper and achieve breakthrough results."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-3">
                <h3 className="text-xl font-bold text-yellow-400">{faq.q}</h3>
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
            Ready to 3x Your Results?
          </h2>

          <div className="bg-zinc-900/80 backdrop-blur border border-yellow-500/30 rounded-3xl p-8 space-y-6">
            <div className="space-y-2">
              <p className="text-zinc-400 line-through text-2xl">Regular Price: $308</p>
              <p className="text-5xl font-bold text-yellow-400">Just $157 Today</p>
              <p className="text-emerald-400 font-semibold text-xl">Save $151 - Never Offered Again</p>
            </div>

            <button
              onClick={onAccept}
              className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-6 px-8 rounded-full text-2xl font-bold hover:scale-105 transition-all shadow-2xl shadow-yellow-500/20"
            >
              YES! Upgrade My Experience — $157
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
            No thanks, I'll continue with the standard program
          </button>

          <div className="pt-8 border-t border-zinc-800">
            <p className="text-zinc-600 text-sm italic">
              This offer expires when you leave this page and cannot be retrieved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Upsell1Page;
