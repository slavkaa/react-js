import React, {useState} from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)

  function increment() {
    setCounter(counter + 1)
  }


  function decrement() {
    setCounter(counter - 1)
  }

  return (
    <div className="App">
      <div>{counter}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
