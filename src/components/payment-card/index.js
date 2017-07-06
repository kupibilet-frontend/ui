// @flow
import React, { PureComponent } from 'react'
import banksDb from 'banks-db'

import {
  Root,
  Front,
  Back,
  Content,
  BackContent,
  Label,
  Header,
  FrontFooter,
  Stripe,
  PaymentSystemLogo,
  BankName,
} from './styled'

import {
  convertCardColor,
  dateToString,
} from './utils'

type Props = {
  value: number | undefined,
  owner: string,
  expiryDate: Date,
}

class PaymentCard extends PureComponent<Props> {
  state = {}

  render() {
    const { props, state } = this
    const owner = (props.owner || state.owner).toUpperCase()
    const expiryDate = dateToString(props.expiryDate || state.expiryDate)
    const value = props.value || state.value

    const bank = banksDb(value)
    const bankName = !bank.code
      ? 'Банковская карта'
      : bank.country === 'ru'
      ? bank.localTitle
      : bank.engTitle

    const color = bank.color ? convertCardColor(bank.color) : '#f0f5fa'
    return (
      <Root color={color}>
        <Front>
          <Content>
            <Header>
              <PaymentSystemLogo paymentSystem={bank.type} />
              <BankName>
                {bankName}
              </BankName>
            </Header>
            <Label>
              Номер карты
              <input type="number" value={value} />
            </Label>
            <FrontFooter>
              <Label>
                Владелец (как на карте)
                <input type="text" value={owner} />
              </Label>
              <Label>
                Срок действия
                <input type="date" value={expiryDate} />
              </Label>
            </FrontFooter>
          </Content>
        </Front>
        <Back>
          <Stripe />
          <BackContent>
            <div>
              Безопасная оплата
            </div>
            <Label>
              CVC/CVV-код
              <input type="number" value={123} />
            </Label>
          </BackContent>
        </Back>
      </Root>
    )
  }
}

export default PaymentCard
