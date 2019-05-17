import React from 'react'
import LoginForm from './pages/login'
import user from './user.stub'

import { render, fireEvent, cleanup } from 'react-testing-library'
afterEach(cleanup)

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
