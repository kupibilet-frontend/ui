import React from 'react'

// See 7d606d
// TODO propably should use new syntax https://git.io/v5PEj
export default {
  addWithInfo(storyName, info, StoryFn) {
    const Сomp = typeof info === 'function' ? info : StoryFn
    return this.add(storyName, () => <Сomp />)
  },
}
