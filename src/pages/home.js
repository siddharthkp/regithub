import React from 'react'
import Avatar from '../components/avatar'

function Profile(props) {
  return (
    <div className="home">
      <Avatar src="https://twitter-avatar.now.sh/siddharthkp" />
      <h2>Sid</h2>

      <div>
        <Twitter /> siddharthkp
      </div>
      <div>
        I build tools and services for frontend developers. <br />
        <br />
        <br />
        bundlesize <small /> react.games <small /> tinyreact.email
        <br />
        <br />
        8.4k ⭐ <span style={{ paddingRight: 20 }} /> 7.8M ⬇️
      </div>
      <div>
        past: Design Systems at Auth0, Frontend Architect Practo
      </div>
      <a href="/talk" className="start">
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
