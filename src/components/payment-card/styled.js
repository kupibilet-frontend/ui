import styled from 'styled-components'

import { borderExtraLarge } from '../../utils/borders'

import {
  getTextColor,
} from './utils'

import visa from './assets/visa.svg'
import mastercard from './assets/mastercard.svg'
import maestro from './assets/maestro.svg'
import electron from './assets/electron.svg'

import kbLock from './assets/kb_lock.svg'

const PAYMENT_SYSTEM_LOGOS = {
  visa,
  mastercard,
  maestro,
  electron,
}

function getPaymentSystemLogo(system: string) {
  const url = PAYMENT_SYSTEM_LOGOS[system]
  return url ? `url('${url}')` : null
}

const CARD_HEIGHT = 264 // 5398
const CARD_WIDTH = 420 // 8560
const STRIPE_HEIGHT = CARD_HEIGHT / 5
const X_MARGIN = CARD_WIDTH / 10
const Y_MARGIN = CARD_HEIGHT / 11

export const Root = styled.div`
  display: flex;
  color: ${({ color }) => getTextColor(color)};
  ${({ noBack }) => !noBack && `
    width: ${CARD_WIDTH * 1.5}px;
    height: ${CARD_HEIGHT * (23 / 22)}px;
  `};
`

export const Card = styled.div`
  background-color: ${({ color }) => color};
  border: 1px solid rgba(0, 0, 0, 0.12);
  min-width: ${CARD_WIDTH}px;
  height: ${CARD_HEIGHT}px;
  ${borderExtraLarge};
`

export const Front = styled(Card)`
  position: relative;
  z-index: 1;
`

export const Back = styled(Card)`
  position: relative;
  z-index: 0;
  margin-left: ${-CARD_WIDTH / 2}px;
  margin-top: ${CARD_HEIGHT / 22}px;
  &::before {
    display: block;
    background-color: rgba(0, 0, 0, 0.12);
    content: '';
    margin-top: ${Y_MARGIN}px;
    width: 100%;
    height: ${STRIPE_HEIGHT}px;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5%;
  height: ${STRIPE_HEIGHT}px;
`

export const Content = styled.div`
  margin-left: 10%;
  margin-right: 10%;
`

export const BackContent = styled.div`
  display: flex;
  margin-right: auto;
  margin-left: ${X_MARGIN}px;
  margin-right: ${X_MARGIN}px;
  margin-top: ${Y_MARGIN}px;
  margin-bottom: ${Y_MARGIN};
  flex-direction: column;
  align-items: flex-end;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin-top: 20px;
`

export const FrontFooter = styled.div`
  display: flex;
  justify-content: space-between;
`

export const PaymentSystemLogo = styled.div`
  width: 72px;
  height: 42px;
  background-repeat: no-repeat;
  ${({ paymentSystem }) => {
    const logo = getPaymentSystemLogo(paymentSystem)
    return logo && `
      background-color: #fff;
      background-image: ${logo};
    `
  }};
`

export const BankName = styled.div`
  font-size: 20px;
  font-weight: 600;
`

export const SafePayment = styled.div`
  display: flex;
  align-items: center;
  font-size: 11px;
`

export const SafePaymentText = styled.div`
  width: 60px;
  line-height: 1.5;
`

export const Lock = styled.div`
  width: 50px;
  height: 50px;
  background-repeat: no-repeat;
  background-image: url('${kbLock}');
  transform: scale(0.75);
  filter: brightness(2);
  opacity: 0.8;
`
