import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'
import updateKnob from 'storybook/updateKnob'
import Modal from 'components/Modal'
import Button from 'components/Button'
import mq from 'utils/media-queries'

const Wrapper = styled.div`
  display: flex;
  ${mq.mobile`
    flex-direction: column;
  `}
`

const CancelButton = styled(Button)`
  margin-left: 12px;

  ${mq.mobile`
    margin: 12px 0 0 0;
  `}
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
      <Wrapper>
        <Button
          size="large"
          onClick={onClose}
        >
          Отправить
        </Button>

        <CancelButton
          variant="link"
          onClick={onClose}
        >
          Отменить
        </CancelButton>
      </Wrapper>
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
      <Wrapper>
        <Button
          size="large"
          onClick={onClose}
        >
          Отправить
        </Button>

        <CancelButton
          variant="link"
          onClick={onClose}
          isCompact
        >
          Отменить
        </CancelButton>
      </Wrapper>
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
          isCompact
        >
          Full Screen Content
        </Modal>
      </div>
    )
  })
