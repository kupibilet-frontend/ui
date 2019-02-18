import styled from 'styled-components'
import mq from 'utils/media-queries'

export const HeaderWrapper = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.color.background};
  border-bottom: 1px solid ${({ theme }) => theme.color.miscLighter};
`

export const HeaderInner = styled.div`
  max-width: 1178px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  ${mq.handheld`
    padding: 0 18px;
  `}
`

export const HeaderContent = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: ${({ flexEnd }) => (flexEnd ? 'flex-end' : 'space-between')};
  align-items: center;
`

export const LogoContainer = styled.div`
  margin-right: 18px;
  ${mq.mobile`
    margin-right: 12px;
  `}
`
