import styled, { css } from 'styled-components'
import DayPicker from '@kupibilet/react-day-picker'
import mq from 'utils/media-queries'
import notMobileReactDayStyles from './not-mobile-react-day-styles'
import mobileReactDayStyles from './mobile-react-day-styles'

const defaultReactDayStyles = css`
/* DayPicker styles - copy from @kupibilet/react-day-picker/lib/style.css */

.DayPicker {
  display: inline-block;
  font-size: 1rem;
}

.DayPicker-wrapper {
  position: relative;

  flex-direction: row;
  padding-bottom: 1em;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.DayPicker-Months {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.DayPicker-Month {
  display: table;
  margin: 0 1em;
  margin-top: 1em;
  border-spacing: 0;
  border-collapse: collapse;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.DayPicker-NavBar {
}

.DayPicker-NavButton {
  position: absolute;
  top: 1em;
  right: 1.5em;
  left: auto;

  display: inline-block;
  margin-top: 2px;
  width: 1.25em;
  height: 1.25em;
  background-position: center;
  background-size: 50%;
  background-repeat: no-repeat;
  color: #8B9898;
  cursor: pointer;
}

.DayPicker-NavButton:hover {
  opacity: 0.8;
}

.DayPicker-NavButton--prev {
  margin-right: 1.5em;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAVVJREFUWAnN2G0KgjAYwPHpGfRkaZeqvgQaK+hY3SUHrk1YzNLay/OiEFp92I+/Mp2F2Mh2lLISWnflFjzH263RQjzMZ19wgs73ez0o1WmtW+dgA01VxrE3p6l2GLsnBy1VYQOtVSEH/atCCgqpQgKKqYIOiq2CBkqtggLKqQIKgqgCBjpJ2Y5CdJ+zrT9A7HHSTA1dxUdHgzCqJIEwq0SDsKsEg6iqBIEoq/wEcVRZBXFV+QJxV5mBtlDFB5VjYTaGZ2sf4R9PM7U9ZU+lLuaetPP/5Die3ToO1+u+MKtHs06qODB2zBnI/jBd4MPQm1VkY79Tb18gB+C62FdBFsZR6yeIo1YQiLJWMIiqVjQIu1YSCLNWFgijVjYIuhYYCKoWKAiiFgoopxYaKLUWOii2FgkophYp6F3r42W5A9s9OcgNvva8xQaysKXlFytoqdYmQH6tF3toSUo0INq9AAAAAElFTkSuQmCC');
}

.DayPicker-NavButton--next {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAXRJREFUWAnN119ugjAcwPHWzJ1gnmxzB/BBE0n24m4xfNkTaOL7wOtsl3AXMMb+Vjaa1BG00N8fSEibPpAP3xAKKs2yjzTPH9RAjhEo9WzPr/Vm8zgE0+gXATAxxuxtqeJ9t5tIwv5AtQAApsfT6TPdbp+kUBcgVwvO51KqVhMkXKsVJFXrOkigVhCIs1Y4iKlWZxB1rX4gwlpRIIpa8SDkWmggrFq4IIRaJKCYWnSgnrXIQV1r8YD+1Vrn+bReagysIFfLABRt31v8oBu1xEBttfRbltmfjgEcWh9snUS2kNdBK6WN1vrOWxObWsz+fjxevsxmB1GQDfINWiev83nhaoiB/CoOU438oPrhXS0WpQ9xc1ZQWxWHqUYe0I0qrKCQKjygDlXIQV2r0IF6ViEBxVTBBSFUQQNhVYkHIVeJAtkNsbQ7c1LtzP6FsObhb2rCKv7NBIGoq4SDmKoEgTirXAcJVGkFSVVpgoSrXICGUMUH/QBZNSUy5XWUhwAAAABJRU5ErkJggg==');
}

.DayPicker-NavButton--interactionDisabled {
  display: none;
}

.DayPicker-Caption {
  display: table-caption;
  margin-bottom: 0.5em;
  padding: 0 0.5em;
  text-align: left;
}

.DayPicker-Caption > div {
  font-weight: 500;
  font-size: 1.15em;
}

.DayPicker-Weekdays {
  display: table-header-group;
  margin-top: 1em;
}

.DayPicker-WeekdaysRow {
  display: table-row;
}

.DayPicker-Weekday {
  display: table-cell;
  padding: 0.5em;
  color: #8B9898;
  text-align: center;
  font-size: 0.875em;
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
  display: table-cell;
  padding: 0.3em;
  border-radius: 50%;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
}

.DayPicker-WeekNumber {
  display: table-cell;
  padding: 0.5em;
  min-width: 1em;
  border-right: 1px solid #EAECEC;
  color: #8B9898;
  vertical-align: middle;
  text-align: right;
  font-size: 0.75em;
  cursor: pointer;
}

.DayPicker--interactionDisabled .DayPicker-Day {
  cursor: default;
}

.DayPicker-Footer {
  padding-top: 0.5em;
}

.DayPicker-TodayButton {
  border: none;
  background-color: transparent;
  background-image: none;
  box-shadow: none;
  color: #4A90E2;
  font-size: 0.875em;
  cursor: pointer;
}

/* Default modifiers */

.DayPicker-Day--today {
  color: #D0021B;
  font-weight: 700;
}

.DayPicker-Day--outside {
  color: #8B9898;
  cursor: default;
}

.DayPicker-Day--disabled {
  color: #DCE0E0;
  cursor: default;
/* background-color: #eff1f1; */
}

/* Example modifiers */

.DayPicker-Day--sunday {
  background-color: #F7F8F8;
}

.DayPicker-Day--sunday:not(.DayPicker-Day--today) {
  color: #DCE0E0;
}

.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
  position: relative;
  background-color: #4A90E2;
  color: #F0F8FF;
}

.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover {
  background-color: #0f99f5;
}

.DayPicker:not(.DayPicker--interactionDisabled)
.DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
  background-color: #F0F8FF;
}

/* DayPickerInput */

.DayPickerInput {
  display: inline-block;
}

.DayPickerInput-OverlayWrapper {
  position: relative;
}

.DayPickerInput-Overlay {
  position: absolute;
  left: 0;
  z-index: 1;
  background: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
}
`
const castomReactDayStyles = css`
* {
  outline: none;
}
/* Example modifiers */

.DayPicker-Day--sunday {
  background-color: #f7f8f8;
}

.DayPicker-Day--sunday:not(.DayPicker-Day--today) {
  color: #dce0e0;
}

.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
  position: relative;
  color: #f0f8ff;
  background: ${({ theme }) => theme.color.primaryDark};
  border-radius: 4px 0 0 4px !important;
  &:hover{
    background: ${({ theme }) => theme.color.primaryDark};
  }
}

.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside).DayPicker-Day--end {
  border-radius: 0px 4px 4px 0px !important;
}

.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside).DayPicker-Day--end.DayPicker-Day--start {
  border-radius: 4px !important;
}

.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside).DayPicker-Day--end.DayPicker-Day--start::after {
  display: none;
}

.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside).DayPicker-Day--start::after {
  left: 100%;
  top: 50%;
  height: 0;
  width: 0;
  position: absolute;
  border: solid 4px transparent;
  content: " ";
  pointer-events: none;
  border-left-color: #0f99f5;
  border-left-width: 4px;
  margin-top: -4px;
  z-index: 1;
}

.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside).DayPicker-Day--end::after {
  left: auto;
  right: 100%;
  top: 50%;
  height: 0;
  width: 0;
  position: absolute;
  border: solid 4px transparent;
  content: " ";
  pointer-events: none;
  border-right-color: #0f99f5;
  border-right-width: 4px;
  margin-top: -4px;
}
.DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
  background-color: #f0f8ff !important;
  color: ${({ theme }) => theme.color.textDarkest};
  border-radius: 0px !important;
}

.DayPicker-Day {
  border-radius: 0 !important;
}

.DayPicker-Day--start {
 border-top-left-radius: 50% !important;
 border-bottom-left-radius: 50% !important;
}

.DayPicker-Day--end {
 border-top-right-radius: 50% !important;
 border-bottom-right-radius: 50% !important;
}
.DayPicker-Day--today {
  color: inherit;
  font-weight: inherit;
}
`
const reactDayStyles = css`
  ${mq.desktop`
    ${defaultReactDayStyles};
    ${castomReactDayStyles};
    ${notMobileReactDayStyles};
  `}
  ${mq.tablet`
    ${defaultReactDayStyles};
    ${castomReactDayStyles};
    ${notMobileReactDayStyles};
  `}
  ${mq.mobile`
    ${castomReactDayStyles};
    ${mobileReactDayStyles};
  `}
`

export const StyledDayPicker = styled(DayPicker)`
  ${reactDayStyles};
  ${mq.mobile`
    display: flex;
    max-height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;

    /* // hack for scrolled padding
    margin: 0 -18px 12px -18px;
    padding: 0 18px; */
    /* outline: none; */

    // hack for some native mobile browsers
    background: ${({ theme }) => theme.color.background};
  `}
`

export const DayPickerWrapper = styled.div`
  ${({ hasScrolling }) => (hasScrolling ? `
    overflow-y: scroll;
    overflow-x: hidden;
  ` : `
    overflow: hidden;
  `)}
  max-height: 100%;
  position: relative;
`

export const Navbar = styled.div`
  padding: 0.5em 1em 0;
  position: relative;
  ${mq.handheld`
    padding-bottom: 0.5em;
  `}
`

export const NavbarInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  white-space: nowrap;
  ${mq.handheld`
    flex-direction: column;
  `}
`

export const NavbarButtons = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: -4.5em;
  left: 0;
  width: 100%;
  padding: 0 1em;
  z-index: 2;
`

export const MainWrapper = styled.div`
  position: relative;
`
