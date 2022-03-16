import React from "react"

const DefaultSelect = ({options, defaultValue, value, onChange, ...props}) => {
    return (
      <select value={value} onChange={onChange}>
        <option disabled value="">{defaultValue}</option>
        {
          options.map(option => {
            return (<option key={option.value} value={option.value}>{option.name}</option>)
          })
        }
      </select>
    )
  }

export default DefaultSelect