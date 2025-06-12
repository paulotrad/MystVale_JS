// pages/api/checkout.js
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  try {

const session = await stripe.checkout.sessions.create({
  payment_method_types: ['card'],
  line_items: [
    {
      price: "price_1RZ1cCQwLtC8F1G7ZYgZyNVO",
      quantity: 1,
     // This shows up in Checkout!
      // or alternatively add metadata:
      // adjustable_quantity: {enabled: false}, // if needed
    },
  ],
  mode: 'payment',
  success_url: `${req.headers.origin}/success?dragon=${name}`,
  cancel_url: `${req.headers.origin}/cancel`,
  shipping_address_collection: {
    allowed_countries: ['US', 'CA'],
  },
  metadata: {
    dragonName: name, // This shows in the dashboard
  },
});


    res.status(200).json({ url: session.url });
  } catch (err) {
    console.log("eer")
    res.status(500).json({ error: err.message });
  }
}