import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'
import updateKnob from 'storybook/updateKnob'
import Modal from 'components/Modal'
import Button from 'components/Button'

const onClick = () => {
  updateKnob('isOpen', 'boolean', true)
}

const onClose = () => {
  updateKnob('isOpen', 'boolean', false)
}

const footerContent = [
  <Button
    size="large"
    onClick={onClose}
  >
    Отправить
  </Button>,
  <Button
    variant="link"
    size="large"
    onClick={onClose}
  >
    Отменить
  </Button>,
]

storiesOf('Complex controls/Modal', module)
  .addWithInfo('Default', () => {
    const isOpen = boolean('isOpen', false)

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
