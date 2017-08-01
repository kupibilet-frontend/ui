import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { createStore, compose, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import { reducer, reduxForm, Field } from 'redux-form'

import { text, number, boolean } from '@storybook/addon-knobs'
import AdditionalServices from './index'
import updateKnob from '../../utils/updateKnob'
import globalReducer, { initialState, addService } from './ducks'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducers = combineReducers({
  form: reducer.plugin({
    ...globalReducer,
  }),
})

const store = createStore(reducers, initialState, composeEnhancers())

const Wrapper = ({ input, ...props }) => (
  <AdditionalServices
    {...props}
    {...input}
    onServiceClick={input.onChange}
  />
)

class Form extends PureComponent {
  render() {
    const { props } = this
    return (
      <form>
        <Field
          name="foobar"
          component={Wrapper}
          {...props}
        />
      </form>
    )
  }
}

const ReduxForm = reduxForm({
  form: 'booking',
  destroyOnUnmount: false,
})(Form)

const mapDispatchToProps = (dispatch) => ({
  // addServiceAction: (service) => dispatch(addService(service)),
})

const AdditionalServicesRedux = connect(null, mapDispatchToProps)(ReduxForm)

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
  })
