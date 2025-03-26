import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [helloMessage, setHelloMessage] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    // Fetch message from /api/hello route
    axios.get('http://ec2-13-201-184-236.ap-south-1.compute.amazonaws.com/api/hello')
      .then(response => {
        setHelloMessage(response.data.message);
      })
      .catch(error => {
        console.error('There was an error fetching the hello message:', error);
      });

    // Fetch message from /api/msg route
    axios.get('http://ec2-13-201-184-236.ap-south-1.compute.amazonaws.com/api/msg')
      .then(response => {
        setMsg(response.data.message);
      })
      .catch(error => {
        console.error('There was an error fetching the msg:', error);
      });
  }, []);

  return (
    <div>
      <h1>React Frontend</h1>
      <p>Message from /api/hello: {helloMessage}</p>
      <p>Message from /api/msg: {msg}</p>
    </div>
  );
};

export default App;
