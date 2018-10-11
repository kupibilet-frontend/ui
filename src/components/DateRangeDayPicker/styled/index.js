import styled, { css } from 'styled-components'
import DayPicker from '@kupibilet/react-day-picker'
import defaultStyles from '@kupibilet/react-day-picker/lib/style.css'
import mq from 'utils/media-queries'
import TextSmall from 'components/Typography/TextSmall'
import { Header, CloseButton } from 'components/Modal/styled'
import { Container, Input } from 'components/AirportInput/styled'
import Modal from 'components/Modal'
import notMobileReactDayStyles from './not-mobile-react-day-styles'
import mobileReactDayStyles from './mobile-react-day-styles'

const reactDayStyles = css`
  ${mq.desktop`
    ${defaultStyles};
    ${notMobileReactDayStyles};
  `}
  ${mq.tablet`
    ${defaultStyles};
    ${notMobileReactDayStyles};
  `}
  ${mq.mobile`
    ${mobileReactDayStyles};
  `}

  * {
    outline: none;
  }
  /* Example modifiers */

  .DayPicker-Day--sunday {
    background-color: #f7f8f8;
  }

  .DayPicker-Day--sunday:not(.DayPicker-Day--today) {
    color: #dce0e0;
  }

  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
    position: relative;
    color: #f0f8ff;
    background: ${({ theme }) => theme.color.primary};
    border-radius: 4px 0 0 4px !important;
    &:hover{
      background: ${({ theme }) => theme.color.primary};
    }
  }

  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside).DayPicker-Day--end {
    border-radius: 0px 4px 4px 0px !important;
  }

  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside).DayPicker-Day--end.DayPicker-Day--start {
    border-radius: 4px !important;
  }

  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside).DayPicker-Day--end.DayPicker-Day--start::after {
    display: none;
  }

  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside).DayPicker-Day--start::after {
    left: 100%;
    top: 50%;
    height: 0;
    width: 0;
    position: absolute;
    border: solid 4px transparent;
    content: " ";
    pointer-events: none;
    border-left-color: #38afff;
    border-left-width: 4px;
    margin-top: -4px;
    z-index: 1;
  }

  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside).DayPicker-Day--end::after {
    left: auto;
    right: 100%;
    top: 50%;
    height: 0;
    width: 0;
    position: absolute;
    border: solid 4px transparent;
    content: " ";
    pointer-events: none;
    border-right-color: #38afff;
    border-right-width: 4px;
    margin-top: -4px;
  }
  .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: ${({ theme }) => theme.color.textDarkest};
    border-radius: 0px !important;
  }

  .DayPicker-Day {
    border-radius: 0 !important;
  }

  .DayPicker-Day--start {
   border-top-left-radius: 50% !important;
   border-bottom-left-radius: 50% !important;
  }

  .DayPicker-Day--end {
   border-top-right-radius: 50% !important;
   border-bottom-right-radius: 50% !important;
  }
  .DayPicker-Day--today {
    color: inherit;
    font-weight: inherit;
  }
`

export const StyledDayPicker = styled(DayPicker)`
  ${reactDayStyles};
  ${mq.mobile`
    display: flex;
    max-height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;

    // hack for scrolled padding
    margin: 0 -18px 12px -18px;
    padding: 0 18px;
    outline: none;
  `}
`

export const DateContainer = styled(Container)`
  width: 50%;
`

export const DateInput = Input.withComponent('div')

export const FakeInputPlaceholder = styled.span`
  color: ${({ theme }) => theme.color.miscDark};
  font-weight: 400;

  &:disabled {
    color: ${({ theme }) => theme.color.misc};
  }
`

export const DateInputWrap = styled.div`
  display: flex;
  padding-bottom: 12px;
  z-index: 2;
  position: relative;

  ${({ inModal, theme }) => (inModal && `
    margin-top: 60px;
    padding: 0 18px;
    position: fixed;
    width: 100%;
    background: ${theme.color.background};
  `)}
`

export const DayPickerWrapper = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  ${mq.mobile`
    top: 0;
  `}
`

export const Navbar = styled.div`
  padding: 1em 1em 0;
  position: relative;
`

export const NavbarInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mq.handheld`
    flex-direction: column;
  `}
`

export const NavbarButtons = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 7em;
  left: 0;
  width: 100%;
  padding: 0 1em;
  z-index: 2;
  ${mq.handheld`
    top: 9em;
  `}
`

export const ExtraText = styled(TextSmall)`
  color: ${({ theme }) => theme.color.text};
  padding-left: 0.8em;
  ${mq.handheld`
    padding-left: 0;
    margin-bottom: 1em;
  `}
`


export const StyledHeader = styled(Header)`
  background: ${({ theme }) => theme.color.background};
  min-height: 0;
  position: fixed;
  width: 100%;
  z-index: 2;

  ${mq.mobile`
    padding-left: 18px;
    padding-right: 18px;
  `}
`

export const WeekdaysWrapper = styled.div`
  background: ${({ theme }) => theme.color.background};
  border-bottom: 1px solid ${({ theme }) => theme.color.miscLighter};
  display: flex;
  justify-content: center;
  margin: 155px 0 0 -18px;
  padding: 12px 36px 0;
  position: fixed;
  width: calc(100% + 36px);
  z-index: 2;
`

export const Weekday = styled.div`
  padding: 0.5rem 0;
  text-align: center;
  color: ${({ theme }) => theme.color.textLight};
  min-width: 42px;
  max-width: 52px;
  width: 14.3%;
`

export const StyledModal = styled(Modal)`
  height: 100%;
  outline: none;
  position: relative;

  ${(props) => (props.isFixed && `
    height: 100%;
    padding-top: 60px;
    position: fixed;
    width: calc(100% - 36px);
  `)}
`
export const PortalWrapper = styled.div`
  left: 0;
  position: absolute;
  top: 0;
  z-index: 10;
`

export const StyledCloseButton = styled(CloseButton)`
  ${mq.mobile`
    position: fixed;
  `}
`

export const ButtonWrapper = styled.div`
  background: ${({ theme }) => theme.color.background};
  display: flex;
  justify-content: center;
  position: fixed;
  padding: 24px 0 0;
  top: 102px;
  width: 100%;
  z-index: 3;
`
