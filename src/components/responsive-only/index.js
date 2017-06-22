import styled from 'styled-components'
import mq from '../../utils/media-queries'

const DesktopOnly = styled.div`
  display: none;

  ${mq.desktop`
    display: initial;
  `}
`
DesktopOnly.displayName = 'DesktopOnly'

const MobileOnly = styled.div`
  display: none;

  ${mq.mobile`
    display: initial;
  `}
`

const TabletOnly = styled.div`
  display: none;

  ${mq.tablet`
    display: initial;
  `}
`
TabletOnly.displayName = 'TabletOnly'

const HandheldOnly = styled.div`
  display: none;

  ${mq.handheld`
    display: initial;
  `}
`
HandheldOnly.displayName = 'HandheldOnly'

const NotMobileOnly = styled.div`
  ${mq.mobile`
    display: none;
  `}
`
NotMobileOnly.displayName = 'NotMobileOnly'

export { DesktopOnly, MobileOnly, TabletOnly, HandheldOnly, NotMobileOnly }
