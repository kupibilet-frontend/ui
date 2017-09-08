import styled from 'styled-components'

const SuggestionContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  cursor: pointer;
  background-color: ${({ theme, isHighlighted }) => (isHighlighted
    ? theme.color.secondaryLightest
    : theme.color.background
  )};
  &:hover {
    background: ${({ theme }) => theme.color.secondaryLightest};
    .icon-inherit-color {
      fill: ${({ theme }) => theme.color.textDarker};
    }
  }
`
const SuggestionIcon = styled.div`
  width: 30px;
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
const SuggestionText = styled.div`
  width: 100%;
`

export {
  SuggestionContainer,
  SuggestionIcon,
  SuggestionText,
}
