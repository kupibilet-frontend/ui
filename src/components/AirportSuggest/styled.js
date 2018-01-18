import styled from 'styled-components'
import TextSmall from 'components/Typography/TextSmall'
import mq from 'utils/media-queries'
import Icon from 'components/Icon'

export const AirportSuggestContainer = styled.div`
  display: flex;
  align-items: stretch;

  ${({ theme }) => theme.font}
  color: ${({ theme }) => theme.color.textDarker};
  font-size: 16px;
  line-height: 20px;
  white-space: nowrap;

  box-sizing: content-box;
  height: 38px;
  padding: 5px 10px 5px 11px;
  background: ${({ theme }) => theme.color.background};

  ${mq.mobile`
    border-top: 1px solid ${({ theme }) => theme.color.miscLighter}
    margin: 0 18px;
    padding: 5px 0;
  `}

  .react-autosuggest__suggestion--highlighted &,
  &:hover {
    background: ${({ theme }) => theme.color.secondaryLightest};

    .icon-inherit-color {
      fill: ${({ theme }) => theme.color.textDarker};
    }
  }
`

export const SuggestIcon = styled.div`
  align-self: center;
  padding: 2.5px 8px 2.5px 0;

  .icon-inherit-color {
    fill: ${({ theme }) => theme.color.miscDark};
    transition: none;
  }
`

export const Geo = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  display: inline-block;
  justify-content: flex-start;

  text-overflow: ellipsis;
  overflow: hidden;
`

export const Value = styled.b`
  font-weight: 600;
`
export const GeoLabel = styled(TextSmall)`
  font-size: 14px;
`

export const Code = styled(TextSmall)`
  align-self: center;
  flex-grow: 0;
  flex-shrink: 0;

  ${({ theme }) => theme.font}
  color: ${({ theme }) => theme.color.text};
  text-align: left;

  padding: 1px 0;
  margin-left: 15px;
  width: 42px;
`

export const StyledIcon = styled(Icon)`
  transform: rotate(90deg);
`
