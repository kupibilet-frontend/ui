// @flow
import React, { PureComponent } from 'react'
import moment from 'moment'
import type { Node } from 'react'
import {
  Bubble,
  CommentWrapper,
  Author,
  CommentText,
  CommentBlock,
} from './styled'


type Props = {
  index?: number | string,
  reply?: boolean,
  name?: string,
  text?: string,
  createdAt?: string,
  children?: Node,
}

class CommentBubble extends PureComponent<Props> {
  static defaultProps = {
    reply: false,
    createdAt: null,
    name: null,
    children: null,
    text: '',
    index: null,
  }
  render() {
    const {
      index,
      reply,
      text,
      name,
      createdAt,
      children,
    } = this.props
    return (
      <CommentBlock>
        <CommentWrapper>
          <Bubble
            orderNumber={index}
            reply={reply}
          >
            { children || (
            <CommentText>
              {text}
            </CommentText>
            )
            }
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
