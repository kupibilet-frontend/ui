// @flow

import React, { Component } from 'react'

type Props = {
  children: React.Element<*>,
}
export default class Scrollfix extends Component<Props> {
  constructor() {
    super()
    this.scrollPosition = 0
  }

  componentDidMount() {
    this.scrollPosition = window.scrollY
    const node = document.querySelector('body div:first-child')
    if (node) {
      node.style.overflow = 'auto'
      node.style.height = '100%'
      node.scrollTo(0, this.scrollPosition)
    }
  }

  componentWillUnmount() {
    const node = document.querySelector('body div:first-child')
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
