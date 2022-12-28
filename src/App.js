import './App.css';
import io from 'socket.io-client';
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState("");

  const socket = io.connect('http://localhost:5000/');
    socket.emit("reactEvent", message)
  const handleSend = () => {
    console.log(message);
  }
  return (
    <div>
      <h2>Hello react and socket io</h2>

      <input onBlur={(e)=>setMessage(e.target.value)} type="text" placeholder='message........' />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default App;
