import React from 'react'

// const FormContext = React.createContext({})

function Form(props) {
  return (
    <form className="form" onSubmit={props.onSubmit}>
      {props.children}
    </form>
  )
}

// Form.Context = FormContext

export default Form
