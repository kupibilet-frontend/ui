// @flow

import React from 'react'
import styled from 'styled-components'
import moment from '@kupibilet/moment'
import VisibilitySensor from 'react-visibility-sensor'
import mq from 'utils/media-queries'

const Caption = styled.div`
  ${(props) => (props.isFromSelected && mq.mobile`
    margin-top: -168px;
    padding-top: 168px;
  `)}

  ${(props) => (props.isToSelected && mq.mobile`
    margin-top: -207px;
    padding-top: 207px;
  `)}
`

type Props = {
  showFromCalendar: boolean,
  showToCalendar: boolean,
  date: string | null,
  modifiers: {},
  onMonthVisibilityChange: () => void,
  isMobile: boolean,
}

type State = {
  scrollToDates: boolean,
}

/* eslint-disable react/prop-types */
class MonthCaption extends React.PureComponent<Props, State> {
  static defaultProps = {
    date: null,
  }
  constructor(props) {
    super(props)

    const { date, modifiers, showFromCalendar, showToCalendar } = this.props

    const formatDate = moment(date).format('MMMM YYYY')
    const startMonth = moment(modifiers.start).format('MMMM YYYY')
    const endMonth = moment(modifiers.end).format('MMMM YYYY')

    this.state = {
      isFromSelectedMonth: showFromCalendar && (startMonth === formatDate),
      isToSelectedMonth: showToCalendar && (endMonth === formatDate),
      isEmptyReturnDate: showToCalendar && !modifiers.end && (startMonth === formatDate),
    }
  }

  componentDidMount() {
    const { isFromSelectedMonth, isToSelectedMonth, isEmptyReturnDate } = this.state

    if ((isFromSelectedMonth || isToSelectedMonth || isEmptyReturnDate) &&
        this.selectedMonth && this.props.isMobile) {
      this.selectedMonth.scrollIntoView()
    }
  }

  componentDidUpdate(prevProps: Props) {
    const { onMonthVisibilityChange, date } = this.props
    if (prevProps.date !== date) {
      onMonthVisibilityChange(date)
    }
  }

  onChange = (isVisible: boolean) => {
    const { onMonthVisibilityChange } = this.props
    if (isVisible && onMonthVisibilityChange) {
      onMonthVisibilityChange(this.props.date)
    }
  }

  render() {
    const { date } = this.props
    const { isFromSelectedMonth, isToSelectedMonth, isEmptyReturnDate } = this.state

    const formatDate = moment(date).format('MMMM YYYY')
    const month = formatDate[0].toUpperCase() + formatDate.substr(1)

    return (
      <VisibilitySensor
        onChange={this.onChange}
        partialVisibility
      >
        <Caption
          className="DayPicker-Caption"
          innerRef={(element) => { this.selectedMonth = element }}
          isFromSelected={isFromSelectedMonth}
          isToSelected={isToSelectedMonth || isEmptyReturnDate}
        >
          <div>{month}</div>
        </Caption>
      </VisibilitySensor>
    )
  }
}

export default MonthCaption
