import styled from 'styled-components'
import mq from 'utils/media-queries'

const DesktopOnly = styled.div`
  ${mq.handheld`
    display: none;
  `};
`
DesktopOnly.displayName = 'DesktopOnly'

const MobileOnly = styled.div`
  ${mq.desktop`
    display: none;
  `} ${mq.tablet`
    display: none;
  `};
`

const TabletOnly = styled.div`
  ${mq.desktop`
    display: none;
  `} ${mq.mobile`
    display: none;
  `};
`
TabletOnly.displayName = 'TabletOnly'

const HandheldOnly = styled.div`
  ${mq.desktop`
    display: none;
  `};
`
HandheldOnly.displayName = 'HandheldOnly'

const NotMobileOnly = styled.div`
  ${mq.mobile`
    display: none;
  `};
`
NotMobileOnly.displayName = 'NotMobileOnly'

export { DesktopOnly, MobileOnly, TabletOnly, HandheldOnly, NotMobileOnly }
