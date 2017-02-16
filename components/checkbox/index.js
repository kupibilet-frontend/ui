import React, { PropTypes, Component } from 'react'

import styled from 'styled-components'

const CheckboxInput = styled.input`
  display: none;
`

const StyledCheckbox = styled.span`
  background: ${({ theme }) => theme.color.primary};
  border: 1px solid #b1bdcc;
  border-radius: 3px;
  height: 18px;
  width: 18px;
`

export default class Checkbox extends Component {
  // constructor(props) {
  //   super(props)
  //
  //   let checked = false
  //
  //   if ('checked' in props) {
  //     checked = props.checked
  //   } else {
  //     checked = props.defaultChecked
  //   }
  //   this.state = {
  //     checked,
  //   }
  // }

  render() {
    const props = this.props

    return (
      <label htmlFor={props.htmlFor}>
        <StyledCheckbox>
          {/* <Icon /> */}
          <CheckboxInput type="checkbox" />
        </StyledCheckbox>
        <span>
          {props.children}
        </span>
      </label>
    )
  }
}

Checkbox.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string,
}
