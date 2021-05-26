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
  ${({ isActive, theme }) => {
    if (isActive) {
      return `
        color: ${theme.color.text600};
        background: ${theme.color.secondary100};

        &:hover {
          color: ${theme.color.text600};
        }
      `
    }
    return 'background: transparent;'
  }}

  &:focus {
    outline: none;
  }
`

export default StyledTab
