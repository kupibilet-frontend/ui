// @flow
import React from 'react'
import ReactDOM from 'react-dom'

/* eslint-disable react/no-unused-prop-types */
type HintProps = {
  children: Object | Element,
  content: any,
  header: ?string,
  placement: string,
  align: ?string,
  error: ?boolean,
  success: ?boolean,
  shouldRender: boolean,
}

type HintState = {
  isOpen: boolean,
}

export type Coordinates = {
  left: number,
  top: number,
  width: number,
  height: number,
}

type GetCoordinates = (node : Element) => Coordinates

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
  getCoordinates = (node) : GetCoordinates => {
    const availableNode = ReactDOM.findDOMNode(node)
    if (availableNode) {
      const rect = ReactDOM.findDOMNode(node).getBoundingClientRect()
      return {
        width: rect.width,
        height: rect.height,
        left: rect.left + window.pageXOffset,
        top: rect.top + window.pageYOffset,
      }
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
