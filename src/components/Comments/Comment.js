// @flow
import React from 'react'
import moment from '@kupibilet/moment'

import {
  Bubble,
  CommentWrapper,
  Author,
  CommentText,
  CommentBlock,
} from './styled'


type Props = {
  created_at: ?string,
  author_name: string,
  text: string,
  reply_text: ?string,
  replied_at: ?string,
  index: number,
}

const renderComment = (name, text, index, createdAt, reply = false) => (
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
)

const Comment = ({
  created_at: createdAt,
  replied_at: repliedAt,
  author_name: authorName,
  text,
  index,
  reply_text: replyText,
}: Props) => {
  return (
    <CommentBlock>
      {renderComment(authorName, text, index, createdAt)}
      {replyText
        ? renderComment('Купибилет', replyText, index, repliedAt, true)
        : null
      }
    </CommentBlock>
  )
}

export default Comment
