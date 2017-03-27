import RcCollapse from 'rc-collapse'
import styled from 'styled-components'
import Link from '../../utils/link'

import { switchTransition } from '../../utils/transitions'

export const RcCollapseWrapper = styled(RcCollapse)`
  .kb-collapse-content {
    ${switchTransition}
  }

  .kb-collapse-content.kb-collapse-content-inactive {
    display: none;
  }

  .kb-collapse-item {
    border-top: 1px solid ${({ theme }) => (theme.color.miscLighter)};
    overflow: hidden;
  }

  .kb-collapse-item:first-child {
    border-top: none;
  }

  .kb-collapse-item-active .icon-wrap {
    transform: rotate(-180deg);
    margin-top: 3px;
  }
`

export const PanelHeader = styled.span`
  ${Link}
  align-items: center;
  display: flex;
  padding: 18px;
`

export const PanelContent = styled.div`
  padding: 0 18px 24px;
`

export const IconWrap = styled.span`
  ${switchTransition}
  margin: 6px 0 0 3px;
  display: flex;
`
