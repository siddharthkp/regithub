import React from 'react'
import LoginForm from './pages/login'

import { render, fireEvent, cleanup } from 'react-testing-library'
afterEach(cleanup)

const user = {
  username: 'sid',
  name: { first: 'Sid', last: 'Kshetrapal' },
  firstName: 'Sid',
  fullName: 'Siddharth Kshetrapal',
  email: 'siddharth.kshetrapal@gmail.com',
  social: {
    twitter: '@siddharthkp',
    website: 'https://sid.studio'
  },
  joined: '2019-04-10',
  verified: false
}

/* Tests for smart submit */
test('Button should be disabled by default', () => {
  const component = render(<LoginForm user={user} />)
  const button = component.getByText('Log in')
  expect(button.disabled).toBe(true)
})

test('Button should become enabled when input is given', () => {
  const component = render(<LoginForm user={user} />)
  const input = component.getByPlaceholderText('enter your password')

  fireEvent.change(input, { target: { value: 'a' } })

  const button = component.getByText('Log in')
  expect(button.disabled).toBe(false)
})
