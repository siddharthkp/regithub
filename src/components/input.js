import React from 'react'
import Form from './form'

function Input(props) {
  const { disabled } = React.useContext(Form.Context)

  return <input {...props} disabled={disabled} />
}

export default Input
