import React, {useState} from "react";

const InputText = function(props) {
  const [textData, setTextData] = useState(props.textData ?? "")

  const placeholder = props.placeholder ?? "Type any text"

  return (
    <div className="form-data">
      <label>{textData}</label>
      <input
        onChange={event => setTextData(event.target.value)}
        placeholder={placeholder}
        type="text"
        value={textData}
      />
    </div>
  )
}

export default InputText;