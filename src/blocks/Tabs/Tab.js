import styled from 'styled-components'
import Link from 'utils/link'
import { Tab } from 'components/Tabs'

export default styled(Tab)`
  ${Link} display: inline-block;
  padding: 0 10px;
  border-radius: 100px;
  line-height: 24px;
  user-select: none;
  ${({ isActive, theme }) => {
    if (isActive) {
      return `
        color: ${theme.color.textDarker};
        background: ${theme.color.secondaryLightest};

        &:hover {
          color: ${theme.color.textDarker};
        }
      `
    }
    return 'background: transparent;'
  }} &:focus {
    outline: none;
  }
`
