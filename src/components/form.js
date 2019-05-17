import React from 'react'

function Form({ className, ...props }) {
  const onSubmit = event => {
    event.preventDefault()
    props.onSubmit(event)
  }

  return (
    <form
      {...props}
      className={`form ${className}`}
      onSubmit={onSubmit}
    >
      {props.children}
    </form>
  )
}

export default Form
