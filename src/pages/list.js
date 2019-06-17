import React from 'react'

function Profile(props) {
  return (
    <div className="home">
      <h1>So...</h1>
      <ol>
        <li>Don't use state when you can infer from props</li>
        <li>Name behavior not user interaction</li>
        <li>Beware of feature envy</li>
        <li>Order of props is important</li>
        <li>Fully controlled or fully uncontrolled, pick a side</li>
        <li>
          Components should follow single responsibilty principle
        </li>
        <li>HOC are prone to naming conflicts</li>
        <li>Just use children (composition)</li>
        <li>cloneElement vs context - choose wisely</li>
      </ol>

      <a href="/bye" className="start">
        →
      </a>
    </div>
  )
}

export default Profile
