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
    area: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    IATACode: PropTypes.string.isRequired,
    isCity: PropTypes.bool.isRequired,
    isGeoSuggest: PropTypes.bool.isRequired,
    isNested: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    area: '',
  }

  render() {
    const { value, area, country, isCity, IATACode, isGeoSuggest, isNested } = this.props
    const isGeoCity = isCity && isGeoSuggest

    return (
      <AirportSuggestContainer>
        { isGeoCity || isNested &&
          <SuggestIcon>
            <StyledIcon
              size="normal"
              name={isGeoCity ? 'location' : 'plane'}
              inheritColor
              isGeoCity
            />
          </SuggestIcon>
        }

        <Geo>
          <Value>
            { value }
          </Value>
          <div>
            { area &&
              <GeoLabel>
                { isCity ? `Все аэропорты, ${area}` : `${area}, ${country}` }
              </GeoLabel>
            }
          </div>
        </Geo>
        <Code>
          { IATACode }
        </Code>
      </AirportSuggestContainer>
    )
  }
}
