import React from 'react'
import Form from './form'

function useFormContext(props) {
  let disabled = props.disabled

  const context = React.useContext(Form.Context || {})
  if (context) disabled = context.disabled

  return { disabled }
}

export default useFormContext
