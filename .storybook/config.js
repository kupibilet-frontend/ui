import { configure, setAddon, addDecorator, addParameters } from '@storybook/react'
// import centered from '@storybook/addon-centered/react'
import { withKnobs } from '@storybook/addon-knobs'

import withTheme from 'storybook/decorators/withTheme'
import withIcons from 'storybook/decorators/withIcons'
import withReduxContext from 'storybook/decorators/withReduxContext'

addParameters({
  options: {
    isFullscreen: false,
    showNav: true,
    showPanel: 'bottom',
  },
})

if (process.env.NODE_ENV !== 'test') {
  // TODO: return it, when 5.4 version is avaliable. more details: https://github.com/storybookjs/storybook/pull/8388
  // addDecorator(centered)
  addDecorator(withIcons)
}

addDecorator(withReduxContext)
addDecorator(withTheme)
addDecorator(withKnobs)

const req = require.context('../src', true, /stories.js$/)

configure(req, module);
