import styled from 'styled-components'

import CalendarDayStyles from './CalendarDay'
import CalendarMonthStyles from './CalendarMonth'
import CalendarMonthGridStyles from './CalendarMonthGrid'
import DayPickerNavigationStyles from './DayPickerNavigation'
import DateInputStyles from './DateInput'
import DateRangePickerStyles from './DateRangePicker'
import DateRangePickerInputStyles from './DateRangePickerInput'
import DayPickerStyles from './DayPicker'

export default styled.div`
  ${CalendarDayStyles}
  ${CalendarMonthStyles}
  ${CalendarMonthGridStyles}
  ${DayPickerNavigationStyles}
  ${DateInputStyles}
  ${DateRangePickerStyles}
  ${DateRangePickerInputStyles}
  ${DayPickerStyles}
`
