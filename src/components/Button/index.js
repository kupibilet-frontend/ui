import React from 'react'
import PropTypes from 'prop-types'

import { StyledButton, StyledButtonText, IconWrap, SIZES } from './styled'

const BUTTON_SIZE_TO_ICON_MAP = {
  small: 'xxsmall',
  normal: 'normal',
  large: 'normal',
}

const cloneIconWithSize = (iconNode, size) => (
  React.cloneElement(iconNode, {
    size: iconNode.props.size || BUTTON_SIZE_TO_ICON_MAP[size],
  })
)

const Button = ({ children, disabled, size, icon, leftIcon, rightIcon, className, ...props }) => (
  <StyledButton
    {...props}
    size={size}
    isIconOnly={Boolean(icon)}
    hasLeftIcon={Boolean(leftIcon)}
    hasRightIcon={Boolean(rightIcon)}
    disabled={disabled}
  >
    {
      leftIcon ? (
        <IconWrap size={size} left>
          { cloneIconWithSize(leftIcon, size) }
        </IconWrap>
      ) : (
        null
      )
    }

    {
      icon ? (
        <IconWrap size={size}>
          { cloneIconWithSize(icon, size) }
        </IconWrap>
      ) : (
        <StyledButtonText
          size={size}
          hasLeftIcon={Boolean(leftIcon)}
          hasRightIcon={Boolean(rightIcon)}
        >
          { children }
        </StyledButtonText>
      )
    }

    {
      rightIcon ? (
        <IconWrap size={size} right>
          { cloneIconWithSize(rightIcon, size) }
        </IconWrap>
      ) : (
        null
      )
    }
  </StyledButton>
)

Button.defaultProps = {
  size: 'normal',
}

/* eslint-disable react/require-default-props */
Button.propTypes = {
  size: PropTypes.oneOf(Object.keys(SIZES)),
  className: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  icon: PropTypes.element,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
}


export default Button
