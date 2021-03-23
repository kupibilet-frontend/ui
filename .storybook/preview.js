import { configure, setAddon, addDecorator, addParameters } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import withTheme from 'storybook/decorators/withTheme'
import withIcons from 'storybook/decorators/withIcons'
import withReduxContext from 'storybook/decorators/withReduxContext'

export const parameters = {
  layout: 'centered',
}

addParameters({
  options: {
    isFullscreen: false,
    showNav: true,
    showPanel: 'bottom',
  },
})

if (process.env.NODE_ENV !== 'test') {
  addDecorator(withIcons)
}

addDecorator(withReduxContext)
addDecorator(withTheme)
addDecorator(withKnobs)

const req = require.context('../src', true, /stories.(js|ts|tsx)$/)

configure(req, module);
