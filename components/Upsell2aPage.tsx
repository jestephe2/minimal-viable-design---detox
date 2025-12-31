import React from 'react';

interface Upsell2aPageProps {
  onAccept: () => void;
  onDecline: () => void;
}

const Upsell2aPage: React.FC<Upsell2aPageProps> = ({ onAccept, onDecline }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100/40 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto space-y-6">
          <div className="inline-block px-6 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-700 text-sm font-bold uppercase tracking-widest">
            🎯 One-Time Opportunity - Limited Spots
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-zinc-900">
            Start Your Journey <span className="text-blue-600">With Expert Guidance</span>
          </h1>

          <p className="text-2xl md:text-3xl text-zinc-700 font-light">
            Get <span className="text-blue-600 font-bold">personalized preparation</span> before you begin your detox
          </p>

          <div className="bg-white/80 backdrop-blur border border-blue-200 rounded-3xl p-8 max-w-2xl mx-auto shadow-xl">
            <p className="text-lg text-zinc-600 mb-4">
              The difference between an average detox and a transformative one?
            </p>
            <p className="text-xl text-zinc-900 font-semibold">
              Having a doctor review your health history and create a personalized optimization plan before you start.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-6 md:px-12 bg-blue-50/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-zinc-900">
            Why Most People Don't Get Optimal Results
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "fa-question-circle",
                title: "Unprepared",
                description: "Starting without understanding your unique health needs and how to optimize for your specific situation"
              },
              {
                icon: "fa-dizzy",
                title: "Detox Symptoms",
                description: "Experiencing unnecessary discomfort because you didn't know how to prepare your body properly"
              },
              {
                icon: "fa-chart-line",
                title: "Suboptimal Results",
                description: "Missing key opportunities to maximize your transformation because you didn't have personalized guidance"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white border border-blue-200 rounded-2xl p-6 space-y-3 shadow-lg">
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
              Introducing: <span className="text-blue-600">Root Cause Reset Coaching Call</span>
            </h2>
            <p className="text-xl text-zinc-600">
              Live 1-on-1 Zoom call with Dr. Emily BEFORE you start your detox
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-3xl p-8 mb-8 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
              <div className="w-32 h-32 sm:w-24 sm:h-24 rounded-full overflow-hidden flex-shrink-0 shadow-lg">
                <img
                  src="/images/dr. emily headshot.png"
                  alt="Dr. Emily Plasker, DC, IHP"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">Meet Dr. Emily Plasker, DC, IHP</h3>
                <p className="text-zinc-700">
                  Doctor of Chiropractic and Integrative Health Practitioner with over 15 years of experience helping thousands of clients achieve optimal health through personalized detox protocols.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6 text-zinc-900">What You'll Get On Your Call:</h3>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: "fa-clipboard-list",
                  title: "Complete Health History Review",
                  description: "Dr. Emily will review your current health status, medications, symptoms, and goals to create your personalized plan"
                },
                {
                  icon: "fa-chart-line",
                  title: "Detox Optimization Strategy",
                  description: "Learn exactly how to optimize your detox experience based on your unique health profile and lifestyle"
                },
                {
                  icon: "fa-shield-alt",
                  title: "Preparation Guidance",
                  description: "Get specific recommendations on how to prepare your body, mind, and environment for maximum success"
                },
                {
                  icon: "fa-question",
                  title: "Q&A Session",
                  description: "Ask Dr. Emily any questions you have about the detox, your health concerns, or how to get the best results"
                }
              ].map((item, i) => (
                <div key={i} className="bg-white border border-blue-200 rounded-xl p-5 space-y-2 shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className={`fas ${item.icon} text-blue-600 text-lg`}></i>
                    </div>
                    <h4 className="text-lg font-bold text-zinc-900">{item.title}</h4>
                  </div>
                  <p className="text-zinc-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white border border-blue-300 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-calendar-check text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-zinc-900 mb-2">Scheduled Before Your Detox Starts</h4>
                  <p className="text-zinc-600">
                    Your call will be scheduled within 48 hours of purchase, giving you plenty of time to prepare and start your detox with confidence and clarity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Value Comparison */}
          <div className="mt-12 bg-gradient-to-br from-blue-100 to-indigo-100 border-2 border-blue-400 rounded-3xl p-8 max-w-2xl mx-auto shadow-2xl">
            <div className="text-center space-y-4">
              <p className="text-zinc-700 text-lg font-semibold">Private Coaching Call Value:</p>
              <div className="text-5xl font-bold line-through text-zinc-500">$197</div>
              <p className="text-2xl text-blue-700 font-semibold">Your Price Today:</p>
              <div className="text-6xl font-bold text-blue-600">$97</div>
              <p className="text-emerald-600 text-xl font-semibold">
                Save $100 (51% OFF) - One-Time Offer
              </p>
              <div className="bg-white/60 rounded-xl p-4 mt-4">
                <p className="text-sm text-zinc-700 font-medium">
                  ✓ Live 1-on-1 Zoom call with Dr. Emily<br />
                  ✓ Personalized health history review<br />
                  ✓ Customized optimization recommendations<br />
                  ✓ Scheduled before your detox starts
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-6 md:px-12 bg-blue-50/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-zinc-900">
            What Our Clients Say
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Lisa R.",
                result: "Lost 18 lbs, no side effects",
                quote: "The coaching call with Dr. Emily made ALL the difference. She identified a few things about my health history that changed my entire approach. I had zero detox headaches and felt amazing the whole time!"
              },
              {
                name: "Michael T.",
                result: "Best detox experience ever",
                quote: "I've done detoxes before but never had a doctor review my situation first. Dr. Emily's personalized recommendations helped me avoid the mistakes I made in the past. This was by far my best detox experience."
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white border border-blue-200 rounded-2xl p-6 space-y-4 shadow-lg">
                <div className="flex gap-1 text-blue-500">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <p className="text-zinc-700 italic">"{testimonial.quote}"</p>
                <div className="border-t border-blue-200 pt-4">
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
                q: "When will my call be scheduled?",
                a: "Within 48 hours of purchase, you'll receive an email with a calendar link to book your call at a time that works for you. We recommend scheduling it at least a few days before you plan to start your detox."
              },
              {
                q: "How long is the coaching call?",
                a: "Your call with Dr. Emily will be approximately 30-45 minutes, giving plenty of time to review your health history, discuss your goals, and create your personalized optimization plan."
              },
              {
                q: "What if I have a complex health history?",
                a: "Perfect! Dr. Emily specializes in working with people who have complex health situations. She'll take extra time to ensure you're set up for success, regardless of your health history."
              },
              {
                q: "Is this a group call or private?",
                a: "This is a completely private 1-on-1 call with Dr. Emily. Everything discussed is confidential, and the entire session is focused solely on you and your health goals."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-blue-50 border border-blue-200 rounded-2xl p-6 space-y-3 shadow-md">
                <h3 className="text-xl font-bold text-blue-700">{faq.q}</h3>
                <p className="text-zinc-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-blue-100 to-indigo-100">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
            Ready to Optimize Your Detox?
          </h2>

          <div className="bg-white backdrop-blur border-2 border-blue-400 rounded-3xl p-8 space-y-6 shadow-2xl">
            <div className="space-y-2">
              <p className="text-zinc-600 line-through text-2xl">Regular Price: $197</p>
              <p className="text-5xl font-bold text-blue-600">Just $97 Today</p>
              <p className="text-emerald-600 font-semibold text-xl">Save $100 - Never Offered Again</p>
            </div>

            <button
              onClick={onAccept}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-6 px-8 rounded-full text-2xl font-bold hover:scale-105 transition-all shadow-2xl shadow-blue-500/30"
            >
              YES! Add Coaching Call — $97
            </button>

            <div className="flex items-center justify-center gap-2 text-zinc-600 text-sm">
              <i className="fas fa-lock"></i>
              <span>Secure checkout • Call scheduled within 48 hours</span>
            </div>
          </div>

          <button
            onClick={onDecline}
            className="text-zinc-500 hover:text-zinc-700 font-medium transition-colors text-lg underline"
          >
            No thanks, I'll start my detox without personalized guidance
          </button>

          <div className="pt-8 border-t border-blue-300">
            <p className="text-zinc-500 text-sm italic">
              This offer expires when you leave this page and cannot be retrieved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Upsell2aPage;
