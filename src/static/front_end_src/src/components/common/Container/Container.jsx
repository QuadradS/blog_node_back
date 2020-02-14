import React from 'react'
import styles from './style.module.scss'

const Container = ({ maxWidth = 1200, children }) => {
  return (
    <div className={styles.container} style={{ maxWidth }}>
      {children}
    </div>
  )
}

export default Container
