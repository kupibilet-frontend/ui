import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { text, boolean } from '@kadira/storybook-addon-knobs'
import Journey from './index'

const defaultDescription = {
  CityTo: 'Санкт-Петербург',
  CityFrom: 'Барселона',
  dateTo: '09 июля туда',
  dateFrom: '10 июля обратно',
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
        CityTo={CityTo}
        CityFrom={CityFrom}
        dateTo={dateTo}
        dateFrom={dateFrom}
      />
    )
  })
