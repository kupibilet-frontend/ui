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
  color: ${({ theme }) => theme.color.colorTextSecondary};
  ${({ isActive, theme }) => {
    if (isActive) {
      return `
        color: ${theme.color.colorTextContrast};
        background: ${theme.color.colorBgContrast};

        &:hover {
          color: ${theme.color.colorTextContrast};
          background-color: ${theme.color.colorBgContrastHover};
        }
      `
    }

    return `
      background: transparent;
      &:hover {
        color: ${theme.color.colorTextSecondary};
      }
    `
  }}

  /* override "linkStyles" */
  &:focus {
    outline: none;
    color: ${({ theme }) => theme.color.colorTextContrast};
    .icon-inherit-color {
      fill: ${({ theme }) => theme.color.colorTextContrast};
    }
  }
`

export default StyledTab
