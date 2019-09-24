import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots'
import { styleSheetSerializer } from 'jest-styled-components/serializer'
import { addSerializer } from 'jest-specific-snapshot'
import './polyfills'
import 'jest-styled-components'

addSerializer(styleSheetSerializer)

initStoryshots({
  test: multiSnapshotWithOptions({}),
})

// react-test-renderrer does not support .findDOMNode
jest.mock('react-onclickoutside', () => {
  const React = require('react')

  return (Component) => (
    (props) => (
      <onClickOutside-Mock-Decorator>
        <Component {...props} />
      </onClickOutside-Mock-Decorator>
    )
  )
})

jest.mock('react-dom', () => {
  const ReactDOM = jest.genMockFromModule('react-dom')

  ReactDOM.findDOMNode = () => null
  return ReactDOM
})
