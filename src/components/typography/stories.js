import React from 'react'
import { storiesOf } from '@kadira/storybook'
import H1 from './H1'
import H2 from './H2'
import H3 from './H3'
import H4 from './H4'
import H5 from './H5'
import Text from './Text'

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
  .addWithInfo('H4 uppercase', () => (
    <H4 uppercase>
      Пересадка 22ч 20 мин
    </H4>
  ))
  .addWithInfo('H5', () => (
    <H5>
      Пересадка 22ч 20 мин
    </H5>
  ))
  .addWithInfo('Text', () => (
    <Text>
      Пересадка 22ч 20 мин
    </Text>
  ))
  .addWithInfo('Text uppercase', () => (
    <Text uppercase>
      Пересадка 22ч 20 мин
    </Text>
  ))
