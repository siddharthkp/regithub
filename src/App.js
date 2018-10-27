import React from 'react'
import axios from 'axios'
import './App.css'

import Header from './components/common/header'
import Spinner from './components/common/spinner'
import UserForm from './components/user-form'
import UserInfo from './components/user-info'
import Repositories from './components/repositories'

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

        {this.state.loading ? <Spinner /> : null}

        {this.state.data.repos ? (
          <div>
            <UserInfo data={this.state.data} />
            <Repositories repos={this.state.data.repos} />
          </div>
        ) : null}
      </div>
    )
  }
}

export default App
