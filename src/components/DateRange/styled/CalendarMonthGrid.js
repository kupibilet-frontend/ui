import { css } from 'styled-components'

const queries = {
  smallPhones: 'screen and (min-width: 330px) and (max-width: 374px)',
  mediumPhones: 'screen and (min-width: 374px) and (max-width: 400px)',
  largePhones: 'screen and (min-width: 400px) and (max-width: 599px)',
}

const media = {
  smallPhones: (...args) => css`
    @media ${queries.smallPhones} {
      ${css(...args)}
    }
  `,
  mediumPhones: (...args) => css`
    @media ${queries.mediumPhones} {
      ${css(...args)}
    }
  `,
  largePhones: (...args) => css`
    @media ${queries.largePhones} {
      ${css(...args)}
    }
  `,
}

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

    ${media.smallPhones`
      zoom: 1.1;
    `}

    ${media.mediumPhones`
      zoom: 1.2;
    `}

    ${media.largePhones`
      zoom: 1.3;
    `}
  }
`
