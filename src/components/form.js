import React from 'react'

const FormContext = React.createContext()

function Form(props) {
  function onSubmit(event) {
    event.preventDefault()
    props.onSubmit()
  }

  return (
    <form
      {...props}
      className={'form ' + props.className}
      onSubmit={onSubmit}
    >
      <FormContext.Provider value={{ disabled: props.disabled }}>
        {props.children}
      </FormContext.Provider>
    </form>
  )
}

Form.defaultProps = {
  className: ''
}

Form.Context = FormContext
export default Form
