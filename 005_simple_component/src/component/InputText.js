import React, {useState} from 'react';

const InputText = function() {
  const [textData, setTextData] = useState('DEFAULT TEXT')

  return (
    <div>
      <div>{textData}</div>
      <input type="text" value={textData} onChange={event => setTextData(event.target.value)} />
    </div>
  )
}

export default InputText;