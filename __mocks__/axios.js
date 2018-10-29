const data = {
  username: 'facebook',
  name: 'Facebook',
  avatar: 'https://avatars3.githubusercontent.com/u/69631?v=4',
  description:
    'We are working to build community through open source technology. NB: members must have two-factor auth.',
  url: 'https://github.com/facebook',
  repos: [
    {
      name: 'react',
      stars: 109565,
      description:
        'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
      url: 'https://github.com/facebook/react'
    },
    {
      name: 'react-native',
      stars: 67853,
      description: 'A framework for building native apps with React.',
      url: 'https://github.com/facebook/react-native'
    },
    {
      name: 'create-react-app',
      stars: 54260,
      description: 'Create React apps with no build configuration.',
      url: 'https://github.com/facebook/create-react-app'
    },
    {
      name: 'immutable-js',
      stars: 24793,
      description:
        'Immutable persistent data collections for Javascript which increase efficiency and simplicity.',
      url: 'https://github.com/facebook/immutable-js'
    },
    {
      name: 'jest',
      stars: 19911,
      description: 'ðŸƒ Delightful JavaScript Testing.',
      url: 'https://github.com/facebook/jest'
    }
  ]
}

const axios = {
  get: () => new Promise(resolve => resolve({ data }))
}

export default axios
