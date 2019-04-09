import React from 'react'
import './App.css'

import Header from './components/common/header'
import LoginScreen from './components/user-form'

function noop() {}

const App = () => {
  return (
    <div className="App">
      <Header />
      <LoginScreen user={{ name: { first: 'Sid' } }} onSubmit={noop} />
    </div>
  )
}

export default App
