import React from 'react'

function useSmartSubmit() {
  const [disabled, setDisabled] = React.useState(true)

  const onChange = event => {
    setDisabled(event.target.value.length === 0)
  }

  return [disabled, onChange]
}

export default useSmartSubmit
