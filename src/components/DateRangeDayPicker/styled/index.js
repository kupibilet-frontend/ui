import styled, { css } from 'styled-components'
import mq from 'utils/media-queries'
import DayPicker from '@kupibilet/react-day-picker'
import { Header, CloseButton, StyledIcon } from 'components/Modal/styled'
import { Container, Input } from 'components/AirportInput/styled'
import ReactDayPickerStyles from './react-day-style'


export const StyledDateRange = css`
  ${ReactDayPickerStyles};
  ${'' /* margin-bottom: 9px;
  white-space: nowrap;
  width: 100%; */}

  & .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }

  & .DayPicker-Day {
    border-radius: 0 !important;
  }

  & .DayPicker-Day--start {
   border-top-left-radius: 50% !important;
   border-bottom-left-radius: 50% !important;
  }

  & .DayPicker-Day--end {
   border-top-right-radius: 50% !important;
   border-bottom-right-radius: 50% !important;
  }
`

export const DateContainer = styled(Container)`
  width: 50%;
`

export const ReactPickerDateRange = styled(DayPicker)`
  ${StyledDateRange};
  display: flex;
  max-height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  /* hack for scrolled padding */
  margin: 0 -18px 12px -18px;
  padding: 0 18px;
  outline: none;
`

export const DateInput = Input.withComponent('div')

export const DateInputWrap = styled.div`
  background: ${({ theme }) => theme.color.background};
  display: flex;
  padding-bottom: 12px;
  z-index: 2;

  ${(props) => (props.inModal && `
    margin-top: 60px;
    padding: 0 18px;
    position: fixed;
    width: 100%;
  `)}
`

export const WeekdaysWrapper = styled.div`
  background: ${({ theme }) => theme.color.background};
  border-bottom: 1px solid ${({ theme }) => theme.color.miscLighter};
  display: flex;
  margin: 102px 0 0 -18px;
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
  width: 14.3%;
`

export const FakeInputPlaceholder = styled.span`
  color: ${({ theme }) => theme.color.miscDark};
  font-weight: 400;

  &:disabled {
    color: ${({ theme }) => theme.color.misc};
  }
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

export const StyledCloseButton = styled(CloseButton)`
  ${mq.mobile`
    position: fixed;
  `}
`

export const PortalWrap = styled.div`
  left: 0;
  position: absolute;
  top: 0;
  z-index: 10;
`

export const ButtonWrap = styled.div`
  background: ${({ theme }) => theme.color.background};
  border-bottom: 1px solid ${({ theme }) => theme.color.miscLighter};
  display: flex;
  justify-content: center;
  position: fixed;
  padding: 12px 0;
  top: 149px;
  width: 100%;
  z-index: 3;
`
