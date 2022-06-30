import 'rc-slider/assets/index.css'
import React, { useEffect, useState } from 'react'
import { HandleProps, Range } from 'rc-slider'
import { StyledRangeWrapper, StyledHandleWrapper, StyledHandle } from './styled'


interface TProps {
  min?: number,
  max?: number,
  values?: number[],
  disabled?: boolean,
  className?: string,
  handle?: () => React.ReactNode,
  progressBar?: () => React.ReactNode,
  onChange?: (values: number[]) => void,
  onAfterChange?: (values: number[]) => void,
}

function getInitialValues(min: number, max: number, values?: number[]): number[] {
  if (values) return values

  return [min, max]
}

function Slider(props: TProps): JSX.Element {
  const {
    min = 1,
    max = 100,
    disabled = false,
    className,
    onAfterChange = () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  } = props

  const [values, setValues] = useState<number[]>(getInitialValues(min, max, props.values))

  const [firstValueFromProps, secondValueFromProps] = (props.values || [])

  useEffect(() => {
    const [firstCurrentValue, secondCurrentValue] = values

    if (firstCurrentValue !== firstValueFromProps || secondCurrentValue !== secondValueFromProps) {
      setValues([firstValueFromProps, secondValueFromProps])
    }
  }, [firstValueFromProps, secondValueFromProps])

  function onChange(changedValues: number[]): void {
    setValues(changedValues)

    if (props.onChange) props.onChange(changedValues)
  }

  return (
    <StyledRangeWrapper className={className} disabled={disabled}>
      <Range
        min={min}
        max={max}
        disabled={disabled}
        allowCross={false}
        defaultValue={values}
        value={values}
        onChange={onChange}
        onAfterChange={onAfterChange}
        // @ts-ignore some TS types doesn't match with rc-slider props
        handle={(handleProps: HandleProps) => (
          // @ts-ignore
          <StyledHandleWrapper {...handleProps} style={{ zIndex: 4, boxShadow: 'none' }}>
            <StyledHandle min={min} max={max} value={handleProps.value} disabled={disabled} />
          </StyledHandleWrapper>
        )}
      />
    </StyledRangeWrapper>
  )
}

export default Slider
