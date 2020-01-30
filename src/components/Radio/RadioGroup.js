// @flow
import * as React from 'react'

type TProps = {
  selectedValue?: string | number | boolean,
  onChange: () => void,
  children: React.Node,
}

const RadioGroup = ({
  selectedValue,
  onChange,
  children,
  ...props
}: TProps) => (
  <div {...props}>
    {React.Children.map(children, (child) => (
      React.cloneElement(child, {
        onChange,
        selectedValue,
        ...props,
      })
    ))}
  </div>
)

RadioGroup.defaultProps = {
  selectedValue: '',
}

export default RadioGroup
