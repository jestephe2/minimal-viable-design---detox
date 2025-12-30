import type { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { priceId, productType, customerEmail, customerName } = req.body;

    if (!priceId || !productType) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Determine the next step based on product type
    const stepMap: Record<string, string> = {
      main: 'upsell1',
      upsell1: 'upsell2',
      upsell2a: 'thankyou',
      upsell2b: 'thankyou',
    };

    const nextStep = stepMap[productType] || 'thankyou';

    // Use production domain or fallback to Vercel URL
    const baseUrl = process.env.NODE_ENV === 'production'
      ? 'https://joinrootedwellness.com'
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3001';

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/rootcausereset?stripe_success=true&step=${nextStep}&product=${productType}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/rootcausereset?stripe_cancel=true`,
      customer_email: customerEmail,
      metadata: {
        productType,
        customerName: customerName || '',
      },
      allow_promotion_codes: true,
    });

    return res.status(200).json({ sessionId: session.id, url: session.url });
  } catch (error: any) {
    console.error('Stripe error:', error);
    return res.status(500).json({ error: error.message });
  }
}
