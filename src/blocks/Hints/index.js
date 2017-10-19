// @flow
import React from 'react'
import ReactDOM from 'react-dom'

type HintProps = {
  children: Object | Element,
  content: any,
  header: ?string,
  placement: string,
  align: ?string,
  error: ?boolean,
  success: ?boolean,
}

type HintState = {
  isOpen: boolean,
}

export default class Hint extends React.Component <HintProps, HintState> {
  static defaultProps = {
    placement: 'bottom',
  }

  state = {
    isOpen: false,
  }

  componentDidMount() {
    if (this.childRef !== null) {
      this.coords = this.getCoordinates(this.childRef)
    }
  }

  componentWillUnmount() {
    clearTimeout(this.hoverTimeout)
  }
  /* eslint-disable react/no-find-dom-node */
  getCoordinates = (node : Element) => {
    const availableNode = ReactDOM.findDOMNode(node)
    if (availableNode) {
      return ReactDOM.findDOMNode(node).getBoundingClientRect()
    }
  }

  handleMouseOut = () => {
    clearTimeout(this.hoverTimeout)
    this.setState({
      isOpen: false,
    })
  }

  handleMouseOver = () => {
    this.hoverTimeout = setTimeout(() => {
      this.coords = this.getCoordinates(this.childRef)
      this.setState({
        isOpen: true,
      })
    }, 150)
  }

  childRef = null
  coords = null
  hoverTimeout = null
}
