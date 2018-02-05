import { css } from 'styled-components'
import mq from 'utils/media-queries'

const queries = {
  smallPhones: 'screen and (min-width: 321px) and (max-width: 374px)',
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
    `}
  }

  .DateRangePicker__picker--direction-left {
      left: 0;
  }

  .DateRangePicker__picker--direction-right {
      right: 0;
  }

  .DateRangePicker__picker--vertical {
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
