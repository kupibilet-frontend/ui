import styled from 'styled-components'

interface TPaddingWrapProps {
  isLeft?: boolean,
}

export const PaddingWrap = styled.span<TPaddingWrapProps>`
  display: inline-flex;
  align-self: center;
  justify-content: center;
  align-items: center;

  padding-top: .1em;
  ${({ isLeft }) => (
    isLeft ? 'padding-right: 3px;' : 'padding-left: 3px;'
  )}
`
