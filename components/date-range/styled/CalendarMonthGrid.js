import { css } from 'styled-components'

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
    width: ${({ dimensions }) => 4 * dimensions.dayPickerWidth}px;
  }

  .CalendarMonthGrid--vertical {
    width: ${({ dimensions }) => dimensions.dayPickerWidth}px;
    margin: 0 auto;
  }

  .CalendarMonthGrid--vertical-scrollable {
    width: ${({ dimensions }) => dimensions.dayPickerWidth}px;
    margin: 0 auto;
    overflow-y: scroll;
  }
`
