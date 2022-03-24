import './ContentBlock.css'

import React from 'react'

const ContentBlock = ({children, ...props}) => {
  return (
    <div {...props} className="container">
      {children}
    </div>
  )
}

export default ContentBlock