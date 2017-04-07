import React, { PropTypes } from 'react'
import Icon from '../icons'
import { AirportSuggestContainer, SuggestIcon, Geo, Value, GeoLabel, Code } from './styled'

export default class AirportSuggest extends React.PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    IATACode: PropTypes.string.isRequired,
    isCity: PropTypes.bool.isRequired,
    isGeoSuggest: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    location: '',
  }

  render() {
    const { value, location, isCity, IATACode, isGeoSuggest } = this.props

    return (
      <AirportSuggestContainer>
        {
          isCity && isGeoSuggest && (
            <SuggestIcon>
              <Icon size="xxsmall" name="location" fill="miscDarker" />
            </SuggestIcon>
          ) || (!isCity) && (
            <SuggestIcon>
              <Icon size="xxsmall" name="plane" fill="miscDarker" />
            </SuggestIcon>
          ) || (
            null
          )
        }
        <Geo>
          <Value>
            { value }
          </Value>
          { location && (
          <GeoLabel>
                , { location }
          </GeoLabel>
          ) }
        </Geo>
        <Code>
          { IATACode }
        </Code>
      </AirportSuggestContainer>
    )
  }
}
