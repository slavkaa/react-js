import React, {useState} from 'react';
import InputText from "./component/InputText";

function App() {
  return (
    <div className="App">
      <br/><br/>
      <InputText textData={'Hello world!'}/> <br/><br/>
      <InputText/> <br/><br/>
      <InputText/>
    </div>
  );
}

export default App;
