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
  },
  {
    name: 'Информирование о заказе по электронной почте',
  },
  {
    name: 'SMS об отмене и переносе рейса',
  },
  {
    name: 'Трэвел-страхование',
    price: 100500,
  },
  {
    name: 'Возврат 90% при отказе от поездки',
    price: 716,
  },
  {
    name: 'Онлайн-регистрация на рейс',
    price: 360,
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
