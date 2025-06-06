import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Track() {
  const [count, setCount] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!router.isReady || !id) return;

    const checkIdAndUpdateCount = async () => {
      try {
        // 1. Check if the QR ID exists
        const idRes = await fetch(`https://firelight-133cb-default-rtdb.firebaseio.com/qrCodes/${id}.json`);
        const idData = await idRes.json();

        if (!idData) {
          setError('This QR code has already been used or is invalid.');

           setTimeout(() => {
            window.location.href = '/';
          }, 2000);
         
        }else{
            // 2. Delete the ID to prevent reuse
        await fetch(`https://firelight-133cb-default-rtdb.firebaseio.com/qrCodes/${id}.json`, {
          method: 'DELETE',
        });
 // 3. Increment and save visitor count
        const countRes = await fetch('https://firelight-133cb-default-rtdb.firebaseio.com/qrCount.json');
        const countData = await countRes.json();
        const newCount = (countData?.count || 0) + 1;
        setCount(newCount);

        await fetch('https://firelight-133cb-default-rtdb.firebaseio.com/qrCount.json', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ count: newCount }),
        });
if (newCount === 100) {
          setShowModal(true);
        } else {
         setTimeout(() => {
            window.location.href = '/';
          }, 2000);
        }
        }

        

       
        
      } catch (err) {
        console.error('Error:', err);
        setError('Something went wrong. Please try again.');
      }
    };

    checkIdAndUpdateCount();
  }, [router.isReady, id]);

  return (
    <div style={{ textAlign: 'center', paddingTop: '2rem' }}>
      {error ? (
        <div style={{ color: 'red' }}>
          <h2>Error</h2>
          <p>{error}</p>
        </div>
      ) : (
        <>
          <p>You are visitor #{count ?? '...'}</p>
          <p>{showModal ? 'Please fill out the form below:' : 'Counting... and redirecting'}</p>
        </>
      )}

      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '100%', height: '100%',
          background: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999
        }}>
          <div style={{
            background: '#222',
            padding: '2rem',
            borderRadius: '10px',
            maxWidth: '300px',
            textAlign: 'center'
          }}>
            <h2>🎉 You are visitor #100!</h2>
            <p>Fill out this form to claim your reward.</p>
            <input type="text" placeholder="Your Name" style={{ width: '100%', margin: '10px 0', padding: '8px' }} />
            <button style={{ padding: '8px 16px' }}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
}
