import React from 'react'

export const mockInfoAddon = {
  addWithInfo(storyName, info, StoryFn) {
    const Сomp = typeof info === 'function' ? info : StoryFn
    return this.add(storyName, () => <Сomp />)
  },
}
