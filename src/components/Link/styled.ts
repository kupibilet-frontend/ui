import styled from 'styled-components'

interface TIconPaddingWrapProps {
  isLeft?: boolean,
}

const IconPaddingWrap = styled.span<TIconPaddingWrapProps>`
  display: inline-flex;
  align-self: center;
  justify-content: center;
  align-items: center;

  padding-top: .1em;
  ${({ isLeft }) => (
    isLeft ? 'padding-right: 3px;' : 'padding-left: 3px;'
  )}
`

export {
  IconPaddingWrap,
}
