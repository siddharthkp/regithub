import React from 'react'
import Avatar from '../components/avatar'
import Form from '../components/form'
import Input from '../components/input'
import Switch from '../components/switch'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: props.user.name.first || 'you',
      remember: false,
      disabled: true
    }
  }
  onRememberToggle = () => {
    this.setState({ remember: !this.state.remember })
  }
  onChange = event => {
    const disabled = event.target.value.length === 0
    this.setState({ disabled })
  }
  onSubmit = event => {
    event.preventDefault()
    this.props.onSubmit(event)
  }
  render() {
    return (
      <div className="login-form">
        <Avatar />

        <div>Welcome back, {this.state.name}!</div>

        <Form onSubmit={this.onSubmit}>
          <Input
            onChange={this.onChange}
            type="password"
            name="password"
            placeholder="enter your password"
          />

          <button type="submit" disabled={this.state.disabled}>
            Log in
          </button>

          <Switch
            label="Remember me"
            onClick={this.onRememberToggle}
          />
        </Form>
      </div>
    )
  }
}

export default LoginForm
