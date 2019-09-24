import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import H3 from 'components/Typography/H2'
import { SingleFluidSection } from 'components/FluidLayout'
import ReviewBubble from 'components/ReviewBubble'
import mq from 'utils/media-queries'
import createE2EId from 'utils/createE2EId'

const TEXTS = [
  {
    text: 'Пишите код, исходя из того, что все программисты, которые будут сопровождать вашу программу, — склонные к насилию психопаты, знающие, где вы живёте',
    name: 'Мартин Голдинг',
  },
  {
    text: 'Здесь будет ваша реклама',
    name: 'Тест Тестов',
    createdAt: '2014-09-08T08:02:17-05:00',
  },
  {
    text: 'А тут пусто',
  },
]

const Title = styled(H3)`
  margin: 0 auto 9px;
  text-align: center;
  max-width: 425px;
  ${mq.mobile`
    margin-bottom: 12px;
  `}
`

const StyledSingleFluidSection = styled(SingleFluidSection)`
  padding-top: 60px;
`

storiesOf('COMPONENTS|Controls/ReviewBubble', module)
  .add('Default', () => (
    <StyledSingleFluidSection>
      <Title>
        Отзывы
      </Title>
      <ReviewBubble name="Купибилет" reply {...createE2EId('test')}>
        Спасибо, мы получили ваш отзыв! Он появится после проверки модератором.
      </ReviewBubble>
      { Object.entries(TEXTS).map(([key, value]) => (
        <ReviewBubble key={key} index={key} {...value} />
      ))}
    </StyledSingleFluidSection>
  ))
