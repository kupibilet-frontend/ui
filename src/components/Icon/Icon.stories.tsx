import React from 'react'
import styled from 'styled-components'
import icons from '@kupibilet/icons/dist/sprite.json'
import { Story } from '@storybook/react'
import { colorsLight } from 'components/ThemeProvider/colors'
import Icon, { TIconProps } from './index'
import { ICON_SIZES } from './consts'

const AllIconsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  margin: 12px 6px;
`

const Template = (args: TIconProps): JSX.Element => <Icon {...args} />

const Default: Story<TIconProps> = Template.bind({})
Default.args = {
  name: 'checkmark',
  size: ICON_SIZES.large,
  fill: 'primary400',
  striked: false,
  paid: false,
  rotate: false,
  inheritColor: false,
}

export { Default }

export const AllIcons = (): JSX.Element => {
  return (
    <AllIconsWrapper>
      {icons.map((icon, index) => (
        <IconWrapper
          /* eslint-disable-next-line react/no-array-index-key */
          key={index}
        >
          <Icon
            name={icon}
            size={ICON_SIZES.large}
            fill="primary400"
            striked={false}
            paid={false}
            rotate={false}
            inheritColor={false}
          />

          {icon}
        </IconWrapper>
      ))}
    </AllIconsWrapper>
  )
}

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {
    size: {
      options: ICON_SIZES,
      control: 'select',
    },
    name: {
      options: icons,
      control: 'select',
    },
    fill: {
      options: colorsLight,
      control: 'select',
    },
  },
}
