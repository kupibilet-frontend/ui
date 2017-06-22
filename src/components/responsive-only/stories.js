import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

import { DesktopOnly, MobileOnly, TabletOnly, HandheldOnly } from '../../index'

const StoryTip = styled.div`
  width: 100vw;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: purple;
  color: white;
`
const HandheldStoryTip = StoryTip.extend`
  background: skyblue;
`
const TabletStoryTip = StoryTip.extend`
  background: greenyellow;
`
const MobileStoryTip = StoryTip.extend`
  background: dodgerblue;
`

storiesOf('Utils', module)
  .addWithInfo('Responsive only', () => (
    <div>
      <DesktopOnly>
        <StoryTip>Desktop</StoryTip>
      </DesktopOnly>

      <HandheldOnly>
        <HandheldStoryTip>Handheld</HandheldStoryTip>
      </HandheldOnly>

      <TabletOnly>
        <TabletStoryTip>Tablet</TabletStoryTip>
      </TabletOnly>

      <MobileOnly>
        <MobileStoryTip>Mobile</MobileStoryTip>
      </MobileOnly>
    </div>
  ))
