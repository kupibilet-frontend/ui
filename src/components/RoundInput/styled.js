import styled from 'styled-components'
import { InputWrapper, Error, InnerInput } from 'components/Input'

export const SIZES = {
  small: 12,
  normal: 15,
  large: 21,
}

const SIZE = {
  large: 14,
  normal: 11,
  small: 8,
}

const calculateBorderRadius = (size, neighboringInGroup) => {
  if (neighboringInGroup === 'both') {
    return ''
  } else if (neighboringInGroup === 'left') {
    return `border-radius: 0 ${SIZES[size]}px ${SIZES[size]}px 0;`
  } else if (neighboringInGroup === 'right') {
    return `border-radius: ${SIZES[size]}px 0 0 ${SIZES[size]}px;`
  }

  return `border-radius: ${SIZES[size]}px;`
}

export const StyledInnerInput = styled(InnerInput)`
  ${({ size, neighboringInGroup }) =>
    calculateBorderRadius(size, neighboringInGroup)};
`

export const StyledInputWrapper = styled(InputWrapper)`
  ${({ size, neighboringInGroup }) =>
    calculateBorderRadius(size, neighboringInGroup)};
  ${({ theme, active, success, error }) => {
    if (success && !active) return `border-color: ${theme.color.success}`
    else if (error && !active) return `border-color: ${theme.color.fail}`
  }};
`

export const StyledError = styled(Error)`
  left: ${({ size }) => `${SIZE[size]}px`};
`

export const SuccessMessage = styled(Error)`
  background-color: ${({ theme }) => theme.color.success};
`
