import React from 'react'
import { Router, navigate } from '@reach/router'
import Header from './components/header'
import Spinner from './components/spinner'
import LoginScreen from './pages/login'
import LoginScreen2 from './pages/login2'
import ProfileScreen from './pages/profile'
import Home from './pages/home'
import Talk from './pages/talk'
import List from './pages/list'
import Bye from './pages/bye'
import './App.css'

/* boring






*/

const user = {
  username: 'sid',
  // name: { first: 'Sid', last: 'Kshetrapal' },
  name: 'Sid',
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
      navigate('/login2')
      setLoading(false)
    }, 1000)
  }

  let Login = () => (
    <>
      <LoginScreen user={user} onSubmit={navigateToProfile} />
      <InvisibleText1 />
    </>
  )

  let Login2 = () => (
    <>
      <LoginScreen2 user={user} />
      <InvisibleText2 />
    </>
  )

  return (
    <div className="App">
      <Header />
      {loading ? <Spinner /> : null}
      <Router>
        <Home path="/" />
        <Talk path="/talk" />
        <Login path="/login" />
        <Login2 path="/login2" />
        <ProfileScreen user={user} path="/profile" />
        <List path="/list" />
        <Bye path="/bye" />
      </Router>
    </div>
  )
}

export default App

// function noop() {}

function InvisibleText1() {
  return (
    <div className="invisible">
      Give names to behavior not interaction
      <br />
      Aim for a minimal API surface area
      <br />
      Order of props is important
      <br />
      Single responsibility principle
    </div>
  )
}

function InvisibleText2() {
  return (
    <div className="invisible">Just use children (composition)</div>
  )
}
