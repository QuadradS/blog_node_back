import React from 'react'
import cn from 'classnames'

import styles from './styles.module.scss'

const TextArea = (props) => (
  <input
    className={cn(styles.textarea, { [props.className]: props.className })}
    value={props.value}
    onChange={props.onChange}

    placeholder={props.placeholder}
    type="text"
  />
)

export default TextArea
