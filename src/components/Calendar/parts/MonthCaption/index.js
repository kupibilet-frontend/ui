// @flow

import React from 'react'
import styled from 'styled-components'
import moment from '@kupibilet/moment'
import VisibilitySensor from 'react-visibility-sensor'

const Caption = styled.div`

`

type Props = {
  date: Date | null,
  modifiers: {},
  onMonthVisibilityChange: () => void,
  // isMobile: boolean,
}

type State = {
  scrollToDates: boolean,
}

/* eslint-disable react/prop-types */
class MonthCaption extends React.PureComponent<Props, State> {
  static defaultProps = {
    date: null,
    onMonthVisibilityChange: () => {},
  }
  // constructor(props) {
  //   super(props)
  // }

  componentDidMount() {
    // if startDaySelected - scroll to this month and isMobile
    // this.selectedMonth.scrollIntoView()
  }

  componentDidUpdate(prevProps: Props) {
    const { onMonthVisibilityChange, date } = this.props
    if (prevProps.date !== date) {
      onMonthVisibilityChange(date)
    }
  }

  onChange = (isVisible: boolean) => {
    const { onMonthVisibilityChange, date } = this.props
    if (isVisible) {
      onMonthVisibilityChange(date)
    }
  }

  render() {
    const { date } = this.props

    const formatDate = moment(date).format('MMMM YYYY')
    const month = formatDate[0].toUpperCase() + formatDate.substr(1)

    return (
      <VisibilitySensor
        onChange={this.onChange}
        partialVisibility
      >
        <Caption
          className="DayPicker-Caption"
          ref={(element) => { this.selectedMonth = element }}
        >
          <div>{month}</div>
        </Caption>
      </VisibilitySensor>
    )
  }
}

export default MonthCaption
