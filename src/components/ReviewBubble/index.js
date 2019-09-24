// @flow
import React, { PureComponent } from 'react'
import moment from '@kupibilet/moment'
import type { Node } from 'react'
import {
  Bubble,
  ReviewWrapper,
  Author,
  ReviewText,
  ReviewBlock,
} from './styled'

type Props = {
  index?: number | string,
  reply?: boolean,
  name?: string,
  text?: string,
  createdAt?: string,
  children?: Node,
}

class ReviewBubble extends PureComponent<Props> {
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
      ...props
    } = this.props
    return (
      <ReviewBlock
        {...props}
      >
        <ReviewWrapper>
          <Bubble
            orderNumber={index}
            reply={reply}
          >
            { children || (
            <ReviewText>
              {text}
            </ReviewText>
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
        </ReviewWrapper>
      </ReviewBlock>
    )
  }
}

export default ReviewBubble
