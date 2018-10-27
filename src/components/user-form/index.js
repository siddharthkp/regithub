import React from 'react'
import Logo from '../common/logo'
import SmartSubmit from './smart-submit'

class UserForm extends React.Component {
  onSubmit = event => {
    event.preventDefault()
    const form = event.target
    this.props.onUserChange({ username: form.elements.username.value })
  }
  render() {
    return (
      <form className="user-form" onSubmit={event => this.onSubmit(event)}>
        <Logo big="true" />
        <SmartSubmit>
          {function({ onChange, disabled }) {
            return (
              <div>
                <input
                  onChange={onChange}
                  type="text"
                  name="username"
                  placeholder="github username"
                />
                <button type="submit" disabled={disabled}>
                  See profile
                </button>
              </div>
            )
          }}
        </SmartSubmit>
      </form>
    )
  }
}

export default UserForm
