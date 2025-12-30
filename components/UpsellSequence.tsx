
import React from 'react';
import { Step } from '../types';

interface UpsellSequenceProps {
  step: Step;
  onDecision: (accepted: boolean) => void;
  hasUpsell1: boolean;
}

const UpsellSequence: React.FC<UpsellSequenceProps> = ({ step, onDecision, hasUpsell1 }) => {
  const redirectToStripe = async (product: 'upsell1' | 'upsell2a' | 'upsell2b') => {
    // Get the appropriate price ID
    const priceIds = {
      upsell1: 'price_1SjmmDKJt6B5i2JVkBVm1PPq',
      upsell2a: 'price_1Sjn1wKJt6B5i2JV6O1lezsM',
      upsell2b: 'price_1Sjn4HKJt6B5i2JV1RICNjsr',
    };

    const priceId = priceIds[product];

    // Get user session data from localStorage
    const storedSession = localStorage.getItem('user_session');
    let email = '';
    let name = '';

    if (storedSession) {
      const session = JSON.parse(storedSession);
      email = session.email || '';
      name = session.name || '';
    }

    // Send upsell acceptance to GoHighLevel webhook
    try {
      const webhookUrl = 'https://services.leadconnectorhq.com/hooks/qQCPEPJKTOnlTBv5wJd9/webhook-trigger/9686cc72-e318-44e0-9737-c51652de3ad3';

      const productDetails = {
        upsell1: { name: 'Premium Add-On Bundle', price: '$157' },
        upsell2a: { name: 'Coaching Call', price: '$97' },
        upsell2b: { name: '$400 Credit', price: '$250' },
      };

      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          name: name,
          source: 'upsell_acceptance',
          product: productDetails[product].name,
          price: productDetails[product].price,
          product_type: product,
          timestamp: new Date().toISOString(),
        }),
      }).catch(err => console.error('Webhook error:', err));

      // Create Stripe Checkout Session via API
      const apiUrl = window.location.hostname === 'localhost'
        ? '/api/create-checkout-session'
        : 'https://rootcausereset.vercel.app/api/create-checkout-session';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: priceId,
          productType: product,
          customerEmail: email,
          customerName: name,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { url } = await response.json();

      if (url) {
        // Redirect to Stripe Checkout
        window.location.href = url;
      } else {
        throw new Error('No checkout URL returned');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  if (step === 'upsell1') {
    return (
      <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-6">
        <div className="max-w-2xl w-full space-y-8 text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-sm font-bold uppercase tracking-widest animate-pulse">
            Wait! One-Time Exclusive Offer
          </div>
          
          <h1 className="text-4xl md:text-6xl text-white font-bold leading-tight">
            Maximize Your Results with Premium Support
          </h1>
          
          <p className="text-xl text-zinc-400">
            Most people see 3x faster results when they have a professional looking over their shoulder. Add the Premium Bundle for just $157 today (Save $150).
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-left">
            {[
              "1-on-1 Kickoff Call (30 min)",
              "Advanced Supplement Protocol Upgrade",
              "VIP Community Access & Q&A",
              "Weekly Group Coaching Sessions"
            ].map((item, i) => (
              <div key={i} className="flex gap-3 bg-zinc-900 p-4 rounded-xl border border-zinc-800">
                <i className="fas fa-star text-yellow-500"></i>
                <span className="text-zinc-300 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4 pt-6">
            <button
              onClick={() => redirectToStripe('upsell1')}
              className="w-full bg-white text-black py-6 rounded-full text-2xl font-bold hover:scale-105 transition-all shadow-2xl"
            >
              YES, Upgrade My Experience — $157
            </button>
            <button
              onClick={() => onDecision(false)}
              className="text-zinc-500 hover:text-zinc-300 font-medium transition-colors"
            >
              No thanks, I'll do it on my own for now
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Upsell 2
  const isHighTicket = hasUpsell1;
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full space-y-8 text-center">
        <h1 className="text-4xl md:text-6xl text-white font-bold leading-tight">
          {isHighTicket ? "One last step for Total Mastery" : "Don't lose your progress!"}
        </h1>
        
        <p className="text-xl text-zinc-400">
          {isHighTicket 
            ? "Since you're committed to the premium experience, we want to offer you our flagship Optimal Health Program at a massive discount."
            : "After your 28-day detox, keep the momentum going with our 30-day Maintenance & Extension plan."
          }
        </p>

        <div className="bg-emerald-500/10 border border-emerald-500/20 p-8 rounded-3xl space-y-4">
          <h3 className="text-2xl font-bold text-white">
            {isHighTicket ? "Optimal Health Credit" : "Detox Extension & Maintenance"}
          </h3>
          <div className="text-4xl font-bold text-emerald-500">
            {isHighTicket ? "$250" : "$97"}
            <span className="text-zinc-500 text-lg line-through ml-3">
              {isHighTicket ? "$500" : "$197"}
            </span>
          </div>
        </div>

        <div className="space-y-4 pt-6">
          <button
            onClick={() => redirectToStripe(isHighTicket ? 'upsell2b' : 'upsell2a')}
            className="w-full bg-emerald-600 text-white py-6 rounded-full text-2xl font-bold hover:scale-105 transition-all shadow-2xl"
          >
            ADD TO MY ORDER
          </button>
          <button
            onClick={() => onDecision(false)}
            className="text-zinc-500 hover:text-zinc-300 font-medium transition-colors"
          >
            No thanks, complete my purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpsellSequence;
