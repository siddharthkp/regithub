import React, { lazy, Suspense } from 'react'
import axios from 'axios'
import './App.css'

import Header from './components/common/header'
import UserForm from './components/user-form'
// import UserInfo from './components/user-info'
// import Repositories from './components/repositories'

const UserInfo = lazy(() => import('./components/user-info'))
const Repositories = lazy(() => import('./components/repositories'))

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: {}, loading: false }
  }
  onUserChange = ({ username }) => {
    this.setState({ data: {}, loading: true })
    axios
      .get(`https://github-user.now.sh/?username=${username}`)
      .then(response => this.setState({ data: response.data, loading: false }))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <UserForm onUserChange={this.onUserChange} />

        {this.state.loading ? (
          <div className="message">fetching data...</div>
        ) : null}

        {this.state.data.repos ? (
          <div>
            <Suspense
              fallback={<div className="message">fetching component</div>}
            >
              <UserInfo data={this.state.data} />
              <Repositories repos={this.state.data.repos} />
            </Suspense>
          </div>
        ) : null}
      </div>
    )
  }
}

export default App
