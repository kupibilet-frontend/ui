import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'
import updateKnob from 'storybook/updateKnob'
import Modal from 'components/Modal'
import Button from 'components/Button'
import TextLarge from 'components/Typography/TextLarge'
import Link from 'components/Link'
import { borderRadiusHalf } from 'utils/borderRadius'
import mq from 'utils/media-queries'

const SubmitButton = styled(Button)`
  ${borderRadiusHalf.all}

  ${mq.handheld`
    margin: 0 24px 0 0;
    max-height: 42px;
  `}

  ${mq.mobile`
    margin: 0;
    min-height: 42px;
  `}
`

const CancelButton = TextLarge.withComponent(Link).extend`
  align-self: center;
  margin: 0 0 0 24px;

  ${mq.handheld`
    margin: 0;
  `}

  ${mq.mobile`
    margin: 12px 0 0;
  `}
`

const ContentModal = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`

storiesOf('Modal', module)
  .addWithInfo('Default', () => {
    const isOpen = boolean('isOpen', false)
    const onClick = () => {
      updateKnob('isOpen', 'boolean', true)
    }

    const onClose = () => {
      updateKnob('isOpen', 'boolean', false)
    }

    const isCompact = boolean('isOpen', false)

    const footerContent = (
      <div>
        <SubmitButton
          size={isCompact ? 'normal' : 'large'}
          onClick={onClose}
        >
          Отправить
        </SubmitButton>

        <CancelButton
          onClick={onClose}
          isCompact={isCompact}
        >
          Отменить
        </CancelButton>
      </div>
    )
    return (
      <div>
        <Button onClick={onClick}>
          Open Modal
        </Button>
        <div className="responsive">
          <Modal
            heading="Очень длинный заголовок, который не помещается на одну строку"
            footer={footerContent}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ContentModal>
              Full Screen Content
            </ContentModal>
          </Modal>
        </div>
      </div>
    )
  })

  .addWithInfo('Compact', () => {
    const isOpen = boolean('isOpen', false)
    const onClick = () => {
      updateKnob('isOpen', 'boolean', true)
    }

    const onClose = () => {
      updateKnob('isOpen', 'boolean', false)
    }

    const isCompact = boolean('isOpen', false)

    const footerContent = (
      <div>
        <SubmitButton
          size={isCompact ? 'normal' : 'large'}
          onClick={onClose}
        >
          Отправить
        </SubmitButton>

        <CancelButton
          onClick={onClose}
          isCompact={isCompact}
        >
          Отменить
        </CancelButton>
      </div>
    )
    return (
      <div>
        <Button onClick={onClick}>
          Open Modal
        </Button>
        <div className="responsive">
          <Modal
            heading="Очень длинный заголовок, который не помещается на одну строку"
            footer={footerContent}
            isOpen={isOpen}
            onClose={onClose}
            isCompact
          >
            <ContentModal>
              Full Screen Content
            </ContentModal>
          </Modal>
        </div>
      </div>
    )
  })
