import initStoryshots from '@storybook/addon-storyshots'
import './polyfills'
import 'jest-styled-components'

initStoryshots()

// react-test-renderrer does not support .findDOMNode
jest.mock('react-onclickoutside', () => {
  const React = require('react')

  return Сomponent => (
    (props) => (
      <onClickOutside-Mock-Decorator>
        <Сomponent {...props} />
      </onClickOutside-Mock-Decorator>
    )
  )
})

jest.mock('react-dom', () => {
  const ReactDOM = jest.genMockFromModule('react-dom')

  ReactDOM.findDOMNode = () => null
  return ReactDOM
})
