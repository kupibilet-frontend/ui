import React from 'react'
import { StyledContainer } from './styled'

type TProps = {
  error?: React.ReactNode,
  helperText?: React.ReactNode,
  isHidden?: boolean,
  disabled?: boolean,
}

export const FormHelperText = ({
  error,
  helperText,
  disabled,
}: TProps) => {
  if (!error && !helperText) return null

  return (
    <StyledContainer error={Boolean(error)} disabled={disabled}>
      {error || helperText}
    </StyledContainer>
  )
}
