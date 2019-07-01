// @flow
import React from 'react'
import Comment from './Comment'
import { MoreButton } from './styled'

type CommentType = {
  author_name: string,
  created_at: string,
  text: string,
  reply_text: ?string,
  order_number: string,
  replied_at: ?string,
}

type Props = {
  comments?: Array<CommentType>,
  getMoreComments?: () => void,
  page?: number,
  pageSize?: number,
}

type State = {
  fetchingMoreComments: boolean,
  currentComments: Array<CommentType>,
}

class Comments extends React.PureComponent<Props, State> {
  static defaultProps = {
    getMoreComments: () => null,
    user: null,
    page: 1,
    pageSize: 20,
    accountInfo: {},
    orders: [],
    comments: [],
  }

  state = {
    fetchingMoreComments: false,
    currentComments: [],
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    const { comments } = props
    const { currentComments } = state
    if (comments.length !== currentComments.length) {
      return ({
        currentComments: [...comments],
        fetchingMoreComments: false,
      })
    }

    return null
  }

  getMoreComments = () => {
    const { getMoreComments } = this.props
    getMoreComments()
    this.setState({ fetchingMoreComments: true })
  }

  render() {
    const { page, pageSize } = this.props
    const { fetchingMoreComments, currentComments } = this.state
    const hasComments = Boolean(currentComments && currentComments.length)
    const hasMoreComments = hasComments && currentComments.length >= page * pageSize
    return (
      <>
        {
          hasComments
            ? (
              currentComments.map((comment, index) => (
                <Comment {...comment} index={index} key={comment.order_number} />
              ))
            )
            : null
        }
        {
          !fetchingMoreComments && hasMoreComments
            ? (
              <MoreButton onClick={this.getMoreComments}>
                Показать ещё отзывы…
              </MoreButton>
            )
            : null
        }
      </>
    )
  }
}

export default Comments
