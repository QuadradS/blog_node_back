import React, { useEffect } from 'react'
import Container from '../../components/common/Container/Container'
import styles from './styles.module.scss'
import { connect } from 'react-redux'
import { clearPost, getComments, getOne } from '../../state/post/actions'
import { isError, isLoad } from '../../utils'
import Layout from '../../components/common/Layout/Layout'
import Comments from '../../components/Comments/Comments'

const SinglePostPage = ({ match, getOne, post, postStatus, clearPost}) => {
  useEffect(() => {
    getOne(match.params.id)
    return clearPost
  }, [match.params.id])

  if (isLoad(postStatus)) {
    return (
      <Container>
        Wait
      </Container>
    )
  }

  if (isError(postStatus)) {
    return (
      <Container>
        Error!
      </Container>
    )
  }
  return (
    <Container maxWidth={1200}>
      <Layout>
        <div className={styles.post}>
          <div className={styles.post_header}>
            {post.title}
          </div>
          <div className={styles.post_content}>
          <img src={`/${post.imageUrl}`} alt=""/>
            <p className={styles.post_text}>
              {post.text}
            </p>
          </div>
          <br/>
          <Comments comments={post.comments} postID={match.params.id}/>
        </div>
      </Layout>
    </Container>
  )
}

export default connect((store) => ({
    post: store.post.selectedPost,
    postStatus: store.post.selectedPostStatus
}),
  {
    getOne,
    clearPost,
    getComments
  })(SinglePostPage)
