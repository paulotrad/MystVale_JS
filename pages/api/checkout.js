// pages/api/checkout.js
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  try {
    const { name, priceId } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `https://myst-vale-js.vercel.app/`,
      cancel_url: `https://myst-vale-js.vercel.app/cancel`,
       shipping_address_collection: {
    allowed_countries: ['US', 'CA'], // You can list all allowed countries
  },
    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}