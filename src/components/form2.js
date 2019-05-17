import React from 'react'

const FormContext = React.createContext({})

function Form({ className, ...props }) {
  const onSubmit = event => {
    event.preventDefault()
    props.onSubmit(event)
  }

  return (
    <form
      className={`form ${props.className}`}
      {...props}
      onSubmit={onSubmit}
    >
      <FormContext.Provider value={{ disabled: props.disabled }}>
        {props.children}
      </FormContext.Provider>
    </form>
  )
}

Form.Context = FormContext

export default Form
