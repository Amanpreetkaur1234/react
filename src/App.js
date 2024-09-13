import React, { useState } from 'react';
import './App.css';

function App() {
  const [count,setcount] = useState(0);
  const increment =()=>{
    setcount(count+1);
  }
const decrement =()=>{
  setcount(count-1);
}
  
  return (
    <div className="App">
    <h1>Counter:{count}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
