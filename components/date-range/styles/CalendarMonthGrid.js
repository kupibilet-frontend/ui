import { css } from 'styled-components'

import { DAY_PICKER_WIDTH } from './dimensions'

export default css`
  .CalendarMonthGrid {
    background: #fff;
    z-index: 0;
    text-align: left;
  }

  .CalendarMonthGrid--animating {
    transition: transform 0.2s ease-in-out;
    z-index: 1;
  }

  .CalendarMonthGrid--horizontal {
    position: absolute;
    left: 9px;
    width: ${() => 4 * DAY_PICKER_WIDTH}px;
  }

  .CalendarMonthGrid--vertical {
    width: ${() => DAY_PICKER_WIDTH}px;
    margin: 0 auto;
  }

  .CalendarMonthGrid--vertical-scrollable {
    width: ${() => DAY_PICKER_WIDTH}px;
    margin: 0 auto;
    overflow-y: scroll;
  }
`
