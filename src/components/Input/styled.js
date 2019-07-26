import styled from 'styled-components'
import { switchTransition } from 'utils/transitions'
import { borderRadiusSmall } from 'utils/borderRadius'
import placeholder from 'utils/placeholder'


const inputBorderColor = (props) => {
  const { active, theme, disabled } = props
  if (active) {
    return theme.color.primary
  } else if (disabled) {
    return theme.color.miscLighter
  }
  return theme.color.misc
}

const TEXTAREA_PADDINGS = {
  large: 10,
  normal: 8,
  small: 5,
}
const ICON_PADDINGS = {
  large: {
    outer: '10px',
    inner: '8px',
  },
  normal: {
    outer: '7px',
    inner: '5px',
  },
  small: {
    outer: '7px',
    inner: '5px',
  },
}

const ICON_GROUP_PADDINGS = {
  large: {
    outer: '10px',
    inner: '3px',
  },
  normal: {
    outer: '7px',
    inner: '3px',
  },
  small: {
    outer: '7px',
    inner: '3px',
  },
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

const displayIndicator = ({ active, success, error }) => {
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
const InnerInput = styled.input`
  position: relative;
  flex-grow: 1;
  flex-shrink: 1;
  width: 100%;
  height: 100%;
  line-height: normal;
  border: none;
  min-height: ${({ size }) => INPUTHEIGHT[size]};
  font-family: inherit;

  ${({ size }) => (size === 'large'
    ? 'letter-spacing: -0.1px'
    : null
  )
};

  padding-left: ${({ size, leftIcon }) => (leftIcon
    ? '0'
    : `${SIZE[size]}px`
  )};
  padding-right: ${({ size, rightIcon }) => (rightIcon
    ? '0'
    : `${SIZE[size]}px`
  )};
  font-size: ${({ size }) => TYPOGRAPHY[size]}px;
  color: ${({ theme }) => theme.color.textDarker};
  background-color: transparent;
  ${({ neighboringInGroup, disabled, hasInnerGroup, theme }) => {
    if (hasInnerGroup && ['right', 'both'].includes(neighboringInGroup)) {
      return `border-right: 1px solid ${disabled ? theme.color.miscLightest : theme.color.misc};`
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

const InnerTextarea = styled(InnerInput.withComponent('textarea'))`
  ${({ size }) => (`
      padding-top: ${TEXTAREA_PADDINGS[size]}px;
      padding-bottom: ${TEXTAREA_PADDINGS[size]}px;
    `
  )}
  `

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ disabled, theme }) => (
    disabled ? theme.color.miscLightest : theme.color.background
  )};

  ${({ disabled }) => disabled && 'pointer-events: none;'}

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
  ${({ active, neighboringInGroup }) => (active && neighboringInGroup
    ? 'z-index: 2;'
    : null)}

  ${switchTransition}
  transition-property: border-color;

  &:hover {
    border-color: ${({ theme, disabled }) => (!disabled) && theme.color.primary};
    z-index: 1;
  }

  .combined-inputs-group {
    height: 100%;
  }
  `

const StatusIndicator = styled.div`
    position: absolute;
    top: -1px;
    left: -1px;
    display: ${(props) => displayIndicator(props)};
    height: calc(100% + 2px);
    width: 2px;
    background-color: ${({ theme, success, error }) => (
    success && !error ? theme.color.success : theme.color.fail
  )};
  `

const getIconWrapPaddings = ({ left, right, isGroup, size }) => {
  if (left && isGroup) {
    return `
      padding-left: ${ICON_GROUP_PADDINGS[size].outer};
      padding-right: ${ICON_GROUP_PADDINGS[size].inner};
    `
  } else if (left) {
    return `
      padding-left: ${ICON_PADDINGS[size].outer};
      padding-right: ${ICON_PADDINGS[size].inner};
    `
  } else if (right && isGroup) {
    return `
      padding-left: ${ICON_GROUP_PADDINGS[size].inner};
      padding-right: ${ICON_GROUP_PADDINGS[size].outer};
    `
  } else if (right) {
    return `
      padding-left: ${ICON_PADDINGS[size].inner};
      padding-right: ${ICON_PADDINGS[size].outer};
    `
  }
}

const IconWrap = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  height: 100%;
  ${getIconWrapPaddings}
  display: flex;
  vertical-align: top;
  align-items: center;
  `

export {
  Error,
  InnerInput,
  InputWrapper,
  IconWrap,
  StatusIndicator,
  InnerTextarea,
}
