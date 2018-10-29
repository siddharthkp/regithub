import React from 'react'
import Logo from '../common/logo'
import SmartSubmit from './smart-submit'

const onSubmit = (event, callback) => {
  event.preventDefault()
  const form = event.target
  const username = form.elements.username.value
  callback({ username })
}

const UserForm = props => {
  return (
    <form
      className="user-form"
      onSubmit={event => onSubmit(event, props.onUserChange)}
    >
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

export default UserForm
