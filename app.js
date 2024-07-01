
import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [number, setCount] = useState(0);

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100); 
    setCount(randomNumber);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setCount(number + 1)}>Increase</button>
      <button onClick={() => setCount(number - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={generateRandomNumber}>Random</button>
    </div>
  );
}

export default App;
