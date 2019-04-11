import React from 'react'
import Form from './form'

function Switch(props) {
  const { disabled } = React.useContext(Form.Context)

  return (
    <label className="switch-container">
      <span className="switch">
        <input
          type="checkbox"
          disabled={disabled}
          checked={props.value}
          onChange={props.onClick || props.onToggle || props.onChange}
        />
        <span className="slider" />
      </span>
      {props.label || props.children}
    </label>
  )
}

Switch.defaultProps = {
  onChange: function noop() {}
}

export default Switch
