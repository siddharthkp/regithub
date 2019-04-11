import React from 'react'

const Avatar = props => (
  <img className="avatar" src={props.src} alt="avatar" />
)

Avatar.defaultProps = {
  src: 'logo.png'
}

export default Avatar
