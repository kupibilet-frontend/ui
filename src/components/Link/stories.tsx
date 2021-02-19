import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'
import { ICON_SIZES } from 'components/Icon/consts'
// @ts-ignore TODO: fix ts to resolve storybook dir
import updateKnob from 'storybook/updateKnob'

import Icon from 'components/Icon'
import Link from 'components/Link'

const onToggle = () => {
  updateKnob('rotate', 'boolean', !boolean('rotate', false))
}

storiesOf('COMPONENTS|Controls/Link', module)
  .add('<a> Link', () => (
    // eslint-disable-next-line no-script-url
    <Link href="javascript:void(0)">
      I will click you
    </Link>
  ))
  .add('<span> Link', () => (
    <Link>
      Span link
    </Link>
  ))
  .add('<div> Link', () => (
    <Link as="div">
      Div link
    </Link>
  ))
  .add('Link with Icon', () => (
    <Link
      onClick={onToggle}
      rightIcon={
        <Icon name="angle" inheritColor rotate={boolean('rotate', false)} size={ICON_SIZES.normal} />
      }
    >
      Dropdown link
    </Link>
  ))
