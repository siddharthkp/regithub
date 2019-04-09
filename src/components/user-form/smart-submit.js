import React from 'react'

function useSmartSubmit(inputs = 1) {
  const defaultArray = Array(inputs).fill(true)
  const [disabledArray, setDisabledArray] = React.useState(defaultArray)

  const onChanges = []

  for (let i = 0; i < inputs; i++) {
    onChanges.push(function onChange(event) {
      const disabled = event.target.value.length === 0

      setDisabledArray(values => {
        values[i] = disabled
        return values
      })
    })
  }

  let disabled = false
  if (disabledArray.find(value => value === true)) disabled = true

  return [disabled, ...onChanges]
}

export default useSmartSubmit
