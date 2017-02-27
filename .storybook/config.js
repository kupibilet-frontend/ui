import { configure, setAddon, addDecorator } from '@kadira/storybook'
import centered from '@kadira/react-storybook-decorator-centered'
import { withKnobs } from '@kadira/storybook-addon-knobs'
import infoAddon from '@kadira/react-storybook-addon-info'
import initIcons from '@kupibilet/icons'

import React from 'react'
import { ThemeProvider } from 'styled-components'

import mockInfoAddon from '../addons/mock-info'
import * as theme from '../theme'


if (process.env.NODE_ENV === 'production') {
  setAddon(mockInfoAddon)
} else {
  setAddon(infoAddon)
  addDecorator(centered)
}

addDecorator(withKnobs)


addDecorator((story) => {
  initIcons()
  
  return (
    <ThemeProvider theme={theme}>
      {story()}
    </ThemeProvider>
  )
})

addDecorator((story) => (
  <div>
    {story()}
    <div
      dangerouslySetInnerHTML={{ __html: initIcons() }}
      style={{
        display: 'none',
      }}
    />
  </div>
))

const req = require.context('../components', true, /stories.js$/)
const loadStories = () => req.keys().forEach((filename) => req(filename))

configure(loadStories, module)
