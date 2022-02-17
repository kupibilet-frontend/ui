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
  color: ${({ theme }) => theme.color.colorTextSecondaryDefault};
  ${({ isActive, theme }) => {
    if (isActive) {
      return `
        color: ${theme.color.colorTextContrastDefault};
        background: ${theme.color.colorBgContrastNormal};

        &:hover {
          color: ${theme.color.colorTextContrastDefault};
          background-color: ${theme.color.colorBgContrastHover};
        }
      `
    }

    return `
      background: transparent;
      &:hover {
        color: ${theme.color.colorTextSecondaryDefault};
      }
    `
  }}

  /* override "linkStyles" */
  &:focus {
    outline: none;
    color: ${({ theme }) => theme.color.colorTextContrastDefault};
    .icon-inherit-color {
      fill: ${({ theme }) => theme.color.colorTextContrastDefault};
    }
  }
`

export default StyledTab
