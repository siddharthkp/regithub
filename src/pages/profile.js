import React from 'react'
import Avatar from '../components/avatar'
import Form from '../components/form'
import Input from '../components/input'
import Button from '../components/button'

function Profile(props) {
  return (
    <div className="profile">
      <Avatar src={props.user.avatar} />

      <Form onSubmit={props.onSubmit}>
        <label htmlFor="name">Name</label>
        <Input
          id="name"
          type="text"
          name="name"
          placeholder="Enter your name"
          autocomplete="off"
        />
        <label htmlFor="email">Email</label>
        <Input
          id="email"
          type="text"
          name="email"
          placeholder="Enter your email"
          autocomplete="off"
        />

        <Button>Save</Button>

        <a href="/list" className="start">
          →
        </a>
      </Form>
    </div>
  )
}

export default Profile
