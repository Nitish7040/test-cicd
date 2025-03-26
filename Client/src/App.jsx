import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/hello', {
      method: 'GET',
      credentials: 'include'
    })
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => setMessage(data.message))
      .catch(err => {
        console.error('Fetch error:', err);
        setError('Failed to fetch message from server.');
      });
  }, []);

  return (
    <div>
      <h1>My Fullstack App</h1>
      <p>{message || error}</p>
    </div>
  );
}

export default App;
