import styled from 'styled-components'
import Text from 'components/Typography/Text'

export const SuggestionContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  min-height: 30px;

  cursor: pointer;
  color: ${({ theme }) => theme.color.textDarker};
  background-color: ${({ theme, isHighlighted }) =>
    isHighlighted ? theme.color.secondaryLightest : theme.color.background};

  &:hover {
    background: ${({ theme }) => theme.color.secondaryLightest};
    .icon-inherit-color {
      fill: ${({ theme }) => theme.color.textDarker};
    }
  }
`
export const SuggestionIcon = styled.div`
  width: 30px;
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const SuggestionText = Text.withComponent('div').extend`
  flex-grow: 1;
`
