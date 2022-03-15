import React from "react"
import classes from "./DefaultInput.module.css"

const DefaultInput = React.forwardRef(
  (props, ref) => {
    return (
      <input ref={ref} {...props} className={classes.defaultInput} />
    )
  }
)

export default DefaultInput