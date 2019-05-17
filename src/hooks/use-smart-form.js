import React from 'react'

function useSmartForm() {
  const [disabled, setDisabled] = React.useState(true)

  function onChange(event) {
    const disabled = event.target.value.length === 0
    setDisabled(disabled)
  }

  return [disabled, onChange]
}

export default useSmartForm
