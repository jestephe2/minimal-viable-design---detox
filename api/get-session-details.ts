import type { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-12-15.clover',
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
    const { sessionId } = req.body;

    if (!sessionId) {
      return res.status(400).json({ error: 'Missing session ID' });
    }

    // Retrieve the checkout session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['customer', 'customer_details', 'shipping_details'],
    });

    // Extract billing address (from customer_details)
    const billingAddress = {
      line1: session.customer_details?.address?.line1 || '',
      line2: session.customer_details?.address?.line2 || '',
      city: session.customer_details?.address?.city || '',
      state: session.customer_details?.address?.state || '',
      postal_code: session.customer_details?.address?.postal_code || '',
      country: session.customer_details?.address?.country || '',
    };

    // Extract shipping address (from shipping_details)
    const shippingAddress = {
      line1: session.shipping_details?.address?.line1 || session.shipping?.address?.line1 || '',
      line2: session.shipping_details?.address?.line2 || session.shipping?.address?.line2 || '',
      city: session.shipping_details?.address?.city || session.shipping?.address?.city || '',
      state: session.shipping_details?.address?.state || session.shipping?.address?.state || '',
      postal_code: session.shipping_details?.address?.postal_code || session.shipping?.address?.postal_code || '',
      country: session.shipping_details?.address?.country || session.shipping?.address?.country || '',
    };

    // Use billing address, fallback to shipping address if billing is empty
    const finalAddress = {
      line1: billingAddress.line1 || shippingAddress.line1,
      line2: billingAddress.line2 || shippingAddress.line2,
      city: billingAddress.city || shippingAddress.city,
      state: billingAddress.state || shippingAddress.state,
      postal_code: billingAddress.postal_code || shippingAddress.postal_code,
      country: billingAddress.country || shippingAddress.country,
    };

    // Extract customer information
    const customerDetails = {
      email: session.customer_details?.email || session.customer_email || '',
      name: session.customer_details?.name || session.shipping_details?.name || session.shipping?.name || '',
      address: finalAddress,
      shipping_address: shippingAddress,
      phone: session.customer_details?.phone || session.shipping_details?.phone || session.shipping?.phone || '',
    };

    return res.status(200).json(customerDetails);
  } catch (error: any) {
    console.error('Error retrieving session:', error);
    return res.status(500).json({ error: error.message });
  }
}
