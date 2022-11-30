import styled from 'styled-components'
import { linkStyles } from 'components/Link/styled'
import Tab from './Tab'

const StyledTab = styled(Tab)`
  ${linkStyles}

  display: inline-block;
  padding: 0 10px;
  border-radius: 100px;
  line-height: 24px;
  user-select: none;
  color: ${({ theme }) => theme.color.colorTextSecondaryNormal};
  ${({ isActive, theme }) => {
    if (isActive) {
      return `
        color: ${theme.color.colorTextContrastNormal};
        background: ${theme.color.colorBgContrastNormal};

        &:hover {
          color: ${theme.color.colorTextContrastNormal};
          background-color: ${theme.color.colorBgContrastHover};
        }
      `
    }

    return `
      background: transparent;
      &:hover {
        color: ${theme.color.colorTextSecondaryNormal};
      }
    `
  }}

  /* override "linkStyles" */
  &:focus {
    outline: none;
    color: ${({ theme }) => theme.color.colorTextContrastNormal};
    .icon-inherit-color {
      fill: ${({ theme }) => theme.color.colorTextContrastNormal};
    }
  }
`

export default StyledTab
