import React from 'react'

function Profile(props) {
  return (
    <div className="home">
      <div>
        <h1>bedankt!</h1>
      </div>
      <br />

      <h3>
        <a href="https://sid.studio/refactoring">
          sid.studio/refactoring
        </a>
        <div>
          <Twitter /> siddharthkp
        </div>
      </h3>
      <a href="/login" className="start">
        <span role="img" aria-label="bye">
          👋
        </span>
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
