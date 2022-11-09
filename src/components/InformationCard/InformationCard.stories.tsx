import React from 'react'
import { Story } from '@storybook/react'
import { InformationCard } from 'components/InformationCard'
import Icon from 'components/Icon'
import Button from 'components/Button'
import { TInformationCardProps } from './types'

const InformationCardStory = (args: TInformationCardProps): JSX.Element => {
  return (
    <InformationCard
      {...args}
    />
  )
}

const DEFAULT_PROPS: Partial<TInformationCardProps> = {
  title: 'В документах не отражены изменения в заказе',
  description: 'Примите изменения, для отображения изменений',
  severity: 'info',
  layoutTheme: 'default',
}


export const DefaultInformationCard: Story<TInformationCardProps> = InformationCardStory.bind({})
DefaultInformationCard.args = DEFAULT_PROPS


export const InformationCardIcon: Story<TInformationCardProps> = InformationCardStory.bind({})
InformationCardIcon.args = {
  ...DEFAULT_PROPS,
  layoutTheme: 'button_icon',
  action: <Icon name="exclamation-circle" />,
}

export const InformationCardButton: Story<TInformationCardProps> = InformationCardStory.bind({})
InformationCardButton.args = {
  ...DEFAULT_PROPS,
  layoutTheme: 'button_default',
  action: <Button variant="link" size="small">Подробнее</Button>,
}

export default {
  title: 'InformationCard',
  component: InformationCard,
}
