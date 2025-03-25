import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/hello', {
      method: 'GET',
      credentials: 'include' // Optional: only if you’re using cookies/auth
    })
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);
  

  return (
    <div>
      <h1>Frontend + Backend</h1>
      <h2>hello ...!!</h2>
      <p>{message}</p>
    </div>
  );
}

export default App;
