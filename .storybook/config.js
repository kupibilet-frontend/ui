import { configure, setAddon, addDecorator } from '@storybook/react'
import centered from '@storybook/addon-centered'
import { withKnobs } from '@storybook/addon-knobs'
import infoAddon from '@storybook/addon-info'

import { mockInfoAddon } from '../storybook/addons'
import { ThemeDecorator, IconsDecorator } from '../storybook/decorators'

if (process.env.NODE_ENV === 'test') {
  setAddon(mockInfoAddon)
} else {
  setAddon(infoAddon)
  addDecorator(centered)
  addDecorator(IconsDecorator)
}

addDecorator(ThemeDecorator)
addDecorator(withKnobs)

const req = require.context('../src', true, /stories.js$/)
const loadStories = () => req.keys().forEach((filename) => req(filename))

configure(loadStories, module)
