import React, {useState} from 'react';

const SimpleForm = function() {
  const [state, setState] = useState({
    name: 'Viacheslav',
    job: 'Web developer'
  });
  const {name, job} = state
  const [collectedData, setCollectedData] = useState('{}')

  function handleChange (event) {
    const {name, value} = event.target // destructuring

    updateState(name, value)
    updateCollectedData(name, value)
  }

  function updateState(name, value) {
    let tmp = {}
    tmp[name] = value

    setState(tmp);
  }

  function updateCollectedData(name, value) {
    let collectedDataTmp = JSON.parse(collectedData)
    collectedDataTmp[name] = value
    setCollectedData(JSON.stringify(collectedDataTmp))
  }

  return (
    <form>
      <br/>
      <br/>
      <label htmlFor="name">Name </label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={handleChange} />
        <br/>
        <br/>
      <label htmlFor="job">Job </label>
      <input
        type="text"
        name="job"
        id="job"
        value={job}
        onChange={handleChange} />
      <br/>
      <br/>
      <div>
        <div>Collected data:</div>
        <div>{collectedData}</div>
      </div>
    </form>
  )
}

export default SimpleForm;