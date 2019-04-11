import React from 'react'

function Form(props) {
  return (
    <form className="form" onSubmit={props.onSubmit}>
      {props.children}
    </form>
  )
}

Form.defaultProps = {
  className: ''
}

// Form.Context = React.createContext()

export default Form
