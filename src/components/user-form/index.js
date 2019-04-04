import React from 'react'
import Logo from '../common/logo'
import useSmartSubmit from './smart-submit'

const onSubmit = (event, callback) => {
  event.preventDefault()
  const form = event.target
  const username = form.elements.username.value
  callback({ username })
}

const UserForm = props => {
  const [disabled, onChange] = useSmartSubmit()

  return (
    <form
      className="user-form"
      onSubmit={event => onSubmit(event, props.onUserChange)}
    >
      <Logo big="true" />

      <div>
        <input
          autocomplete="off"
          onChange={onChange}
          type="text"
          name="username"
          placeholder="github username"
        />
        <button type="submit" disabled={disabled}>
          See profile
        </button>
      </div>
    </form>
  )
}

export default UserForm
