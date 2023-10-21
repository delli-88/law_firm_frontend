import React from 'react'
import styles from './NavBar.module.css'
import logoImg from '../../assets/logo.svg'

const NavBar = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navContent}>
        <nav className={styles.navbar}>
            <div className={styles.logo}>
              <img src={logoImg} alt="logo" />
              <p>IGSTUDIO</p>
            </div>
            <div className={styles.links}>
                <button>Home</button>
                <button>Attorneys</button>
                <button>Practice Areas</button>
                <button>About Us</button>
            </div>
            <div className={styles.contact}>
                <button>Contact Now</button>
            </div>
        </nav>
      </div>
    </div>
  )
}

export default NavBar