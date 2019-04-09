import React from 'react'
import App from './App'

import { render, fireEvent, cleanup } from 'react-testing-library'

const setup = () => {
  const utils = render(<App />)

  const input = utils.getByPlaceholderText('github username')
  const input2 = utils.getByPlaceholderText('github org')
  const button = utils.getByText('See profile')

  return { input, input2, button, ...utils }
}

afterEach(cleanup)

/* Tests for smart submit */
test('Button should be disabled by default', () => {
  const { button } = setup()
  expect(button.disabled).toBe(true)
})

test('Button should become enabled when input is given', () => {
  const { input, input2, button } = setup()
  fireEvent.change(input, { target: { value: 'a' } })
  fireEvent.change(input2, { target: { value: 'd' } })

  expect(button.disabled).toBe(false)
})
//
// /* Repeatable function to trigger fetch + render */
//
// const fetchUser = async username => {
//   const { input, button, container } = setup()
//
//   fireEvent.change(input, { target: { value: username } })
//   fireEvent.click(button, { target: [{ value: username }] })
//
//   const UserInfo = await waitForElement(() =>
//     container.querySelector('.user-info')
//   )
//
//   const Repositories = await waitForElement(() =>
//     container.querySelector('.repositories')
//   )
//
//   return { UserInfo, Repositories }
// }
//
// /* Tests for user profile */
//
// test('user profile should render', async () => {
//   const { UserInfo } = await fetchUser('facebook')
//   expect(UserInfo).toBeTruthy()
// })
//
// test('correct avatar should render', async () => {
//   const { UserInfo } = await fetchUser('facebook')
//
//   const Avatar = UserInfo.querySelector('.avatar')
//   expect(Avatar.src).toBe('https://avatars3.githubusercontent.com/u/69631?v=4')
// })
//
// test('correct name should render', async () => {
//   const { UserInfo } = await fetchUser('facebook')
//   const Name = UserInfo.querySelector('.name')
//   expect(Name.text).toBe('Facebook')
// })
//
// test('correct link should render', async () => {
//   const { UserInfo } = await fetchUser('facebook')
//   const Name = UserInfo.querySelector('.name')
//   expect(Name.href).toBe('https://github.com/facebook')
// })
//
// test('correct description should render', async () => {
//   const { UserInfo } = await fetchUser('facebook')
//   const Description = UserInfo.querySelector('.description')
//   expect(Description.innerHTML).toBe(
//     'We are working to build community through open source technology. NB: members must have two-factor auth.'
//   )
// })
//
// /* Tests for repositories section */
//
// test('repositories should render', async () => {
//   const { Repositories } = await fetchUser('facebook')
//   expect(Repositories).toBeTruthy()
// })
//
// test('should render 5 repositories', async () => {
//   const { Repositories } = await fetchUser('facebook')
//   expect(Repositories.children.length).toBe(5)
// })
