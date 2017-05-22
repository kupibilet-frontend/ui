import { css } from 'styled-components'
import cssArrow from '../../../utils/css-arrow'

export default css`
  .CalendarDay {
    background: ${({ theme }) => theme.color.background};

    color: ${({ theme }) => theme.color.textDarkest};
    font-size: 16px;
    line-height: 1;
    letter-spacing: -.21px;
    text-align: center;
    cursor: pointer;

    padding: 0 0 2px 0;
    box-sizing: border-box;
    width: 42px;
    height: 36px;

    vertical-align: middle;
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
    &:not(.CalendarDay--blocked):not(.CalendarDay--selected-end):hover {
      position: relative;

      ${({ theme }) => cssArrow({
        width: 4,
        heigth: 12,
        color: theme.color.primary,
        fromDirection: 'left',
      })}
    }
  }

  .DateInput--endDate--focused .CalendarDay {
    &:not(.CalendarDay--blocked):not(.CalendarDay--selected-start):hover {
      position: relative;

      ${({ theme }) => cssArrow({
        width: 4,
        heigth: 12,
        color: theme.color.primary,
        fromDirection: 'right',
      })}
    }
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

  .CalendarDay--selected-span {
    background: ${({ theme }) => theme.color.miscLightest};
    color: ${({ theme }) => theme.color.textDarkest};
  }

  .CalendarDay:not(.CalendarDay--blocked):hover {
    background: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.background};
  }

  .CalendarDay--blocked,
  .CalendarDay--blocked-calendar,
  .CalendarDay--blocked-out-of-range {
    background: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.textLight};
    cursor: default;
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
