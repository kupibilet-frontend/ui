import React from 'react'
import { useArgs } from '@storybook/client-api'
import styled from 'styled-components'
import ModalWrap, { Modal, TProps } from 'components/Modal'
import Button from 'components/Button'
import { Story } from '@storybook/react'

const FooterWrapper = styled.div`
  display: flex;
  padding: 42px;
`

const footerContent = (
  <FooterWrapper>
    Custom footer
  </FooterWrapper>
)

const ModalTemplate = (args: TProps): JSX.Element => {
  const [{
    isOpen,
    closeOnOutsideClick,
    closeOnEsc,
    shouldRenderCloseIcon,
    isOnBottom,
    shouldRenderCloseButton,
  }, updateArgs] = useArgs()
  const onOpen = () => updateArgs({ isOpen: true })
  const onClose = () => updateArgs({ isOpen: false })

  return (
    <div>
      <Button onClick={onOpen}>
        Open Modal
      </Button>
      <ModalWrap
        heading="Очень длинный заголовок, который не помещается на одну строку"
        isOpen={isOpen}
        onClose={onClose}
        onSubmitClick={onClose}
        closeOnOutsideClick={closeOnOutsideClick}
        closeOnEsc={closeOnEsc}
        shouldRenderCloseIcon={shouldRenderCloseIcon}
        shouldRenderCloseButton={shouldRenderCloseButton}
        isOnBottom={isOnBottom}
        footer={args.footer}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum nisi
        non neque tincidunt tincidunt. Suspendisse potenti. Phasellus ligula ante,
        tempus sit amet nulla at, pretium euismod ipsum. Nullam ex erat, faucibus
        ac augue eu, tempor tincidunt sapien. Donec bibendum hendrerit dolor at
        ullamcorper. Fusce eu nulla dictum, convallis quam at, pellentesque lorem.
        Aenean sit amet augue facilisis, dictum mi non, ornare dui. Sed imperdiet
        metus nec diam varius commodo. In bibendum elit luctus tempus vulputate.
        Maecenas ac justo nec urna imperdiet interdum in in massa. Maecenas ut
        varius magna. Quisque rhoncus tincidunt aliquet. Pellentesque a arcu
        vestibulum, fermentum ex at, sagittis ligula. Praesent nec purus at
        elit mollis accumsan vitae vel ex. Donec dictum molestie dui eget tempus.
        Aenean mi justo, vehicula ac pulvinar non, vestibulum et nisl. Donec ut leo
        interdum, porta metus at, consequat sem. Interdum et malesuada fames ac ante
        ipsum primis in faucibus. Aliquam non mi sed nisi ornare mollis. Praesent qu
        is lobortis est. Nunc congue ornare tortor.

      </ModalWrap>
    </div>
  )
}

export const WithDefaultFooter: Story<TProps> = ModalTemplate.bind({})

export const WithCustomFooter: Story<TProps> = ModalTemplate.bind({})
WithCustomFooter.args = {
  footer: footerContent,
}

export const WithoutFooter: Story<TProps> = ModalTemplate.bind({})
WithoutFooter.args = {
  footer: true,
}

export const BottomOnMobile: Story<TProps> = ModalTemplate.bind({})
BottomOnMobile.args = {
  isOnBottom: true,
}

export default {
  component: Modal,
  title: 'Modal',
}
