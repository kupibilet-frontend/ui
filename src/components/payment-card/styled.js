import styled from 'styled-components'

import {
  getTextColor,
} from './utils'

import visa from './assets/visa.svg'
import mastercard from './assets/mastercard.svg'
import maestro from './assets/maestro.svg'
import electron from './assets/electron.svg'

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
const BORDER_RADIUS = CARD_HEIGHT / 25
const STRIPE_HEIGHT = CARD_HEIGHT / 5
const X_MARGIN = CARD_WIDTH / 10
const Y_MARGIN = CARD_HEIGHT / 11

export const Root = styled.div`
  display: flex;
  & > * {
    background-color: ${({ color }) => color};
    border: 1px solid rgba(0, 0, 0, 0.12);
  }
  color: ${({ color }) => getTextColor(color)};
  width: ${CARD_WIDTH * 1.5}px;
  height: ${CARD_HEIGHT * (23 / 22)}px;
`

export const Card = styled.div`
  min-width: ${CARD_WIDTH}px;
  height: ${CARD_HEIGHT}px;
  border-radius: ${BORDER_RADIUS}px;
`

export const Front = styled(Card)`
  z-index: 1;
`

export const Back = styled(Card)`
  transform: translate3d(${-CARD_WIDTH / 2}px, ${CARD_HEIGHT / 22}px, 0px);
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
  height: ${STRIPE_HEIGHT}px;
`

export const Content = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  margin: ${X_MARGIN}px;
`

export const BackContent = styled.div`
  display: flex;
  margin-right: auto;
  margin: ${Y_MARGIN}px;
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

export const Stripe = styled(Header)`
  background-color: rgba(0, 0, 0, 0.12);
`
