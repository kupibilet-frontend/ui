import React from 'react'
import { Story } from '@storybook/react'
import { ICON_SIZES } from 'components/Icon/consts'

import Icon from 'components/Icon'
import Link, { TProps } from 'components/Link'


const DEFAULT_LINK_PROPS: Partial<TProps> = {
  // eslint-disable-next-line no-script-url
  href: 'javascript:void(0)',
}

const LEFT_ICON = (
  <Icon name="angle" inheritColor size={ICON_SIZES.normal} />
)

const RIGHT_ICON = (
  <Icon name="star" inheritColor size={ICON_SIZES.normal} />
)

function DefaultLink(args: Partial<TProps>): JSX.Element {
  return (
    // @ts-ignore fix typing
    <Link {...args}>
      Click me!
    </Link>
  )
}

DefaultLink.args = DEFAULT_LINK_PROPS

function SpanLink(): JSX.Element {
  return (
    <Link>
      Span link
    </Link>
  )
}

const LinkWithLeftIcon: Story<TProps> = DefaultLink.bind({})
LinkWithLeftIcon.args = {
  ...DEFAULT_LINK_PROPS,
  leftIcon: LEFT_ICON,
}

const LinkWithRightIcon: Story<TProps> = DefaultLink.bind({})
LinkWithRightIcon.args = {
  ...DEFAULT_LINK_PROPS,
  rightIcon: RIGHT_ICON,
}

const LinkWithLeftAndRightIcons: Story<TProps> = DefaultLink.bind({})
LinkWithLeftAndRightIcons.args = {
  ...DEFAULT_LINK_PROPS,
  leftIcon: LEFT_ICON,
  rightIcon: RIGHT_ICON,
}


export {
  DefaultLink,
  SpanLink,
  LinkWithLeftIcon,
  LinkWithRightIcon,
  LinkWithLeftAndRightIcons,
}

export default {
  component: Link,
  title: 'Link',
}
