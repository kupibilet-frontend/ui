import RcCollapse from 'rc-collapse'
import styled from 'styled-components'
import Link from '../../utils/link'
import Icon from '../icons'

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

  .kb-collapse-item-active .icon {
    transform: rotate(-180deg);
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

export const IconWrap = styled(Icon)`
  margin: 3px 0 0 3px;
  transition-property: transform;
`
