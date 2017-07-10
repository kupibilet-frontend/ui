import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number, boolean } from '@storybook/addon-knobs'
import AdditionalServices from './index'
import updateKnob from '../../utils/updateKnob'

const defaults = {
  title: 'Взрослые',
  description: 'До 2 лет, без места',
  current: 1,
  isMax: false,
  isMin: true,
}

const services = [
  {
    name: 'Доступ к заказу через личный кабинет',
    price: 0,
  },
  {
    name: 'Справка о стоимости билета',
    price: 0,
  },
  {
    name: 'Трэвел-страхование',
  },
  {
    name: 'Возврат 90% при отказе от поездки',
    price: 716,
  },
]

storiesOf('AdditionalServices', module)
  .addWithInfo('default', () => {

      return (
        <AdditionalServices
          services={services}
        />
      )
    },
  )
