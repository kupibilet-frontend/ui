import { css } from 'styled-components'
import { borderRadiusSmall } from 'utils/borderRadius'

export default css`
  .DayPicker-wrapper {
    background: ${({ theme }) => theme.color.background};
    box-shadow: 0 3px 7px 0 ${({ theme }) => theme.color.miscDarkest};
    ${borderRadiusSmall.all}
    margin-bottom: 18px;
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
    top: 3.5em;
    & > div {
      font-weight: 600;
    }
  }
`
