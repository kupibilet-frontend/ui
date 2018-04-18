import React from 'react'
import PropTypes from 'prop-types'
import {
  AirportSuggestContainer,
  SuggestIcon,
  Geo,
  Value,
  GeoLabel,
  Code,
  StyledIcon,
} from './styled'

export default class AirportSuggest extends React.PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    IATACode: PropTypes.string.isRequired,
    isCity: PropTypes.bool.isRequired,
    isGeoSuggest: PropTypes.bool.isRequired,
    isNested: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    city: '',
    country: '',
  }

  render() {
    const {
      value,
      city,
      country,
      isCity,
      IATACode,
      isGeoSuggest,
      isNested,
    } = this.props
    const isGeoCity = isCity && isGeoSuggest
    const allAirports = `Все аэропорты, ${country}`
    const cityAndCountry = city + (country && `, ${country}`)

    return (
      <AirportSuggestContainer>
        {isGeoCity ||
          (isNested && (
            <SuggestIcon>
              <StyledIcon
                size="normal"
                name={isGeoCity ? 'location' : 'plane'}
                inheritColor
                isGeoCity
              />
            </SuggestIcon>
          ))}

        <Geo>
          <Value>{value}</Value>
          <div>
            {(city || country) && (
              <GeoLabel>{isCity ? allAirports : cityAndCountry}</GeoLabel>
            )}
          </div>
        </Geo>
        <Code>{IATACode}</Code>
      </AirportSuggestContainer>
    )
  }
}
