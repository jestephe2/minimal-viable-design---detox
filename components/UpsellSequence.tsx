
import React from 'react';
import { Step } from '../types';
import Upsell1Page from './Upsell1Page';
import Upsell2aPage from './Upsell2aPage';
import Upsell2bPage from './Upsell2bPage';

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
      <Upsell1Page
        onAccept={() => redirectToStripe('upsell1')}
        onDecline={() => onDecision(false)}
      />
    );
  }

  // Upsell 2 - Show different page based on whether they bought the premium bundle
  if (hasUpsell1) {
    return (
      <Upsell2bPage
        onAccept={() => redirectToStripe('upsell2b')}
        onDecline={() => onDecision(false)}
      />
    );
  } else {
    return (
      <Upsell2aPage
        onAccept={() => redirectToStripe('upsell2a')}
        onDecline={() => onDecision(false)}
      />
    );
  }
};

export default UpsellSequence;
