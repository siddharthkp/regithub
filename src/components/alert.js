import React from 'react'

function Alert(props) {
  return (
    <div className="alert" {...props}>
      {props.children}
    </div>
  )
}

export default Alert
