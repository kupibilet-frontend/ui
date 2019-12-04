import styled from 'styled-components'
import { borderRadiusSmall } from 'utils/borderRadius'
import TextSmall from 'components/Typography/TextSmall'

export const BorderedWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.color.misc};
  cursor: pointer;
  overflow: hidden;
  border-right: none;
  &:first-child{
    ${borderRadiusSmall.left}
  }
  &:last-child{
    ${borderRadiusSmall.right}
    border-right: 1px solid ${({ isSelected, theme }) => (
    isSelected ? theme.color.primaryDarkest : theme.color.misc
  )};
  }
  ${({ isSelected, theme }) => (isSelected && `
    border-color: ${theme.color.primaryDarkest};
    & + div {
     border-left: none; 
     padding-left: 1px;
    }
  `)}
`

export const ColoredWrapper = styled(TextSmall)`
  background: ${({ isSelected, theme }) => (isSelected ? theme.color.primaryDarkest : theme.color.background)};
  color: ${({ theme }) => theme.color.textDarker};
  padding: 8px 15px 10px;
  ${({ isSelected, theme }) => (isSelected && `
    color: ${theme.color.background};
    font-weight: 600;
  `)}
`.withComponent('div')
