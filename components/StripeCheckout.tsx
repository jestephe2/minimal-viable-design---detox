import React, { useState, useEffect } from 'react';

interface StripeCheckoutProps {
  onSuccess: (data: { name: string; email: string }) => void;
  onCancel: () => void;
  product?: 'main' | 'upsell1' | 'upsell2a' | 'upsell2b';
}

const StripeCheckout: React.FC<StripeCheckoutProps> = ({ onSuccess, onCancel, product = 'main' }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getPriceId = (): string => {
    const prices = {
      main: 'price_1SeyykKJt6B5i2JVg5XfmjBl',
      upsell1: 'price_1SjmmDKJt6B5i2JVkBVm1PPq',
      upsell2a: 'price_1Sjn1wKJt6B5i2JV6O1lezsM',
      upsell2b: 'price_1Sjn4HKJt6B5i2JV1RICNjsr',
    };
    return prices[product] || prices.main;
  };

  const getProductInfo = () => {
    const products = {
      main: { name: 'Root Cause Reset', price: '$497.00' },
      upsell1: { name: 'Premium Add-On Bundle', price: '$157.00' },
      upsell2a: { name: 'Maintenance Plan', price: '$97.00' },
      upsell2b: { name: 'Optimal Health Credit', price: '$250.00' },
    };
    return products[product];
  };

  useEffect(() => {
    const createCheckoutSession = async () => {
      try {
        // Send to GoHighLevel webhook
        const webhookUrl = 'https://services.leadconnectorhq.com/hooks/qQCPEPJKTOnlTBv5wJd9/webhook-trigger/9686cc72-e318-44e0-9737-c51652de3ad3';
        const productInfo = getProductInfo();

        fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            source: 'checkout_initiated',
            product: productInfo.name,
            price: productInfo.price,
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
            priceId: getPriceId(),
            productType: product,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || 'Failed to create checkout session');
        }

        const { url } = await response.json();

        if (url) {
          // Redirect to Stripe Checkout
          window.location.href = url;
        } else {
          throw new Error('No checkout URL returned');
        }
      } catch (error: any) {
        console.error('Checkout error:', error);
        setError(error.message || 'Something went wrong. Please try again.');
        setLoading(false);
      }
    };

    createCheckoutSession();
  }, [product]);

  const productInfo = getProductInfo();

  if (error) {
    return (
      <div className="min-h-screen bg-zinc-100 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden p-8 space-y-6 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
            <i className="fas fa-exclamation-triangle text-red-600 text-2xl"></i>
          </div>
          <h2 className="text-2xl font-bold text-zinc-900">Checkout Error</h2>
          <p className="text-zinc-600">{error}</p>
          <button
            onClick={onCancel}
            className="w-full bg-zinc-900 text-white py-4 rounded-lg font-bold text-lg hover:bg-zinc-800 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-8 space-y-6">
          <div className="flex justify-between items-center">
            <button onClick={onCancel} className="text-zinc-400 hover:text-zinc-600">
              <i className="fas fa-arrow-left"></i>
            </button>
            <div className="flex items-center gap-1">
              <i className="fab fa-stripe text-4xl text-[#635bff]"></i>
            </div>
          </div>

          <div className="text-center space-y-4">
            <span className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Secure Checkout</span>
            <h2 className="text-2xl font-bold text-zinc-900 mt-1">{productInfo.name}</h2>
            <p className="text-zinc-500">{productInfo.price} USD</p>

            <div className="py-8">
              <div className="flex items-center justify-center gap-3">
                <i className="fas fa-spinner animate-spin text-[#635bff] text-3xl"></i>
                <span className="text-lg text-zinc-600">Redirecting to secure checkout...</span>
              </div>
            </div>
          </div>

          <p className="text-[10px] text-center text-zinc-400">
            <i className="fas fa-shield-alt mr-1"></i>
            Secure checkout powered by Stripe. Your payment information is encrypted and never touches our servers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StripeCheckout;
