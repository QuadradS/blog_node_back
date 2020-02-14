import React, { useEffect } from 'react'
import Container from '../../components/common/Container/Container'
import styles from './styles.module.scss'
import Post from '../../components/Post/Post'
import { getAll } from '../../state/post/actions'
import { connect } from 'react-redux'
import { isError, isLoad } from '../../utils'
import Layout from '../../components/common/Layout/Layout'

const PostPage = ({ posts, postsStatus, getAll }) => {
  useEffect(getAll, [])
  if (isLoad(postsStatus)) {
    return (
      <Container>
        Wait
      </Container>
    )
  }
  if (isError(postsStatus)) {
    return (
      <Container>
        Error!
      </Container>
    )
  }
  return (
    <Container>
      <Layout>
        <div className={styles.post_page}>
          {posts.map((p) => (
            <div key={p.id} className={styles.post_page_item}>
              <Post data={p}/>
            </div>
          ))}
        </div>
      </Layout>
    </Container>
  )
}

export default connect((store) => ({
    posts: store.post.posts,
    postsStatus: store.post.postsStatus
  }),
  {
    getAll
  })(PostPage)
