// @flow

import React, { Component } from 'react'
import type { Element } from 'react'

type Props = {
  children: Element<*>,
  freezableElement: string,
}

class Scrollfix extends Component<Props> {
  static defaultProps = {
    freezableElement: '#app',
  }

  constructor() {
    super()
    this.scrollPosition = 0
  }

  componentDidMount() {
    this.scrollPosition = window.pageYOffset
    const node = document.querySelector(this.props.freezableElement)
    if (node) {
      node.style.overflow = 'auto'
      node.style.height = '100%'
      node.scrollTo(0, this.scrollPosition)
    }
  }

  componentWillUnmount() {
    const node = document.querySelector(this.props.freezableElement)
    if (node) {
      node.style.overflow = ''
      node.style.height = ''
    }
    window.scrollTo(0, this.scrollPosition)
  }
  render() {
    const {
      children,
    } = this.props
    return (
      <div>
        {React.cloneElement(children)}
      </div>
    )
  }
}

export default Scrollfix
