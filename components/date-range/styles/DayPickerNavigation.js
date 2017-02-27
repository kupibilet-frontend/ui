import { css } from 'styled-components'

export default css`
  .DayPickerNavigation__prev,
  .DayPickerNavigation__next {
    cursor: pointer;
    line-height: 0.78;
    user-select: none;
  }

  .DayPickerNavigation__prev--default,
  .DayPickerNavigation__next--default {
    background: ${({ theme }) => theme.color.primary};
    border-radius: 50%;
    width: 30px;
    height: 30px;

    &:focus,
    &:hover,
    &:active {
      background-color: ${({ theme }) => theme.color.primary};
    }
  }

  .DayPickerNavigation--horizontal {
    position: relative;

    .DayPickerNavigation__prev,
    .DayPickerNavigation__next {
      padding: 6px 9px;
      top: 18px;
      z-index: 2;
      position: absolute;
    }

    .DayPickerNavigation__prev {
      left: 22px;
    }

    .DayPickerNavigation__next {
      right: 22px;
    }

    .DayPickerNavigation__prev--default,
    .DayPickerNavigation__next--default {
      svg {
        height: 19px;
        width: 19px;
        fill: ${({ theme }) => theme.color.background};
      }
    }
  }

  .DayPickerNavigation--vertical {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 52px;
    width: 100%;
    z-index: 2;

    .DayPickerNavigation__prev,
    .DayPickerNavigation__next {
      display: inline-block;
      position: relative;
      height: 100%;
      width: 50%;
    }

    .DayPickerNavigation__next--default {
      border-left: 0;
    }

    .DayPickerNavigation__prev--default,
    .DayPickerNavigation__next--default {
      text-align: center;
      font-size: 2.5em;
      padding: 5px;

      svg {
        height: 42px;
        width: 42px;
        fill: $react-dates-color-text
      }
    }
  }

  .DayPickerNavigation--vertical-scrollable {
    position: relative;

    .DayPickerNavigation__next {
      width: 100%;
    }
  }
`
