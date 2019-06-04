import styled, { css } from 'styled-components'
import { transparentize } from 'polished'
import { control } from 'utils/reset'
import placeholderMixin from 'utils/placeholder'
import { switchTransition } from 'utils/transitions'
import Icon from 'components/Icon'

const fontStyle = css`
  font-family: inherit;
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  color: inherit;
`

const fadeGradient = ({ theme, focused }) => {
  const gradientColor = focused
    ? theme.color.primaryLightest : theme.color.background
  /* eslint-disable prefer-template */
  return 'linear-gradient(' +
    '90deg, ' +
    transparentize(1, gradientColor) + ' 0%, ' +
    gradientColor + ' 100%' +
    ')'
}

export const Container = styled.div`
  color: ${({ theme }) => theme.color.textDarker};

  height: 42px;
  width: 100%;
  min-width: 142px;

  display: flex;
  align-items: baseline;

  position: relative;

  box-sizing: border-box;
  ${switchTransition}
  border: 1px solid ${({ theme }) => theme.color.miscLight};

  ${({ neighboringInGroup }) => {
    switch (neighboringInGroup) {
      case 'right':
        return 'border-radius: 6px 0 0 6px;'
      case 'left':
        return 'border-radius: 0 6px 6px 0;'
      case 'up':
        return 'border-radius: 0 0 6px 6px;'
      case 'down':
        return 'border-radius: 6px 6px 0 0;'
      case 'both':
        return ''
      default:
        return 'border-radius: 6px;'
    }
  }}
  overflow: hidden;

  z-index: 1;
  ${({ neighboringInGroup }) => {
    switch (neighboringInGroup) {
      case 'left':
      case 'both':
        return 'margin-left: -1px;'
      case 'down':
        return 'margin-bottom: -1px;'
      default:
        return ''
    }
  }}

  ${({ hasError, focused, theme }) => {
    if (focused) {
      return `
        z-index: 2;
        background-color: ${theme.color.primaryLightest};
      `
    } else if (hasError) {
      return `
        background-color: ${theme.color.fail};
      `
    }

    return ''
  }}
  // inner padding for container instead of textarea padding (Safari fix)
  padding: 10px 16px;
  ${({ neighboringInGroup }) => {
    if (neighboringInGroup === 'right') {
      return 'padding-right: 10px;'
    } else if (neighboringInGroup === 'left') {
      return 'padding-left: 10px;'
    } else if (neighboringInGroup === 'both') {
      return 'padding: 10px;'
    }

    return ''
  }}

  &:hover {
    border-color: ${({ theme }) => theme.color.secondary};
    z-index: 2;
  }

  `

export const Input = styled.textarea`
  ${control}

  &, &:focus {
    border: none;
    outline: none;
    resize: none;
  }
  white-space: nowrap;
  overflow: hidden;

  position: absolute;
  left: 16px;
  right: 0;
  top: 10px;
  bottom: 0;
  width: calc(100% - 32px);
  height: 100%;
  padding: 0;
  height: 20px;
  ${({ neighboringInGroup }) => {
    if (neighboringInGroup === 'right') {
      return 'width: calc(100% - 26px);'
    } else if (neighboringInGroup === 'left') {
      return `
        width: calc(100% - 26px);
        left: 10px;
      `
    } else if (neighboringInGroup === 'both') {
      return `
        width: calc(100% - 20px);
        left: 10px;
      `
    }
    return ''
  }}


  background: transparent;

  ${fontStyle}
  font-weight: 600;

  ${placeholderMixin`
    ${fontStyle}
    color: ${({ theme }) => theme.color.textLight};
    opacity: 1;
  `}

  /* Styles for fake input, like div */
  ${({ placeholder, value, children, theme }) => (
    placeholder && !value && children && `
      ${fontStyle}
      color: ${theme.color.textLight};
      opacity: 1;
      `
  )}

  &:focus ~ .AirportInput__geo .AirportInput__spell {
    display: block;
  }
  ${({ isIOS }) => isIOS && 'text-indent: -3px;'}
  `

export const Geo = styled.div`
  -webkit-appearance: none;
  pointer-events: none;
  user-select: none;

  flex-grow: 1;
  overflow: hidden;
  white-space: nowrap;

  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  `

// Use same component as in input due specific text rendering in inputs
export const Spell = styled.span`
  ${control}

  display: none;

  pointer-events: none;
  user-select: none;
  white-space: pre;

  flex-grow: 1;
  flex-shrink: 0;

  padding: 0;
  margin: 0;
  background: transparent;

  ${fontStyle}
  font-weight: 600;
  color: ${({ theme }) => theme.color.textLight};
  `

export const ValuePlaceholder = styled.div`
  visibility: hidden;
  flex-shrink: 0;

  ${fontStyle}
  font-weight: 600;
  user-select: none;
  `

export const GeoLabel = styled.span`
  ${control}
  ${fontStyle}
  user-select: none;
  `

export const Code = styled.div`
  pointer-events: none;
  user-select: none;
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;
  align-self: stretch;

  ${fontStyle}
  font-size: 14px;
  color: ${({ theme }) => theme.color.text};
  background: ${({ theme, focused }) => (focused ?
    theme.color.primaryLightest : theme.color.background)};
  //fix protruding of GeoLabel
  padding: 1px 0 0px 10px;
  margin: -1px 0;

  &:empty {
    display: none;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -12px;
    width: 12px;
    height: 100%;

    background: ${(props) => fadeGradient(props)};
  }
  `

export const StyledIcon = styled(Icon)`
  cursor: pointer;
  position: absolute;
  top: 9px;
  right: 9px;
  `
