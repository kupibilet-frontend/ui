import React from 'react'
import moment from '@kupibilet/moment'
import { storiesOf } from '@storybook/react'
import Slider from './index'


const onChange = (values) => {
  console.info(values)
}

const date1 = moment('2017-01-01')
const date2 = moment('2017-01-03')

const formatDate = (date) => date.locale('ru').format('DD MMMM hh:mm')
const dateToSliderValue = (date) => (+date / 1000 / 60 / 15)

const generateSliderData = (date) => {
  const sliderData = {}
  let margin = 0
  const startingPosition = dateToSliderValue(date) + 40
  for (let i = 0; i < 121; i++) {
    margin += 1
    sliderData[startingPosition + margin] = Math.floor((Math.random() * 100) + 1)
  }
  return sliderData
}

const valueToDate = (value) => moment(value * 15 * 60 * 1000).locale('ru').format('DD MMMM hh:mm')

class Container extends React.Component {
  state = {
    left: formatDate(date1),
    right: formatDate(date2),
    startDate: dateToSliderValue(date1),
    endDate: dateToSliderValue(date2),
    sliderData: generateSliderData(date1),
  }

  onValuesUpdated = (values) => {
    this.setState({
      left: valueToDate(values[0]),
      right: valueToDate(values[1]),
    })
  }

  render() {
    const { startDate, endDate, sliderData } = this.state
    return (
      <div style={{ width: '252px', height: '100px' }}>
        <div
          style={{
            padding: '12px',
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '100px',
          }}
        >
          <span>{this.state.left}</span>
          <span>{this.state.right}</span>
        </div>
        <Slider
          min={startDate}
          max={endDate}
          values={[startDate, endDate]}
          onValuesUpdated={this.onValuesUpdated}
          sliderData={sliderData}
        />
      </div>
    )
  }
}

storiesOf('Controls/Slider', module)
  .addWithInfo('default', () => (
    <div style={{ width: '252px' }}>
      <Slider
        min={1}
        max={1000}
        onChange={onChange}
      />
    </div>
  ))
  .addWithInfo('With date range', () => (
    <Container />
  ))
