import { css } from 'styled-components'

export default css`
  .DayPickerNavigation__prev,
  .DayPickerNavigation__next {
    cursor: pointer;
    user-select: none;
    text-align: center;
    width: 30px;
    height: 30px;
    line-height: 30px;
  }

  .DayPickerNavigation__prev--disabled,
  .DayPickerNavigation__next--disabled {
    cursor: default;
    opacity: .2;
    pointer-events: none;
  }

  .DayPickerNavigation__prev--default,
  .DayPickerNavigation__next--default {}

  .DayPickerNavigation--horizontal {
    position: relative;

    .DayPickerNavigation__prev,
    .DayPickerNavigation__next {
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
  }

  .DayPickerNavigation--vertical {
    background: ${({ theme }) => theme.color.background};
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 42px;
    width: 100%;
    z-index: 2;

    .DayPickerNavigation__prev,
    .DayPickerNavigation__next {
      display: inline-block;
      position: relative;
      height: 100%;
      width: 50%;
    }

    .DayPickerNavigation__prev,
    .DayPickerNavigation__next {
      align-items: center;
      border-radius: 0;
      justify-content: center;
      height: 42px;
      display: flex;
      margin-top: 12px;
      text-align: center;
    }

    .DayPickerNavigation__prev:hover,
    .DayPickerNavigation__next:hover {
      box-shadow: none;
    }

    .DayPickerNavigation__prev {
      border-right: 1px solid ${({ theme }) => theme.color.background};
    }

    .DayPickerNavigation__prev svg {
      transform: rotate(-90deg);
    }

    .DayPickerNavigation__next svg {
      transform: rotate(90deg);
    }

    .DayPickerNavigation__next--default {
      border-left: 0;
    }
  }

  .DayPickerNavigation--vertical-scrollable {
    position: relative;

    .DayPickerNavigation__next {
      width: 100%;
    }
  }
`
