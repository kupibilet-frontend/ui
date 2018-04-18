import { css } from 'styled-components'
import cssArrow from 'utils/css-arrow'

export default css`
  .CalendarDay {
    background: ${({ theme }) => theme.color.background};

    color: ${({ theme }) => theme.color.textDarkest};
    font-size: 16px;
    line-height: 1;
    letter-spacing: -0.21px;
    text-align: center;
    cursor: pointer;

    padding: 0 0 2px 0;
    box-sizing: border-box;
    width: 42px;
    height: 36px !important;

    vertical-align: middle;
  }

  .CalendarDay__button {
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    width: 42px;
    color: inherit;
    font: inherit;
    display: inline-block;
    outline: none;
  }

  .CalendarDay--blocked,
  .CalendarDay--blocked-calendar,
  .CalendarDay--blocked-out-of-range {
    background: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.textLight};
    cursor: default;

    // Do not react on hovers!
    pointer-events: none;
  }

  .DateInput--startDate--focused .CalendarDay:hover,
  .DateInput--endDate--focused .CalendarDay.CalendarDay--beforeStart:hover,
  .CalendarDay--selected-start {
    border-radius: 4px 0 0 4px;
  }

  .DateInput--endDate--focused .CalendarDay:hover,
  .CalendarDay--selected-end {
    border-radius: 0 4px 4px 0;
  }

  .DateInput--endDate--focused .CalendarDay.CalendarDay--selected-start:hover,
  .CalendarDay.CalendarDay--selected-start.CalendarDay--selected-end {
    border-radius: 4px;
  }

  .DateInput--startDate--focused .CalendarDay,
  .DateInput--endDate--focused .CalendarDay.CalendarDay--beforeStart:hover {
    &:not(.CalendarDay--blocked):hover {
      position: relative;

      ${({ theme }) =>
        cssArrow({
          width: 4,
          heigth: 12,
          color: theme.color.primary,
          fromDirection: 'left',
        })};
    }
  }

  .DateInput--endDate--focused .CalendarDay {
    &:not(.CalendarDay--blocked):not(.CalendarDay--selected-start):hover {
      position: relative;

      ${({ theme }) =>
        cssArrow({
          width: 4,
          heigth: 12,
          color: theme.color.primary,
          fromDirection: 'right',
        })};
    }
  }

  .CalendarDay--selected-span {
    background: ${({ theme }) => theme.color.miscLightest};
    color: ${({ theme }) => theme.color.textDarkest};
  }

  .CalendarDay--selected-start,
  .CalendarDay--selected-end,
  .CalendarDay--selected {
    background: ${({ theme }) => theme.color.misc};
    color: ${({ theme }) => theme.color.background};

    &:active {
      background: ${({ theme }) => theme.color.misc};
    }
  }

  .CalendarDay:not(.CalendarDay--blocked):hover {
    background: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.background};
  }

  // TODO check style guide
  // .CalendarDay--hovered-span,
  // .CalendarDay--after-hovered-start {}

  // Currently we dont use highlighted days
  // .CalendarDay--highlighted-calendar {
  //   &:active {}
  // }

  // Currently we dont use outside days (I dont understand what is it)
  // .CalendarDay--outside {
  //   &:active {}
  // }

  // Currently we dont use "minimum nights"
  // .CalendarDay--blocked-minimum-nights {
  //   &:active {}
  // }
`
