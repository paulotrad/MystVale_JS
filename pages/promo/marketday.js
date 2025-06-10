import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Track() {
  const numberForEventWin = 50;
  const [count, setCount] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const redirectHome = () => {
    setTimeout(() => {
      window.location.href = '/';
    }, 500);
  };

  useEffect(() => {
    if (!router.isReady || !id) return;

    const checkIdAndUpdateCount = async () => {
      try {
        // const idRes = await fetch(`https://firelight-133cb-default-rtdb.firebaseio.com/qrCodes/${id}.json`);
        // const idData = await idRes.json();

        // if (idData == null) {
        //   setError('This QR code has already been used or is invalid.');
        //   redirectHome();
        //   return;
        // }

        // await fetch(`https://firelight-133cb-default-rtdb.firebaseio.com/qrCodes/${id}.json`, {
        //   method: 'DELETE',
        // });

        const countRes = await fetch('https://firelight-133cb-default-rtdb.firebaseio.com/qrCount.json');
        const countData = await countRes.json();
        const newCount = (countData?.count || 0) + 1;
        setCount(newCount);

        await fetch('https://firelight-133cb-default-rtdb.firebaseio.com/qrCount.json', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ count: newCount }),
        });

        // if (newCount === numberForEventWin) {
        //   setShowModal(true);
        // } else {
          redirectHome();
        // }

      } catch (err) {
        console.error('Error:', err);
        setError('Something went wrong. Please try again.');
      }
    };

    checkIdAndUpdateCount();
  }, [router.isReady, id]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.state
    ) {
      alert("Please fill in all fields.");
      return;
    }

    await fetch(`https://firelight-133cb-default-rtdb.firebaseio.com/submissions/${id}.json`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    setSubmitted(true);
    
    redirectHome();

  };

  return (
    <div style={{
      fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
      textAlign: 'center',
      padding: '2rem',
      background: 'linear-gradient(to bottom right, #f0f4ff, #e3f2fd)',
      minHeight: '100vh'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#1a237e' }}>
        🐉 Welcome to Mystvale: Dragon Hollow's Special Event!
      </h1>
      <h2 style={{ fontWeight: 400, color: '#303f9f', marginBottom: '1.5rem' }}>
        Thanks for scanning to win the Legendary Hollow Card and Model Set
      </h2>

      {error ? (
        <div style={{ color: '#d32f2f', background: '#ffebee', padding: '1rem', borderRadius: '8px' }}>
          <h2>Error</h2>
          <p>{error}</p>
        </div>
      ) : (
        <>
          <p style={{ fontSize: '1.25rem' }}>You are visitor #{count ?? '...'}</p>
          <p style={{ color: '#555' }}>
            {showModal ? 'Please fill out the form below:' : 'Counting... and redirecting'}
          </p>
        </>
      )}

      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '100%', height: '100%',
          background: 'rgba(0, 0, 0, 0.75)',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999,
          padding: '1rem',
        }}>
          <div style={{
            background: '#1e1e2f',
            padding: '2rem',
            borderRadius: '16px',
            maxWidth: '400px',
            width: '100%',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.4)'
          }}>
            <h2 style={{ marginBottom: '1rem', color: '#ffd54f' }}>🎉 You are visitor #{count}!</h2>
            {submitted ? (
              <p>✅ Thank you! Your submission has been received.</p>
            ) : (
              <>
                <p style={{ marginBottom: '1rem' }}>Fill out this form to claim your reward.</p>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" style={inputStyle} />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" style={inputStyle} />
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" style={inputStyle} />
                <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Street Address" style={inputStyle} />
                <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" style={inputStyle} />
                <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" style={inputStyle} />
                <p style={{ fontSize: '0.85rem', color: '#ffca28', marginBottom: '1rem' }}>
                  ⚠️ Make sure your full mailing info is correct so we can ship your prize!
                </p>
                <button onClick={handleSubmit} style={buttonStyle}>Submit</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

const inputStyle = {
  width: '100%',
  marginBottom: '1rem',
  padding: '10px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '1rem',
};

const buttonStyle = {
  padding: '10px 20px',
  background: '#ffca28',
  color: '#000',
  border: 'none',
  borderRadius: '6px',
  fontSize: '1rem',
  cursor: 'pointer',
};
