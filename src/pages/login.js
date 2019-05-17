import React from 'react'
import Avatar from '../components/avatar'
import Form from '../components/form'
import Input from '../components/input'
import useSmartForm from '../hooks/use-smart-form'

function LoginForm(props) {
  const name = props.user.name

  const [disabled, onChange] = useSmartForm()

  return (
    <div className="login-form">
      <Avatar />

      <div>Welcome back, {name}!</div>

      <Form onSubmit={props.onSubmit}>
        <Input
          onChange={onChange}
          type="password"
          name="password"
          placeholder="enter your password"
        />

        <button type="submit" disabled={disabled}>
          Log in
        </button>
      </Form>
    </div>
  )
}

export default LoginForm
