import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { color } from '../theme-provider/theme'

const JourneyHtml = styled.div`
  display: block;
`

const Title = styled.div`
  display: block;
  font-size: 38px;
  font-weight: 600;
  line-height: 38px;
  color: ${(props) => (props.price === true ? color.secondaryDarker : color.textDarker)};
`

const DescriptionCity = styled.div`
  display: inline-block;
  font-weight: 600;
`

const Description = styled.div`
  display: block;
  margin-top: 3px;
  font-size: 20px;
  line-height: 24px;
  color: ${color.textDarker};
`

const Journey = ({ title, price, CityTo, CityFrom, dateTo, dateFrom }) => (
  <JourneyHtml>
    <Title price={price}>{title}</Title>
    <Description>
      <DescriptionCity>
        {`${CityTo} → ${CityFrom}`}
      </DescriptionCity>
      { dateFrom ? ` • ${dateTo}, ${dateFrom}` : ` • ${dateTo}`}
    </Description>
  </JourneyHtml>
)

Journey.defaultProps = {
  title: '',
  price: false,
  CityTo: '',
  CityFrom: '',
  dateTo: '',
  dateFrom: '',
}

Journey.propTypes = {
  title: PropTypes.string,
  price: PropTypes.bool,
  CityTo: PropTypes.string,
  CityFrom: PropTypes.string,
  dateTo: PropTypes.string,
  dateFrom: PropTypes.string,
}

export default Journey
