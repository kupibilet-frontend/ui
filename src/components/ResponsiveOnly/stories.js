import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

import { DesktopOnly, MobileOnly, TabletOnly, HandheldOnly, NotMobileOnly } from 'components/ResponsiveOnly'

const StoryTip = styled.div`
  width: 100vw;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: purple;
  color: white;
`
const HandheldStoryTip = styled(StoryTip)`
  background: skyblue;
`
const TabletStoryTip = styled(StoryTip)`
  background: greenyellow;
`
const MobileStoryTip = styled(StoryTip)`
  background: dodgerblue;
`
const NotMobileStoryTip = styled(StoryTip)`
  background: black;
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

      <NotMobileOnly>
        <NotMobileStoryTip>Not mobile</NotMobileStoryTip>
      </NotMobileOnly>
    </div>
  ))
