import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'
import updateKnob from 'storybook/updateKnob'

import Icon from 'components/Icon'
import Link from 'components/Link'

const onToggle = () => {
  updateKnob('rotate', 'boolean', !boolean('rotate', false))
}

storiesOf('Controls/Link', module)
  .addWithInfo('<span> link', () => (
    <Link
      onClick={onToggle}
      rightIcon={
        <Icon
          name="angle"
          inheritColor
          rotate={boolean('rotate', false)}
          size="normal"
        />
      }
    >
      Dropdown link
    </Link>
  ))
  .addWithInfo('<a> link', () => (
    // eslint-disable-next-line no-script-url
    <Link href="javascript:void(0)">I will click you</Link>
  ))
