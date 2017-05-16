import React from 'react'
import PropTypes from 'prop-types'
import { findDOMNode } from 'react-dom'
import styled from 'styled-components'

const RcDropdownWrapper = styled.div`
  position: relative;
`

const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 3px);
  left: 0;
  padding: 18px 12px;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(98,112,139,0.6);
`

class RcDropdown extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  componentDidMount() {
    document.body.addEventListener('click', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleClickOutside)
  }

  handleClickOutside = (evt) => {
    const area = findDOMNode(this.area)

    if (!area || (area && !area.contains(evt.target))) {
      this.setState({
        isOpen: false,
      })
    }
  }

  render() {
    const { button, template } = this.props
    const { isOpen } = this.state
    const dropdownButton = React.cloneElement(button,
      { onClick: () => { this.setState({ isOpen: !isOpen }) } },
    )

    return (
      <RcDropdownWrapper
        ref={(name) => { this.area = name }}
      >
        {dropdownButton}
        {
          isOpen &&
          <Dropdown>
            {template}
          </Dropdown>
        }
      </RcDropdownWrapper>
    )
  }
}

RcDropdown.defaultProps = {
  button: <button>Toggle</button>,
  template: <div>Hello World</div>,
}

RcDropdown.propTypes = {
  button: PropTypes.object.isRequired,
  template: PropTypes.object.isRequired,
}

export default RcDropdown
