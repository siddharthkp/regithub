import React from 'react'
import { Router, navigate } from '@reach/router'
import Header from './components/header'
import Spinner from './components/spinner'
import LoginScreen from './pages/login'
import ProfileScreen from './pages/profile'
import Home from './pages/home'
import Bye from './pages/bye'
import './App.css'

/* boring






*/

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

/*
  boring

  implementation

  details

  ⬇


*/
const App = () => {
  const [loading, setLoading] = React.useState(false)

  function navigateToProfile() {
    setLoading(true)
    setTimeout(function() {
      navigate('/profile')
      setLoading(false)
    }, 2000)
  }

  let Login = () => (
    <LoginScreen user={user} onSubmit={navigateToProfile} />
  )

  let Profile = () => <ProfileScreen user={user} onSubmit={noop} />

  return (
    <div className="App">
      <Header />
      {loading ? <Spinner /> : null}
      <Router>
        <Home path="/" />
        <Login path="/login" />
        <Profile path="profile" />
        <Bye path="/bye" />
      </Router>
    </div>
  )
}

export default App

function noop() {}
