// @flow
import React from 'react'
import styled from 'styled-components'
import onClickOutside from 'react-onclickoutside'
import { borderSmall } from '../../utils/borders'
import { shadowLarge } from '../../utils/shadows'

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
  ${shadowLarge}
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

  render() {
    const { children, overlay } = this.props
    const { isOpen } = this.state

    const dropdownButton = React.cloneElement(children, {
      active: isOpen,
      onClick: isOpen ? () => {} : this.onClick,
    })

    const ComponentOverlay = () => (
      <DropdownOverlay>
        {this.props.overlay}
      </DropdownOverlay>
    )

    const Outside = onClickOutside(ComponentOverlay, {
      handleClickOutside: () => this.onClick,
    })

    return (
      <DropdownWrapper
        {...this.props}
      >
        {dropdownButton}
        { isOpen &&
          <Outside
            eventTypes="click"
            overlay={overlay}
          />
        }
      </DropdownWrapper>
    )
  }
}

export default Dropdown
