import { css } from 'styled-components'

export default css`
  .DateRangePicker {
    position: relative;
    display: inline-block;
  }

  .DateRangePicker__picker {
    z-index: 10;
    background: ${({ theme }) => theme.color.background};
    position: absolute;
    top: 45px;
  }

  .DateRangePicker__picker--direction-left {
      left: 0;
  }

  .DateRangePicker__picker--direction-right {
      right: 0;
  }

  // TODO drop portal picker
  // .DateRangePicker__picker--portal {}
  //
  // .DateRangePicker__picker--full-screen-portal {
  //   background-color: ${({ theme }) => theme.color.background};
  // }
  //
  // .DateRangePicker__close {
  //   svg {}
  //
  //   &:hover,
  //   &:focus {}
  // }
`
