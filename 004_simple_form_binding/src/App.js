import React, {useState} from 'react';

function App() {
  const [textData, setTextData] = useState('DEFAULT TEXT')


  return (
    <div className="App">
      <div>{textData}</div>
      <br/>
      <br/>
      <input type="text" value={textData} onChange={event => setTextData(event.target.value)} />
    </div>
  );
}

export default App;
