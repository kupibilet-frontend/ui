import React from 'react'

export default {
  addWithInfo(storyName, info, StoryFn) {
    return this.add(storyName, () => <StoryFn />)
  },
}
