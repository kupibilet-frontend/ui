// @flow

import React from 'react'
import moment from 'moment'
import VisibilitySensor from 'react-visibility-sensor'

type Props = {
  date: Date,
  modifiers: {
    selected: Array<Date | Object>,
  },
  onMonthVisibilityChange: (Date) => void,
  isMobile: boolean,
}

type State = {
  isSelectedMonth: boolean,
}

class MonthCaption extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    const {
      date,
      modifiers: {
        selected,
      },
    } = props

    this.state = {
      isSelectedMonth: selected[0]
        ? moment(date).isSame(moment(selected[0]), 'month')
        : false,
    }
  }

  componentDidMount() {
    const {
      isMobile,
    } = this.props

    const {
      isSelectedMonth,
    } = this.state

    if (isMobile && isSelectedMonth) {
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
        <div
          className="DayPicker-Caption"
          ref={(element) => { this.selectedMonth = element }}
        >
          <div>{month}</div>
        </div>
      </VisibilitySensor>
    )
  }
}

export default MonthCaption
