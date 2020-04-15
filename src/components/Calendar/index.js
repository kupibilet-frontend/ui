// @flow
import React from 'react'
import moment from '@kupibilet/moment'
import { withMedia } from 'utils/media-queries'
import Button from 'components/Button'
import CalendarDay from 'components/CalendarDay'
import MonthCaption from './parts/MonthCaption'
import WeekdaysRow, { type TWeekdays } from './parts/WeekdaysRow'

import {
  StyledDayPicker,
  DayPickerWrapper,
  Navbar,
  NavbarButtons,
} from './styled'

type TProps = {
  /**
    Функция, срабатывающая при клике на день в кадендаре. Возвращает выбранный день
  */
  onDayClick: (Date) => void,
  /**
    Функция, срабатывающая попадении месяца в поле видимости.
    Нужна для инициирования подгрузки календаря цен
  */
  onMonthVisibilityChange?: () => void,
  /**
    Массив выбранных дней. Один или два дня в формате Timestamp
  */
  selectedDays?: Array<number>,
  /**
    Функция, рендерящая день, если нам нужно кастомное отображение дней.
    Например, вместе с ценами для календаря цен
  */
  renderDay?: (Date) => void,
  /**
    Количество отображаемых месяцев
  */
  numberOfMonths?: number,
  /**
    Объект с названиями дней недели в формате { MONDAY: string, TUESDAY: string, ... }.
    Передаем сверху для локализации
  */
  weekdays?: TWeekdays,
  isMobile: boolean,
}

type TNavbarProps = {
  onPreviousClick: () => void,
  onNextClick: () => void,
}

const WEEKDAYS_DEFAULT = {
  MONDAY: 'Пн',
  TUESDAY: 'Вт',
  WEDNESDAY: 'Ср',
  THURSDAY: 'Чт',
  FRIDAY: 'Пт',
  SATURDAY: 'Сб',
  SUNDAY: 'Вс',
}

/**
 * Кадендарь позволяет выбрать одну дату или диапазон дат
 */

class Calendar extends React.PureComponent<TProps> {
  static defaultProps = {
    onMonthVisibilityChange: () => null,
    selectedDays: [],
    numberOfMonths: 2,
    renderDay: (day: Date) => <CalendarDay day={moment(day)} />,
    weekdays: WEEKDAYS_DEFAULT,
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

  renderMonthCaption = (captionProps: Object) => {
    const {
      onMonthVisibilityChange,
      isMobile,
    } = this.props

    return (
      <MonthCaption
        modifiers={this.getModifires()}
        onMonthVisibilityChange={onMonthVisibilityChange}
        isMobile={isMobile}
        {...captionProps}
      />
    )
  }

  renderNavbar = ({ onPreviousClick, onNextClick, nextMonth, previousMonth }: TNavbarProps) => {
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

  render() {
    const {
      isMobile,
      selectedDays,
      onDayClick,
      renderDay,
      numberOfMonths,
      weekdays,
    } = this.props

    const today = new Date()
    const maxVisibleMonth = this.getMaxVisibleMonth(today)
    const selectedDay = selectedDays[0] && new Date(selectedDays[0])

    const { SUNDAY, ...restWeekdays } = weekdays
    const weekdaysFromSunday = Object.values({ SUNDAY, ...restWeekdays })

    return (
      <DayPickerWrapper>
        {isMobile && <WeekdaysRow weekdays={weekdays} />}
        <StyledDayPicker
          weekdaysShort={weekdaysFromSunday}
          showWeekDays={!isMobile}
          modifiers={this.getModifires()}
          month={!isMobile ? (selectedDay || today) : today}
          fromMonth={today}
          toMonth={maxVisibleMonth}
          firstDayOfWeek={1}
          numberOfMonths={numberOfMonths}
          months={moment.months()}
          renderDay={renderDay}
          navbarElement={!isMobile ? this.renderNavbar : undefined}
          captionElement={this.renderMonthCaption}
          onDayClick={onDayClick}
          tabIndex={-1}
        />
      </DayPickerWrapper>
    )
  }
}

// export is needed for generate right documentation
export const DocGenCalendar = Calendar

export default withMedia(Calendar)
