import { css } from 'styled-components'
import cssArrow from '../../../utils/css-arrow'

export default css`
  .CalendarDay {
    background: ${({ theme }) => theme.color.background};

    color: ${({ theme }) => theme.color.textDarkest};
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -.21px;
    text-align: center;
    cursor: pointer;

    padding: 2px 0 0;
    box-sizing: border-box;
    width: 42px;
    height: 36px;

    &:active {
      background: ${({ theme }) => theme.color.background};
    }
  }

  .DateInput--startDate--focused .CalendarDay:hover,
  .CalendarDay--selected-start {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .DateInput--startDate--focused .CalendarDay:not(.CalendarDay--selected-end):hover {
    position: relative;

    ${({ theme }) => cssArrow({
      width: 4,
      heigth: 12,
      color: theme.color.primary,
      fromDirection: 'left',
    })}
  }

  .DateInput--endDate--focused .CalendarDay:hover,
  .CalendarDay--selected-end {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .DateInput--endDate--focused .CalendarDay:not(.CalendarDay--selected-start):hover {
    position: relative;

    ${({ theme }) => cssArrow({
      width: 4,
      heigth: 12,
      color: theme.color.primary,
      fromDirection: 'right',
    })}
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

  .CalendarDay:hover,
  .CalendarDay--hovered {
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
