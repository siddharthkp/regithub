import { useState } from 'react'

const SmartSubmit = props => {
  const [disabled, setDisabled] = useState(true)

  const onChange = event => {
    setDisabled(event.target.value.length === 0)
  }

  return props.children({ disabled, onChange })
}

export default SmartSubmit
