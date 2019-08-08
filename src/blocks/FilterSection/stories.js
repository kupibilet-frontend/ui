/* eslint-disable no-confusing-arrow */

import React from 'react'
import { storiesOf } from '@storybook/react'
import FilterSection from 'blocks/FilterSection'
import Checkbox from 'components/Checkbox'

storiesOf('BLOCKS|FilterSection', module)
  .add('Defaultw', () => (
    <div style={{ width: 252 }}>
      <FilterSection
        headerLeft={<div>Пересадки</div>}
        headerRight={<div>Сбросить</div>}
        content={
          <div>
            <div>
              <Checkbox>Без пересадок</Checkbox>
            </div>
            <div>
              <Checkbox>1 пересадка</Checkbox>
            </div>
            <div>
              <Checkbox>2 и более</Checkbox>
            </div>
          </div>
        }
        collapse={
          <FilterSection.Collapse accordion>
            <FilterSection.Panel title="Пересадки" key="transfers">
              <div>
                <Checkbox checked>Без ночных пересадок</Checkbox>
              </div>
              <div>
                <Checkbox>Без смены аэропорта</Checkbox>
              </div>
              <div>
                <Checkbox>Без транзитной визы</Checkbox>
              </div>
            </FilterSection.Panel>
          </FilterSection.Collapse>
        }
      />
    </div>
  ))
