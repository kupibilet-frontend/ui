// @flow
import React from 'react'
import styled from 'styled-components'
import { PortalWithState } from 'react-portal'
import Icon from 'components/Icon'
import ThemeProvider from 'components/ThemeProvider'

const FullScreenContent = styled.div`
  background: ${({ theme }) => theme.color.background};
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 11;
`

const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 60px;
  padding: 0 18px;
`

const StyledIcon = styled(Icon)`
  cursor: pointer
`

type Props = {
  header: React.Element<*>,
  content: React.Element<*>,
  button: React.Element<*>,
}

/* eslint-disable react/prop-types */
class FullScreen extends React.PureComponent<Props> {
  onClick = (openPortal, isOpen) => {
    if (isOpen && this.props.onClick) {
      this.props.onClick()
    }
    return (openPortal)
  }

  render() {
    const { header, content, trigger } = this.props

    const fullScreenButton = (openPortal, isOpen) => React.cloneElement(trigger, {
      onClick: this.onClick(openPortal, isOpen),
      key: 'full-screen-button',
    })

    return (
      <PortalWithState closeOnOutsideClick closeOnEsc>
        {({ openPortal, isOpen, closePortal, portal }) => [
          fullScreenButton(openPortal, isOpen),
          portal(
            <ThemeProvider>
              <FullScreenContent>
                <Header>
                  {header}
                  <StyledIcon name="cross" fill="primaryDarkest" onClick={closePortal} />
                </Header>
                {content}
              </FullScreenContent>,
            </ThemeProvider>,
          ),
        ]}
      </PortalWithState>
    )
  }
}

export default FullScreen
