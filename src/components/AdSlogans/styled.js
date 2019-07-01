import styled from 'styled-components'
import { SingleFluidSection } from 'components/FluidLayout'
import mq from 'utils/media-queries'

const SlogansSection = styled(SingleFluidSection.withComponent('section'))`
  ${mq.desktop`
    width: 100%;
  `}
`

const StyledSlogans = styled(SlogansSection)`
  display: flex;
  justify-content: space-between;
  align-self: center;
  margin-top: 120px;
  ${mq.tablet`
    margin-top: 90px;
  `}
  ${mq.mobile`
    margin-top: 60px;
    flex-wrap: wrap;
    margin: 0 18px;
  `}
`

const SloganTitle = styled.p`
  font-size: 18px;
  line-height: 26px;
  width: 192px;
  flex-basis: 192px;
  margin-bottom: 0;

  ${mq.handheld`
    margin-top: 18px;
    text-align: center;
  `}

  ${mq.mobile`
    flex-grow: 1;
    line-height: 22px;
    margin-top: 0;
    text-align: left;
    width: 70%;
  `}
`

const SloganCard = styled.div`
  display: flex;
  align-items: center;

  &:last-child ${SloganTitle} {
    width: 160px;
  }

  ${mq.handheld`
    flex-direction: column;
  `}

  ${mq.mobile`
    flex-direction: row;
    margin: 0 0 30px;
    max-width: 360px;
    &:last-child ${SloganTitle} {
      width: 70%;
    }
  `}
`

const SloganImg = styled.img.attrs({
  src: (props) => ([props.src]),
})`
  display: inline-block;
  width: 86px;
  height: 86px;
  min-width: 86px;
  min-height: 86px;
  margin-right: 18px;
  flex-basis: 86px;

  ${mq.handheld`
    height: 48px;
    width: 48px;
    min-height: 48px;
    min-width: 48px;
    flex-basis: 48px;
  `}
`

export {
  StyledSlogans,
  SloganImg,
  SloganCard,
  SloganTitle,
}
