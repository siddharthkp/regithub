import React from 'react'
import Repo from './repo'

const Repositories = props => (
  <div className="section repositories">
    {props.repos.map((repo, index) => (
      <Repo
        key={repo.name}
        name={repo.name}
        url={repo.url}
        description={repo.description}
        stars={repo.stars}
      />
    ))}
  </div>
)

export default Repositories
