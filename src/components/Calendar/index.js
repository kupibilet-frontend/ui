// @flow
import React from 'react'
import moment from '@kupibilet/moment'
import { withMedia } from 'utils/media-queries'
import Button from 'components/Button'
import MonthCaption from './parts/MonthCaption'
import WeekdaysRow from './parts/WeekdaysRow'
import {
  StyledDayPicker,
  DayPickerWrapper,
  Navbar,
  NavbarButtons,
} from './styled'

type Props = {
  onDayClick: (string) => void,
  onMonthVisibilityChange?: () => void,
  selectedDays?: Array<string>,
  isMobile: boolean,
  renderDay: (string) => void,
  numberOfMonths?: number,
}

type State = {
  isSelectedMonth: boolean,
}

const WEEKDAYS_SHORT_FROM_SUNDAY = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']

class Calendar extends React.PureComponent<Props, State> {
  static defaultProps = {
    onMonthVisibilityChange: () => null,
    selectedDays: [],
    numberOfMonths: 2,
  }

  getMaxVisibleMonth = (date: Date) => new Date(
    date.getFullYear() + 1, date.getMonth(), date.getDate(),
  )

  getModifires = () => {
    const {
      selectedDays,
    } = this.props

    const today = new Date()
    const lastDay = new Date()
    lastDay.setDate(lastDay.getDate() - 1)
    lastDay.setMonth(lastDay.getMonth() + 12)

    const fromDate = selectedDays[0] && moment(selectedDays[0]).toDate()
    const toDate = selectedDays[1] && moment(selectedDays[1]).toDate()

    return ({
      disabled: {
        before: today,
        after: lastDay,
      },
      selected: [
        fromDate,
        { from: fromDate, to: toDate },
      ],
      start: fromDate,
      end: toDate,
    })
  }

  renderMonthCaption = (captionProps) => {
    const {
      onMonthVisibilityChange,
      isMobile,
    } = this.props

    return (
      <MonthCaption
        modifiers={this.getModifires}
        onMonthVisibilityChange={onMonthVisibilityChange}
        isMobile={isMobile}
        {...captionProps}
      />
    )
  }

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
      isMobile,
      selectedDays,
      onDayClick,
      renderDay,
      numberOfMonths,
    } = this.props

    const today = new Date()

    return (
      <DayPickerWrapper>
        {isMobile && <WeekdaysRow />}
        <StyledDayPicker
          weekdaysShort={WEEKDAYS_SHORT_FROM_SUNDAY}
          showWeekDays={!isMobile}
          modifiers={this.getModifires()}
          month={!isMobile ? (selectedDays[0] || today) : today}
          fromMonth={today}
          toMonth={this.getMaxVisibleMonth(today)}
          firstDayOfWeek={1}
          numberOfMonths={numberOfMonths}
          months={moment.months()}
          locale="ru"
          renderDay={(day) => renderDay(day)}
          navbarElement={!isMobile ? this.renderNavbar : undefined}
          captionElement={this.renderMonthCaption}
          onDayClick={(day) => onDayClick(day)}
          tabIndex={-1}
        />
      </DayPickerWrapper>
    )
  }
}

export default withMedia(Calendar)
