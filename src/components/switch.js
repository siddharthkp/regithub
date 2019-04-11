import React from 'react'
import Form from './form'

function Switch(props) {
  const { disabled } = useFormContext(props)

  return (
    <label className="switch-container">
      <span className="switch">
        <input
          disabled={disabled}
          type="checkbox"
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
  disabled: false,
  onChange: function noop() {}
}

export default Switch

function useFormContext(props) {
  let disabled = props.disabled

  const context = React.useContext(Form.Context || {})
  if (context) disabled = context.disabled

  return { disabled }
}
