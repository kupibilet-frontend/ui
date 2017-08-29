import styled from 'styled-components'
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

const ICON_PADDINGS = {
  large: {
    primary: '10px',
    secondary: '8px',
  },
  normal: {
    primary: '7px',
    secondary: '5px',
  },
  small: {
    primary: '7px',
    secondary: '5px',
  },
}

const ICON_GROUP_PADDINGS = {
  large: {
    primary: '10px',
    secondary: '3px',
  },
  normal: {
    primary: '7px',
    secondary: '3px',
  },
  small: {
    primary: '7px',
    secondary: '3px',
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
const InnerInput = styled.input`
  position: relative;
  flex-grow: 1;
  flex-shrink: 1;
  width: 100%;
  height: 100%;
  line-height: normal;
  border: none;

  padding-left: ${({ size, leftIcon }) => (leftIcon
    ? '0'
    : `${SIZE[size]}px`
  )};
  padding-right: ${({ size, rightIcon, rightIconGroup }) => (rightIcon || rightIconGroup
    ? '0'
    : `${SIZE[size]}px`
  )};
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
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

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

const getIconWrapPaddings = ({ left, right, rightGroup, size }) => {
  if (left) {
    return `
      padding-left: ${ICON_PADDINGS[size].primary};
      padding-right: ${ICON_PADDINGS[size].secondary};
    `
  } else if (right) {
    return `
      padding-left: ${ICON_PADDINGS[size].secondary};
      padding-right: ${ICON_PADDINGS[size].primary};
    `
  } else if (rightGroup) {
    return `
      padding-left: ${ICON_GROUP_PADDINGS[size].secondary};
      padding-right: ${ICON_GROUP_PADDINGS[size].primary};
    `
  }
}

const IconWrap = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
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
}
