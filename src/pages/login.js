import React from 'react'
import Avatar from '../components/avatar'
import Form from '../components/form'
import Switch from '../components/switch'

function LoginForm(props) {
  const [disabled, onChange] = useSmartSubmit(true)

  return (
    <div className="login-form">
      <Avatar src={props.user.avatar} />

      <div>Welcome back, {props.user.name.first}!</div>

      <Form onSubmit={props.onSubmit}>
        <input
          onChange={onChange}
          type="password"
          name="password"
          placeholder="enter your password"
        />

        <button type="submit" disabled={disabled}>
          Log in
        </button>

        <Switch label="Remember me" />
      </Form>
    </div>
  )
}

function useSmartSubmit(defaultState) {
  const [disabled, setDisabled] = React.useState(defaultState)

  const onChange = event => {
    const disabled = event.target.value.length === 0
    setDisabled(disabled)
  }

  return [disabled, onChange]
}

export default LoginForm
