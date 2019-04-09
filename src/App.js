import React, { useState } from 'react'
import axios from 'axios'
import './App.css'

import Header from './components/common/header'
import Spinner from './components/common/spinner'
import LoginScreen from './components/user-form'
import UserInfo from './components/user-info'
import Repositories from './components/repositories'

const App = () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)

  const onUserChange = ({ username }) => {
    setData({})
    setLoading(true)
    axios
      .get(`https://github-user.now.sh/?username=${username}`)
      .then(response => {
        setData(response.data)
        setLoading(false)
      })
  }

  return (
    <div className="App">
      <Header />

      <LoginScreen user={{ name: 'Sid' }} onSubmit={onUserChange} />

      {loading ? <Spinner /> : null}
    </div>
  )
}

export default App
