import React from 'react'
import moment from 'moment'
import { Modifiers } from 'react-day-picker'

interface TProps {
  date: Date,
  modifiers: Modifiers,
  isMobile: boolean,
}

interface TState {
  isSelectedMonth: boolean,
}

class MonthCaption extends React.PureComponent<TProps, TState> {
  selectedMonth = React.createRef<HTMLDivElement>()

  constructor(props: TProps) {
    super(props)
    const {
      date,
      modifiers: {
        selected,
      },
    } = props

    this.state = {
      isSelectedMonth: (Array.isArray(selected) && selected[0])
        ? moment(date).isSame(moment(selected[0] as Date), 'month')
        : false,
    }
  }

  componentDidMount(): void {
    const { isMobile } = this.props
    const { isSelectedMonth } = this.state

    if (isMobile && isSelectedMonth && this.selectedMonth.current) {
      this.selectedMonth.current.scrollIntoView()
    }
  }

  render(): JSX.Element {
    const { date } = this.props

    const formatDate = moment(date).format('MMMM YYYY')
    const month = formatDate[0].toUpperCase() + formatDate.substr(1)

    return (
      <div
        className="DayPicker-Caption"
        ref={this.selectedMonth}
      >
        <div>{month}</div>
      </div>
    )
  }
}

export default MonthCaption
