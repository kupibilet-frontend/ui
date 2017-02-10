/* eslint-disable quote-props */

import { configure, setAddon, addDecorator } from '@kadira/storybook'
import centered from '@kadira/react-storybook-decorator-centered'
import { withKnobs } from '@kadira/storybook-addon-knobs'
import infoAddon from '@kadira/react-storybook-addon-info'

import React from 'react'
import { ThemeProvider } from 'styled-components'

import mockInfoAddon from '../addons/mock-info'

if (process.env.NODE_ENV === 'production') {
  setAddon(mockInfoAddon)
} else {
  setAddon(infoAddon)
  addDecorator(centered)
}

addDecorator(withKnobs)

const colors = {
  'white': '#ffffff',
  'red': '#e64926',
  'green': '#23c256',

  'blue': '#38afff',
  'blueDark': '#0f99f5',
  'blueDarker': '#008ae6',
  'blueDarkest': '#007acc',
  'blueLight': '#77c8ff',
  'blueLighter': '#a9ddff',
  'blueLightest': '#e5f5ff',

  'orange': '#ff9100',
  'orangeDark': '#ff7d03',
  'orangeDarker': '#fc6100',
  'orangeDarkest': '#fa3a00',
  'orangeLight': '#ffb640',
  'orangeLighter': '#ffd787',
  'orangeLightest': '#fff0bf',

  'gray': '#808080',
  'grayDark': '#4d4d4d',
  'grayDarker': '#333333',
  'grayDarkest': '#222222',
  'grayLight': '#b3b3b3',
  'grayLighter': '#dedede',
  'grayLightest': '#f2f2f2',

  'silver': '#b1bdcc',
  'silverDark': '#96a0b3',
  'silverDarker': '#7d89a1',
  'silverDarkest': '#62708b',
  'silverLight': '#cad3de',
  'silverLighter': '#dde3eb',
  'silverLightest': '#f0f5fa',

}

const theme = {
  'primary': colors.blue,
  'primaryDark': colors.blueDark,
  'primaryDarker': colors.blueDarker,
  'primaryDarkest': colors.blueDarkest,
  'primaryLight': colors.blueLight,
  'primaryLighter': colors.blueLighter,
  'primaryLightest': colors.blueLightest,

  'secondary': colors.orange,
  'secondaryDark': colors.orangeDark,
  'secondaryDarker': colors.orangeDarker,
  'secondaryDarkest': colors.orangeDarkest,
  'secondaryLight': colors.orangeLight,
  'secondaryLighter': colors.orangeLighter,
  'secondaryLightest': colors.orangeLightest,

  'text': colors.gray,
  'textDark': colors.grayDark,
  'textDarker': colors.grayDarker,
  'textDarkest': colors.grayDarkest,
  'textLight': colors.grayLight,
  'textLighter': colors.grayLighter,
  'textLightest': colors.grayLightest,

  'misc': colors.silver,
  'miscDark': colors.silverDark,
  'miscDarker': colors.silverDarker,
  'miscDarkest': colors.silverDarkest,
  'miscLight': colors.silverLight,
  'miscLighter': colors.silverLighter,
  'miscLightest': colors.silverLightest,

  'background': colors.white,
  'success': colors.green,
  'fail': colors.red,
}

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
))

const req = require.context('../components', true, /stories.js$/)
const loadStories = () => req.keys().forEach((filename) => req(filename))

configure(loadStories, module)
