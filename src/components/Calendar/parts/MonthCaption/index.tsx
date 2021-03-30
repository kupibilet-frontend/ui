import React from 'react'
import moment from 'moment'
import VisibilitySensor from 'react-visibility-sensor'

interface TProps {
  date: Date,
  modifiers: {
    selected: Date[],
  },
  onMonthVisibilityChange: (date: Date) => void,
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
      isSelectedMonth: selected[0]
        ? moment(date).isSame(moment(selected[0]), 'month')
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

  componentDidUpdate(prevProps: TProps): void {
    const { onMonthVisibilityChange, date } = this.props
    if (prevProps.date !== date) {
      onMonthVisibilityChange(date)
    }
  }

  onChange = (isVisible: boolean): void => {
    const { onMonthVisibilityChange, date } = this.props
    if (isVisible) {
      onMonthVisibilityChange(date)
    }
  }

  render(): JSX.Element {
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
          ref={this.selectedMonth}
        >
          <div>{month}</div>
        </div>
      </VisibilitySensor>
    )
  }
}

export default MonthCaption
