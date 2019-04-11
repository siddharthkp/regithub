import React from 'react'
import Avatar from '../components/avatar'

function Profile(props) {
  return (
    <div className="home">
      <Avatar src="https://twitter-avatar.now.sh/siddharthkp" />
      <h2>Sid</h2>
      Independent developer, India
      <div>
        <Twitter /> siddharthkp
      </div>
      <div>
        I build tools and services for frontend developers. <br />
        <br />
        bundlesize <d /> react.games <d /> tinyreact.email
      </div>
      <div>
        past: Design Systems at Auth0, Frontend Architect Practo
      </div>
      <a href="/login" className="start">
        →
      </a>
    </div>
  )
}

export default Profile

function Twitter() {
  return (
    <img
      style={{ height: 16, position: 'relative', top: 2 }}
      alt="t"
      src="http://pngimg.com/uploads/twitter/twitter_PNG34.png"
    />
  )
}
