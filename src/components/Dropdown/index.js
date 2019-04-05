// @flow
import React, { PureComponent } from 'react'
import styled from 'styled-components'
import onClickOutside from 'react-onclickoutside'
import { borderRadiusSmall } from 'utils/borderRadius'
import { shadowSmall } from 'utils/shadows'

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-flex;
`

export const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  margin-top: 3px;
  left: 0;
  right: 0;
  padding: 18px 12px;
  background: ${({ theme }) => theme.color.background};
  ${shadowSmall}
  ${borderRadiusSmall.all}
  z-index: 10;

  margin-bottom: 18px;
`

type Props = {
  isOpen: boolean,
  onToggle: (Event, boolean) => void,
  children: React.Element<*>,
  overlay: React.Element<*>,
}

/* eslint-disable react/prop-types */
class Dropdown extends PureComponent<Props, {}> {
  static defaultProps = {
    isOpen: false,
  }

  onToggle = (event: Event) => {
    this.props.onToggle(event, !this.props.isOpen)
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
      onClick: this.onToggle,
    })

    return (
      <DropdownWrapper
        {...this.props}
      >
        {dropdownButton}
        { isOpen &&
          <DropdownContent>
            {overlay}
          </DropdownContent>
        }
      </DropdownWrapper>
    )
  }
}

export default onClickOutside(Dropdown)
