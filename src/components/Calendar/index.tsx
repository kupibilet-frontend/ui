import React from 'react'
import moment from 'moment'
import { Modifiers } from 'react-day-picker'

import { withMedia } from 'utils/media-queries'
import { TWithMediaProps } from 'utils/types'
import Button from 'components/Button'
import CalendarDay from 'components/CalendarDay'
import MonthCaption from './parts/MonthCaption'
import WeekdaysRow from './parts/WeekdaysRow'

import {
  StyledDayPicker,
  DayPickerWrapper,
  Navbar,
  NavbarButtons,
} from './styled'


interface TProps extends TWithMediaProps {
  /**
    Функция, срабатывающая при клике на день в кадендаре. Возвращает выбранный день
  */
  onDayClick: (date: Date, calendarModifiers: Modifiers) => void,
  /**
    Массив выбранных дней. Один или два дня в формате Timestamp
  */
  selectedDays: number[],
  /**
    Функция, рендерящая день, если нам нужно кастомное отображение дней.
    Например, вместе с ценами для календаря цен
  */
  renderDay: (date: Date) => React.ReactNode,
  /**
    Количество отображаемых месяцев
  */
  numberOfMonths: number,
  /**
    Объект с названиями дней недели в формате { MONDAY: string, TUESDAY: string, ... }.
    Передаем сверху для локализации
  */
  weekdays: string[],
  /**
    Должен ли календарь скроллиться
  */
  hasScrolling: boolean,
}

interface TNavbarProps {
  onPreviousClick: () => void,
  onNextClick: () => void,
  nextMonth: Date,
  previousMonth: Date,
}

/**
 * Кадендарь позволяет выбрать одну дату или диапазон дат
 */
class Calendar extends React.PureComponent<TProps> {
  static defaultProps = {
    selectedDays: [],
    numberOfMonths: 2,
    renderDay: (day: Date): JSX.Element => <CalendarDay day={moment(day)} />,
  }

  getMaxVisibleMonth = (date: Date): Date => new Date(
    date.getFullYear() + 1, date.getMonth(), date.getDate(),
  )

  getModifires = (): Modifiers => {
    const {
      selectedDays,
    } = this.props

    const today = new Date()
    const lastDay = new Date()
    lastDay.setDate(lastDay.getDate() - 1)
    lastDay.setMonth(lastDay.getMonth() + 12)

    const fromDate = selectedDays[0] && moment(selectedDays[0]).toDate() || undefined
    const toDate = selectedDays[1] && moment(selectedDays[1]).toDate() || undefined

    return ({
      today: undefined,
      outside: undefined,
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

  renderMonthCaption = (captionProps: { date: Date }): JSX.Element => {
    const { isMobile } = this.props

    return (
      <MonthCaption
        modifiers={this.getModifires()}
        isMobile={isMobile}
        {...captionProps}
      />
    )
  }

  renderNavbar = (navbarProps: TNavbarProps): JSX.Element => {
    const { onPreviousClick, onNextClick, nextMonth, previousMonth } = navbarProps
    const today = new Date()
    const maxVisibleMonth = this.getMaxVisibleMonth(today)
    const isPreviousButtonDisabled = moment(previousMonth).isBefore(today, 'month')
    const isNextButtonDisabled = moment(nextMonth).isAfter(maxVisibleMonth, 'month')

    return (
      <Navbar>
        <NavbarButtons>
          <Button
            onClick={(e) => {
              e.preventDefault()
              onPreviousClick()
            }}
            disabled={isPreviousButtonDisabled}
            icon="arrow-left"
            tabIndex={-1}
          />
          <Button
            onClick={(e) => {
              e.preventDefault()
              onNextClick()
            }}
            disabled={isNextButtonDisabled}
            icon="arrow-right"
            tabIndex={-1}
          />
        </NavbarButtons>
      </Navbar>
    )
  }

  render(): JSX.Element {
    const {
      selectedDays,
      onDayClick,
      renderDay,
      numberOfMonths,
      hasScrolling,
      weekdays,
      isMobile,
    } = this.props

    const modifiers: Modifiers = this.getModifires()

    const today = new Date()
    const maxVisibleMonth = this.getMaxVisibleMonth(today)
    const selectedDay = selectedDays[0] && new Date(selectedDays[0])

    return (
      <DayPickerWrapper hasScrolling={hasScrolling}>
        <StyledDayPicker
          weekdaysShort={weekdays}
          showWeekDays={!isMobile}
          modifiers={modifiers}
          month={!isMobile ? (selectedDay || today) : today}
          fromMonth={today}
          toMonth={maxVisibleMonth}
          firstDayOfWeek={1}
          numberOfMonths={numberOfMonths}
          months={moment.months()}
          renderDay={renderDay}
          navbarElement={!isMobile ? this.renderNavbar : undefined}
          captionElement={this.renderMonthCaption}
          onDayClick={(day) => { onDayClick(day, modifiers) }}
          tabIndex={-1}
        />
      </DayPickerWrapper>
    )
  }
}

// export is needed for generate right documentation
const DocGenCalendar = Calendar

export {
  DocGenCalendar,
  WeekdaysRow,
}

export default withMedia(Calendar)
