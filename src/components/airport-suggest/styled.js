import styled from 'styled-components'

export const AirportSuggestContainer = styled.div`
  display: flex;
  align-items: stretch;

  ${({ theme }) => theme.font}
  color: ${({ theme }) => theme.color.textDarker};
  font-size: 16px;
  line-height: 20px;
  white-space: nowrap;

  box-sizing: content-box;
  height: 20px;
  padding: 5px 0 5px 12px;
  background: ${({ theme }) => theme.color.background};

  .react-autosuggest__suggestion--highlighted &,
  &:hover {
    background: ${({ theme }) => theme.color.secondaryLightest};

    .icon-inherit-color {
      fill: ${({ theme }) => theme.color.textDarker};
    }
  }
`

export const SuggestIcon = styled.div`
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
export const GeoLabel = styled.span``

export const Code = styled.div`
  flex-grow: 0;
  flex-shrink: 0;

  ${({ theme }) => theme.font}
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.color.text};
  text-align: left;

  padding: 1px 0;
  margin-left: 15px;
  width: 46px;
`
