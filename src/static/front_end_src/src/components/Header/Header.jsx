import React, { useEffect } from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUser } from '../../state/user/actions'
import { isSuccess } from '../../utils'


const Header = ({ getUser, userStatus, user }) => {
  useEffect(getUser, [])
  return (
    <div className={styles.header}>
      <Link className={styles.header_item} to={'/'}>Posts</Link>
      <Link className={styles.header_item} to={'/create-post'}>Create Post</Link>
      {isSuccess(userStatus) && (
        <div className={styles.user_block}>
          Hello <span>{user.name}</span>
        </div>
      )}
    </div>
  )
}

export default connect((store) => ({
  userStatus: store.user.userStatus,
  user: store.user.user
}), {
  getUser
})(Header)
