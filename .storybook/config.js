import { configure, setAddon, addDecorator } from '@kadira/storybook'
import centered from '@kadira/react-storybook-decorator-centered'
import { withKnobs } from '@kadira/storybook-addon-knobs'
import infoAddon from '@kadira/react-storybook-addon-info'

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
