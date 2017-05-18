// @flow
import React from 'react'
import styled from 'styled-components'
import ClickOutside from 'react-click-outside'
import { findDOMNode } from 'react-dom'
import { borderSmall } from '../../utils/borders'
import { shadowSmaller } from '../../utils/shadows'

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-flex;
`

const DropdownOverlay = styled.div`
  position: absolute;
  top: calc(100% + 3px);
  left: 0;
  padding: 18px 12px;
  background: ${({theme}) => theme.color.background}

  ${shadowSmaller}
  ${borderSmall}
`

type Props = {
  children: React.Element<*>,
  overlay: React.Element<*>,
}

type State = {
  isOpen: bool,
}

/* eslint-disable react/prop-types */
class Dropdown extends React.PureComponent<void, Props, State> {
  state = {
    isOpen: false,
  }

  onClick = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  onClose = (event: Object) => {
    const area = findDOMNode(this.area)

    if (!area || (area && !area.contains(event.target))) {
      this.setState({
        isOpen: false,
      })
    }
  }

  area: HTMLButtonElement

  render() {
    const { children, overlay } = this.props
    const { isOpen } = this.state

    const dropdownButton = React.cloneElement(children, {
      active: isOpen,
      onClick: this.onClick,
    })

    return (
      <DropdownWrapper
        {...this.props}
        ref={(name) => { this.area = name }}
      >
        {dropdownButton}
        { isOpen &&
          <ClickOutside onClickOutside={this.onClose}>
            <DropdownOverlay>
              {overlay}
            </DropdownOverlay>
          </ClickOutside>
        }
      </DropdownWrapper>
    )
  }
}

export default Dropdown
