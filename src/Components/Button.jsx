import React from 'react'
import styles from './Button.module.css'
function Button({text,icons,isoutline}) {
  return (
    <div>
        <button className={ isoutline ? styles.btn2 : styles.btn1}>{icons}{text}</button>
    </div>
  )
}

export default Button