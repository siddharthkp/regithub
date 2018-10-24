import React from 'react'
import axios from 'axios'
import Header from './components/common/header'
import Spinner from './components/common/spinner'
import UserInfo from './components/user-info'
import UserForm from './components/user-form'
import Repositories from './components/repositories'
import './App.css'

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
      <div>
        <Header />
        <UserForm onUserChange={this.onUserChange} />
        {this.state.loading ? <Spinner /> : null}
        {this.state.data.repos ? (
          <React.Fragment>
            <UserInfo data={this.state.data} />
            <Repositories repos={this.state.data.repos} />
          </React.Fragment>
        ) : null}
      </div>
    )
  }
}

export default App
