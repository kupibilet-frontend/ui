import { configure, setAddon, addDecorator } from '@storybook/react'
import centered from '@storybook/addon-centered/react'
import { withKnobs } from '@storybook/addon-knobs'
import { setOptions } from '@storybook/addon-options'

import withTheme from 'storybook/decorators/withTheme'
import withIcons from 'storybook/decorators/withIcons'
import withReduxContext from 'storybook/decorators/withReduxContext'

setOptions({
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: true,
  downPanelInRight: false,
  sortStoriesByKind: true,
})

if (process.env.NODE_ENV !== 'test') {
  addDecorator(centered)
  addDecorator(withIcons)
}

addDecorator(withReduxContext)
addDecorator(withTheme)
addDecorator(withKnobs)

const req = require.context('../src', true, /stories.js$/)
const loadStories = () => req.keys().forEach((filename) => req(filename))

configure(loadStories, module)
