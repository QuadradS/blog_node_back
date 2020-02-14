import React from 'react'
import cn from 'classnames'

import styles from './styles.module.scss'

const Input = (props) => (
  <input
    className={cn(styles.input, { [props.className]: props.className })}
    value={props.value}
    onChange={props.onChange}
    type={props.type || 'text'}
    accept={props.accept || ''}
    placeholder={props.placeholder}
  />
)

export default Input
