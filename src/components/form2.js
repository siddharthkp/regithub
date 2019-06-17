import React from 'react'

function Form({ className, ...props }) {
  const onSubmit = event => {
    event.preventDefault()
    props.onSubmit(event)
  }

  const enhancedChildren = props.children.map(function(child) {
    if (props.disabled) {
      return React.cloneElement(child, { disabled: props.disabled })
    } else {
      return child
    }
  })

  return (
    <form
      className={`form ${props.className}`}
      {...props}
      onSubmit={onSubmit}
    >
      {enhancedChildren}
    </form>
  )
}

// Form.Context = FormContext

export default Form
