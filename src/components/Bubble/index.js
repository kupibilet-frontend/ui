// @flow
import React, { PureComponent } from 'react'
import moment from '@kupibilet/moment'

import {
  StyledBubble,
  CommentWrapper,
  Author,
  CommentText,
  CommentBlock,
} from './styled'


type Props = {
  index: number | string,
  reply?: boolean,
  name?: string,
  text: string,
  createdAt?: string,
}

class Bubble extends PureComponent<Props> {
  static defaultProps = {
    reply: false,
    createdAt: null,
    name: null,
  }
  render() {
    const {
      index,
      reply,
      text,
      name,
      createdAt,
    } = this.props
    return (
      <CommentBlock>
        <CommentWrapper>
          <StyledBubble orderNumber={index} reply={reply}>
            <CommentText>
              {text}
            </CommentText>
          </StyledBubble>
          <Author reply={reply}>
            { name }
            { name && createdAt
              ? ', '
              : '' }
            { createdAt && moment(createdAt).format('ll') }
          </Author>
        </CommentWrapper>
      </CommentBlock>
    )
  }
}

export default Bubble
