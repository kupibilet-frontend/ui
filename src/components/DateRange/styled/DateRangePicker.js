import { css } from 'styled-components'
import mq from 'utils/media-queries'

export default css`
  .DateRangePicker {
    position: relative;
    display: block;
  }

  .DateRangePicker__picker {
    z-index: 10;
    position: absolute;
    margin-top: 3px;
    top: 42px;

    ${mq.mobile`
      top: initial;
      // Override style attr values added by DateRange controller
      left: -20px !important;
      right: -20px !important;
      display: flex;
      justify-content: center;
    `};
  }

  .DateRangePicker__picker--direction-left {
    left: 0;
  }

  .DateRangePicker__picker--direction-right {
    right: 0;
  }
`
