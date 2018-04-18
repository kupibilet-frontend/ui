/* eslint-disable no-confusing-arrow */

import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import FilterSection from 'blocks/FilterSection'
import Checkbox from 'components/Checkbox'

const CheckboxWithBorder = styled(Checkbox)`
  position: relative;

  &:before {
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -19px;
    content: '';
    width: 2px;
    background: red;
  }
`

const WithBorder = styled.div`
  position: relative;

  &:before {
    display: block;
    position: absolute;
    top: -5px;
    bottom: -5px;
    left: -18px;
    content: '';
    width: 2px;
    background: ${props => (props.isActive ? 'transparent' : 'red')};
  }
`

storiesOf('Blocks', module).addWithInfo('FilterSection', () => (
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
          <FilterSection.Panel
            title={<WithBorder>Пересадки</WithBorder>}
            key="transfers"
          >
            <div>
              <CheckboxWithBorder checked>
                Без ночных пересадок
              </CheckboxWithBorder>
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
