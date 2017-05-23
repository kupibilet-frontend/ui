// @flow
import React from 'react'
import styled from 'styled-components'
import onClickOutside from 'react-onclickoutside'
import { borderSmall } from '../../utils/borders'
import { shadowSmall } from '../../utils/shadows'

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-flex;
`

const DropdownOverlay = styled.div`
  position: absolute;
  top: calc(100% + 3px);
  left: 0;
  padding: 18px 12px;
  background: ${({ theme }) => theme.color.background}
  ${shadowSmall}
  ${borderSmall}
`

type Props = {
  isOpen: bool,
  onToggle: (Event, bool) => void,
  children: React.Element<*>,
  overlay: React.Element<*>,
}

/* eslint-disable react/prop-types */
class Dropdown extends React.PureComponent<{}, Props, void> {
  static defaultProps = {
    isOpen: false,
  }

  onShow = (event: Event) => {
    if (!this.props.isOpen) {
      this.props.onToggle(event, true)
    }
  }

  onHide = (event: Event) => {
    if (this.props.isOpen) {
      this.props.onToggle(event, false)
    }
  }

  handleClickOutside = (event: Event) => {
    this.onHide(event)
  }

  render() {
    const { children, overlay, isOpen } = this.props

    const dropdownButton = React.cloneElement(children, {
      onClick: this.onShow,
    })

    return (
      <DropdownWrapper
        {...this.props}
      >
        {dropdownButton}
        { isOpen &&
          <DropdownOverlay>
            {overlay}
          </DropdownOverlay>
        }
      </DropdownWrapper>
    )
  }
}

export default onClickOutside(Dropdown)
