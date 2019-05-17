import React from 'react'
import Avatar from '../components/avatar'
import Form from '../components/form'
import Input from '../components/input'
import Switch from '../components/switch'

function LoginForm(props) {
  const name = props.user.name.first || 'you'

  const [disabled, onPasswordChange] = useSmartness(true)

  return (
    <div className="login-form">
      <Avatar />

      <div>Welcome back, {name}!</div>

      <Form onSubmit={props.onSubmit}>
        <Input
          onChange={onPasswordChange}
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

export default LoginForm

function useSmartness(defaultState) {
  const [disabled, setDisabled] = React.useState(defaultState)

  const onChange = event => {
    const disabled = event.target.value.length === 0
    setDisabled(disabled)
  }

  return [disabled, onChange]
}
