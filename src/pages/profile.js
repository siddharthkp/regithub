import React from 'react'
import Avatar from '../components/avatar'
import Form from '../components/form'
import Input from '../components/input'
import Switch from '../components/switch'
import Button from '../components/button'
import Alert from '../components/alert'
import Icon from '../components/icon'

function Profile(props) {
  return (
    <div className="profile">
      {props.user.verified ? null : (
        <Alert message="You need to click the vertification link in your email!" />
      )}

      <Avatar src={props.user.avatar} />

      <Form disabled={!props.user.verified} onSubmit={props.onSubmit}>
        <label htmlFor="name">Name</label>
        <Input
          id="name"
          type="text"
          name="name"
          defaultValue={props.user.fullName}
        />
        <label htmlFor="name">Email</label>
        <Input
          id="name"
          type="text"
          name="name"
          defaultValue={props.user.email}
        />

        <label htmlFor="show_email">Show email on profile?</label>
        <Switch
          id="show_email"
          name="show_email"
          defaultValue={props.user.show_email}
        />

        <label htmlFor="twitter">Twitter</label>
        <Input
          id="twitter"
          type="text"
          name="twitter"
          defaultValue={props.user.social.twitter}
        />
        <label htmlFor="website">Website</label>
        <Input
          id="website"
          type="text"
          name="website"
          defaultValue={props.user.social.website}
        />
        <Button>Save</Button>
        <a href="/bye" className="start">
          →
        </a>
      </Form>
    </div>
  )
}

export default Profile
