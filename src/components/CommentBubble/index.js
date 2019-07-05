// @flow
import React, { PureComponent } from 'react'
import moment from '@kupibilet/moment'

import {
  Bubble,
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

class CommentBubble extends PureComponent<Props> {
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
      <CommentBlock {...this.props}>
        <CommentWrapper>
          <Bubble orderNumber={index} reply={reply}>
            <CommentText>
              {text}
            </CommentText>
          </Bubble>
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

export default CommentBubble
