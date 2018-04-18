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

const footerContent = React.Children.toArray([
  <Button size="large" onClick={onClose}>
    Отправить
  </Button>,
  <Button variant="link" size="large" onClick={onClose}>
    Отменить
  </Button>,
])

storiesOf('Complex controls/Modal', module)
  .addWithInfo('Default', () => {
    const isOpen = boolean('isOpen', false)

    return (
      <div>
        <Button onClick={onClick}>Open Modal</Button>
        <Modal
          heading="Очень длинный заголовок, который не помещается на одну строку"
          footer={footerContent}
          isOpen={isOpen}
          onClose={onClose}
          freezableElement="#root"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum
          nisi non neque tincidunt tincidunt. Suspendisse potenti. Phasellus
          ligula ante, tempus sit amet nulla at, pretium euismod ipsum. Nullam
          ex erat, faucibus ac augue eu, tempor tincidunt sapien. Donec bibendum
          hendrerit dolor at ullamcorper. Fusce eu nulla dictum, convallis quam
          at, pellentesque lorem. Aenean sit amet augue facilisis, dictum mi
          non, ornare dui. Sed imperdiet metus nec diam varius commodo. In
          bibendum elit luctus tempus vulputate. Maecenas ac justo nec urna
          imperdiet interdum in in massa. Maecenas ut varius magna. Quisque
          rhoncus tincidunt aliquet. Pellentesque a arcu vestibulum, fermentum
          ex at, sagittis ligula. Praesent nec purus at elit mollis accumsan
          vitae vel ex. Donec dictum molestie dui eget tempus. Aenean mi justo,
          vehicula ac pulvinar non, vestibulum et nisl. Donec ut leo interdum,
          porta metus at, consequat sem. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Aliquam non mi sed nisi ornare mollis.
          Praesent qu is lobortis est. Nunc congue ornare tortor.
        </Modal>
      </div>
    )
  })
  .addWithInfo('Compact', () => {
    const isOpen = boolean('isOpen', false)

    return (
      <div>
        <Button onClick={onClick}>Open Modal</Button>
        <Modal
          heading="Очень длинный заголовок, который не помещается на одну строку"
          footer={footerContent}
          isOpen={isOpen}
          onClose={onClose}
          freezableElement="#root"
          size="compact"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum
          nisi
        </Modal>
      </div>
    )
  })
  .addWithInfo('Thin', () => {
    const isOpen = boolean('isOpen', false)

    return (
      <div>
        <Button onClick={onClick}>Open Modal</Button>
        <Modal
          heading="Очень длинный заголовок, который не помещается на одну строку"
          footer={footerContent}
          isOpen={isOpen}
          onClose={onClose}
          freezableElement="#root"
          size="thin"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum
          nisi
        </Modal>
      </div>
    )
  })
  .addWithInfo('Bottom on mobile', () => {
    const isOpen = boolean('isOpen', false)

    return (
      <div>
        <Button onClick={onClick}>Open Modal</Button>
        <Modal
          heading="Поделиться"
          isOpen={isOpen}
          onClose={onClose}
          freezableElement="#root"
          size="compact"
          isOnBottom
        >
          Full Screen Content
        </Modal>
      </div>
    )
  })
