import { css } from 'styled-components'
import { borderRadiusSmall } from 'utils/borderRadius'

export default css`
  .DayPicker {
    background: ${({ theme }) => theme.color.background};
    position: relative;
    text-align: left;
  }

  .DayPicker--horizontal {
    box-shadow: 0 3px 7px 0 ${({ theme }) => theme.color.miscDarkest};
    ${borderRadiusSmall.all};
  }

  // .DayPicker--vertical.DayPicker--portal {}

  .DayPicker__week-headers {
    position: relative;
  }

  .DayPicker--horizontal .DayPicker__week-headers {
    margin-left: 9px;
  }

  .DayPicker__focus-region {
    outline: none;
  }

  .DayPicker__week-header {
    color: ${({ theme }) => theme.color.textLight};
    position: absolute;
    width: ${({ dimensions }) => dimensions.dayPickerWidth}px;
    top: 60px;
    z-index: 2;
    padding: 0 13px;
    text-align: left;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    li {
      display: inline-block;
      width: 42px;
      height: 36px;
      padding-top: 2px;

      font-size: 16px;
      line-height: 20px;
      letter-spacing: -0.21px;
      text-align: center;
    }
  }

  .DayPicker--vertical .DayPicker__week-header {
    margin-left: ${({ dimensions }) => -1 * dimensions.dayPickerWidth / 2}px;
    left: 50%;
  }

  .DayPicker--vertical-scrollable {
    height: 100%;

    .DayPicker__week-header {
      top: 0;
      display: table-row;
      background: white;
    }

    .transition-container--vertical {
      padding-top: 20px;
      height: 100%;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      overflow-y: scroll;
    }

    .DayPicker__week-header {
      margin-left: 0;
      left: 0;
      width: 100%;
      text-align: center;
    }
  }

  .transition-container {
    position: relative;
    overflow: hidden;
    ${borderRadiusSmall.all};
  }

  .transition-container--horizontal {
    transition: height 0.2s ease-in-out;
  }

  .transition-container--vertical {
    width: 100%;
  }
`
