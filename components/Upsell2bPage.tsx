import React from 'react';

interface Upsell2bPageProps {
  onAccept: () => void;
  onDecline: () => void;
}

const Upsell2bPage: React.FC<Upsell2bPageProps> = ({ onAccept, onDecline }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-100/40 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto space-y-6">
          <div className="inline-block px-6 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-700 text-sm font-bold uppercase tracking-widest">
            👑 Final Exclusive Offer - Lock In Your Future
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-zinc-900">
            What Happens <span className="text-purple-600">After</span> Your Detox?
          </h1>

          <p className="text-2xl md:text-3xl text-zinc-700 font-light">
            Continue your transformation with <span className="text-purple-600 font-bold">$400 credit</span> toward the Optimal Health Program
          </p>

          <div className="bg-white/80 backdrop-blur border border-purple-200 rounded-3xl p-8 max-w-2xl mx-auto shadow-xl">
            <p className="text-lg text-zinc-600 mb-4">
              Your 28-day detox is Phase 1 of your healing journey...
            </p>
            <p className="text-xl text-zinc-900 font-semibold">
              The Optimal Health Program is Phase 2 - where you identify and heal the ROOT CAUSES of your health challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-6 md:px-12 bg-purple-50/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-zinc-900">
            Don't Stop at Symptom Relief - Find Root Causes
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "fa-question-circle",
                title: "Incomplete Healing",
                description: "Detoxing clears symptoms but doesn't address WHY you got sick in the first place"
              },
              {
                icon: "fa-redo",
                title: "Symptoms Return",
                description: "Without finding root causes, the same health issues often come back within months"
              },
              {
                icon: "fa-puzzle-piece",
                title: "Missing Pieces",
                description: "Functional labs and personalized protocols reveal hidden imbalances detoxing alone can't fix"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white border border-purple-200 rounded-2xl p-6 space-y-3 shadow-lg">
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
              Introducing: <span className="text-purple-600">Optimal Health Program Credit</span>
            </h2>
            <p className="text-xl text-zinc-600">
              $400 credit for Phase 2 of your healing journey - starting immediately after your detox
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-300 rounded-3xl p-8 mb-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-center mb-6 text-zinc-900">What Is the Optimal Health Program?</h3>

            <div className="bg-white border border-purple-300 rounded-2xl p-6 mb-6">
              <p className="text-zinc-700 text-center text-lg">
                The Optimal Health Program is our comprehensive 6-month root cause healing program that identifies and addresses the underlying issues preventing you from achieving optimal health through functional medicine testing, custom protocols, and ongoing coaching support.
              </p>
            </div>

            <h4 className="text-xl font-bold text-center mb-6 text-zinc-900">What's Included in the Optimal Health Program:</h4>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: "fa-vial",
                  title: "3 Functional Medicine Lab Tests",
                  description: "Comprehensive testing based on your specific symptoms - hormone panels, gut microbiome analysis, nutrient deficiency testing, and more to identify hidden imbalances"
                },
                {
                  icon: "fa-comments",
                  title: "Unlimited 1:1 Coaching Access",
                  description: "Text and email support whenever you need it, plus 4 live video calls throughout your 6-month program to review results and adjust your protocol"
                },
                {
                  icon: "fa-file-medical",
                  title: "Custom Protocols",
                  description: "Personalized supplement plans and lifestyle interventions designed specifically for YOUR test results and health goals to heal at the root cause"
                },
                {
                  icon: "fa-pills",
                  title: "6 Months of Coaching + Supplement Discounts",
                  description: "Half a year of expert guidance to ensure lasting results, plus special discounts on all supplements recommended in your custom protocol"
                }
              ].map((item, i) => (
                <div key={i} className="bg-white border border-purple-200 rounded-xl p-5 space-y-2 shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className={`fas ${item.icon} text-purple-600 text-lg`}></i>
                    </div>
                    <h4 className="text-lg font-bold text-zinc-900">{item.title}</h4>
                  </div>
                  <p className="text-zinc-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white border border-purple-300 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-rocket text-purple-600 text-xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-zinc-900 mb-2">Start Immediately After Your Detox</h4>
                  <p className="text-zinc-600">
                    Your credit is available as soon as you complete your 28-day detox, allowing you to seamlessly transition into Phase 2 of your healing journey without losing momentum.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-r from-purple-100 to-indigo-100 border border-purple-300 rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-infinity text-purple-700 text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-zinc-900">Credit Never Expires</h4>
                  <p className="text-zinc-600 text-sm">
                    Use it when you're ready. Your $400 credit is yours forever with no expiration date.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Value Comparison */}
          <div className="mt-12 bg-gradient-to-br from-purple-100 to-indigo-100 border-2 border-purple-400 rounded-3xl p-8 max-w-2xl mx-auto shadow-2xl">
            <div className="text-center space-y-4">
              <p className="text-zinc-700 text-lg font-semibold">Get $400 in Credit for:</p>
              <div className="text-6xl font-bold text-purple-600">$250</div>
              <p className="text-emerald-600 text-xl font-semibold">
                That's 38% Bonus Value - $150 in Free Credit!
              </p>
              <div className="bg-white/60 rounded-xl p-4 mt-4">
                <p className="text-sm text-zinc-700 font-medium">
                  ✓ $400 credit toward Optimal Health Program<br />
                  ✓ Use for functional labs, coaching, or protocols<br />
                  ✓ Starts immediately after your detox<br />
                  ✓ Never expires
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-6 md:px-12 bg-purple-50/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-zinc-900">
            Success Stories from Optimal Health Program Members
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Amanda K.",
                result: "Reversed thyroid dysfunction",
                quote: "The detox helped, but the Optimal Health Program labs revealed I had Hashimoto's. With the custom protocol, my antibodies dropped 80% in 3 months. I finally have my energy back!"
              },
              {
                name: "Robert M.",
                result: "Healed gut issues permanently",
                quote: "I did the detox and felt great, but my gut issues kept returning. The comprehensive stool test through the Optimal Health Program found parasites and SIBO. Now I'm finally healed for good."
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white border border-purple-200 rounded-2xl p-6 space-y-4 shadow-lg">
                <div className="flex gap-1 text-purple-500">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <p className="text-zinc-700 italic">"{testimonial.quote}"</p>
                <div className="border-t border-purple-200 pt-4">
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
                q: "When can I start using my credit?",
                a: "Your $400 credit becomes available immediately after you complete your 28-day Root Cause Reset detox. You'll receive instructions on how to enroll in the Optimal Health Program and schedule your initial consultation."
              },
              {
                q: "What does the $400 credit cover?",
                a: "Your credit can be applied toward any aspect of the 6-month Optimal Health Program including the 3 functional medicine lab tests, custom protocols, coaching sessions, or supplement recommendations. Most clients use it toward their lab testing."
              },
              {
                q: "Do I have to use the credit right away?",
                a: "Not at all! Your credit never expires. You can use it when you're ready - whether that's immediately after your detox or months later."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-purple-50 border border-purple-200 rounded-2xl p-6 space-y-3 shadow-md">
                <h3 className="text-xl font-bold text-purple-700">{faq.q}</h3>
                <p className="text-zinc-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-purple-100 to-indigo-100">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
            Ready to Heal at the Root Cause?
          </h2>

          <div className="bg-white backdrop-blur border-2 border-purple-400 rounded-3xl p-8 space-y-6 shadow-2xl">
            <div className="space-y-2">
              <p className="text-zinc-600 text-lg">Invest $250, Receive $400 in Credit</p>
              <p className="text-5xl font-bold text-purple-600">$150 Bonus Value</p>
              <p className="text-emerald-600 font-semibold text-xl">38% More to Invest in Your Health - One-Time Offer</p>
            </div>

            <button
              onClick={onAccept}
              className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-6 px-8 rounded-full text-2xl font-bold hover:scale-105 transition-all shadow-2xl shadow-purple-500/30"
            >
              YES! Give Me $400 in Credit for $250
            </button>

            <div className="flex items-center justify-center gap-2 text-zinc-600 text-sm">
              <i className="fas fa-lock"></i>
              <span>Secure checkout • Credit available after detox completion</span>
            </div>
          </div>

          <button
            onClick={onDecline}
            className="text-zinc-500 hover:text-zinc-700 font-medium transition-colors text-lg underline"
          >
            No thanks, I'll stop after the detox
          </button>

          <div className="pt-8 border-t border-purple-300">
            <p className="text-zinc-500 text-sm italic">
              This offer expires when you leave this page and cannot be retrieved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Upsell2bPage;
