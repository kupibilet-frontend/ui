import RcCollapse from 'rc-collapse'
import Panel from './Panel'

RcCollapse.Panel = Panel
RcCollapse.defaultProps = {
  ...RcCollapse.defaultProps,
  prefixCls: 'kb-collapse',
}

export default RcCollapse
