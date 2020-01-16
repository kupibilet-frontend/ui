import { css } from 'styled-components'

export default css`
  .DayPicker-wrapper {
    background: ${({ theme }) => theme.color.background};
  }
  .DayPicker-Months {
    flex-wrap: nowrap;
  }
  .DayPicker-Month{
    margin-top: 0;
    position: relative;
    flex-grow: 1;
    &::after{
      content: '';
      position: absolute;
      display: block;
      height: 1px;
      width: calc(100% + 2em);
      top: 2em;
      left: -1em;
      background: ${({ theme }) => theme.color.textLighter};
    }
  }
  .DayPicker-Weekday{
    padding-bottom: 4em;
  }
  .DayPicker-Caption{
    text-align: center;
    margin: 0;
    position: absolute;
    width: 100%;
    top: 3em;
    & > div {
      font-weight: 600;
    }
  }
  .DayPicker-Day{
    min-width: 2.7em;
    max-width: 2.7em;
    padding-left: 0.2em;
    padding-right: 0.2em;
  }
`
