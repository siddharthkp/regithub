import React from 'react'
import useFormContext from './use-form-context'

function Input(props) {
  const { disabled } = useFormContext(props)

  return <input {...props} disabled={disabled} />
}

export default Input
