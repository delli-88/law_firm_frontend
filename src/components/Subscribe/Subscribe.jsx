import React from 'react'
import styles from './Subscribe.module.css'

const Subscribe = () => {
  return (
    <div className={styles.subscribeContainer}>
        <div className={styles.subscribeContent}>
            <div className={styles.subscribeHeader}>
                <p>Subscribe Our Newsletter</p>
            </div>
            <div className={styles.subscribeForm}>
                <input type="text" name="name" id="name" placeholder='Name'/>
                <input type="text" name="email" id="email" placeholder='Enter your Email'/>
                <button>SEND</button>
            </div>
        </div>
    </div>
  )
}

export default Subscribe