import React from 'react';

interface Upsell2bPageProps {
  onAccept: () => void;
  onDecline: () => void;
}

const Upsell2bPage: React.FC<Upsell2bPageProps> = ({ onAccept, onDecline }) => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto space-y-6">
          <div className="inline-block px-6 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-sm font-bold uppercase tracking-widest">
            👑 VIP Exclusive - Premium Members Only
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            One Final Step to <span className="text-purple-400">Total Mastery</span>
          </h1>

          <p className="text-2xl md:text-3xl text-zinc-300 font-light">
            You've committed to premium support. Now unlock <span className="text-purple-400 font-bold">unlimited possibilities</span> with our flagship program
          </p>

          <div className="bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-3xl p-8 max-w-2xl mx-auto">
            <p className="text-lg text-zinc-400 mb-4">
              You're clearly serious about transformation. You invested in the Premium Bundle, which tells us something important...
            </p>
            <p className="text-xl text-white font-semibold">
              You're not looking for quick fixes. You want a complete, comprehensive solution to optimal health.
            </p>
          </div>
        </div>
      </section>

      {/* Opportunity Section */}
      <section className="py-16 px-6 md:px-12 bg-zinc-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Happens After Your Detox?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-red-400">Without Ongoing Support:</h3>
              <div className="space-y-4">
                {[
                  "Hit a plateau and don't know how to break through",
                  "Struggle to maintain results long-term",
                  "Miss out on advanced optimization strategies",
                  "Pay full price for future programs and supplements"
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <i className="fas fa-times-circle text-red-400 text-xl mt-1"></i>
                    <p className="text-zinc-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-purple-400">With Optimal Health Credit:</h3>
              <div className="space-y-4">
                {[
                  "Access to ANY future program or protocol",
                  "Ongoing supplement support at massive discounts",
                  "Priority booking for all coaching and consultations",
                  "$400 to spend however you need for your health journey"
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <i className="fas fa-check-circle text-purple-400 text-xl mt-1"></i>
                    <p className="text-zinc-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Introducing: <span className="text-purple-400">The Optimal Health Credit</span>
            </h2>
            <p className="text-xl text-zinc-400">
              $400 credit to use across our entire ecosystem of programs and products
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "fa-repeat",
                title: "Extended Detox Programs",
                examples: ["90-Day Deep Cleanse", "Seasonal Reset Protocols", "Advanced Liver Support"],
                value: "$200-400"
              },
              {
                icon: "fa-capsules",
                title: "Premium Supplements",
                examples: ["Monthly Clear Change Auto-Ship", "Targeted Support Formulas", "Advanced Testing Kits"],
                value: "$100-300"
              },
              {
                icon: "fa-user-doctor",
                title: "1-on-1 Consultations",
                examples: ["Functional Medicine Consults", "Personalized Protocol Design", "Advanced Lab Review"],
                value: "$150-350"
              }
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-zinc-800 to-zinc-900 border border-purple-500/20 rounded-2xl p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center">
                    <i className={`fas ${item.icon} text-purple-400 text-xl`}></i>
                  </div>
                  <span className="text-purple-400 font-bold">{item.value}</span>
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <ul className="space-y-2">
                  {item.examples.map((example, j) => (
                    <li key={j} className="text-zinc-400 text-sm flex items-start gap-2">
                      <i className="fas fa-circle text-purple-400 text-[6px] mt-2"></i>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Value Comparison */}
          <div className="mt-12 bg-gradient-to-br from-purple-900/30 to-zinc-900 border border-purple-500/30 rounded-3xl p-8 max-w-2xl mx-auto">
            <div className="text-center space-y-4">
              <p className="text-zinc-400 text-lg">You Get a $400 Credit</p>
              <div className="text-6xl font-bold text-purple-400">$400</div>
              <p className="text-2xl text-white font-semibold">Your Investment Today:</p>
              <div className="text-5xl font-bold text-white">$250</div>
              <p className="text-emerald-400 text-xl font-semibold">
                Instant $150 Savings (38% Bonus Value)
              </p>
              <div className="border-t border-zinc-700 pt-6 mt-6">
                <p className="text-zinc-300">
                  It's like buying $400 worth of premium health services for just $250.
                  <span className="text-purple-400 font-bold"> That's $150 in free value</span> you can use however you need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 md:px-12 bg-zinc-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Premium Members Love This
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "fa-infinity",
                title: "Total Flexibility",
                description: "Use your credit all at once or spread it across multiple programs. It's your health journey, your choice."
              },
              {
                icon: "fa-calendar",
                title: "Never Expires",
                description: "No pressure, no deadlines. Your $400 credit stays active in your account until you're ready to use it."
              },
              {
                icon: "fa-crown",
                title: "VIP Priority Access",
                description: "Credit holders get first access to new programs, limited coaching slots, and exclusive member events."
              },
              {
                icon: "fa-piggy-bank",
                title: "Stackable Savings",
                description: "Combine your credit with member discounts for maximum savings on everything you need."
              }
            ].map((item, i) => (
              <div key={i} className="bg-zinc-800 border border-zinc-700 rounded-2xl p-6 space-y-3">
                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center">
                  <i className={`fas ${item.icon} text-purple-400 text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Credit Holders Are Saying
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Amanda S.",
                credit_used: "Used credit for 90-day cleanse + supplements",
                quote: "I grabbed the credit not knowing exactly how I'd use it. Three months later, I used it for the advanced cleanse and premium supplements. Getting $400 worth for $250 was incredible - I basically got my next program for 40% off!"
              },
              {
                name: "Richard M.",
                credit_used: "Booked 3 functional medicine consultations",
                quote: "As a premium member, this was a no-brainer. I used my credit for personalized consultations that normally would've cost me $450. The insights I gained were worth 10x what I paid."
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-zinc-800 border border-zinc-700 rounded-2xl p-6 space-y-4">
                <div className="flex gap-1 text-purple-400">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <p className="text-zinc-300 italic">"{testimonial.quote}"</p>
                <div className="border-t border-zinc-700 pt-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-purple-400 text-sm font-semibold">{testimonial.credit_used}</p>
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
            Common Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "When can I start using my credit?",
                a: "Immediately! Your $400 credit will be added to your account within 24 hours and you can start using it right away on any program, product, or service."
              },
              {
                q: "What if I don't use all $400?",
                a: "No problem! Your credit never expires. Use it all at once, or spread it across multiple purchases over time. It's always there when you need it."
              },
              {
                q: "Can I combine the credit with other discounts?",
                a: "Absolutely! Your credit stacks with member discounts, seasonal promotions, and bundle deals for maximum savings."
              },
              {
                q: "Is this offer available later?",
                a: "No. This is exclusively for premium members completing their initial purchase today. The $150 bonus ($400 for $250) won't be offered again."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-3">
                <h3 className="text-xl font-bold text-purple-400">{faq.q}</h3>
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
            Invest $250, Get $400 in Health Credits
          </h2>

          <div className="bg-gradient-to-br from-purple-900/30 to-zinc-900/80 backdrop-blur border border-purple-500/30 rounded-3xl p-8 space-y-6">
            <div className="space-y-3">
              <p className="text-zinc-400 text-xl">Pay today:</p>
              <p className="text-5xl font-bold text-white">$250</p>
              <div className="flex items-center justify-center gap-3">
                <div className="h-px flex-1 bg-zinc-700"></div>
                <i className="fas fa-arrow-down text-purple-400 text-2xl"></i>
                <div className="h-px flex-1 bg-zinc-700"></div>
              </div>
              <p className="text-zinc-400 text-xl">Receive in credits:</p>
              <p className="text-6xl font-bold text-purple-400">$400</p>
              <p className="text-emerald-400 font-semibold text-2xl">= $150 Instant Bonus (38% Free Money)</p>
            </div>

            <button
              onClick={onAccept}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-6 px-8 rounded-full text-2xl font-bold hover:scale-105 transition-all shadow-2xl shadow-purple-500/20"
            >
              YES! Give Me $400 in Credits for $250
            </button>

            <div className="flex items-center justify-center gap-2 text-zinc-400 text-sm">
              <i className="fas fa-lock"></i>
              <span>Secure checkout • Credits activated instantly • Never expires</span>
            </div>
          </div>

          <button
            onClick={onDecline}
            className="text-zinc-500 hover:text-zinc-300 font-medium transition-colors text-lg underline"
          >
            No thanks, I'll complete my purchase without the credit
          </button>

          <div className="pt-8 border-t border-zinc-800">
            <p className="text-zinc-600 text-sm italic">
              VIP Exclusive: This $150 bonus offer is only available to Premium Bundle members on this page.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Upsell2bPage;
