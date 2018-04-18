import styled from 'styled-components'

import CalendarDayStyles from './CalendarDay'
import CalendarMonthStyles from './CalendarMonth'
import CalendarMonthGridStyles from './CalendarMonthGrid'
import DayPickerNavigationStyles from './DayPickerNavigation'
import DateInputStyles from './DateInput'
import DateRangePickerStyles from './DateRangePicker'
import DateRangePickerInputStyles from './DateRangePickerInput'
import DayPickerStyles from './DayPicker'
import DayPickerKeyboardShortcutsStyles from './DayPickerKeyboardShortcuts'

export default styled.div`
  ${CalendarDayStyles} ${CalendarMonthStyles} ${CalendarMonthGridStyles} ${DayPickerNavigationStyles} ${DateInputStyles} ${DateRangePickerStyles} ${DateRangePickerInputStyles} ${DayPickerStyles} ${DayPickerKeyboardShortcutsStyles};
`

export const DateInput = styled.div`
  display: flex;
  align-items: baseline;
`
export const DateInputValue = styled.div`
  flex-grow: 1;
  font-weight: 600;
`
export const DateInputDayOfWeek = styled.div`
  color: ${({ theme }) => theme.color.text};
  flex-shrink: 0;

  font-size: 14px;
  line-height: 1px;
  font-weight: normal;
  text-transform: uppercase;
`
