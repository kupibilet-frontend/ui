import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { text, boolean } from '@kadira/storybook-addon-knobs'
import Journey from './index'

const defaultDescription = {
  CityTo: 'Барселона',
  CityFrom: 'Санкт-Петербург',
  dateTo: '10 июля обратно',
  dateFrom: '09 июля туда',
}

storiesOf('Journey', module)
  .addWithInfo('default', () => {
    const title = text('text', 'Бронирование билета')
    const price = boolean('price', false)
    const CityTo = text('CityTo', defaultDescription.CityTo)
    const CityFrom = text('CityFrom', defaultDescription.CityFrom)
    const dateTo = text('dateTo', defaultDescription.dateTo)
    const dateFrom = text('dateFrom', defaultDescription.dateFrom)

    return (
      <Journey
        price={price}
        title={title}
        CityFrom={CityFrom}
        dateFrom={dateFrom}
        CityTo={CityTo}
        dateTo={dateTo}
      />
    )
  })
