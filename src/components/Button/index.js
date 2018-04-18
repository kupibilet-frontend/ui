import React from 'react'
import PropTypes from 'prop-types'

import Icon from 'components/Icon'
import {
  StyledButton,
  StyledButtonLink,
  StyledButtonText,
  IconWrap,
  SIZES,
} from './styled'

const BUTTON_SIZE_TO_ICON_MAP = {
  small: 'xxsmall',
  normal: 'normal',
  large: 'normal',
}

const cloneIconWithSize = (icon, size) => {
  const sizeByMap = BUTTON_SIZE_TO_ICON_MAP[size]
  if (React.isValidElement(icon)) {
    return React.cloneElement(icon, {
      size: icon.props.size || sizeByMap,
    })
  } else if (typeof icon === 'string') {
    return <Icon name={icon} size={sizeByMap} inheritColor />
  }
}

const RenderedComponent = ({ children, href, ...props }) =>
  href ? (
    <StyledButtonLink href={href} {...props}>
      {children}
    </StyledButtonLink>
  ) : (
    <StyledButton {...props}>{children}</StyledButton>
  )

const Button = ({
  children: text,
  variant,
  disabled,
  size,
  icon,
  leftIcon,
  rightIcon,
  ...props
}) => (
  <RenderedComponent
    {...props}
    size={size}
    variant={variant}
    isIconOnly={Boolean(icon)}
    hasLeftIcon={Boolean(leftIcon)}
    hasRightIcon={Boolean(rightIcon)}
    disabled={disabled}
  >
    {leftIcon ? (
      <IconWrap size={size} left>
        {cloneIconWithSize(leftIcon, size)}
      </IconWrap>
    ) : null}

    {icon ? (
      <IconWrap size={size}>{cloneIconWithSize(icon, size)}</IconWrap>
    ) : (
      <StyledButtonText
        size={size}
        hasLeftIcon={Boolean(leftIcon)}
        hasRightIcon={Boolean(rightIcon)}
      >
        {text}
      </StyledButtonText>
    )}

    {rightIcon ? (
      <IconWrap size={size} right>
        {cloneIconWithSize(rightIcon, size)}
      </IconWrap>
    ) : null}
  </RenderedComponent>
)

Button.defaultProps = {
  variant: 'primary',
  size: 'normal',
}

/* eslint-disable react/require-default-props */
Button.propTypes = {
  size: PropTypes.oneOf(Object.keys(SIZES)),
  variant: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  leftIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  rightIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
}

RenderedComponent.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
}

export default Button
