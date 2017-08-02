import React from 'react'
import { storiesOf } from '@storybook/react'
import BlockForm from './index'

const DefalutBlock = () => (
  <div>
    <p style={{ margin: 0 }}>content</p>
  </div>
)

storiesOf('BlockForm', module)
  .addWithInfo('Defalut', () => (
    <BlockForm
      title={'Контактная информация'}
      contents={[<DefalutBlock />]}
    />
  ))
  .addWithInfo('Description', () => (
    <BlockForm
      title={'Пассажиры для брони'}
      description={'Введите личные данные, как указано в документе, по которому вы полетите. Мы автоматически переведем текст на латиницу — не пугайтесь, все нормально'}
      contents={[<DefalutBlock />]}
    />
  ))
  .addWithInfo('Two blocks content', () => (
    <BlockForm
      title={'Пассажиры для брони'}
      description={'Введите личные данные, как указано в документе, по которому вы полетите. Мы автоматически переведем текст на латиницу — не пугайтесь, все нормально'}
      contents={[<DefalutBlock />, <DefalutBlock />]}
    />
  ))
