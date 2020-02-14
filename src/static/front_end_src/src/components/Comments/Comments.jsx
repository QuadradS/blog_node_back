import React, { useEffect, useState } from 'react'
import { createComment, createCommentsClear, getComments } from '../../state/post/actions'
import { connect } from 'react-redux'
import Input from '../common/Input/Input'
import Button from '../common/Button/Input'
import styles from './styles.module.scss'
import { isSuccess } from '../../utils'

const Comments = ({ getComments, postID, postComments, getCommentsStatus, user, createComment, createCommentsStatus, createCommentsClear }) => {

  useEffect(() => {
    getComments(postID)
    return createCommentsClear
  }, [postID])

  const [comment, setComment] = useState('')
  const handleChange = (e) => setComment(e.target.value)

  const handleCreateComment = () => {
    createComment({ author: user.name, text: comment, authorID: user._id, postID })
    setComment('')
  }

  return (
    <div className={styles.comments}>
      <div className={styles.comments_block}>
        <Input placeholder={'Comment'} value={comment} onChange={handleChange}/>
        <Button onClick={handleCreateComment}>Send comment</Button>
      </div>

      <div className={styles.comments_list}>

        {isSuccess(getCommentsStatus) && (
          postComments.map((c) => (
            <div className={styles.comments_list_item}>
              <h3>{c.author}</h3>
              <p>{c.text}</p>
            </div>
          ))
        )}

        {isSuccess(getCommentsStatus) && !postComments.length && (
          <div>
            No comments
          </div>
        )}
      </div>
    </div>
  )
}

export default connect((store) => ({
  getCommentsStatus: store.post.getCommentsStatus,
  postComments: store.post.selectedPost.comments,
  user: store.user.user,
  createCommentsStatus: store.post.createCommentsStatus
}), {
  getComments,
  createComment,
  createCommentsClear
})(Comments)
