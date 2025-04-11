import React from 'react'
import styles from './Button.module.css'
function Button({text,icons}) {
  return (
    <div>
        <button className={styles.btn1}>{icons}{text}</button>
    </div>
  )
}

export default Button