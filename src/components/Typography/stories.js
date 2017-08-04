import React from 'react'
import { storiesOf } from '@storybook/react'
import H1 from './H1'
import H2 from './H2'
import H3 from './H3'
import H4 from './H4'
import H5 from './H5'
import H6 from './H6'
import Text from './Text'
import TextSmall from './TextSmall'
import TextLarge from './TextLarge'
import UppercaseLarge from './UppercaseLarge'
import Uppercase from './Uppercase'
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
  .addWithInfo('TextLarge', () => (
    <TextLarge>
      Пересадка 22ч 20 мин
    </TextLarge>
  ))
  .addWithInfo('Text', () => (
    <Text>
      Пересадка 22ч 20 мин
    </Text>
  ))
  .addWithInfo('TextSmall', () => (
    <TextSmall>
      Пересадка 22ч 20 мин
    </TextSmall>
  ))
  .addWithInfo('UppercaseLarge', () => (
    <UppercaseLarge>
      Пересадка 22ч 20 мин
    </UppercaseLarge>
  ))
  .addWithInfo('Uppercase', () => (
    <Uppercase>
      Пересадка 22ч 20 мин
    </Uppercase>
  ))
  .addWithInfo('Caption', () => (
    <Caption>
      Пересадка 22ч 20 мин
    </Caption>
  ))
