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
  getPaymentSystem,
  convertColor,
} from './utils'

type Props = {
  value: number | undefined,
}

class PaymentCard extends PureComponent<Props> {
  state = {}

  render() {
    const { props, state } = this
    const value = props.value || state.value
    const bank = banksDb(value)
    const bankName = !bank.code
      ? ''
      : bank.country === 'ru'
      ? bank.localTitle
      : bank.engTitle

    const color = convertColor(bank.color)
    return (
      <Root color={color}>
        <Front>
          <Content>
            <Header>
              <PaymentSystemLogo paymentSystem={getPaymentSystem(value)} />
              <BankName>
                {bankName}
              </BankName>
            </Header>
            <Label>
              Номер карты
              <div>
                {value}
              </div>
            </Label>
            <FrontFooter>
              <Label>
                Владелец (как на карте)
                <div>
                  FOO BAR
                </div>
              </Label>
              <Label>
                Срок действия
                <div>
                  18/11
                </div>
              </Label>
            </FrontFooter>
          </Content>
        </Front>
        <Back>
          <Stripe color={color} />
          <BackContent>
            <div>
              Безопасная оплата
            </div>
            <Label>
              CVC/CVV-код
              <div>
                123
              </div>
            </Label>
          </BackContent>
        </Back>
      </Root>
    )
  }
}

export default PaymentCard
