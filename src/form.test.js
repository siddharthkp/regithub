import React from 'react'
import user from './user.stub'
import LoginForm from './pages/login'

import { render, fireEvent, cleanup } from 'react-testing-library'
afterEach(cleanup)

test('lol wut, tests', ({ fail }) => {
  fail()
})

/*











*/

// test('Button should be disabled by default', () => {
//   const component = render(<LoginForm user={user} />)
//   const button = component.getByText('Log in')
//   expect(button.disabled).toBe(true)
// })
//
// test('Button should become enabled when input is given', () => {
//   const component = render(<LoginForm user={user} />)
//
//   const password = component.getByPlaceholderText('enter your password')
//   fireEvent.change(password, { target: { value: 'a' } })
//
//   const button = component.getByText('Log in')
//   expect(button.disabled).toBe(false)
// })
