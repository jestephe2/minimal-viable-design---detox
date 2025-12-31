
import React, { useEffect } from 'react';
import { UserSession } from '../types';
import confetti from 'https://cdn.skypack.dev/canvas-confetti';

interface ThankYouPageProps {
  session: UserSession;
}

const ThankYouPage: React.FC<ThankYouPageProps> = ({ session }) => {
  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#10b981', '#ffffff', '#3b82f6']
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-blue-50 py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-6">
          <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-xl">
            <i className="fas fa-check text-white text-4xl"></i>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-zinc-900">Welcome, {session.name}!</h1>
          <p className="text-xl text-zinc-600">Your journey to vibrant health begins now.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-3xl space-y-6 border-2 border-emerald-200 shadow-xl">
            <h3 className="text-2xl font-bold text-zinc-900">Order Summary</h3>
            <div className="space-y-4">
              {session.purchasedItems.map((item, i) => (
                <div key={i} className="flex justify-between items-center text-zinc-700">
                  <span>{item}</span>
                  <i className="fas fa-check-circle text-emerald-500"></i>
                </div>
              ))}
              <div className="pt-4 border-t border-emerald-200 space-y-2">
                <div className="flex justify-between items-center text-lg font-bold text-emerald-600">
                  <span>Total Credits Earned</span>
                  <span>${session.totalValue.toLocaleString()}</span>
                </div>
                <p className="text-xs text-zinc-500 italic">toward the Optimal Health Program</p>
              </div>
            </div>
            <p className="text-xs text-zinc-500">A confirmation email has been sent to <strong className="text-zinc-700">{session.email}</strong></p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-zinc-900">Your Next Steps</h3>
            <div className="space-y-6">
              {[
                { title: "Check Your Inbox", desc: "Your login credentials and quick-start guide are waiting for you.", icon: "fa-envelope" },
                { title: "Join the Community", desc: "Introduce yourself to the Root Cause tribe in our private forum.", icon: "fa-users" },
                { title: "Day 1 Prep", desc: "Watch the 'Welcome Video' in the portal to prepare for tomorrow.", icon: "fa-play" }
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center flex-shrink-0">
                    <i className={`fas ${step.icon} text-emerald-600`}></i>
                  </div>
                  <div>
                    <h5 className="text-zinc-900 font-bold">{step.title}</h5>
                    <p className="text-zinc-600 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://rooted-wellness.circle.so/checkout/root-cause-reset?coupon_code=ROOTCAUSERESET2026"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-xl text-center"
            >
              Access My Portal Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
