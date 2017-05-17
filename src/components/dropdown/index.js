import React from 'react'
import PropTypes from 'prop-types'
import { findDOMNode } from 'react-dom'
import styled from 'styled-components'

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-flex;
`

const DropdownOverlay = styled.div`
  position: absolute;
  top: calc(100% + 3px);
  left: 0;
  padding: 18px 12px;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(98,112,139,0.6);
`

class Dropdown extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  componentDidMount() {
    document.body.addEventListener('click', this.onClickOutside)
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.onClickOutside)
  }

  onClickOutside = (evt) => {
    const area = findDOMNode(this.area)

    if (!area || (area && !area.contains(evt.target))) {
      this.setState({
        isOpen: false,
      })
    }
  }

  onClick = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

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
        {
          isOpen &&
          <DropdownOverlay>
            {overlay}
          </DropdownOverlay>
        }
      </DropdownWrapper>
    )
  }
}

Dropdown.defaultProps = {
  children: <button>Toggle</button>,
  overlay: <div>Hello World</div>,
}

Dropdown.propTypes = {
  children: PropTypes.object.isRequired,
  overlay: PropTypes.object.isRequired,
}

export default Dropdown
