import React from 'react'
import cn from 'classnames'

import styles from './styles.module.scss'

const Button = (props) => (
  <button
    className={cn(styles.button, { [props.className || '']: props.className })}
    onClick={props.onClick}
    type="text"
    disabled={props.disabled}
  >
    {props.children}
  </button>
)

export default Button
