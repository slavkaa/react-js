import React, {useState} from "react"
import css from "./DefaultModalWindow.module.css"
import DefaultButton from "../buttons/DefaultButton";

const DefaultModalWindow = ({children, visible, setVisible}) => {

  let rootCssClasses = [css.defaultModal]

  if (visible) {
    rootCssClasses.push(css.active)
  }

  return (
    <div className={rootCssClasses.join(' ')}>
      <div className={css.defaultModalContent}>
        <DefaultButton className="btn-remove btn-close" onClick={() => setVisible(false)}>X</DefaultButton>
        {children}
      </div>
    </div>
  )
}

export default DefaultModalWindow