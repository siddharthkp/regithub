import React, { useState } from 'react'

const SmartSubmit = props => {
  const [disabled, setDisabled] = useState(true)

  const onChange = event => {
    setDisabled(event.target.value.length === 0)
  }

  return props.children({ disabled, onChange })
}

// class SmartSubmit extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { disabled: true }
//   }
//   onChange = event => {
//     this.setState({ disabled: event.target.value.length === 0 })
//   }
//   render() {
//     return this.props.children({
//       disabled: this.state.disabled,
//       onChange: this.onChange
//     })
//   }
// }

export default SmartSubmit
