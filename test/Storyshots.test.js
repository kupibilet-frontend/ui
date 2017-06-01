import initStoryshots from 'storyshots'
import ReactDOM from 'react-dom'

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
