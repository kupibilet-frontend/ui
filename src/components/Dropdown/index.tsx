import React, { PureComponent } from 'react'
import onClickOutside from 'react-onclickoutside'
import { DropdownWrapper, DropdownContent } from './styled'

export interface TProps {
  isOpen: boolean,
  onToggle: (event: React.MouseEvent, isOpen: boolean) => void,
  children?: React.ReactNode,
  overlay: React.ReactNode,
  renderDropdownContainer?: (children: React.ReactNode) => JSX.Element,
}

export class Dropdown extends PureComponent<TProps> {
  onToggle = (event: React.MouseEvent): void => {
    this.props.onToggle(event, !this.props.isOpen)
  }

  onHide = (event: React.MouseEvent): void => {
    if (this.props.isOpen) {
      this.props.onToggle(event, false)
    }
  }

  handleClickOutside = (event: React.MouseEvent): void => {
    this.onHide(event)
  }

  render() {
    const {
      children = null,
      overlay,
      isOpen,
      renderDropdownContainer = (contentChildren: React.ReactNode) => (
        <DropdownContent>
          {contentChildren}
        </DropdownContent>
      ),
    } = this.props

    if (!children) {
      if (!isOpen) return null

      return renderDropdownContainer(overlay)
    }

    const dropdownButton = React.cloneElement(
      children as React.ReactElement<any>,
      { onClick: this.onToggle },
    )

    return (
      <DropdownWrapper
        {...this.props}
      >
        {dropdownButton}
        {isOpen && renderDropdownContainer(overlay)}
      </DropdownWrapper>
    )
  }
}

export default onClickOutside(Dropdown)
