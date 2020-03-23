import { css } from 'styled-components'

export default css`
.DayPicker {
  display: inline-block;
  padding-top: 60px;
}

.DayPicker-wrapper {
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding-bottom: 1rem;
  flex-direction: row;
  outline: none;
}

.DayPicker-Months {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  outline: none;
}

.DayPicker-Month:first-of-type .DayPicker-Weekdays {
  align-items: center;
  display: flex;
  height: 36px;
  left: -18px;
  margin: 0;
  padding: 0 18px;
  position: absolute;
  top: -18px;
  width: calc(100% + 45px);
}

.DayPicker-Month {
  display: table;
  border-collapse: collapse;
  border-spacing: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 0 1rem;
  margin: 12px 0 0;
  margin-top: 1rem;
}

.DayPicker-NavBar {
  display: none;
}

.DayPicker-NavButton {
  position: absolute;
  cursor: pointer;
  top: 1rem;
  right: 1.5rem;
  margin-top: 2px;
  color: #8b9898;
  width: 1.25rem;
  height: 1.25rem;
  display: inline-block;
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
}
.DayPicker-NavButton:hover {
  opacity: 0.8;
}

.DayPicker-NavButton--prev {
  margin-right: 1.5rem;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAVVJREFUWAnN2G0KgjAYwPHpGfRkaZeqvgQaK+hY3SUHrk1YzNLay/OiEFp92I+/Mp2F2Mh2lLISWnflFjzH263RQjzMZ19wgs73ez0o1WmtW+dgA01VxrE3p6l2GLsnBy1VYQOtVSEH/atCCgqpQgKKqYIOiq2CBkqtggLKqQIKgqgCBjpJ2Y5CdJ+zrT9A7HHSTA1dxUdHgzCqJIEwq0SDsKsEg6iqBIEoq/wEcVRZBXFV+QJxV5mBtlDFB5VjYTaGZ2sf4R9PM7U9ZU+lLuaetPP/5Die3ToO1+u+MKtHs06qODB2zBnI/jBd4MPQm1VkY79Tb18gB+C62FdBFsZR6yeIo1YQiLJWMIiqVjQIu1YSCLNWFgijVjYIuhYYCKoWKAiiFgoopxYaKLUWOii2FgkophYp6F3r42W5A9s9OcgNvva8xQaysKXlFytoqdYmQH6tF3toSUo0INq9AAAAAElFTkSuQmCC');
}

.DayPicker-NavButton--next {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAXRJREFUWAnN119ugjAcwPHWzJ1gnmxzB/BBE0n24m4xfNkTaOL7wOtsl3AXMMb+Vjaa1BG00N8fSEibPpAP3xAKKs2yjzTPH9RAjhEo9WzPr/Vm8zgE0+gXATAxxuxtqeJ9t5tIwv5AtQAApsfT6TPdbp+kUBcgVwvO51KqVhMkXKsVJFXrOkigVhCIs1Y4iKlWZxB1rX4gwlpRIIpa8SDkWmggrFq4IIRaJKCYWnSgnrXIQV1r8YD+1Vrn+bReagysIFfLABRt31v8oBu1xEBttfRbltmfjgEcWh9snUS2kNdBK6WN1vrOWxObWsz+fjxevsxmB1GQDfINWiev83nhaoiB/CoOU438oPrhXS0WpQ9xc1ZQWxWHqUYe0I0qrKCQKjygDlXIQV2r0IF6ViEBxVTBBSFUQQNhVYkHIVeJAtkNsbQ7c1LtzP6FsObhb2rCKv7NBIGoq4SDmKoEgTirXAcJVGkFSVVpgoSrXICGUMUH/QBZNSUy5XWUhwAAAABJRU5ErkJggg==');
}
.DayPicker-NavButton--interactionDisabled {
  display: none;
}

.DayPicker-Caption {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  display: table-caption;
  text-align: center;
  margin-bottom: 0.5rem;
}

.DayPicker-Caption > div {
  font-size: 1.15rem;
  font-weight: 600;
}

.DayPicker-Weekdays {
  margin-top: 1rem;
  display: none;
  width: 2%;
}

.DayPicker-WeekdaysRow {
  display: table-row;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.color.miscLighter};
}

.DayPicker-Weekday {
  display: table-cell;
  padding: 0.5rem 0;
  font-size: 0.875em;
  text-align: center;
  color: #8b9898;
  min-width: 42px;
  width: 14.3%;
}

.DayPicker-Weekday abbr[title] {
  border-bottom: none;
  text-decoration: none;
}

.DayPicker-Body {
  display: table-row-group;
}

.DayPicker-Week {
  display: table-row;
}

.DayPicker-Day {
  color: ${({ theme }) => theme.color.textDarkest};
  box-sizing: border-box;
  display: block;
  width: 4%;
  height: 45px;
  min-width: 42px;
  max-width: 52px;
  display: table-cell;
  letter-spacing: -.21px;
  padding: 0 0 2px 0;
  text-align: center;
  cursor: pointer;
  vertical-align: middle;
  outline: none;
}

.DayPicker-WeekNumber {
  display: table-cell;
  padding: 0.5rem;
  text-align: right;
  vertical-align: middle;
  min-width: 1rem;
  font-size: 0.75em;
  cursor: pointer;
  color: #8b9898;
  border-right: 1px solid #eaecec;
}

.DayPicker--interactionDisabled .DayPicker-Day {
  cursor: default;
}

.DayPicker-Footer {
  padding-top: 0.5rem;
}

.DayPicker-TodayButton {
  border: none;
  background-image: none;
  background-color: transparent;
  box-shadow: none;
  cursor: pointer;
  color: #4a90e2;
  font-size: 0.875em;
}
/* Default modifiers */

/*.DayPicker-Day--today {
  color: #d0021b;
  font-weight: 700;
}*/

.DayPicker-Day--outside {
  cursor: default;
  color: #8b9898;
}

.DayPicker-Day--disabled {
  color: #dce0e0;
  cursor: default;
  /* background-color: #eff1f1; */
}
.DayPickerInput {
  width: 100%;
}

.DayPickerInput-Overlay {
  right: 2px;
  z-index: 1;
  position: absolute;
  background: ${({ theme }) => theme.color.background};
  top: 42px;
  width: 100%;
}

.InputFromTo .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
  background: ${({ theme }) => theme.color.miscLightest} !important;
  color: ${({ theme }) => theme.color.textDarkest};
}
.InputFromTo .DayPicker-Day {
  border-radius: 0 !important;
}
.InputFromTo .DayPicker-Day--start {
  border-top-left-radius: 50% !important;
  border-bottom-left-radius: 50% !important;
}
.InputFromTo .DayPicker-Day--end {
  border-top-right-radius: 50% !important;
  border-bottom-right-radius: 50% !important;
}
`
