// @flow
import React from 'react'
import styled from 'styled-components'
import ControlsGroup from 'components/ControlsGroup'

import { switchTransition } from 'utils/transitions'
import { borderRadiusSmall } from 'utils/borderRadius'
import placeholder from 'utils/placeholder'

const inputBorderColor = (props) => {
  const { active, theme, disabled } = props
  if (active) {
    return theme.color.primary
  } else if (disabled) {
    return theme.color.miscLightest
  }
  return theme.color.misc
}

const SIZE = {
  large: 14,
  normal: 11,
  small: 8,
}

const TYPOGRAPHY = {
  large: 18,
  normal: 16,
  small: 16,
}

const INPUTHEIGHT = {
  large: '42px',
  normal: '36px',
  small: '30px',
}

const setDisplayInputStatus = ({ active, success, error }) => {
  if (active) {
    return 'none'
  }
  if (success || error) {
    return 'block'
  }
  return 'none'
}

const Error = styled.span`
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  display: flex;
  align-items: center;
  padding: 3px 12px 5px;
  font-size: 14px;
  line-height: 16px;
  color: #fff;
  opacity: 0.97;
  z-index: 2;
  ${borderRadiusSmall.all}
  background-color: ${({ theme }) => theme.color.fail};
`

/* eslint-disable react/prop-types */
export const InnerInput = styled.input`
  position: relative;
  flex-grow: 1;
  max-width: 100%;
  height: 100%;
  line-height: normal;
  border: none;

  padding-left: ${({ size }) => `${SIZE[size]}px`};
  padding-right: ${({ size }) => `${SIZE[size]}px`};
  font-size: ${({ size }) => TYPOGRAPHY[size]}px;
  color: ${({ theme }) => theme.color.textDarker};
  background-color: ${({ disabled, theme }) => (disabled ? theme.color.miscLightest : '#fff')};

  ${({ neighboringInGroup, disabled, theme }) => {
    if (['right', 'both'].includes(neighboringInGroup)) {
      return `border-right: 1px solid ${ disabled ? theme.color.miscLightest : theme.color.misc};`
    }
  }}

  ${({ neighboringInGroup, success, error }) => {
    if (neighboringInGroup === 'right') {
      return borderRadiusSmall.left
    } else if (neighboringInGroup === 'left' || success || error) {
      return borderRadiusSmall.right
    } else if (neighboringInGroup !== 'both') {
      return borderRadiusSmall.all
    }

    return ''
  }}

  ${placeholder`
    color: ${({ theme }) => theme.color.miscDark};
  `}

  &:focus {
    outline-style: none;
  }

  &:disabled {
    ${placeholder`
      color: ${({ theme }) => theme.color.misc};
  `}
  }
  `

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: ${({ size }) => INPUTHEIGHT[size]};

  ${({ neighboringInGroup, success, error }) => {
    if (neighboringInGroup === 'right') {
      return borderRadiusSmall.left
    } else if (neighboringInGroup === 'left' || success || error) {
      return borderRadiusSmall.right
    } else if (neighboringInGroup !== 'both') {
      return borderRadiusSmall.all
    }

    return ''
  }}

  border: 1px solid ${inputBorderColor};
  border-style: solid;
  ${({ active, theme }) => {
    if (active) {
      return `box-shadow: 0 0 0 1px ${theme.color.primary};`
    }
  }}

  ${({ neighboringInGroup }) => {
    if (['left', 'both'].includes(neighboringInGroup)) {
      return 'margin-left: -1px;'
    }
  }}
  z-index: ${({ active, neighboringInGroup }) => (active && neighboringInGroup ? '3' : '1')};

  ${switchTransition}
  transition-property: border-color, box-shadow;

  &:hover {
    border-color: ${({ theme, disabled }) => (!disabled) && theme.color.primary};
    z-index: 2;
  }

  &:before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    bottom: -1px;
    display: ${(props) => setDisplayInputStatus(props)};
    width: 2px;
    background-color: ${({ theme, success, error }) => (
    success && !error ? theme.color.success : theme.color.fail
  )};
    z-index: 4;
  }

  .combined-inputs-group {
    height: 100%;
  }
  `

type Props = {
  name: string,
  type?: string,
  active?: boolean,
  error?: string,
  success?: boolean,
  size?: string,
  disabled?: boolean,
  placeholder?: string,
  value?: string,
  neighboringInGroup?: null | 'left' | 'right' | 'both',
  onBlur?: Function,
  onFocus?: Function,
  /* global React$Element */
  children?: React$Element<*>[],
}

type State = {
  isActive: boolean,
}

class InputControl extends React.PureComponent<Props, State> {
  static defaultProps = {
    name: 'input',
    size: 'normal',
  }

  state = {
    isActive: false,
  }

  handleBlur = (e: Event) => {
    const { onBlur } = this.props
    if (onBlur) onBlur(e)
    this.setState({
      isActive: false,
    })
  }

  handleFocus = (e: Event) => {
    const { onFocus } = this.props
    if (onFocus) onFocus(e)
    this.setState({
      isActive: true,
    })
  }

  render() {
    const {
      active,
      size,
      success,
      error,
      disabled,
      neighboringInGroup,
      children,
      ...props
    } = this.props

    return (
      <InputWrapper
        active={active || this.state.isActive}
        size={size}
        disabled={disabled}
        success={success}
        error={error}
        neighboringInGroup={neighboringInGroup}
      >
        {
          children ? (
            <ControlsGroup className="combined-inputs-group">
              { React.Children.map(children, (child) => (
                React.cloneElement(child, {
                  ...props,
                  size,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                })
              )) }
            </ControlsGroup>
          ) : (
            <InnerInput
              {...props}
              size={size}
              disabled={disabled}
              success={success}
              error={error}
              neighboringInGroup={neighboringInGroup}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
          )
        }

        { error && <Error>
          { error }
        </Error>
        }
      </InputWrapper>
    )
  }
}

export default InputControl
