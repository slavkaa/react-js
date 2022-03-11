import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <br/><br/>
      <Counter counter={5}/> <br/><br/>
      <Counter/> <br/><br/>
      <Counter counter={-5}/>
    </div>
  );
}

export default App;
