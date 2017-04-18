import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../icons'
import { AirportSuggestContainer, SuggestIcon, Geo, Value, GeoLabel, Code } from './styled'

export default class AirportSuggest extends React.PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    area: PropTypes.string.isRequired,
    IATACode: PropTypes.string.isRequired,
    isCity: PropTypes.bool.isRequired,
    isGeoSuggest: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    area: '',
  }

  render() {
    const { value, area, isCity, IATACode, isGeoSuggest } = this.props

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
          { area && (
          <GeoLabel>
                , { area }
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
