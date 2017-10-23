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
class FullScreen extends React.PureComponent<{}, Props, void> {
  render() {
    const { header, content, button } = this.props

    const fullScreenButton = (openPortal) => React.cloneElement(button, {
      onClick: openPortal,
    })

    return (
      <PortalWithState closeOnOutsideClick closeOnEsc>
        {({ openPortal, closePortal, portal }) => [
          fullScreenButton(openPortal),
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
