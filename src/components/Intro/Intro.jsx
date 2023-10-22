import React from 'react'
import styles from './Intro.module.css'
const Intro = () => {
  return (
    <div className={styles.introContainer}>
        <div className={styles.introContent}>
            <div className={styles.introDiv}>
                <p className={styles.introHeading}>Let's Introduce Ourself</p>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.desigDiv}>
                <p className={styles.introDesignation}>Criminal Lawyer</p>
                <p className={styles.introPara}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exercitation.</p>
            </div>
        </div>
    </div>
  )
}

export default Intro