import React from 'react'
import styles from './Header.module.css'
function Header() {
  return <div className={styles.container}>
    <img src='./public/Frame 2 1.png' alt='Logo'></img>
    <nav>
        <ul>
            <li>Home</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>
    </nav>
    
  </div>
  
}

export default Header