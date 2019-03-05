import React from 'react'
import PropTypes from 'prop-types'
import createE2EId from '../../utils/createE2EId'
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
    singleAirport: PropTypes.string,
  }

  static defaultProps = {
    city: '',
    country: '',
    singleAirport: '',
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
      singleAirport,
    } = this.props
    const isGeoCity = isCity && isGeoSuggest

    return (
      <AirportSuggestContainer {...createE2EId(`site.search_form.suggest.line`, { iatacode: IATACode })}>
        { (isGeoCity || isNested) ? (
          <SuggestIcon>
            <StyledIcon
              size="normal"
              {...createE2EId(`site.search_form.suggest.line.icon`)}
              name={isGeoCity ? 'location' : 'plane'}
              inheritColor
              isGeoCity
            />
          </SuggestIcon>
        ) : null}

        <Geo>
          <Value
            {...createE2EId(`site.search_form.suggest.line.label.top`)}
          >
            { value }
          </Value>
          <div
            {...createE2EId(`site.search_form.suggest.line.label.bottom`)}
          >
            { isCity ? (
              <GeoLabel>
                {singleAirport ? `аэропорт ${singleAirport}` : 'Все аэропорты'}
                { country && ', ' }
                {country}
              </GeoLabel>
            ) : (
              <GeoLabel>
                {city}
                { city && country && ', ' }
                {country}
              </GeoLabel>
            )
            }
          </div>
        </Geo>
        <Code
          {...createE2EId(`site.search_form.suggest.line.iata`)}
        >
          { IATACode }
        </Code>
      </AirportSuggestContainer>
    )
  }
}
