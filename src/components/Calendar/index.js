// @flow
import React from 'react'
import moment from '@kupibilet/moment'
import { withMedia } from 'utils/media-queries'
import Button from 'components/Button'
import {
  StyledDayPicker,
  DayPickerWrapper,
  Navbar,
  NavbarButtons,
} from './styled'

type Props = {
  // selectedDays: Array<*>,
  // onDaySelect: () => void,
  isTablet: boolean,
  isDesktop: boolean,
  isMobile: boolean,
}

type State = {
  numberOfMonths: number,
}

const WEEKDAYS_SHORT_FROM_SUNDAY = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
// const WEEKDAYS_SHORT_FROM_MONDAY = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

class Calendar extends React.PureComponent<Props, State> {
  static defaultProps = {
    onDaySelect: () => null,
    selectedDays: [],
  }
  constructor(props) {
    super(props)
    this.state = {
      numberOfMonths: this.getNumberOfMonths(),
    }
  }

  getNumberOfMonths = () => {
    const { isTablet, isDesktop } = this.props
    if (isDesktop) return 2
    if (isTablet) return 1
    return 13
  }

   getMaxVisibleMonth = (date: Date) => new Date(
     date.getFullYear() + 1, date.getMonth(), date.getDate(),
   )

  renderNavbar = ({ onPreviousClick, onNextClick }) => {
    return (
      <Navbar>
        <NavbarButtons>
          <Button
            onClick={(e) => {
              e.preventDefault()
              onPreviousClick()
            }}
            icon="arrow-left"
            tabIndex={-1}
          />
          <Button
            onClick={(e) => {
              e.preventDefault()
              onNextClick()
            }}
            icon="arrow-right"
            tabIndex={-1}
          />
        </NavbarButtons>
      </Navbar>
    )
  }

  render() {
    const {
      numberOfMonths,
    } = this.state
    const {
      isMobile,
    } = this.props
    const today = new Date()
    const lastDay = new Date()
    lastDay.setDate(lastDay.getDate() - 1)
    lastDay.setMonth(lastDay.getMonth() + 12)

    const modifiers = {
      disabled: {
        before: today,
        after: lastDay,
      },
      // selected: [
      //   fromDate,
      //   { from: fromDate, to: toDate },
      // ],
      // start: fromDate,
      // end: toDate,
    }

    return (
      <DayPickerWrapper>
        <StyledDayPicker
          weekdaysShort={WEEKDAYS_SHORT_FROM_SUNDAY}
          showWeekDays={!isMobile}
          modifiers={modifiers}
          // month={!isMobile ? (fromDate || today) : today}
          fromMonth={today}
          toMonth={this.getMaxVisibleMonth(today)}
          firstDayOfWeek={1}
          numberOfMonths={numberOfMonths}
          months={moment.months()}
          locale="ru"
          // renderDay={(day) => this.props.renderDay(day, showToCalendar)}
          navbarElement={!isMobile ? this.renderNavbar : undefined}
          // captionElement={captionElement}
          // onDayClick={(day) => this.onDayChange(day, modifiers.disabled)}
          tabIndex={-1}
        />
      </DayPickerWrapper>
    )
  }
}

export default withMedia(Calendar)
