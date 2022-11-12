import React from 'react'

import { Skeleton } from 'components/Skeleton'

import { ComponentStory, ComponentMeta } from '@storybook/react'


export default {
  title: 'Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args}>
    {args.children}
  </Skeleton>
)

export const SkeletonBase = Template.bind({})
SkeletonBase.args = {
  width: 200,
  height: 50,
}

export const SkeletonCircular = Template.bind({})
SkeletonCircular.args = {
  width: 50,
  height: 50,
  variant: 'circular',
}

export const SkeletonWithChildren = Template.bind({})
SkeletonWithChildren.args = {
  children: <div style={{ width: '50px', height: '50px' }} />,
}

const TemplateWithContainer: ComponentStory<typeof Skeleton> = (args) => (
  <div style={{ width: '500px', height: '30px' }}>
    <Skeleton {...args}>
      {args.children}
    </Skeleton>
  </div>
)

export const SkeletonWithContainer = TemplateWithContainer.bind({})
