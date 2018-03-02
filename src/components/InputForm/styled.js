import styled from 'styled-components'
import { InputWrapper, Error } from 'components/Input'
import Button from 'components/Button'
import mq from 'utils/media-queries'

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

export const StyledInputWrapper = styled(InputWrapper)`
  z-index: 1;
  ${({ size, neighboringInGroup }) => (
    calculateBorderRadius(size, neighboringInGroup)
  )};
  ${({ theme, active, success, error }) => {
    if (success && !active) return `border-color: ${theme.color.success}`
    else if (error && !active) return `border-color: ${theme.color.fail}`
  }};
  `

export const StyledError = styled(Error)`
  left: ${({ size }) => `${SIZE[size]}px`};
  `

export const SuccessMessage = styled(Error)`
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.color.success};
  `

export const Wrapper = styled.div`
    position: relative;
  `

export const StyledButton = styled(Button)`
  ${mq.mobile`
    width: 100%;
    margin-top: 6px;
  `}

  `
