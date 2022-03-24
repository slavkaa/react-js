import css from './Quote.module.css'

import React from 'react'

const Quote = ({children, ...props}) => {
  return (
    <span>
      <blockquote className={css.blockquote} cite={props.source}>
        {children}
      </blockquote>
      <a  className={css.blockquoteSource} href={props.source}>{props.sourceName}</a>
    </span>
  )
}

export default Quote