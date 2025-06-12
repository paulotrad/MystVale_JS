// components/BuyButton.js
import { useState } from 'react';

export default function BuyButton({ dragonName, priceId }) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: dragonName, priceId }),
    });
    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <button
      onClick={handleCheckout}
      className="bg-indigo-600 text-white px-4 py-2 rounded"
      disabled={loading}
    >
      {loading ? 'Loading...' : `Buy ${dragonName} Kit`}
    </button>
  );
}
