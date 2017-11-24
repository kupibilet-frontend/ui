import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'
import updateKnob from 'storybook/updateKnob'
import Modal from 'components/Modal'
import Button from 'components/Button'
import mq from 'utils/media-queries'

const SubmitButton = styled(Button)`
  ${mq.handheld`
    margin: 0 24px 0 0;
  `}

  ${mq.mobile`
    margin: 0;
    width: 100%;
  `}
`

const CancelButton = styled(Button)`
  margin: 0 0 0 24px;

  ${mq.handheld`
    margin: 0;
  `}

  ${mq.mobile`
    margin: 12px 0 0;
    width: 100%;
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

    const footerContent = (
      <div>
        <SubmitButton
          size="large"
          onClick={onClose}
        >
          Отправить
        </SubmitButton>

        <CancelButton
          variant="link"
          onClick={onClose}
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
        <Modal
          heading="Очень длинный заголовок, который не помещается на одну строку"
          footer={footerContent}
          isOpen={isOpen}
          onClose={onClose}
          renderContent={(props) => <ContentModal {...props} />}
        >
          Full Screen Content
        </Modal>
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

    const footerContent = (
      <div>
        <SubmitButton
          size={'normal'}
          onClick={onClose}
        >
          Отправить
        </SubmitButton>

        <CancelButton
          variant="link"
          onClick={onClose}
          isCompact
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
        <Modal
          heading="Очень длинный заголовок, который не помещается на одну строку"
          footer={footerContent}
          isOpen={isOpen}
          onClose={onClose}
          renderContent={(props) => <ContentModal {...props} />}
          isCompact
        >
          Full Screen Content
        </Modal>
      </div>
    )
  })
