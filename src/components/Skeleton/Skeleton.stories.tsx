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
  width: 250,
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
  children: <div style={{ width: '50px', height: '70px' }} />,
}

const TemplateWithContainer: ComponentStory<typeof Skeleton> = (args) => (
  <div style={{ width: '1100px' }}>
    <Skeleton {...args}>
      {args.children}
    </Skeleton>
    <br />
    <Skeleton width={1000} {...args}>
      {args.children}
    </Skeleton>
    <Skeleton width={50} height={50} variant="circular" {...args}>
      {args.children}
    </Skeleton>
    <Skeleton width={400} {...args}>
      {args.children}
    </Skeleton>
  </div>
)

export const SkeletonWithContainer = TemplateWithContainer.bind({})
SkeletonWithContainer.args = {
  height: 50,
}

const TemplateWithContainerFlex: ComponentStory<typeof Skeleton> = (args) => (
  <div style={{ width: '1100px', display: 'flex' }}>
    <div>
      <Skeleton {...args}>
        {args.children}
      </Skeleton>
      <br />
      <Skeleton width={1000} {...args}>
        {args.children}
      </Skeleton>
      <Skeleton width={50} height={50} variant="circular" {...args}>
        {args.children}
      </Skeleton>
      <Skeleton width={400} {...args}>
        {args.children}
      </Skeleton>
    </div>
  </div>
)

export const SkeletonWithContainerFlex = TemplateWithContainerFlex.bind({})
SkeletonWithContainerFlex.args = {
  height: 50,
}
