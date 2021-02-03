import styled from 'styled-components'
import { CollapsePanel } from 'components/Collapse'
import Link from 'components/Link'
import mq from 'utils/media-queries'

export const Section = styled.section`
  background-color: ${({ theme }) => theme.color.miscLightest};

  &:not(:first-of-type) {
    padding-top: 18px;
  }

  &:not(:last-of-type) {
    border-bottom: ${({ theme }) => `1px solid ${theme.color.miscLight}`};
  }

  ${mq.handheld`
    background-color: ${({ theme }) => theme.color.background};
  `}
`

export const Header = styled.header`
  padding-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mq.handheld`
    padding-left: 18px;
    padding-right: 18px;
  `}
`

export const Content = styled.div`
  padding-bottom: 18px;

  ${mq.handheld`
    padding-left: 18px;
    padding-right: 18px;
  `}
`

export const PanelContent = styled.div`
  padding-top: 12px;
`

export const PanelHeader = styled.div`
  align-items: center;
  display: flex;
  padding-top: 12px;

  ${Link} {
    font-size: 14px;
  }
`

export const PanelWrapper = styled(CollapsePanel)``
