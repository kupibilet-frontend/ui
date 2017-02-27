import { css } from 'styled-components'

import CalendarDayStyles from './CalendarDay'
import CalendarMonthStyles from './CalendarMonth'
import CalendarMonthGridStyles from './CalendarMonthGrid'
import DayPickerNavigationStyles from './DayPickerNavigation'
import DateInputStyles from './DateInput'
import DateRangePickerStyles from './DateRangePicker'
import DateRangePickerInputStyles from './DateRangePickerInput'
import DayPickerStyles from './DayPicker'
// import SingleDatePickerStyles from './SingleDatePicker'
// import SingleDatePickerInputStyles from './SingleDatePickerInput'

export default css`
  ${CalendarDayStyles}
  ${CalendarMonthStyles}
  ${CalendarMonthGridStyles}
  ${DayPickerNavigationStyles}
  ${DateInputStyles}
  ${DateRangePickerStyles}
  ${DateRangePickerInputStyles}
  ${DayPickerStyles}
`
