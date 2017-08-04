import React from 'react'
import { storiesOf } from '@storybook/react'
import H1 from './H1/H1'
import H2 from './H2/H2'
import H3 from './H3/H3'
import H4 from './H4/H4'
import H5 from './H5/H5'
import H6 from './H6/H6'
import Text16 from './Text16'
import Text14 from './Text14'
import Uppercase20 from './Uppercase20'
import Uppercase16 from './Uppercase16'
import Caption from './Caption'

storiesOf('Typography', module)
  .addWithInfo('H1', () => (
    <H1>
      Пересадка 22ч 20 мин
    </H1>
  ))
  .addWithInfo('H2', () => (
    <H2>
      Пересадка 22ч 20 мин
    </H2>
  ))
  .addWithInfo('H3', () => (
    <H3>
      Пересадка 22ч 20 мин
    </H3>
  ))
  .addWithInfo('H4', () => (
    <H4>
      Пересадка 22ч 20 мин
    </H4>
  ))
  .addWithInfo('H5', () => (
    <H5>
      Пересадка 22ч 20 мин
    </H5>
  ))
  .addWithInfo('H6', () => (
    <H6>
      Пересадка 22ч 20 мин
    </H6>
  ))
  .addWithInfo('Text16', () => (
    <Text16>
      Пересадка 22ч 20 мин
    </Text16>
  ))
  .addWithInfo('Text14', () => (
    <Text14>
      Пересадка 22ч 20 мин
    </Text14>
  ))
  .addWithInfo('Uppercase20', () => (
    <Uppercase20>
      Пересадка 22ч 20 мин
    </Uppercase20>
  ))
  .addWithInfo('Uppercase16', () => (
    <Uppercase16>
      Пересадка 22ч 20 мин
    </Uppercase16>
  ))
  .addWithInfo('Caption', () => (
    <Caption>
      Пересадка 22ч 20 мин
    </Caption>
  ))
