import React from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

const Post = ({ data }) => {
  return (
    <div className={styles.post}>
      <h2 className={styles.post_title}>{data.title}</h2>
      <img src={`/${data.imageUrl}`} alt=""/>
      <Link to={`/posts/${data.id}`} className={styles.post_text}>{data.text}</Link>
    </div>
  )
}

export default Post
