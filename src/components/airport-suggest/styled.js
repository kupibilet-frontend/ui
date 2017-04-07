import styled from 'styled-components'

export const AirportSuggestContainer = styled.div`
  display: flex;
  align-items: stretch;

  ${({ theme }) => theme.font}
  color: ${({ theme }) => theme.color.textDarker};
  font-size: 16px;
  line-height: 20px;

  box-sizing: content-box;
  height: 20px;
  padding: 5px 0 5px 15px;
  background: ${({ theme }) => theme.color.background};

  .react-autosuggest__suggestion--highlighted &,
  &:hover {
    background: ${({ theme }) => theme.color.secondaryLightest}
  }
`

export const SuggestIcon = styled.div`
  padding: 2.5px 8px 2.5px 0;
`

export const Geo = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  justify-content: flex-start;
`

export const Value = styled.div`
  font-weight: 600;
`
export const GeoLabel = styled.div`

`

export const Code = styled.div`
  flex-grow: 0;
  flex-shrink: 0;

  ${({ theme }) => theme.font}
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.color.text};
  text-align: left;

  padding: 1px 0;
  width: 46px;
`
