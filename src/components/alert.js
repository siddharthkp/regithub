import React from 'react'
// import Icon from './icon'

function Alert(props) {
  return <div className="alert">{props.message}</div>
}

export default Alert

// Alert.propTypes = {
//   children: function(props) {
//     if (props.children) return new Error('kids not allowed')
//   }
// }
