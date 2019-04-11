import React from 'react'
import useFormContext from './use-form-context'

function Button(props) {
  const { disabled } = useFormContext(props)

  return <button {...props} disabled={disabled} />
}

export default Button
