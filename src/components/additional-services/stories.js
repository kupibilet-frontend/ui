import React from 'react'
import { storiesOf } from '@storybook/react'
import { createStore, compose } from 'redux'
import { Provider, connect } from 'react-redux'

import { text, number, boolean } from '@storybook/addon-knobs'
import AdditionalServices from './index'
import updateKnob from '../../utils/updateKnob'
import reducer, { initialState, addService } from './ducks'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, initialState, composeEnhancers())

const AdditionalServicesWrapper = ({ addServiceAction, ...props }) => (
  <AdditionalServices
    {...props}
    onServiceClick={addServiceAction}
  />
)

const mapDispatchToProps = (dispatch) => ({
  addServiceAction: (service) => dispatch(addService(service)),
})

const AdditionalServicesRedux = connect(null, mapDispatchToProps)(AdditionalServicesWrapper)

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
        <Provider store={store}>
          <AdditionalServicesRedux
            services={services}
          />
        </Provider>
      )
    },
  )
