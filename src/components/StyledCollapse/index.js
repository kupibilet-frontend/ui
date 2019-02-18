import StyledCollapse from 'blocks/Collapse'

export * from 'blocks/Collapse'

export default class extends StyledCollapse {
  constructor(props) {
    console.warn('`components/StyledCollapse` are deprecated!\n\tUse `blocks/Collapse` instead.')
    super(props)
  }
}
