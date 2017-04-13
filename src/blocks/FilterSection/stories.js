import React from 'react'
import { storiesOf } from '@kadira/storybook'
import FilterBox from './index'
import Checkbox from '../checkbox'

const collapseItems = [
  {
    title: 'Пересадки',
    key: 'transfers',
    content: (
      <div>
        <div><Checkbox>Без ночных пересадок</Checkbox></div>
        <div><Checkbox>Без смены аэропорта</Checkbox></div>
        <div><Checkbox>Без транзитной визы</Checkbox></div>
      </div>
    ),
  },
]

storiesOf('FilterSection', module)
  .addWithInfo('Default', () => (
    <div style={{ width: 252 }}>
      <FilterBox
        headerLeft={<div>Пересадки</div>}
        headerRight={<div>Сбросить</div>}
        content={
          <div>
            <div><Checkbox>Без пересадок</Checkbox></div>
            <div><Checkbox>1 пересадка</Checkbox></div>
            <div><Checkbox>2 и более</Checkbox></div>
          </div>
        }
        collapseItems={collapseItems}
      />
    </div>
  ))
