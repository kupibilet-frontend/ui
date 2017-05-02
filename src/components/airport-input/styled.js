import styled, { css } from 'styled-components'
import { transparentize } from 'polished'
import { control } from '../../utils/reset'
import placeholder from '../../utils/placeholder'

const fontStyle = css`
  font-family: inherit;
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  color: inherit;
`

const fadeGradient = ({ theme }) => (
  /* eslint-disable prefer-template */
  'linear-gradient(' +
    '90deg, ' +
    transparentize(1, theme.color.background) + ' 0%, ' +
    theme.color.background + ' 100%' +
  ')'
)

export const Container = styled.div`
  color: ${({ theme }) => theme.color.textDarker};

  height: 42px;
  width: 100%;
  min-width: 180px;

  display: flex;
  align-items: stretch;

  position: relative;

  box-sizing: border-box;
  border: 2px solid ${({ theme }) => theme.color.primaryLight};

  ${({ neighboringInGroup }) => {
    if (neighboringInGroup === 'right') {
      return 'border-radius: 21px 0 0 21px;'
    } else if (neighboringInGroup === 'left') {
      return 'border-radius: 0 21px 21px 0;'
    } else if (neighboringInGroup !== 'both') {
      return 'border-radius: 21px;'
    }

    return ''
  }}

  z-index: 1;
  ${({ neighboringInGroup }) => (
    ['left', 'both'].includes(neighboringInGroup) ? (
      'margin-left: -2px;'
    ) : (
      ''
    )
  )}

  ${({ hasError, focused, theme }) => {
    if (focused) {
      return `
        z-index: 2;
        border-color: ${theme.color.secondary};
      `
    } else if (hasError) {
      return `
        border-color: ${theme.color.fail};
      `
    }

    return ''
  }}
`

export const Input = styled.input`
  ${control}

  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  padding: 10px 10px;
  ${({ neighboringInGroup }) => {
    if (neighboringInGroup === 'right') {
      return 'padding-right: 16px;'
    } else if (neighboringInGroup === 'left') {
      return 'padding-left: 16px;'
    } else if (neighboringInGroup !== 'both') {
      return 'padding: 10px 16px;'
    }

    return ''
  }}
  background: transparent;

  ${fontStyle}
  font-weight: 600;

  ${placeholder`
    ${fontStyle}
    color: ${({ theme }) => theme.color.miscDark};
  `}

  &:focus ~ .airport-input__geo .airport-input__spell {
    display: block;
  }
`

export const Geo = styled.div`
  pointer-events: none;
  flex-grow: 1;
  flex-shrink: 0;

  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  padding: 10px 0;
  padding-left: ${({ neighboringInGroup }) => (
    neighboringInGroup === 'left' || !neighboringInGroup ? '16px' : '10px'
  )};
`

// Use same component as in input due specific text rendering in inputs
export const Spell = styled.input`
  ${control}

  display: none;

  pointer-events: none;
  flex-grow: 1;
  flex-shrink: 0;

  padding: 0;
  margin: 0;
  background: transparent;

  ${fontStyle}
  font-weight: 600;
  color: ${({ theme }) => theme.color.textLight}
`

export const ValuePlaceholder = styled.div`
  visibility: hidden;

  ${fontStyle}
  font-weight: 600;
`

export const GeoLabel = styled.div`
  ${fontStyle}
`

export const Code = styled.div`
  pointer-events: none;
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;

  ${fontStyle}
  font-size: 14px;
  color: ${({ theme }) => theme.color.text};

  padding: 11px 10px 9px 9px;
  padding-right: ${({ neighboringInGroup }) => (
    neighboringInGroup === 'right' || !neighboringInGroup ? '16px' : '10px'
  )};

  &:not(:empty)::before {
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
