import React from 'react'
import Form from './form'

function Button(props) {
  let disabled = false

  const FormContext = React.useContext(Form.Context)
  if (FormContext) disabled = FormContext.disabled

  return <button {...props} disabled={disabled} />
}

export default Button
