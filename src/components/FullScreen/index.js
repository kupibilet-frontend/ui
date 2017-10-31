// @flow
import React from 'react'
import styled from 'styled-components'
import { PortalWithState } from 'react-portal'
import { borderRadiusHalf } from 'utils/borderRadius'
import Icon from 'components/Icon'
import H5 from 'components/Typography/H5'
import GlobalStylesScope from 'components/ThemeProvider'
import Button from 'components/Button'
import Link from 'components/Link'
import mq from 'utils/media-queries'

const FullScreenContent = styled.div`
  background: ${({ theme }) => theme.color.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  overflow: scroll;
  padding: 0 18px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 11;
`

const Header = styled.header`
  align-items: center;
  display: flex;
  min-height: 60px;
  justify-content: space-between;
  padding: 18px 0;

  ${mq.handheld`
    max-width: 222px;
  `}
`

const Content = styled.div`
  display: block;
`

const StyledIcon = styled(Icon)`
  cursor: pointer;
`

const CloseButton = styled.span`
  align-items: center;
  background: ${({ theme }) => theme.color.miscLightest};
  ${borderRadiusHalf.all}
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-left: 32px;
  position: fixed;
  right: 18px;
  top: 15px;
  height: 30px;
  width: 30px;
`

const SubmitButton = styled(Button)`
  margin-top: 18px;
`


const CancelButton = H5.withComponent(Link).extend`
  align-self: center;
  font-weight: 400;
  margin: 12px 0 18px;
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
`

type Props = {
  header: React.Element<*>,
  content: React.Element<*>,
  children: React.Element<*>,
}

/* eslint-disable react/prop-types */
class FullScreen extends React.PureComponent<Props> {
  onClick = (openPortal, isOpen) => {
    if (isOpen && this.props.onClick) {
      this.props.onClick()
    }
    return (openPortal)
  }

  handleClick = (closePortal) => {
    if (this.props.onSubmit) {
      this.props.onSubmit()
    }
    return (closePortal)
  }

  render() {
    const {
      header,
      content,
      children,
      submitText,
      cancelText,
    } = this.props

    const fullScreenButton = (openPortal, isOpen) =>
      React.cloneElement(children, {
        onClick: this.onClick(openPortal, isOpen),
        key: 'full-screen-button',
      })

    return (
      <PortalWithState closeOnOutsideClick closeOnEsc>
        {({ openPortal, isOpen, closePortal, portal }) => [
          fullScreenButton(openPortal, isOpen),
          portal(
            <GlobalStylesScope>
              <FullScreenContent>
                <Header>
                  <H5>{header}</H5>
                  <CloseButton>
                    <StyledIcon name="cross" fill="primaryDarkest" onClick={closePortal} />
                  </CloseButton>
                </Header>
                <Content>
                  {content}
                </Content>

                {(submitText || cancelText) &&
                  <Footer>
                    {submitText &&
                      <SubmitButton
                        size="large"
                      >
                        {submitText}
                      </SubmitButton>
                    }

                    {cancelText &&
                      <CancelButton onClick={closePortal}>
                        {cancelText}
                      </CancelButton>
                    }
                  </Footer>
                }
              </FullScreenContent>
            </GlobalStylesScope>,
          ),
        ]}
      </PortalWithState>
    )
  }
}

export default FullScreen
