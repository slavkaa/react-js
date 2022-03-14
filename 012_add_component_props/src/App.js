import React, {useState} from 'react';
import './App.css';
import InputText from "./components/InputText";

function App() {
  return (
    <div className="app">
      <InputText placeholder="Type something ..."/>
      <InputText/>
      <InputText textData="DEFAULT VALUE"/>
      <InputText placeholder=""/>
      <InputText placeholder="..."/>
      <InputText placeholder="Type something here too ..."/>
      <InputText/>
      <InputText textData="It already has some text."/>
    </div>
  );
}

export default App;
