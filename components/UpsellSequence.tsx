
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
    console.log('🔵 redirectToStripe called for:', product);

    // Get the appropriate price ID
    const priceIds = {
      upsell1: import.meta.env.VITE_STRIPE_PAYMENT_LINK_UPSELL1,
      upsell2a: import.meta.env.VITE_STRIPE_PAYMENT_LINK_UPSELL2A,
      upsell2b: import.meta.env.VITE_STRIPE_PAYMENT_LINK_UPSELL2B,
    };

    const priceId = priceIds[product];
    console.log('🔵 Environment variables:', priceIds);
    console.log('🔵 Using price ID:', priceId);

    if (!priceId) {
      console.error('❌ Stripe price ID not configured for:', product);
      alert('Stripe configuration error. Please contact support.');
      return;
    }

    // Get user session data from localStorage
    const storedSession = localStorage.getItem('user_session');
    let email = '';
    let name = '';

    console.log('🔵 Stored session:', storedSession);

    if (storedSession) {
      const session = JSON.parse(storedSession);
      email = session.email || '';
      name = session.name || '';
      console.log('🔵 Session data - email:', email, 'name:', name);
    } else {
      console.log('⚠️ No session found in localStorage!');
    }

    // Send upsell acceptance to GoHighLevel webhook
    try {
      const webhookUrl = 'https://services.leadconnectorhq.com/hooks/qQCPEPJKTOnlTBv5wJd9/webhook-trigger/9686cc72-e318-44e0-9737-c51652de3ad3';

      const productDetails = {
        upsell1: { name: 'Premium Supplement Bundle', price: '$157' },
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
      // Temporarily using production API for local testing
      const apiUrl = 'https://rootcausereset.vercel.app/api/create-checkout-session';

      console.log('🔵 Calling API:', apiUrl);
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

      console.log('🔵 API response status:', response.status);

      if (!response.ok) {
        const errorData = await response.json();
        console.error('❌ API error:', errorData);
        throw new Error('Failed to create checkout session');
      }

      const { url } = await response.json();
      console.log('🔵 Checkout URL:', url);

      if (url) {
        console.log('🔵 Redirecting to Stripe...');
        // Redirect to Stripe Checkout
        window.location.href = url;
      } else {
        throw new Error('No checkout URL returned');
      }
    } catch (error) {
      console.error('❌ Checkout error:', error);
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

  // Upsell 2 - Always show coaching call to everyone
  if (step === 'upsell2') {
    return (
      <Upsell2aPage
        onAccept={() => redirectToStripe('upsell2a')}
        onDecline={() => onDecision(false)}
      />
    );
  }

  // Upsell 3 - Always show credit offer to everyone
  if (step === 'upsell3') {
    return (
      <Upsell2bPage
        onAccept={() => redirectToStripe('upsell2b')}
        onDecline={() => onDecision(false)}
      />
    );
  }

  return null;
};

export default UpsellSequence;
