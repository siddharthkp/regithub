import React from 'react'

class SmartSubmit extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '', disabled: true }
  }
  onChange = event => {
    this.setState({ disabled: event.target.value.length === 0 })
  }
  render() {
    return this.props.children({
      disable: this.state.disabled,
      onChange: this.onChange
    })
  }
}

export default SmartSubmit
