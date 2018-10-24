import React from 'react'

const Logo = props => (
  <img
    className={props.big ? 'logo big' : 'logo'}
    {...props}
    src="logo.png"
    alt="logo"
  />
)

export default Logo
