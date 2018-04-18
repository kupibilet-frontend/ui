import { css } from 'styled-components'

export default css`
  .CalendarMonth {
    text-align: center;
    padding: 0 13px;
    vertical-align: top;

    &:first-of-type {
      position: absolute;
      z-index: -1;
      opacity: 0;
      pointer-events: none;
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
      caption: {
        caption-side: initial;
      }
    }

    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .CalendarMonth--horizontal {
    display: inline-block;
    min-height: 100%;
  }

  .CalendarMonth--vertical {
    display: block;
  }

  .CalendarMonth__caption {
    color: ${({ theme }) => theme.color.textDarkest};
    letter-spacing: -0.21px;
    text-align: center;
    text-transform: capitalize;

    margin: 0;
    padding: 22px 0 54px;

    // necessary to not hide borders in FF
    // margin-bottom: 2px;
    caption-side: initial;

    strong {
      font-size: 16px;
      font-weight: 600;
      font-family: inherit;
    }
  }

  .CalendarMonth--vertical-scrollable .CalendarMonth__caption {
    padding: 5px 0;
  }
`
