import React, {useState} from 'react';

const InputText = function() {
  const [textData, setTextData] = useState(null)

  return (
    <div className="form-data">
      <label>{textData}</label>
      <input
        onChange={event => setTextData(event.target.value)}
        placeholder="Type any text"
        type="text"
        value={textData}
      />
    </div>
  )
}

export default InputText;