import { css } from 'styled-components'

export default css`
  .DateRangePickerInput {
    display: block;
  }

  // We don't use disabled state
  // .DateRangePickerInput--disabled {}

  .DateRangePickerInput__arrow {
    display: none;
  }

  .DateRangePickerInput__arrow svg {
    vertical-align: middle;
    fill: ${({ theme }) => theme.color.primary};
    height: 24px;
    width: 24px;
  }

  // We don't use 'clear' bitton
  // .DateRangePickerInput__clear-dates {
  //   svg {}
  // }
  //
  // .DateRangePickerInput__clear-dates--hide {}
  //
  // .DateRangePickerInput__clear-dates:focus,
  // .DateRangePickerInput__clear-dates--hover {}

  // We don't use calendar icons
  // .DateRangePickerInput__calendar-icon {
  //   svg {}
  // }
`
