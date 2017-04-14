/* eslint-disable consistent-return */

import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import Box from '../../components/box'
import Collapse from '../../components/collapse'
import Icon from '../../components/icons'
import Link from '../../utils/link'


const horizontalPadding = css`
  padding-left: 18px;
  padding-right: 18px;
`

const Header = styled.header`
  ${horizontalPadding}
  padding-top: 18px;
  padding-bottom: 18px;
  display: flex;
  justify-content: space-between;
`
const Content = styled.div`
  ${horizontalPadding}
  padding-bottom: 24px;
`

const PanelContent = styled(Content)`
  padding-left: 19px;
`

const PanelHeader = styled.div`
  ${Link}
  ${horizontalPadding}
  align-items: center;
  display: flex;
  padding-top: 12px;
  padding-bottom: 12px;
`

const IconWrap = styled(Icon)`
  margin: 3px 0 0 3px;
  transition-property: transform;

  ${({ isActive }) => {
    if (isActive) {
      return `
        transform: rotate(-180deg);
      `
    }
  }}
`

const PanelWrapper = styled(Collapse.Panel)`
  margin-left: -1px;
  border-top: 1px solid ${({ theme }) => (theme.color.miscLighter)};
`

const PanelHeaderWrapper = (props) => (
  <PanelHeader>
    {React.cloneElement(props.children, { isActive: props.isActive })}
    <IconWrap
      className="icon"
      name="arrow-down"
      stroke="primaryDarkest"
      fill="primaryDarkest"
      size="xxsmall"
      isActive={props.isActive}
    />
  </PanelHeader>
)

PanelHeaderWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
}

PanelHeaderWrapper.defaultProps = {
  isActive: false,
}


const FilterBox = (props) => (
  <Box>
    <Header>
      {props.headerLeft}
      {props.headerRight}
    </Header>
    <Content>
      {props.content}
    </Content>

    {props.collapseItems.length > 0 &&
      <Collapse accordion {...props.collapseOptions}>
        {props.collapseItems.map((item) => (
          <PanelWrapper
            header={<PanelHeaderWrapper>{item.title}</PanelHeaderWrapper>}
            key={item.key}
          >
            <PanelContent>
              {item.content}
            </PanelContent>
          </PanelWrapper>
        ))}
      </Collapse>
    }
  </Box>
)

FilterBox.propTypes = {
  headerLeft: PropTypes.node.isRequired,
  headerRight: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  collapseItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.node.isRequired,
    key: PropTypes.string,
    content: PropTypes.node.isRequired,
  })),
  collapseOptions: PropTypes.shape({
    ...Collapse.propTypes,
  }),
}

FilterBox.defaultProps = {
  collapseItems: [],
  collapseOptions: {},
}

export default FilterBox
