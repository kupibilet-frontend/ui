import { configure, setAddon, addDecorator, addParameters } from '@storybook/react'

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

const req = require.context('../src', true, /stories.(js|ts|tsx)$/)

configure(req, module);
