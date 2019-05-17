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
        <label htmlFor="password">Password</label>
        <Input
          id="password"
          type="password"
          onChange={onChange}
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
