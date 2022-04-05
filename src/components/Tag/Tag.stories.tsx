import React from 'react'
import { Story } from '@storybook/react'
import { Tag, IProps, TVariant } from 'components/Tag'
import { ICON_SIZES } from 'components/Icon/consts'
import Icon from 'components/Icon'


const DEFAULT_PROPS = {
  message: <span>AviaCompany</span>,
  variant: 'warning' as TVariant,
}

const TagTemplate = (args: IProps): JSX.Element => {
  return (
    <Tag {...args} />
  )
}

const Primary: Story<IProps> = TagTemplate.bind({})

Primary.args = {
  ...DEFAULT_PROPS,
}

Primary.parameters = {
  variant: {
    values: ['warning', 'normal', 'success', 'danger', 'info', 'primary'],
  },
}


const WithIcon: Story<IProps> = TagTemplate.bind({})

WithIcon.args = {
  ...DEFAULT_PROPS,
  icon: <Icon name="apple" size={ICON_SIZES.xxsmall} />,
}


export {
  Primary,
  WithIcon,
}

export default {
  component: Tag,
  title: 'Tag',
}
