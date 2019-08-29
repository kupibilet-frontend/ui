import styled from 'styled-components'
import { rgba } from 'polished'

const baseBoxShadow = (theme, opacity) => {
  const baseShadow = rgba(theme.color.miscDarkest, opacity)

  return `0px 2px 8px ${baseShadow}`
}

const boxShadow = (theme) => baseBoxShadow(theme, 0.4)

const boxShadowHover = (theme) => baseBoxShadow(theme, 0.6)

const boxShadowOvershadow = (theme, overshadowThemeColor) => {
  const opacity = 0.8
  const overshadow = rgba(theme.color[overshadowThemeColor], opacity)

  return `
    0px 32px 0px 0px ${overshadow},
    0px -22px 20px -10px ${overshadow}`
}

const createBoxShadow = (baseShadow, withOvershadow, theme, overshadowThemeColor) => (
  `${baseShadow}${withOvershadow ? `, ${boxShadowOvershadow(theme, overshadowThemeColor)}` : ''}`
)

export const StyledButtonWithBorder = styled.button`
  border: ${({ theme }) => `2px solid ${theme.color.background}`};
  font-family: inherit;
  outline: none;
  font-size: 20px;
  color: ${({ theme, themeColor }) => theme.color[themeColor]};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 12px;
  background-color: ${({ theme }) => theme.color.background};
  cursor: pointer;
  box-shadow: ${({ theme, overshadowThemeColor, withOvershadow }) => createBoxShadow(boxShadow(theme), withOvershadow, theme, overshadowThemeColor)};
  border-radius: 6px;
  width: 252px;
  transition: box-shadow .3s;

  &:hover {
    box-shadow: ${({ theme, overshadowThemeColor, withOvershadow }) => createBoxShadow(boxShadowHover(theme), withOvershadow, theme, overshadowThemeColor)};
  }

  &:active {
    border: ${({ theme, themeColor }) => `2px solid ${rgba(theme.color[themeColor], 0.8)}`};
  }
`

export const ButtonText = styled.span`
  line-height: 22px;
  letter-spacing: -0.2px;
  margin-right: 8px;
  padding-bottom: 2px;
`
