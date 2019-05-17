import React from 'react'

function Profile(props) {
  return (
    <div className="home">
      <div>
        <h1>Thanks!</h1>
      </div>
      <br />
      <h3>
        <div>
          I send articles like this every Friday:{' '}
          <a href="https://sid.studio/newsletter">
            sid.studio/newsletter
          </a>
        </div>
        <div>
          <Twitter /> siddharthkp
        </div>
      </h3>

      <span role="img" aria-label="bye">
        👋
      </span>
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
