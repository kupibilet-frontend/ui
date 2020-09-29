// @flow
import React from 'react'
import type { Node } from 'react'
import Tooltip from 'components/Tooltip'
import {
  StyledWrapper,
  HiddenRadio,
  ItemWrapper,
} from './styled'

type Props = {
  children: Node,
  value?: string | number,
  currentValue?: string | number,
  onChange?: (string) => void,
  name?: string,
  setFocus?: () => void,
  onBlur?: () => void,
  variant?: string,
  tooltipContent: string | Node,
}

const DEFAULT_PROPS = {
  name: '',
  onChange: () => null,
  onBlur: () => null,
  setFocus: () => null,
  currentValue: '',
  value: '',
  variant: 'primary',
  tooltipContent: null,
}

const ENTER_KEY_CODE = 13

class TogglerItem extends React.Component<Props> {
  shouldComponentUpdate(nextProps) {
    const {
      currentValue,
      value,
    } = this.props

    const isSelected = value === currentValue
    const isSelectedNext = value === nextProps.currentValue

    return isSelected !== isSelectedNext
  }

  renderContent() {
    const {
      children,
      value,
      currentValue,
      variant,
      onChange,
    } = this.props

    const isSelected = value === currentValue

    return (
      <StyledWrapper
        isSelected={isSelected}
        as="div"
        onClick={() => onChange(value)}
        variant={variant}
      >
        {children}
      </StyledWrapper>
    )
  }

  render() {
    const {
      value,
      currentValue,
      onChange,
      name,
      setFocus,
      onBlur,
      tooltipContent,
    } = this.props

    const onFocusHendler = () => setFocus(true)
    const onBlurHendler = () => {
      setFocus(false)
      onBlur()
    }
    const onKeyDownHendler = (e) => {
      if (e.keyCode === ENTER_KEY_CODE) {
        onChange(value)
      }
    }
    const isSelected = value === currentValue

    return (
      <ItemWrapper isSelected={isSelected}>
        <HiddenRadio
          name={name}
          value={value}
          checked={isSelected}
          onClick={(e) => e.stopPropagation()}
          onFocus={onFocusHendler}
          onKeyDown={onKeyDownHendler}
          onBlur={() => onBlurHendler()}
          // to remove react warning
          onChange={() => null}
        />
        {tooltipContent ? (
          <Tooltip align="bottom" content={tooltipContent}>
            {this.renderContent()}
          </Tooltip>
        ) : this.renderContent()}
      </ItemWrapper>
    )
  }
}

TogglerItem.defaultProps = DEFAULT_PROPS

export default TogglerItem
